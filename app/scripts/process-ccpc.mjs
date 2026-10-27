#!/usr/bin/env node
import { createReadStream, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { createInterface } from "readline";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DATA_RAW = join(ROOT, "data-raw");
const OUT_DIR = join(ROOT, "public", "data");

const YEARS = [2009, 2012, 2015, 2018, 2021, 2024];
const AGE_GROUPS = [
  { label: "18-24", min: 18, max: 24 },
  { label: "25-34", min: 25, max: 34 },
  { label: "35-44", min: 35, max: 44 },
  { label: "45-59", min: 45, max: 59 },
  { label: "60+", min: 60, max: 999 },
];

function getAgeGroup(age) {
  for (const g of AGE_GROUPS) {
    if (age >= g.min && age <= g.max) return g.label;
  }
  return null;
}

const STATE_ABBREVS = {
  1: "AGU", 2: "BCN", 3: "BCS", 4: "CAM", 5: "COA", 6: "COL",
  7: "CHP", 8: "CHH", 9: "CMX", 10: "DUR", 11: "GUA", 12: "GRO",
  13: "HID", 14: "JAL", 15: "MEX", 16: "MIC", 17: "MOR", 18: "NAY",
  19: "NLE", 20: "OAX", 21: "PUE", 22: "QUE", 23: "ROO", 24: "SLP",
  25: "SIN", 26: "SON", 27: "TAB", 28: "TAM", 29: "TLA", 30: "VER",
  31: "YUC", 32: "ZAC",
};

mkdirSync(OUT_DIR, { recursive: true });

async function processYear(year) {
  const zipPath = join(DATA_RAW, `ccpc_${year}.zip`);
  if (!existsSync(zipPath)) {
    console.error(`  ZIP not found: ${zipPath}`);
    return null;
  }

  const tmpDir = join(DATA_RAW, `_tmp_${year}`);
  mkdirSync(tmpDir, { recursive: true });

  console.log(`  Extracting ${year}...`);
  execSync(`unzip -o -q "${zipPath}" -d "${tmpDir}"`);

  const innerDir = execSync(`ls "${tmpDir}"`, { encoding: "utf8" }).trim().split("\n")[0];
  const csvDir = join(tmpDir, innerDir);

  const totals = {
    LN: 0, SV: 0, NV: 0, NS: 0,
    weightedAgeSum: 0,
  };

  const byAgeGroup = {};
  for (const g of AGE_GROUPS) {
    byAgeGroup[g.label] = { LN: 0, SV: 0 };
  }

  const byState = {};
  const byAge = {};
  const byGender = {};

  const csvFiles = execSync(`ls "${csvDir}"/*.csv 2>/dev/null`, { encoding: "utf8" })
    .trim().split("\n").filter(Boolean);

  console.log(`  Found ${csvFiles.length} CSV files for ${year}`);

  for (const csvPath of csvFiles) {
    const stateAbbr = csvPath.match(/conteoscensales\d+_(\w+)\.csv$/)?.[1] || "unknown";
    await processCSV(csvPath, totals, byAgeGroup, byState, byAge, byGender);
  }

  execSync(`rm -rf "${tmpDir}"`);

  const overallParticipation = totals.LN > 0 ? (totals.SV / totals.LN) * 100 : 0;
  const averageVoterAge = totals.SV > 0 ? totals.weightedAgeSum / totals.SV : 0;
  const youthSV = byAgeGroup["18-24"].SV;
  const youthLN = byAgeGroup["18-24"].LN;
  const youthParticipation = youthLN > 0 ? (youthSV / youthLN) * 100 : 0;
  const youthShare = totals.SV > 0 ? (youthSV / totals.SV) * 100 : 0;

  const ageGroupBreakdown = {};
  for (const g of AGE_GROUPS) {
    const d = byAgeGroup[g.label];
    ageGroupBreakdown[g.label] = {
      listaNominal: d.LN,
      voted: d.SV,
      participation: d.LN > 0 ? +((d.SV / d.LN) * 100).toFixed(2) : 0,
    };
  }

  return {
    year,
    totalListaNominal: totals.LN,
    totalVoted: totals.SV,
    totalNotVoted: totals.NV,
    overallParticipation: +overallParticipation.toFixed(2),
    youthParticipation: +youthParticipation.toFixed(2),
    averageVoterAge: +averageVoterAge.toFixed(2),
    youthShareOfVoters: +youthShare.toFixed(2),
    youthVoters: youthSV,
    ageGroups: ageGroupBreakdown,
    byState,
    byAge,
    byGender,
  };
}

function processCSV(csvPath, totals, byAgeGroup, byState, byAge, byGender) {
  return new Promise((resolve, reject) => {
    const rl = createInterface({
      input: createReadStream(csvPath, { encoding: "utf8" }),
      crlfDelay: Infinity,
    });

    let header = null;
    let lineCount = 0;

    rl.on("line", (line) => {
      if (!header) {
        header = line.split(",").map(h => h.trim());
        return;
      }

      const cols = line.split(",");
      if (cols.length < header.length) return;

      const edocve = parseInt(cols[header.indexOf("EDOCVE")], 10);
      const edonom = cols[header.indexOf("EDONOM")]?.trim();
      const sexo = parseInt(cols[header.indexOf("SEXO")], 10);
      const edad = parseInt(cols[header.indexOf("EDAD")], 10);
      const ln = parseInt(cols[header.indexOf("LN")], 10) || 0;
      const sv = parseInt(cols[header.indexOf("SV")], 10) || 0;
      const nv = parseInt(cols[header.indexOf("NV")], 10) || 0;
      const ns = parseInt(cols[header.indexOf("NS")], 10) || 0;

      if (isNaN(edad) || edad < 18 || edad > 120) return;

      totals.LN += ln;
      totals.SV += sv;
      totals.NV += nv;
      totals.NS += ns;
      totals.weightedAgeSum += edad * sv;

      const group = getAgeGroup(edad);
      if (group && byAgeGroup[group]) {
        byAgeGroup[group].LN += ln;
        byAgeGroup[group].SV += sv;
      }

      const stateKey = edocve.toString();
      if (!byState[stateKey]) {
        byState[stateKey] = {
          code: edocve,
          name: edonom,
          abbrev: STATE_ABBREVS[edocve] || `S${edocve}`,
          totalLN: 0, totalSV: 0,
          youthLN: 0, youthSV: 0,
        };
      }
      byState[stateKey].totalLN += ln;
      byState[stateKey].totalSV += sv;
      if (edad >= 18 && edad <= 24) {
        byState[stateKey].youthLN += ln;
        byState[stateKey].youthSV += sv;
      }

      if (edad >= 18 && edad <= 30) {
        if (!byAge[edad]) byAge[edad] = { LN: 0, SV: 0 };
        byAge[edad].LN += ln;
        byAge[edad].SV += sv;
      }

      const genderKey = sexo === 0 ? "H" : sexo === 1 ? "M" : "NB";
      if (!byGender[genderKey]) byGender[genderKey] = {};
      if (group) {
        if (!byGender[genderKey][group]) byGender[genderKey][group] = { LN: 0, SV: 0 };
        byGender[genderKey][group].LN += ln;
        byGender[genderKey][group].SV += sv;
      }

      lineCount++;
    });

    rl.on("close", () => resolve(lineCount));
    rl.on("error", reject);
  });
}

async function main() {
  console.log("=== CCPC Data Processor ===\n");

  const allResults = [];

  for (const year of YEARS) {
    console.log(`Processing ${year}...`);
    const result = await processYear(year);
    if (result) {
      allResults.push(result);
      console.log(`  ✓ ${year}: ${result.overallParticipation}% overall, ${result.youthParticipation}% youth (18-24), avg age ${result.averageVoterAge}\n`);
    }
  }

  // elections.json
  const electionsData = allResults.map(r => ({
    year: r.year,
    totalListaNominal: r.totalListaNominal,
    totalVoted: r.totalVoted,
    totalNotVoted: r.totalNotVoted,
    overallParticipation: r.overallParticipation,
    youthParticipation: r.youthParticipation,
    averageVoterAge: r.averageVoterAge,
    youthShareOfVoters: r.youthShareOfVoters,
    youthVoters: r.youthVoters,
    ageGroups: r.ageGroups,
  }));
  writeFileSync(join(OUT_DIR, "elections.json"), JSON.stringify(electionsData, null, 2));
  console.log("✓ elections.json written");

  // states.json
  const statesData = {};
  for (const r of allResults) {
    for (const [key, st] of Object.entries(r.byState)) {
      if (!statesData[key]) {
        statesData[key] = {
          code: st.code,
          name: st.name,
          abbrev: st.abbrev,
          years: {},
        };
      }
      statesData[key].years[r.year] = {
        overallParticipation: st.totalLN > 0 ? +((st.totalSV / st.totalLN) * 100).toFixed(2) : 0,
        youthParticipation: st.youthLN > 0 ? +((st.youthSV / st.youthLN) * 100).toFixed(2) : 0,
      };
    }
  }
  writeFileSync(join(OUT_DIR, "states.json"), JSON.stringify(Object.values(statesData), null, 2));
  console.log("✓ states.json written");

  // age-detail.json
  const ageDetailData = allResults.map(r => ({
    year: r.year,
    byIndividualAge: Object.fromEntries(
      Object.entries(r.byAge).map(([age, d]) => [
        age,
        { listaNominal: d.LN, voted: d.SV, participation: d.LN > 0 ? +((d.SV / d.LN) * 100).toFixed(2) : 0 },
      ])
    ),
    byAgeGroup: r.ageGroups,
  }));
  writeFileSync(join(OUT_DIR, "age-detail.json"), JSON.stringify(ageDetailData, null, 2));
  console.log("✓ age-detail.json written");

  // gender.json
  const genderData = allResults.map(r => {
    const genderBreakdown = {};
    for (const [genderKey, groups] of Object.entries(r.byGender)) {
      genderBreakdown[genderKey] = {};
      for (const [group, d] of Object.entries(groups)) {
        genderBreakdown[genderKey][group] = {
          listaNominal: d.LN,
          voted: d.SV,
          participation: d.LN > 0 ? +((d.SV / d.LN) * 100).toFixed(2) : 0,
        };
      }
    }
    return { year: r.year, byGender: genderBreakdown };
  });
  writeFileSync(join(OUT_DIR, "gender.json"), JSON.stringify(genderData, null, 2));
  console.log("✓ gender.json written");

  console.log("\n=== Summary ===");
  for (const r of allResults) {
    console.log(`${r.year}: Overall ${r.overallParticipation}% | Youth(18-24) ${r.youthParticipation}% | Avg age ${r.averageVoterAge} | Youth share ${r.youthShareOfVoters}%`);
  }
  console.log("\nDone!");
}

main().catch(console.error);
