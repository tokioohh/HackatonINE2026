export type LifeStage =
  | "Juventud"       // 18-24
  | "Adulta Joven"   // 25-34
  | "Adulta"         // 35-44
  | "Adulta Plena"   // 45-59
  | "Adulta Mayor";  // 60+

export interface AgeGroupParticipation {
  ageGroup: string;
  lifeStage: LifeStage;
  rate: number;         // Porcentaje de participación (0 - 100)
  shareOfVoters: number; // Porcentaje que representan del total de votantes
  listaNominal: number;
  votaron: number;
}

export interface ElectionYearData {
  year: number;
  type: "Presidencial" | "Intermedia";
  totalParticipation: number;
  averageVoterAge: number;
  totalListaNominal: number;
  totalVotaron: number;
  youthShareOfVoters: number; // % del total de votos que vino de 18-24
  ageGroups: AgeGroupParticipation[];
}

export interface TimelineMilestone {
  year: number;
  dateStr: string;
  title: string;
  subtitle: string;
  description: string;
  platform: "Facebook" | "Twitter" | "YouTube" | "WhatsApp" | "TikTok" | "Movimiento Ciudadano" | "General";
  impact: "positive" | "negative" | "warning";
  electionContext?: string;
}

export interface StateParticipation {
  code: string;
  name: string;
  participation2009: number;
  participation2018: number;
  participation2024: number;
  youthParticipation2024: number;
  youthChange: number; // Cambio en puntos porcentuales respecto a su pico
  region: "Norte" | "Centro" | "Sur-Sureste" | "Occidente";
}

export interface FilterState {
  year: number;
  stateCode: string;
  ageGroup: string;
  sex: "TOTAL" | "H" | "M";
}
