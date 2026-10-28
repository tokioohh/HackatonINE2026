import electionsRaw from "../../public/data/elections.json";
import statesRaw from "../../public/data/states.json";
import ageDetailRaw from "../../public/data/age-detail.json";

export interface ElectionYear {
  year: number;
  overallParticipation: number;
  youthParticipation: number;
  averageVoterAge: number;
  youthShareOfVoters: number;
  totalVoters: number;
  youthVoters: number;
  listaNominal: number;
  type: "Presidencial" | "Intermedia";
  milestone: string;
  milestoneDetail: string;
  platformSummary: string;
}

export interface StateData {
  code: string; // "CDMX", "BC", etc. matching mexico-paths.json
  ineCode: number;
  name: string;
  youthParticipation: Record<number, number>; // { 2009: 23.78, ... }
  overallParticipation: Record<number, number>; // { 2009: 29.11, ... }
  region: "Norte" | "Centro" | "Sur-Sureste" | "Occidente";
}

export interface AgeGroupParticipation {
  year: number;
  "18-24": number;
  "25-34": number;
  "35-44": number;
  "45-59": number;
  "60+": number;
}

export const MILESTONES: Record<
  number,
  {
    type: "Presidencial" | "Intermedia";
    milestone: string;
    milestoneDetail: string;
    platformSummary: string;
  }
> = {
  2009: {
    type: "Intermedia",
    milestone: "Intermedia",
    milestoneDetail:
      "Elección intermedia con baja participación general (43%). Solo 36% de los jóvenes inscritos votó — pero la diferencia con otros grupos ya era visible. La brecha no empezó después.",
    platformSummary: "Elección Intermedia",
  },
  2012: {
    type: "Presidencial",
    milestone: "Presidencial",
    milestoneDetail:
      "La participación subió en todos los grupos de edad. Los jóvenes alcanzaron su máximo en la serie: 55.6%. Coincidió con alta movilización política, pero los datos no miden qué la causó.",
    platformSummary: "Elección Presidencial",
  },
  2015: {
    type: "Intermedia",
    milestone: "Intermedia",
    milestoneDetail:
      "Como en toda elección intermedia, la participación cayó para todos los grupos, no solo para los jóvenes. El 35.7% juvenil fue similar al de 2009. El patrón presidencial-intermedia se repite.",
    platformSummary: "Elección Intermedia",
  },
  2018: {
    type: "Presidencial",
    milestone: "Presidencial",
    milestoneDetail:
      "Otra elección presidencial, otra subida general. Los jóvenes llegaron al 51%, pero no alcanzaron el nivel de 2012. La brecha con los mayores de 45 se mantuvo en 14 puntos.",
    platformSummary: "Elección Presidencial",
  },
  2021: {
    type: "Intermedia",
    milestone: "Intermedia",
    milestoneDetail:
      "Elección intermedia en contexto de pandemia. La participación general fue del 50% y la juvenil del 42%. Tercera vez consecutiva que la intermedia baja respecto a la presidencial anterior.",
    platformSummary: "Elección Intermedia",
  },
  2024: {
    type: "Presidencial",
    milestone: "Presidencial",
    milestoneDetail:
      "México eligió a su primera presidenta. La participación juvenil fue del 47% — mayor que en 2009, 2015 y 2021, pero menor que en 2012 y 2018. La brecha con otros grupos persiste.",
    platformSummary: "Elección Presidencial",
  },
};

export const elections: ElectionYear[] = (electionsRaw as Array<{
  year: number;
  totalListaNominal: number;
  totalVoted: number;
  overallParticipation: number;
  youthParticipation: number;
  averageVoterAge: number;
  youthShareOfVoters: number;
  youthVoters: number;
  ageGroups: Record<string, { participation: number }>;
}>).map((e) => ({
  year: e.year,
  overallParticipation: Number(e.overallParticipation.toFixed(1)),
  youthParticipation: Number(e.youthParticipation.toFixed(1)),
  averageVoterAge: Number(e.averageVoterAge.toFixed(2)),
  youthShareOfVoters: Number(e.youthShareOfVoters.toFixed(1)),
  totalVoters: e.totalVoted,
  youthVoters: e.youthVoters,
  listaNominal: e.totalListaNominal,
  ...MILESTONES[e.year],
}));

export const ageGroups = [
  { label: "18-24", key: "youth", name: "Jóvenes (18–24)" },
  { label: "25-34", key: "youngAdult", name: "Adultos Jóvenes (25–34)" },
  { label: "35-44", key: "adult", name: "Adultos (35–44)" },
  { label: "45-59", key: "matureAdult", name: "Adultos Plenos (45–59)" },
  { label: "60+", key: "senior", name: "Adultos Mayores (60+)" },
];

export const participationByAge: AgeGroupParticipation[] = (electionsRaw as Array<{
  year: number;
  ageGroups: Record<string, { participation: number }>;
}>).map((e) => ({
  year: e.year,
  "18-24": Number(e.ageGroups["18-24"].participation.toFixed(1)),
  "25-34": Number(e.ageGroups["25-34"].participation.toFixed(1)),
  "35-44": Number(e.ageGroups["35-44"].participation.toFixed(1)),
  "45-59": Number(e.ageGroups["45-59"].participation.toFixed(1)),
  "60+": Number(e.ageGroups["60+"].participation.toFixed(1)),
}));

// Map from INE abbrev / code to mexico-paths.json code
const PATH_CODE_MAP: Record<string, { pathCode: string; region: StateData["region"]; cleanName: string }> = {
  AGU: { pathCode: "AGS", region: "Centro", cleanName: "Aguascalientes" },
  BCN: { pathCode: "BC", region: "Norte", cleanName: "Baja California" },
  BCS: { pathCode: "BCS", region: "Norte", cleanName: "Baja California Sur" },
  CAM: { pathCode: "CAM", region: "Sur-Sureste", cleanName: "Campeche" },
  COA: { pathCode: "COAH", region: "Norte", cleanName: "Coahuila" },
  COL: { pathCode: "COL", region: "Occidente", cleanName: "Colima" },
  CHP: { pathCode: "CHIS", region: "Sur-Sureste", cleanName: "Chiapas" },
  CHH: { pathCode: "CHIH", region: "Norte", cleanName: "Chihuahua" },
  CMX: { pathCode: "CDMX", region: "Centro", cleanName: "Ciudad de México" },
  DUR: { pathCode: "DGO", region: "Norte", cleanName: "Durango" },
  GUA: { pathCode: "GTO", region: "Centro", cleanName: "Guanajuato" },
  GRO: { pathCode: "GRO", region: "Sur-Sureste", cleanName: "Guerrero" },
  HID: { pathCode: "HGO", region: "Centro", cleanName: "Hidalgo" },
  JAL: { pathCode: "JAL", region: "Occidente", cleanName: "Jalisco" },
  MEX: { pathCode: "MEX", region: "Centro", cleanName: "Estado de México" },
  MIC: { pathCode: "MICH", region: "Occidente", cleanName: "Michoacán" },
  MOR: { pathCode: "MOR", region: "Centro", cleanName: "Morelos" },
  NAY: { pathCode: "NAY", region: "Occidente", cleanName: "Nayarit" },
  NLE: { pathCode: "NL", region: "Norte", cleanName: "Nuevo León" },
  OAX: { pathCode: "OAX", region: "Sur-Sureste", cleanName: "Oaxaca" },
  PUE: { pathCode: "PUE", region: "Centro", cleanName: "Puebla" },
  QUE: { pathCode: "QRO", region: "Centro", cleanName: "Querétaro" },
  ROO: { pathCode: "QROO", region: "Sur-Sureste", cleanName: "Quintana Roo" },
  SLP: { pathCode: "SLP", region: "Centro", cleanName: "San Luis Potosí" },
  SIN: { pathCode: "SIN", region: "Norte", cleanName: "Sinaloa" },
  SON: { pathCode: "SON", region: "Norte", cleanName: "Sonora" },
  TAB: { pathCode: "TAB", region: "Sur-Sureste", cleanName: "Tabasco" },
  TAM: { pathCode: "TAMPS", region: "Norte", cleanName: "Tamaulipas" },
  TLA: { pathCode: "TLAX", region: "Centro", cleanName: "Tlaxcala" },
  VER: { pathCode: "VER", region: "Sur-Sureste", cleanName: "Veracruz" },
  YUC: { pathCode: "YUC", region: "Sur-Sureste", cleanName: "Yucatán" },
  ZAC: { pathCode: "ZAC", region: "Norte", cleanName: "Zacatecas" },
};

export const states: StateData[] = (statesRaw as Array<{
  code: number;
  name: string;
  abbrev: string;
  years: Record<string, { youthParticipation: number; overallParticipation: number }>;
}>).map((s) => {
  const meta = PATH_CODE_MAP[s.abbrev] || { pathCode: s.abbrev, region: "Centro", cleanName: s.name };
  return {
    code: meta.pathCode,
    ineCode: s.code,
    name: meta.cleanName,
    region: meta.region,
    youthParticipation: Object.fromEntries(
      Object.entries(s.years).map(([y, d]) => [Number(y), Number(d.youthParticipation.toFixed(1))])
    ),
    overallParticipation: Object.fromEntries(
      Object.entries(s.years).map(([y, d]) => [Number(y), Number(d.overallParticipation.toFixed(1))])
    ),
  };
});

export function getLostVotes(): number {
  const peakElection = (electionsRaw as Array<{
    year: number;
    youthParticipation: number;
    ageGroups: Record<string, { listaNominal: number }>;
  }>).find((e) => e.year === 2012)!;
  const currentElection = (electionsRaw as Array<{
    year: number;
    youthVoters: number;
    ageGroups: Record<string, { listaNominal: number }>;
  }>).find((e) => e.year === 2024)!;
  const peakRate = peakElection.youthParticipation / 100;
  const currentYouthLN = currentElection.ageGroups["18-24"].listaNominal;
  const hypotheticalVotes = currentYouthLN * peakRate;
  return Math.round(hypotheticalVotes - currentElection.youthVoters);
}

export interface AgeDetailEntry {
  age: number;
  participation: number;
  listaNominal: number;
  voted: number;
}

export function getAgeDetail(year: number): AgeDetailEntry[] {
  const yearData = (ageDetailRaw as Array<{
    year: number;
    byIndividualAge: Record<string, { participation: number; listaNominal: number; voted: number }>;
  }>).find((d) => d.year === year);
  if (!yearData) return [];
  return Object.entries(yearData.byIndividualAge)
    .map(([age, d]) => ({
      age: Number(age),
      participation: Number(d.participation.toFixed(1)),
      listaNominal: d.listaNominal,
      voted: d.voted,
    }))
    .sort((a, b) => a.age - b.age);
}
