import { ElectionYearData, TimelineMilestone, StateParticipation } from "@/types";

export const ELECTION_YEARS: ElectionYearData[] = [
  {
    year: 2009,
    type: "Intermedia",
    totalParticipation: 44.1,
    averageVoterAge: 43.12,
    totalListaNominal: 77507678,
    totalVotaron: 34180886,
    youthShareOfVoters: 16.4,
    ageGroups: [
      { ageGroup: "18-19", lifeStage: "Juventud", rate: 36.2, shareOfVoters: 5.1, listaNominal: 4800000, votaron: 1737600 },
      { ageGroup: "20-24", lifeStage: "Juventud", rate: 31.5, shareOfVoters: 11.3, listaNominal: 12200000, votaron: 3843000 },
      { ageGroup: "25-29", lifeStage: "Adulta Joven", rate: 37.1, shareOfVoters: 12.8, listaNominal: 11800000, votaron: 4377800 },
      { ageGroup: "30-34", lifeStage: "Adulta Joven", rate: 42.4, shareOfVoters: 13.1, listaNominal: 10550000, votaron: 4473200 },
      { ageGroup: "35-44", lifeStage: "Adulta", rate: 49.3, shareOfVoters: 22.4, listaNominal: 15500000, votaron: 7641500 },
      { ageGroup: "45-59", lifeStage: "Adulta Plena", rate: 57.8, shareOfVoters: 20.8, listaNominal: 12300000, votaron: 7109400 },
      { ageGroup: "60+", lifeStage: "Adulta Mayor", rate: 48.6, shareOfVoters: 14.5, listaNominal: 10357678, votaron: 5033886 }
    ]
  },
  {
    year: 2012,
    type: "Presidencial",
    totalParticipation: 62.1,
    averageVoterAge: 43.85,
    totalListaNominal: 79492490,
    totalVotaron: 49364836,
    youthShareOfVoters: 18.2,
    ageGroups: [
      { ageGroup: "18-19", lifeStage: "Juventud", rate: 53.4, shareOfVoters: 5.6, listaNominal: 5200000, votaron: 2776800 },
      { ageGroup: "20-24", lifeStage: "Juventud", rate: 51.2, shareOfVoters: 12.6, listaNominal: 12150000, votaron: 6220800 },
      { ageGroup: "25-29", lifeStage: "Adulta Joven", rate: 55.8, shareOfVoters: 12.7, listaNominal: 11200000, votaron: 6249600 },
      { ageGroup: "30-34", lifeStage: "Adulta Joven", rate: 61.3, shareOfVoters: 13.0, listaNominal: 10450000, votaron: 6405850 },
      { ageGroup: "35-44", lifeStage: "Adulta", rate: 68.2, shareOfVoters: 22.8, listaNominal: 16500000, votaron: 11253000 },
      { ageGroup: "45-59", lifeStage: "Adulta Plena", rate: 74.6, shareOfVoters: 20.9, listaNominal: 13800000, votaron: 10294800 },
      { ageGroup: "60+", lifeStage: "Adulta Mayor", rate: 60.5, shareOfVoters: 12.4, listaNominal: 10192490, votaron: 6163986 }
    ]
  },
  {
    year: 2015,
    type: "Intermedia",
    totalParticipation: 47.1,
    averageVoterAge: 44.20,
    totalListaNominal: 83563190,
    totalVotaron: 39358262,
    youthShareOfVoters: 15.1,
    ageGroups: [
      { ageGroup: "18-19", lifeStage: "Juventud", rate: 37.8, shareOfVoters: 4.8, listaNominal: 5000000, votaron: 1890000 },
      { ageGroup: "20-24", lifeStage: "Juventud", rate: 33.1, shareOfVoters: 10.3, listaNominal: 12250000, votaron: 4054750 },
      { ageGroup: "25-29", lifeStage: "Adulta Joven", rate: 38.6, shareOfVoters: 11.6, listaNominal: 11800000, votaron: 4554800 },
      { ageGroup: "30-34", lifeStage: "Adulta Joven", rate: 44.9, shareOfVoters: 12.7, listaNominal: 11100000, votaron: 4983900 },
      { ageGroup: "35-44", lifeStage: "Adulta", rate: 52.4, shareOfVoters: 23.3, listaNominal: 17500000, votaron: 9170000 },
      { ageGroup: "45-59", lifeStage: "Adulta Plena", rate: 62.1, shareOfVoters: 22.8, listaNominal: 14450000, votaron: 8973450 },
      { ageGroup: "60+", lifeStage: "Adulta Mayor", rate: 50.4, shareOfVoters: 14.5, listaNominal: 11463190, votaron: 5777448 }
    ]
  },
  {
    year: 2018,
    type: "Presidencial",
    totalParticipation: 62.4,
    averageVoterAge: 44.78,
    totalListaNominal: 89123355,
    totalVotaron: 55612973,
    youthShareOfVoters: 16.8,
    ageGroups: [
      { ageGroup: "18-19", lifeStage: "Juventud", rate: 56.1, shareOfVoters: 4.9, listaNominal: 4850000, votaron: 2720850 },
      { ageGroup: "20-24", lifeStage: "Juventud", rate: 52.8, shareOfVoters: 11.9, listaNominal: 12500000, votaron: 6600000 },
      { ageGroup: "25-29", lifeStage: "Adulta Joven", rate: 57.2, shareOfVoters: 12.4, listaNominal: 12050000, votaron: 6892600 },
      { ageGroup: "30-34", lifeStage: "Adulta Joven", rate: 61.9, shareOfVoters: 12.7, listaNominal: 11400000, votaron: 7056600 },
      { ageGroup: "35-44", lifeStage: "Adulta", rate: 67.5, shareOfVoters: 22.9, listaNominal: 18850000, votaron: 12723750 },
      { ageGroup: "45-59", lifeStage: "Adulta Plena", rate: 73.8, shareOfVoters: 22.1, listaNominal: 16650000, votaron: 12287700 },
      { ageGroup: "60+", lifeStage: "Adulta Mayor", rate: 57.9, shareOfVoters: 13.2, listaNominal: 12823355, votaron: 7424723 }
    ]
  },
  {
    year: 2021,
    type: "Intermedia",
    totalParticipation: 51.8,
    averageVoterAge: 45.10,
    totalListaNominal: 93528473,
    totalVotaron: 48447749,
    youthShareOfVoters: 14.2,
    ageGroups: [
      { ageGroup: "18-19", lifeStage: "Juventud", rate: 41.2, shareOfVoters: 4.2, listaNominal: 4950000, votaron: 2039400 },
      { ageGroup: "20-24", lifeStage: "Juventud", rate: 36.7, shareOfVoters: 10.0, listaNominal: 13150000, votaron: 4826050 },
      { ageGroup: "25-29", lifeStage: "Adulta Joven", rate: 43.8, shareOfVoters: 11.5, listaNominal: 12700000, votaron: 5562600 },
      { ageGroup: "30-34", lifeStage: "Adulta Joven", rate: 49.6, shareOfVoters: 12.3, listaNominal: 12000000, votaron: 5952000 },
      { ageGroup: "35-44", lifeStage: "Adulta", rate: 56.4, shareOfVoters: 22.7, listaNominal: 19500000, votaron: 10998000 },
      { ageGroup: "45-59", lifeStage: "Adulta Plena", rate: 65.3, shareOfVoters: 23.4, listaNominal: 17350000, votaron: 11329550 },
      { ageGroup: "60+", lifeStage: "Adulta Mayor", rate: 55.7, shareOfVoters: 15.9, listaNominal: 13878473, votaron: 7730149 }
    ]
  },
  {
    year: 2024,
    type: "Presidencial",
    totalParticipation: 59.7,
    averageVoterAge: 45.46,
    totalListaNominal: 98329591,
    totalVotaron: 58702765,
    youthShareOfVoters: 13.1, // Solo el 13.1% de los votantes!
    ageGroups: [
      { ageGroup: "18-19", lifeStage: "Juventud", rate: 42.1, shareOfVoters: 3.8, listaNominal: 5300000, votaron: 2231300 },
      { ageGroup: "20-24", lifeStage: "Juventud", rate: 38.3, shareOfVoters: 9.3, listaNominal: 14200000, votaron: 5438600 },
      { ageGroup: "25-29", lifeStage: "Adulta Joven", rate: 49.5, shareOfVoters: 11.2, listaNominal: 13300000, votaron: 6583500 },
      { ageGroup: "30-34", lifeStage: "Adulta Joven", rate: 57.2, shareOfVoters: 12.1, listaNominal: 12450000, votaron: 7121400 },
      { ageGroup: "35-44", lifeStage: "Adulta", rate: 64.9, shareOfVoters: 22.5, listaNominal: 20350000, votaron: 13207150 },
      { ageGroup: "45-59", lifeStage: "Adulta Plena", rate: 72.1, shareOfVoters: 23.8, listaNominal: 19400000, votaron: 13987400 },
      { ageGroup: "60+", lifeStage: "Adulta Mayor", rate: 63.8, shareOfVoters: 17.3, listaNominal: 15329591, votaron: 9780015 }
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: 2008,
    dateStr: "Feb 2008",
    title: "Facebook llega en español",
    subtitle: "El inicio de las comunidades digitales en México",
    description: "La red de Mark Zuckerberg se traduce al español y comienza a ser adoptada por universitarios en campus del país.",
    platform: "Facebook",
    impact: "positive"
  },
  {
    year: 2009,
    dateStr: "Jul 2009",
    title: "Elección Federal 2009: El Silencio",
    subtitle: "Campañas tradicionales sin eco digital",
    description: "Mítines de plaza, spots de radio y TV. Solo 27% de los mexicanos tenía internet en casa. La participación de jóvenes de 20-24 años se hunde al 31.5%.",
    platform: "General",
    impact: "negative",
    electionContext: "Participación total: 44.1% | Juventud: 31.5%"
  },
  {
    year: 2012,
    dateStr: "May 2012",
    title: "#YoSoy132: La Primavera Mexicana",
    subtitle: "Las redes convocan a las calles",
    description: "Tras la visita del candidato del PRI a la Universidad Iberoamericana, 131 estudiantes graban un video mostrando sus credenciales. Nace el movimiento juvenil digital más influyente.",
    platform: "Twitter",
    impact: "positive"
  },
  {
    year: 2012,
    dateStr: "Jul 2012",
    title: "Elección 2012: El Despertar Juvenil",
    subtitle: "Pico histórico de voto joven",
    description: "La participación de jóvenes de 18-19 años salta del 36.2% al 53.4%. Parecía el inicio de una era de hiperparticipación democrática guiada por la red.",
    platform: "General",
    impact: "positive",
    electionContext: "Participación total: 62.1% | Juventud 18-19: 53.4%"
  },
  {
    year: 2014,
    dateStr: "2014 - 2017",
    title: "La era de WhatsApp y la polarización",
    subtitle: "La información pasa de pública a privada",
    description: "Las conversaciones electorales se mudan a cadenas familiares y grupos cerrados de WhatsApp. Se masifican las fake news y los algoritmos premian el enojo.",
    platform: "WhatsApp",
    impact: "warning"
  },
  {
    year: 2018,
    dateStr: "Jul 2018",
    title: "Elección 2018: El Clímax de la Red",
    subtitle: "Memes, viralidad y alternancia histórica",
    description: "Con 65% de penetración de internet, la campaña se libra en redes sociales y transmisiones en vivo. La participación general alcanza 62.4%.",
    platform: "YouTube",
    impact: "positive",
    electionContext: "Participación total: 62.4% | Juventud 18-19: 56.1%"
  },
  {
    year: 2020,
    dateStr: "2020 - 2023",
    title: "El auge de TikTok y el hartazgo digital",
    subtitle: "Scroll infinito, desconexión cívica",
    description: "La generación Z habita plataformas de video ultrarrápido donde los políticos intentan volverse virales con trends cómicos. El cinismo y la fatiga informativa crecen.",
    platform: "TikTok",
    impact: "warning"
  },
  {
    year: 2024,
    dateStr: "Jun 2024",
    title: "Elección 2024: La Paradoja de la Desconexión",
    subtitle: "Más conectados que nunca, menos representados que nunca",
    description: "90% de los jóvenes tiene smartphone con acceso 24/7 a noticias, pero solo 38.3% de los jóvenes de 20-24 años votó. La juventud representa apenas 13 de cada 100 votos.",
    platform: "General",
    impact: "negative",
    electionContext: "Participación total: 59.7% | Jóvenes son solo 13% de votantes"
  }
];

export const STATES_DATA: StateParticipation[] = [
  { code: "AGS", name: "Aguascalientes", participation2009: 46.2, participation2018: 60.1, participation2024: 58.2, youthParticipation2024: 37.8, youthChange: -12.4, region: "Centro" },
  { code: "BC", name: "Baja California", participation2009: 34.8, participation2018: 52.8, participation2024: 48.6, youthParticipation2024: 29.4, youthChange: -18.2, region: "Norte" },
  { code: "BCS", name: "Baja California Sur", participation2009: 48.9, participation2018: 63.4, participation2024: 56.1, youthParticipation2024: 35.1, youthChange: -14.6, region: "Norte" },
  { code: "CAM", name: "Campeche", participation2009: 58.4, participation2018: 70.3, participation2024: 67.2, youthParticipation2024: 48.5, youthChange: -9.8, region: "Sur-Sureste" },
  { code: "COAH", name: "Coahuila", participation2009: 42.1, participation2018: 62.5, participation2024: 64.1, youthParticipation2024: 43.2, youthChange: -8.1, region: "Norte" },
  { code: "COL", name: "Colima", participation2009: 55.6, participation2018: 65.4, participation2024: 58.9, youthParticipation2024: 39.4, youthChange: -13.5, region: "Occidente" },
  { code: "CHIS", name: "Chiapas", participation2009: 49.3, participation2018: 67.8, participation2024: 62.3, youthParticipation2024: 47.1, youthChange: -11.4, region: "Sur-Sureste" },
  { code: "CHIH", name: "Chihuahua", participation2009: 36.5, participation2018: 49.2, participation2024: 47.3, youthParticipation2024: 28.6, youthChange: -19.4, region: "Norte" },
  { code: "CDMX", name: "Ciudad de México", participation2009: 48.2, participation2018: 70.4, participation2024: 69.8, youthParticipation2024: 51.3, youthChange: -7.2, region: "Centro" },
  { code: "DGO", name: "Durango", participation2009: 41.8, participation2018: 56.4, participation2024: 53.7, youthParticipation2024: 34.8, youthChange: -15.1, region: "Norte" },
  { code: "GTO", name: "Guanajuato", participation2009: 47.3, participation2018: 53.2, participation2024: 55.4, youthParticipation2024: 36.2, youthChange: -13.0, region: "Centro" },
  { code: "GRO", name: "Guerrero", participation2009: 43.7, participation2018: 65.2, participation2024: 59.8, youthParticipation2024: 42.3, youthChange: -12.9, region: "Sur-Sureste" },
  { code: "HGO", name: "Hidalgo", participation2009: 45.9, participation2018: 65.8, participation2024: 63.7, youthParticipation2024: 45.2, youthChange: -9.5, region: "Centro" },
  { code: "JAL", name: "Jalisco", participation2009: 49.6, participation2018: 61.8, participation2024: 58.4, youthParticipation2024: 38.9, youthChange: -14.2, region: "Occidente" },
  { code: "MEX", name: "Estado de México", participation2009: 46.8, participation2018: 67.2, participation2024: 64.5, youthParticipation2024: 44.8, youthChange: -10.7, region: "Centro" },
  { code: "MICH", name: "Michoacán", participation2009: 41.5, participation2018: 58.9, participation2024: 54.2, youthParticipation2024: 36.1, youthChange: -14.3, region: "Occidente" },
  { code: "MOR", name: "Morelos", participation2009: 47.1, participation2018: 68.3, participation2024: 61.2, youthParticipation2024: 41.5, youthChange: -13.8, region: "Centro" },
  { code: "NAY", name: "Nayarit", participation2009: 52.4, participation2018: 66.5, participation2024: 57.3, youthParticipation2024: 39.8, youthChange: -15.0, region: "Occidente" },
  { code: "NL", name: "Nuevo León", participation2009: 53.2, participation2018: 55.4, participation2024: 56.8, youthParticipation2024: 37.4, youthChange: -13.9, region: "Norte" },
  { code: "OAX", name: "Oaxaca", participation2009: 46.2, participation2018: 66.4, participation2024: 63.1, youthParticipation2024: 46.8, youthChange: -9.4, region: "Sur-Sureste" },
  { code: "PUE", name: "Puebla", participation2009: 43.1, participation2018: 67.8, participation2024: 64.9, youthParticipation2024: 45.6, youthChange: -10.2, region: "Centro" },
  { code: "QRO", name: "Querétaro", participation2009: 55.8, participation2018: 63.2, participation2024: 61.5, youthParticipation2024: 43.7, youthChange: -11.6, region: "Centro" },
  { code: "QROO", name: "Quintana Roo", participation2009: 40.2, participation2018: 59.8, participation2024: 54.6, youthParticipation2024: 33.2, youthChange: -16.8, region: "Sur-Sureste" },
  { code: "SLP", name: "San Luis Potosí", participation2009: 50.8, participation2018: 63.7, participation2024: 61.2, youthParticipation2024: 42.1, youthChange: -11.9, region: "Centro" },
  { code: "SIN", name: "Sinaloa", participation2009: 44.9, participation2018: 59.6, participation2024: 55.1, youthParticipation2024: 35.8, youthChange: -14.7, region: "Norte" },
  { code: "SON", name: "Sonora", participation2009: 45.3, participation2018: 52.1, participation2024: 50.4, youthParticipation2024: 31.7, youthChange: -16.2, region: "Norte" },
  { code: "TAB", name: "Tabasco", participation2009: 59.2, participation2018: 71.1, participation2024: 66.4, youthParticipation2024: 47.9, youthChange: -11.3, region: "Sur-Sureste" },
  { code: "TAMPS", name: "Tamaulipas", participation2009: 41.7, participation2018: 55.8, participation2024: 53.2, youthParticipation2024: 34.5, youthChange: -14.9, region: "Norte" },
  { code: "TLAX", name: "Tlaxcala", participation2009: 49.8, participation2018: 70.2, participation2024: 68.1, youthParticipation2024: 49.3, youthChange: -8.8, region: "Centro" },
  { code: "VER", name: "Veracruz", participation2009: 51.3, participation2018: 65.4, participation2024: 60.2, youthParticipation2024: 41.8, youthChange: -13.1, region: "Sur-Sureste" },
  { code: "YUC", name: "Yucatán", participation2009: 67.4, participation2018: 75.3, participation2024: 72.8, youthParticipation2024: 57.4, youthChange: -6.8, region: "Sur-Sureste" },
  { code: "ZAC", name: "Zacatecas", participation2009: 46.1, participation2018: 62.7, participation2024: 57.9, youthParticipation2024: 38.2, youthChange: -14.5, region: "Centro" }
];
