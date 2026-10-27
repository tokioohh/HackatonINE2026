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
    milestone: "Antes de las redes",
    milestoneDetail: "No había Instagram ni WhatsApp. Las campañas eran carteles en la calle y anuncios en la tele. Y aun en ese México sin redes, la brecha entre jóvenes y adultos ya existía — aunque nadie la llamaba crisis.",
  },
  2012: {
    milestone: "#YoSoy132",
    milestoneDetail: "Un movimiento estudiantil prendió fuego a las redes. Por primera vez en mucho tiempo, los jóvenes sentían que votar valía la pena. Fue el mejor año para la participación juvenil en lo que va del siglo.",
  },
  2015: {
    milestone: "El apagón",
    milestoneDetail: "Tres años después del entusiasmo de 2012, algo se rompió. Instagram crecía, pero las urnas se vaciaban. La desilusión se instaló en la generación más conectada de la historia.",
  },
  2018: {
    milestone: "WhatsApp como arma",
    milestoneDetail: "Las campañas llegaron directo al celular. También los rumores, los memes falsos y la confusión. Más gente votó — pero los jóvenes nunca volvieron a ser los de 2012.",
  },
  2021: {
    milestone: "Pandemia y olvido",
    milestoneDetail: "El COVID cerró el mundo. TikTok se llenó de política, pero los memes no convirtieron audiencia en votantes. La gente ya estaba cansada.",
  },
  2024: {
    milestone: "La era de la IA",
    milestoneDetail: "Deepfakes, desinformación y saturación digital. México eligió a su primera presidenta — y los jóvenes, otra vez, casi no aparecieron.",
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
