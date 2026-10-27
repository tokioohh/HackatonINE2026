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
  milestone: string;
  milestoneDetail: string;
}

export interface StateData {
  id: string;
  name: string;
  youthParticipation: Record<number, number>;
}

export interface AgeGroupParticipation {
  year: number;
  "18-24": number;
  "25-34": number;
  "35-44": number;
  "45-59": number;
  "60+": number;
}

const MILESTONES: Record<number, { milestone: string; milestoneDetail: string }> = {
  2009: {
    milestone: "Intermedia",
    milestoneDetail: "Elección intermedia con baja participación general (43%). Solo 36% de los jóvenes inscritos votó — pero la diferencia con otros grupos ya era visible. La brecha no empezó después.",
  },
  2012: {
    milestone: "Presidencial",
    milestoneDetail: "La participación subió en todos los grupos de edad. Los jóvenes alcanzaron su máximo en la serie: 55.6%. Coincidió con alta movilización política, pero los datos no miden qué la causó.",
  },
  2015: {
    milestone: "Intermedia",
    milestoneDetail: "Como en toda elección intermedia, la participación cayó para todos los grupos, no solo para los jóvenes. El 35.7% juvenil fue similar al de 2009. El patrón presidencial-intermedia se repite.",
  },
  2018: {
    milestone: "Presidencial",
    milestoneDetail: "Otra elección presidencial, otra subida general. Los jóvenes llegaron al 51%, pero no alcanzaron el nivel de 2012. La brecha con los mayores de 45 se mantuvo en 14 puntos.",
  },
  2021: {
    milestone: "Intermedia",
    milestoneDetail: "Elección intermedia en contexto de pandemia. La participación general fue del 50% y la juvenil del 42%. Tercera vez consecutiva que la intermedia baja respecto a la presidencial anterior.",
  },
  2024: {
    milestone: "Presidencial",
    milestoneDetail: "México eligió a su primera presidenta. La participación juvenil fue del 47% — mayor que en 2009, 2015 y 2021, pero menor que en 2012 y 2018. La brecha con otros grupos persiste.",
  },
};

const STATE_DISPLAY_NAMES: Record<string, string> = {
  "DISTRITO FEDERAL": "Ciudad de México",
  "MEXICO": "Estado de México",
  "MICHOACAN": "Michoacán",
  "NUEVO LEON": "Nuevo León",
  "QUERETARO": "Querétaro",
  "SAN LUIS POTOSI": "San Luis Potosí",
  "YUCATAN": "Yucatán",
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
  overallParticipation: e.overallParticipation,
  youthParticipation: e.youthParticipation,
  averageVoterAge: e.averageVoterAge,
  youthShareOfVoters: e.youthShareOfVoters,
  totalVoters: e.totalVoted,
  youthVoters: e.youthVoters,
  listaNominal: e.totalListaNominal,
  ...MILESTONES[e.year],
}));

export const ageGroups = [
  { label: "18-24", key: "youth" },
  { label: "25-34", key: "youngAdult" },
  { label: "35-44", key: "adult" },
  { label: "45-59", key: "matureAdult" },
  { label: "60+", key: "senior" },
];

export const participationByAge: AgeGroupParticipation[] = (electionsRaw as Array<{
  year: number;
  ageGroups: Record<string, { participation: number }>;
}>).map((e) => ({
  year: e.year,
  "18-24": e.ageGroups["18-24"].participation,
  "25-34": e.ageGroups["25-34"].participation,
  "35-44": e.ageGroups["35-44"].participation,
  "45-59": e.ageGroups["45-59"].participation,
  "60+": e.ageGroups["60+"].participation,
}));

export const states: StateData[] = (statesRaw as Array<{
  code: number;
  name: string;
  abbrev: string;
  years: Record<string, { youthParticipation: number; overallParticipation: number }>;
}>).map((s) => ({
  id: s.abbrev,
  name: STATE_DISPLAY_NAMES[s.name] || s.name.charAt(0) + s.name.slice(1).toLowerCase(),
  youthParticipation: Object.fromEntries(
    Object.entries(s.years).map(([y, d]) => [Number(y), Math.round(d.youthParticipation)])
  ),
}));

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
    .map(([age, d]) => ({ age: Number(age), participation: d.participation, listaNominal: d.listaNominal, voted: d.voted }))
    .sort((a, b) => a.age - b.age);
}
