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
    milestone: "El Silencio de las Bardas",
    milestoneDetail:
      "Elección intermedia con baja participación general (43%). Solo 36% de los jóvenes inscritos votó. Las campañas se libraban en mítines y spots de TV; solo 27% tenía internet en casa.",
    platformSummary: "Mítines y TV",
  },
  2012: {
    type: "Presidencial",
    milestone: "El Despertar: #YoSoy132",
    milestoneDetail:
      "La participación juvenil alcanzó su pico histórico: 55.6%. 131 estudiantes con credenciales encendieron la cámara y las redes sociales convocaron marchas de 100,000 personas en Paseo de la Reforma.",
    platformSummary: "Twitter y YouTube",
  },
  2015: {
    type: "Intermedia",
    milestone: "El Ciclo y la Resaca",
    milestoneDetail:
      "Como en toda intermedia, la afluencia cayó para todos los grupos. El 35.7% juvenil fue casi idéntico a 2009. Comienza la migración a grupos cerrados de mensajería y fake news.",
    platformSummary: "WhatsApp inicial",
  },
  2018: {
    type: "Presidencial",
    milestone: "El Clímax de la Red",
    milestoneDetail:
      "Récord de 56 millones de votos totales. Los jóvenes alcanzaron 51% de participación, pero la brecha con adultos mayores (74%) se mantuvo constante en 14 puntos.",
    platformSummary: "Smartphones masivos",
  },
  2021: {
    type: "Intermedia",
    milestone: "Pandemia y Fatiga Digital",
    milestoneDetail:
      "Elección en pandemia. Participación general de 51.8% y juvenil de 42%. El consumo de redes se satura con formatos ultracortos, pero la desconexión con las instituciones se acentúa.",
    platformSummary: "Auge de TikTok",
  },
  2024: {
    type: "Presidencial",
    milestone: "La Paradoja de la Desconexión",
    milestoneDetail:
      "México eligió a su primera presidenta. 97% de los jóvenes cuenta con internet, pero la participación juvenil fue de 47.1%: solo 13 de cada 100 votos provinieron de 18 a 24 años.",
    platformSummary: "Conectividad total",
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
