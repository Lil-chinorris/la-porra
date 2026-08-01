// data.jsx — La Porra · datos reales hasta Carrera 11 (Hungría · 2 ago 2026)

const RACE_NUMBER = 11;

// Calendario — solo las carreras disputadas + próxima
const RACES = [
  { n: 1, name: 'Australia',    emoji: '🇦🇺', short: 'AUS', date: '16 MAR 2026', circuit: 'Albert Park' },
  { n: 2, name: 'China',        emoji: '🇨🇳', short: 'CHN', date: '23 MAR 2026', circuit: 'Shanghai Intl.' },
  { n: 3, name: 'Japón',        emoji: '🇯🇵', short: 'JPN', date: '29 MAR 2026', circuit: 'Suzuka' },
  { n: 4, name: 'Miami',        emoji: '🇺🇸', short: 'MIA', date: '3 MAY 2026',  circuit: 'Miami International Autodrome' },
  { n: 5, name: 'Canadá',       emoji: '🇨🇦', short: 'CAN', date: '24 MAY 2026', circuit: 'Circuit Gilles-Villeneuve' },
  { n: 6, name: 'Mónaco',       emoji: '🇲🇨', short: 'MON', date: '7 JUN 2026',  circuit: 'Circuit de Monaco' },
  { n: 7, name: 'Barcelona',    emoji: '💛', short: 'BCN', date: '14 JUN 2026', circuit: 'Circuit de Barcelona-Catalunya' },
  { n: 8, name: 'Austria',      emoji: '🇦🇹', short: 'AUT', date: '5 JUL 2026',  circuit: 'Red Bull Ring' },
  { n: 9, name: 'Gran Bretaña', emoji: '🇬🇧', short: 'GBR', date: '12 JUL 2026', circuit: 'Silverstone' },
  { n: 10, name: 'Bélgica',     emoji: '🇧🇪', short: 'BEL', date: '19 JUL 2026', circuit: 'Circuit de Spa-Francorchamps' },
  { n: 11, name: 'Hungría',     emoji: '🇭🇺', short: 'HUN', date: '2 AGO 2026',  circuit: 'Hungaroring' },
];

// Próxima: Países Bajos (C12)
const NEXT_RACE = {
  n: 12, name: 'Países Bajos', emoji: '🇳🇱', short: 'NED',
  date: '31 AGO 2026',
  circuit: 'Circuit Zandvoort',
  length: '4.259 km',
  laps: 72,
  corners: 14,
  lapRecord: "1:11.097 — L. Hamilton (2021)",
  firstGp: 1952,
};

// Resultados por carrera (nombre → puntos esa carrera)
const RACE_RESULTS = {
  1: { // Australia
    BALADO: 6, ALBA: 4, ALEJA: 6, BLANQUI: 5, PATACA: 1, EVA: 6, LARA: 5,
    CHINO: 5, ENRIC: 5, DAPE: 5, MISTIC: 5, MARVIN: 4, CAÑA: 2, ALEX: 1,
    MARTÍ: 6, LOJO: 4, ITZIAR: 0, SARAY: -1, JANE: 0, JAVISUA: 0, SAMU: -2, ÁLVARO: -2,
  },
  2: { // China
    BALADO: 6, ALBA: 6, ALEJA: 0, BLANQUI: 0, PATACA: 6, EVA: -1, LARA: -2,
    CHINO: -2, ENRIC: -2, DAPE: -2, MISTIC: -2, MARVIN: -2, CAÑA: -2, ALEX: -1,
    MARTÍ: -3, LOJO: -1, ITZIAR: 0, SARAY: -1, JANE: -2, JAVISUA: -2, SAMU: 0, ÁLVARO: -4,
  },
  3: { // Japón
    BALADO: 5, ALBA: 2, ALEJA: 4, BLANQUI: 5, PATACA: 3, EVA: 4, LARA: 5,
    CHINO: 5, ENRIC: 4, DAPE: 4, MISTIC: 4, MARVIN: 5, CAÑA: 5, ALEX: 5,
    MARTÍ: 2, LOJO: 1, ITZIAR: 3, SARAY: 4, JANE: 3, JAVISUA: 2, SAMU: -1, ÁLVARO: -1,
  },
  4: { // Miami
    BALADO: 2, ALBA: 3, ALEJA: 0, BLANQUI: 2, PATACA: 3, EVA: 2, LARA: 0,
    CHINO: 2, ENRIC: 0, DAPE: 0, MISTIC: 3, MARVIN: 2, CAÑA: 2, ALEX: 0,
    MARTÍ: 0, LOJO: 0, ITZIAR: 4, SARAY: 0, JANE: 2, JAVISUA: 2, SAMU: 0, ÁLVARO: 0,
  },
  5: { // Canadá
    BALADO: -2, ALBA: -2, ALEJA: -1, BLANQUI: -2, PATACA: 0, EVA: 0, LARA: -1,
    CHINO: -1, ENRIC: -1, DAPE: -2, MISTIC: -1, MARVIN: 1, CAÑA: -1, ALEX: 1,
    MARTÍ: 0, LOJO: -2, ITZIAR: -2, SARAY: -2, JANE: -1, JAVISUA: -2, SAMU: -2, ÁLVARO: -2,
  },
  6: { // Mónaco
    BALADO: 2, ALBA: 1, ALEJA: -2, BLANQUI: 1, PATACA: 1, EVA: 1, LARA: -1,
    CHINO: 0, ENRIC: 0, DAPE: 1, MISTIC: -3, MARVIN: 1, CAÑA: 0, ALEX: 1,
    MARTÍ: 2, LOJO: 0, ITZIAR: 0, SARAY: -2, JANE: 1, JAVISUA: 0, SAMU: -2, ÁLVARO: 0,
  },
  7: { // Barcelona
    BALADO: 0, ALBA: -1, ALEJA: 0, BLANQUI: -1, PATACA: 0, EVA: 2, LARA: 0,
    CHINO: 0, ENRIC: -1, DAPE: 0, MISTIC: 0, MARVIN: -1, CAÑA: 0, ALEX: 0,
    MARTÍ: -2, LOJO: 2, ITZIAR: 0, SARAY: 1, JANE: 1, JAVISUA: -1, SAMU: 2, ÁLVARO: -2,
  },
  8: { // Austria
    BALADO: 3, ALBA: 3, ALEJA: 3, BLANQUI: 3, PATACA: 4, EVA: 3, LARA: 3,
    CHINO: 1, ENRIC: 1, DAPE: 1, MISTIC: 1, MARVIN: 0, CAÑA: 1, ALEX: 1,
    MARTÍ: 4, LOJO: 3, ITZIAR: 1, SARAY: 2, JANE: 3, JAVISUA: 3, SAMU: 3, ÁLVARO: 2,
  },
  9: { // Gran Bretaña
    BALADO: 0, ALBA: 0, ALEJA: 0, BLANQUI: 2, PATACA: 0, EVA: -1, LARA: 0,
    CHINO: 0, ENRIC: 2, DAPE: 0, MISTIC: -3, MARVIN: 1, CAÑA: -3, ALEX: -1,
    MARTÍ: -2, LOJO: 3, ITZIAR: 0, SARAY: 2, JANE: -1, JAVISUA: 0, SAMU: 1, ÁLVARO: 2,
  },
  10: { // Bélgica
    BALADO: 3, ALBA: 5, ALEJA: 2, BLANQUI: 1, PATACA: 4, EVA: 2, LARA: -1,
    CHINO: 1, ENRIC: 2, DAPE: 3, MISTIC: 2, MARVIN: 2, CAÑA: 2, ALEX: 2,
    MARTÍ: 2, LOJO: 1, ITZIAR: 3, SARAY: 2, JANE: 3, JAVISUA: 1, SAMU: 1, ÁLVARO: 4,
  },
  11: { // Hungría
    BALADO: -1, ALBA: -2, ALEJA: -3, BLANQUI: 2, PATACA: -2, EVA: -1, LARA: 1,
    CHINO: -2, ENRIC: 1, DAPE: -1, MISTIC: -3, MARVIN: 0, CAÑA: -1, ALEX: 2,
    MARTÍ: -2, LOJO: 2, ITZIAR: 2, SARAY: 1, JANE: 1, JAVISUA: -1, SAMU: -1, ÁLVARO: -1,
  },
};

const TEAM_RESULTS = {
  1: { 'Freyja Racing Team': 11, 'Amigas Alo': 10, 'Red Force': 10, 'Pepinou': 10,
       'Azkarrak Racing': 10, 'El Cruasán': 5, 'Tapas Team': 1, 'Champis': 2,
       'No Power F1 Team': 3, 'Os Rapatundas': -1, 'Agente Libre': 4 },
  2: { 'Freyja Racing Team': 6, 'Amigas Alo': 5, 'Red Force': -4, 'Pepinou': -4,
       'Azkarrak Racing': -1, 'El Cruasán': -3, 'Tapas Team': 4, 'Champis': -2,
       'No Power F1 Team': -2, 'Os Rapatundas': -3, 'Agente Libre': -7 },
  3: { 'Freyja Racing Team': 10, 'Amigas Alo': 6, 'Red Force': 9, 'Pepinou': 9,
       'Azkarrak Racing': 5, 'El Cruasán': 10, 'Tapas Team': 5, 'Champis': 8,
       'No Power F1 Team': 3, 'Os Rapatundas': 7, 'Agente Libre': 1 },
  4: { 'Freyja Racing Team': 4, 'Amigas Alo': 5, 'Red Force': 0, 'Pepinou': 2,
       'Azkarrak Racing': 0, 'El Cruasán': 2, 'Tapas Team': 5, 'Champis': 6,
       'No Power F1 Team': 3, 'Os Rapatundas': 2, 'Agente Libre': 0 },
  5: { 'Freyja Racing Team': -4, 'Amigas Alo': -2, 'Red Force': -2, 'Pepinou': -3,
       'Azkarrak Racing': -3, 'El Cruasán': 2, 'Tapas Team': -2, 'Champis': -3,
       'No Power F1 Team': -3, 'Os Rapatundas': -3, 'Agente Libre': -2 },
  6: { 'Freyja Racing Team': 3, 'Amigas Alo': 2, 'Red Force': -1, 'Pepinou': 1,
       'Azkarrak Racing': -2, 'El Cruasán': 2, 'Tapas Team': 1, 'Champis': 0,
       'No Power F1 Team': -5, 'Os Rapatundas': -1, 'Agente Libre': 2 },
  7: { 'Freyja Racing Team': -1, 'Amigas Alo': 1, 'Red Force': -1, 'Pepinou': 0,
       'Azkarrak Racing': 2, 'El Cruasán': -1, 'Tapas Team': -1, 'Champis': 0,
       'No Power F1 Team': 2, 'Os Rapatundas': 2, 'Agente Libre': -4 },
  8: { 'Freyja Racing Team': 6, 'Amigas Alo': 6, 'Red Force': 4, 'Pepinou': 2,
       'Azkarrak Racing': 6, 'El Cruasán': 1, 'Tapas Team': 7, 'Champis': 2,
       'No Power F1 Team': 4, 'Os Rapatundas': 5, 'Agente Libre': 6 },
  9: { 'Freyja Racing Team': 2, 'Amigas Alo': -1, 'Red Force': 2, 'Pepinou': 0,
       'Azkarrak Racing': 3, 'El Cruasán': 0, 'Tapas Team': 0, 'Champis': -3,
       'No Power F1 Team': -2, 'Os Rapatundas': 1, 'Agente Libre': 0 },
  10: { 'Freyja Racing Team': 4, 'Amigas Alo': 7, 'Red Force': 1, 'Pepinou': 4,
        'Azkarrak Racing': 3, 'El Cruasán': 4, 'Tapas Team': 5, 'Champis': 5,
        'No Power F1 Team': 3, 'Os Rapatundas': 5, 'Agente Libre': 6 },
  11: { 'Freyja Racing Team': 1, 'Amigas Alo': -3, 'Red Force': 2, 'Pepinou': -3,
        'Azkarrak Racing': -1, 'El Cruasán': 2, 'Tapas Team': -3, 'Champis': 1,
        'No Power F1 Team': -4, 'Os Rapatundas': 2, 'Agente Libre': -3 },
};

// Roster
const ROSTER = [
  { name: 'BALADO',  team: 'Freyja Racing Team' },
  { name: 'ALBA',    team: 'Amigas Alo' },
  { name: 'ALEJA',   team: 'Azkarrak Racing' },
  { name: 'BLANQUI', team: 'Freyja Racing Team' },
  { name: 'PATACA',  team: 'Tapas Team' },
  { name: 'EVA',     team: 'Amigas Alo' },
  { name: 'LARA',    team: 'Red Force' },
  { name: 'CHINO',   team: 'Pepinou' },
  { name: 'ENRIC',   team: 'Red Force' },
  { name: 'DAPE',    team: 'Pepinou' },
  { name: 'MISTIC',  team: 'No Power F1 Team' },
  { name: 'MARVIN',  team: 'El Cruasán' },
  { name: 'CAÑA',    team: 'Champis' },
  { name: 'ALEX',    team: 'El Cruasán' },
  { name: 'MARTÍ',   team: 'Agente Libre' },
  { name: 'LOJO',    team: 'Azkarrak Racing' },
  { name: 'ITZIAR',  team: 'Champis' },
  { name: 'SARAY',   team: 'Os Rapatundas' },
  { name: 'JANE',    team: 'Os Rapatundas' },
  { name: 'JAVISUA', team: 'Tapas Team' },
  { name: 'SAMU',    team: 'No Power F1 Team' },
  { name: 'ÁLVARO',  team: 'Agente Libre' },
];

const TEAM_META = [
  { name: 'Freyja Racing Team', emoji: '🦁', bestYear: '7º',  bestNum: 7 },
  { name: 'Amigas Alo',         emoji: '👯‍♀️', bestYear: '11º', bestNum: 11 },
  { name: 'Red Force',          emoji: '💢', bestYear: '1º',  bestNum: 1 },
  { name: 'Pepinou',            emoji: '🥒', bestYear: '5º',  bestNum: 5 },
  { name: 'Azkarrak Racing',    emoji: '🚳', bestYear: '4º',  bestNum: 4 },
  { name: 'El Cruasán',         emoji: '🥐', bestYear: '3º',  bestNum: 3 },
  { name: 'Tapas Team',         emoji: '🍟', bestYear: '5º',  bestNum: 5 },
  { name: 'Champis',            emoji: '🍄', bestYear: 'Rookie', bestNum: null },
  { name: 'No Power F1 Team',   emoji: '💨', bestYear: 'Rookie', bestNum: null },
  { name: 'Os Rapatundas',      emoji: '🦖', bestYear: 'Rookie', bestNum: null },
  { name: 'Agente Libre',       emoji: '🎯', bestYear: 'Rookie', bestNum: null },
];

const TEAM_EMOJI = Object.fromEntries(TEAM_META.map(t => [t.name, t.emoji]));
const TEAM_BEST = Object.fromEntries(TEAM_META.map(t => [t.name, { label: t.bestYear, num: t.bestNum }]));

// ───────────────────────────────────────────────────────────────────
// Comparador de clasificación con desempate por "estado de forma":
//   1) puntos totales (descendente)
//   2) si empatan: suma de las últimas 5 carreras
//   3) si siguen empatando: últimas 6, 7, 8...
//   4) si tras agotar todo el histórico siguen empatados: orden de inscripción.
// `getResults` permite calcular la clasificación previa (recorta la última).
// ───────────────────────────────────────────────────────────────────
const FORM_WINDOW = 5;
function makeFormComparator(getResults) {
  return (a, b) => {
    const ra = getResults(a);
    const rb = getResults(b);
    const ta = ra.reduce((x, y) => x + y, 0);
    const tb = rb.reduce((x, y) => x + y, 0);
    if (tb !== ta) return tb - ta;
    const maxLen = Math.max(ra.length, rb.length);
    for (let w = FORM_WINDOW; w <= maxLen; w++) {
      const sa = ra.slice(-w).reduce((x, y) => x + y, 0);
      const sb = rb.slice(-w).reduce((x, y) => x + y, 0);
      if (sb !== sa) return sb - sa;
    }
    return a._i - b._i;
  };
}

// Building
function buildPlayers() {
  const enriched = ROSTER.map((r, i) => {
    const results = Array.from({ length: RACE_NUMBER }, (_, i) => RACE_RESULTS[i + 1][r.name] ?? 0);
    const total = results.reduce((a, b) => a + b, 0);
    const last = results[RACE_NUMBER - 1];
    const prevTotal = total - last;
    return { ...r, results, total, last, prevTotal, _i: i, emoji: TEAM_EMOJI[r.team] || '🏁' };
  });
  // rank prev (clasificación tras la penúltima carrera)
  const prev = [...enriched].sort(makeFormComparator(p => p.results.slice(0, -1)));
  const prevRank = new Map(prev.map((p, i) => [p.name, i + 1]));
  // rank actual
  const cur = [...enriched].sort(makeFormComparator(p => p.results));
  return cur.map((p, i) => ({
    ...p, pos: i + 1, prevPos: prevRank.get(p.name),
    delta: prevRank.get(p.name) - (i + 1),
  }));
}

function buildTeams() {
  const enriched = TEAM_META.map((t, i) => {
    const results = Array.from({ length: RACE_NUMBER }, (_, i) => TEAM_RESULTS[i + 1][t.name] ?? 0);
    const total = results.reduce((a, b) => a + b, 0);
    const last = results[RACE_NUMBER - 1];
    const prevTotal = total - last;
    return { ...t, results, total, last, prevTotal, _i: i };
  });
  const prev = [...enriched].sort(makeFormComparator(p => p.results.slice(0, -1)));
  const prevRank = new Map(prev.map((t, i) => [t.name, i + 1]));
  const cur = [...enriched].sort(makeFormComparator(p => p.results));
  return cur.map((t, i) => ({
    ...t, pos: i + 1, prevPos: prevRank.get(t.name),
    delta: prevRank.get(t.name) - (i + 1),
  }));
}

const PLAYERS = buildPlayers();
const TEAMS = buildTeams();

// Resultados reales oficiales de F1 (para la página de carrera)
const OFFICIAL_RESULTS = {
  1: { top5: ['NORRIS','VERSTAPPEN','RUSSELL','PIASTRI','LECLERC'],
       driverOfTheDay: { name: 'NORRIS', pts: 10 },
       fastestLap: { name: 'NORRIS', time: '1:19.813' } },
  2: { top5: ['PIASTRI','NORRIS','RUSSELL','LECLERC','HAMILTON'],
       driverOfTheDay: { name: 'PIASTRI', pts: 8 },
       fastestLap: { name: 'PIASTRI', time: '1:35.454' } },
  3: { top5: ['ANTONELLI','PIASTRI','LECLERC','RUSSELL','NORRIS'],
       driverOfTheDay: { name: 'VERSTAPPEN', pts: 8 },
       fastestLap: { name: 'ANTONELLI', time: '1:32.432' } },
  4: { top5: ['ANTONELLI','NORRIS','PIASTRI','RUSSELL','VERSTAPPEN'],
       driverOfTheDay: { name: 'SAINZ', pts: 9 },
       fastestLap: { name: 'NORRIS', time: '1:31.869' } },
  5: { top5: ['ANTONELLI','HAMILTON','VERSTAPPEN','LECLERC','HADJAR'],
       driverOfTheDay: { name: 'COLAPINTO', pts: 6 },
       fastestLap: { name: 'ANTONELLI', time: '1:14.210' } },
  6: { top5: ['ANTONELLI','HAMILTON','HADJAR','PIASTRI','LAWSON'],
       driverOfTheDay: { name: 'ALONSO', pts: 10 },
       fastestLap: { name: 'ANTONELLI', time: '1:13.481' } },
  7: { top5: ['HAMILTON','RUSSELL','NORRIS','VERSTAPPEN','PIASTRI'],
       driverOfTheDay: { name: 'PIASTRI', pts: 5 },
       fastestLap: { name: 'HAMILTON', time: '1:20.122' } },
  8: { top5: ['RUSSELL','VERSTAPPEN','ANTONELLI','PIASTRI','HAMILTON'],
       driverOfTheDay: { name: 'STROLL', pts: 19 },
       fastestLap: { name: 'ANTONELLI', time: '1:10.374' } },
  9: { top5: ['LECLERC','RUSSELL','HAMILTON','NORRIS','HADJAR'],
       driverOfTheDay: { name: 'LAWSON', pts: 6 },
       fastestLap: { name: 'ANTONELLI', time: '1:31.777' } },
  10: { top5: ['ANTONELLI','LECLERC','VERSTAPPEN','HAMILTON','PIASTRI'],
        driverOfTheDay: { name: 'BOTTAS', pts: 18 },
        fastestLap: { name: 'NORRIS', time: '1:48.890' } },
  11: { top5: ['NORRIS','VERSTAPPEN','ANTONELLI','LECLERC','HAMILTON'],
        driverOfTheDay: { name: 'PIASTRI', pts: 20 },
        fastestLap: { name: 'LECLERC', time: '1:22.000' } },
};

// Palmarés
const PALMARES_DRIVERS = [
  { year: 2021, winner: 'Caña',      team: null },
  { year: 2022, winner: 'Mari Adry', team: 'Okavangδ' },
  { year: 2023, winner: 'Jane',      team: 'El Pulplan' },
  { year: 2024, winner: 'Chino',     team: 'Biscoito de amorodos' },
  { year: 2025, winner: 'Lojo',      team: 'Azkarrak Racing' },
];

const PALMARES_TEAMS = [
  { year: 2022, name: 'Okavangδ',            emoji: '🗿', roster: 'Mari Adry & Chino',  note: 'El equipo ya no existe' },
  { year: 2023, name: 'El Pulplan',          emoji: '🐙', roster: 'Jane · QK',           note: 'Ahora compiten en otros equipos' },
  { year: 2024, name: 'Biscoito de amorodos',emoji: '🍰', roster: 'Mari Adry & Chino',  note: 'El equipo ya no existe' },
  { year: 2025, name: 'Red Force',           emoji: '🈴', roster: 'Enric · Lara',       note: 'Activo · lo defienden este año' },
];

const PALMARES_KART = [
  { year: 2023, winner: 'Jane',  fastest: 'Jane' },
  { year: 2024, winner: 'Caña',  fastest: 'Caña' },
  { year: 2025, winner: 'Caña',  fastest: 'Chino' },
];

// Todos los equipos históricos (salón de la fama)
const HALL_OF_FAME_TEAMS = [
  { emoji: '🗿', name: 'Okavangδ' },
  { emoji: '🧌', name: 'Bullshiton Alowins33' },
  { emoji: '🦁', name: 'Freyja Racing Team' },
  { emoji: '❓', name: '—' },
  { emoji: '🐺', name: 'Speedcan team F1' },
  { emoji: '🎀', name: 'Brum brum F1 pro team' },
  { emoji: '🐙', name: 'El Pulplan' },
  { emoji: '🍟', name: 'Tapas team' },
  { emoji: '🥨', name: 'Hochleistungssportwettlegenden' },
  { emoji: '🧛🏿‍♂️', name: 'Vanpiro Esiten' },
  { emoji: '🧞‍♂️', name: 'RACERS F1 TEAM' },
  { emoji: '🥒', name: 'Pepino' },
  { emoji: '🧉', name: 'Jaas' },
  { emoji: '🚀', name: 'Jaas' },
  { emoji: '🌴', name: 'Caribe Lichi Team' },
  { emoji: '🧁', name: 'Bizcocho' },
  { emoji: '🤟', name: 'las charolastras' },
  { emoji: '🧊', name: 'Icemans' },
  { emoji: '🍰', name: 'Biscoito de amorodos' },
  { emoji: '🈴', name: 'Red Force' },
  { emoji: '🌈', name: 'Joselu y Rabar' },
  { emoji: '🚳', name: 'Azkarrak Racing' },
  { emoji: '🥐', name: 'El Cruasán' },
  { emoji: '💬', name: 'Terrorbabyla33' },
];

// Histórico ganador de la porra en el próximo circuito (vacío si no aplica)
const NEXT_HISTORY = []; // Bélgica: sin histórico cargado por ahora

// Colores de equipo (compartidos por todos los temas)
const TEAM_COLORS = {
  'Freyja Racing Team': '#E1206D',
  'Amigas Alo':         '#8B2FC9',
  'Azkarrak Racing':    '#00AFAA',
  'Tapas Team':         '#FF8000',
  'Red Force':          '#D40000',
  'Pepinou':            '#27AE60',
  'No Power F1 Team':   '#1E88E5',
  'El Cruasán':         '#D4A041',
  'Champis':            '#A0522D',
  'Os Rapatundas':      '#00897B',
  'Agente Libre':       '#78849A',
};

// Paleta Paddock (tema oscuro, por defecto). `ov(a)` = overlay sobre superficie,
// varía según tema (blanco en oscuro/pride, oscuro en claro).
const PALETTE = {
  name: 'Paddock',
  bg: '#0F1923', bg2: '#1A2634',
  surface: '#1F2D3D', surface2: '#2A3A4D',
  text: '#F5F7FA', muted: '#8B98A7', mutedDim: '#5B6878',
  accent: '#E10600', accent2: '#FFC700',
  success: '#27AE60', danger: '#E63946',
  ov: (a) => `rgba(255,255,255,${a})`,
  scrim: '15,25,35',
  teams: TEAM_COLORS,
};

// ───────────────────────────────────────────────────────────────────
// Calendario completo 2026 (22 carreras). status: done | next | future
// ───────────────────────────────────────────────────────────────────
const CALENDAR = [
  { n: 1,  name: 'Australia',    emoji: '🇦🇺', short: 'AUS', date: '16 MAR 2026', status: 'done' },
  { n: 2,  name: 'China',        emoji: '🇨🇳', short: 'CHN', date: '23 MAR 2026', status: 'done' },
  { n: 3,  name: 'Japón',        emoji: '🇯🇵', short: 'JPN', date: '29 MAR 2026', status: 'done' },
  { n: 4,  name: 'Miami',        emoji: '🇺🇸', short: 'MIA', date: '3 MAY 2026',  status: 'done' },
  { n: 5,  name: 'Canadá',       emoji: '🇨🇦', short: 'CAN', date: '24 MAY 2026', status: 'done' },
  { n: 6,  name: 'Mónaco',       emoji: '🇲🇨', short: 'MON', date: '7 JUN 2026',  status: 'done' },
  { n: 7,  name: 'Barcelona',    emoji: '💛', short: 'BCN', date: '14 JUN 2026', status: 'done' },
  { n: 8,  name: 'Austria',      emoji: '🇦🇹', short: 'AUT', date: '5 JUL 2026',  status: 'done' },
  { n: 9,  name: 'Gran Bretaña', emoji: '🇬🇧', short: 'GBR', date: '12 JUL 2026', status: 'done' },
  { n: 10, name: 'Bélgica',      emoji: '🇧🇪', short: 'BEL', date: '19 JUL 2026', status: 'done' },
  { n: 11, name: 'Hungría',      emoji: '🇭🇺', short: 'HUN', date: '2 AGO 2026',  status: 'done' },
  { n: 12, name: 'Países Bajos', emoji: '🇳🇱', short: 'NED', date: '31 AGO 2026', status: 'next' },
  { n: 13, name: 'Italia',       emoji: '🇮🇹', short: 'ITA', date: '6 SEP 2026',  status: 'future' },
  { n: 14, name: 'Azerbaiyán',   emoji: '🇦🇿', short: 'AZE', date: '13 SEP 2026', status: 'future' },
  { n: 15, name: 'Singapur',     emoji: '🇸🇬', short: 'SIN', date: '27 SEP 2026', status: 'future' },
  { n: 16, name: 'Madrid',       emoji: '🇪🇸', short: 'MAD', date: '11 OCT 2026', status: 'future' },
  { n: 17, name: 'Austin',       emoji: '🇺🇸', short: 'USA', date: '25 OCT 2026', status: 'future' },
  { n: 18, name: 'México',       emoji: '🇲🇽', short: 'MEX', date: '1 NOV 2026',  status: 'future' },
  { n: 19, name: 'Brasil',       emoji: '🇧🇷', short: 'BRA', date: '15 NOV 2026', status: 'future' },
  { n: 20, name: 'Las Vegas',    emoji: '🇺🇸', short: 'LVG', date: '21 NOV 2026', status: 'future' },
  { n: 21, name: 'Qatar',        emoji: '🇶🇦', short: 'QAT', date: '29 NOV 2026', status: 'future' },
  { n: 22, name: 'Abu Dabi',     emoji: '🇦🇪', short: 'ABU', date: '6 DIC 2026',  status: 'future' },
];

// ───────────────────────────────────────────────────────────────────
// Tablas finales por temporada (clasificación final pilotos / equipos)
// ───────────────────────────────────────────────────────────────────
const HISTORY_DRIVERS = {
  2025: [
    ['LOJO',78],['ENRIC',75],['LARA',74],['CAÑA',73],['CRIS',72],['PATACA',66],['PHIL',66],
    ['CHINO',64],['BLANQUI',63],['ALEX',62],['ITZIAR',60],['DAPE',55],['ISMA',55],['JAVISUA',52],
    ['JANE',50],['MARVIN',48],['BALADO',48],['ALBA',47],['EVA',47],['SAMU',45],['YAGO',45],
    ['ALEJA',44],['ALLAN',42],['MISTI',21],['GABRI',10],['DIEGO',-2],
  ],
  2024: [
    ['CHINO',71],['ENRIC',57],['CAÑA',55],['ALEX',55],['ITZIAR',55],['DAPE',55],['LARA',54],
    ['MARVIN',51],['LOJO',51],['MARI ADRY',48],['MISTI',48],['JAVISUA',47],['PATACA',44],
    ['BALADO',42],['ALEJA',36],['JANE',33],['SAMU',33],['XIANA',27],['ISMA',24],['BLANQUI',24],
    ['ALLAN',21],['DIEGUITO',21],['MARIO',19],['GABRI D.',18],
  ],
  2023: [
    ['JANE',66],['CAÑA',58],['CHINO',56],['MARVIN',55],['DAPE',53],['MARI ADRY',49],['MARIO',49],
    ['JAVISUA',48],['LOJO',47],['XIANA',38],['GABRI D.',38],['ALLAN',35],['PATACA',34],
    ['MISTI',27],['DIEGUITO',26],['ALEX',25],['ABRIL',21],['LARA',4],['ENRIC',4],
  ],
  2022: [
    ['MARI ADRY',33],['XIANA',29],['CHINO',23],['JAVI SUA',19],['DAPE',17],['CAÑA',14],
    ['MARIO',12],['JANE',8],['ALLAN',7],['DIEGO',-3],
  ],
  2021: [
    ['CAÑA',57],['CHINO',54],['DAPE',36],['XIANA',28],['MARI ADRY',21],['JANE',14],['ITZI',-1],
  ],
};

const HISTORY_TEAMS = {
  2025: [
    ['Red Force','🈴',149],['Hochleistungssportwettlegenden','🥨',138],['El Pulplan','🐙',123],
    ['Azkarrak Racing','🚳',122],['Pepino','🥒',119],['Tapas Team','🍟',118],
    ['Freyja RC','🦁',111],['El Cruasán','🥐',110],['Caribe Lichi Team','🌴',105],
    ['Icemans','🧊',100],['Joselu y Rabar','🌈',94],['Jaas','🚀',40],['Terrorbabyla33','💬',31],
  ],
  2024: [
    ['Biscoito de amorodos','🍰',119],['Red Force','🈴',111],['El Cruasán','🥐',106],
    ['RACERS F1 TEAM','🧞‍♂️',103],['Tapas Team','🍟',91],['El Pulplan','🐙',88],
    ['Azkarrak Racing','🚳',87],['Speedcan team F1','🐺',73],['Freyja Racing Team','🦁',66],
    ['Bullshiton Alowins33','🧌',57],['Brum brum F1 pro team','🎀',46],['Jaas','🚀',42],
  ],
  2023: [
    ['El Pulplan','🐙',124],['Agente Libre','🎯',112],['Bizcocho','🧁',105],
    ['Speedcan team F1','🐺',85],['Tapas Team','🍟',82],['RACERS F1 TEAM','🧞‍♂️',80],
    ['Jaas','🚀',61],['Las charolastras','🤟',59],['Red Force','🈴',8],
  ],
  2022: [
    ['Okavangδ','🗿',28],['—','❓',27],['El Pulplan','🐙',25],
    ['Vanpiro Esiten','🧛🏿‍♂️',9],['Jaas','🧉',7],
  ],
};

// ───────────────────────────────────────────────────────────────────
// Mejores tiempos GP de la Porra (Go Kart Porriño) - seco / mojado
// ───────────────────────────────────────────────────────────────────
// gap es null para el primer puesto
const BEST_LAPS_DRY = [
  { pos: 1,  name: 'Caña',    gap: null,    time: '52.262' },
  { pos: 2,  name: 'Chino',   gap: '+0.522', time: '52.784' },
  { pos: 3,  name: 'Jane',    gap: '+0.083', time: '52.867' },
  { pos: 4,  name: 'Enric',   gap: '+0.320', time: '53.187' },
  { pos: 5,  name: 'Alex',    gap: '+0.610', time: '53.797' },
  { pos: 6,  name: 'Dape',    gap: '+0.144', time: '53.941' },
  { pos: 7,  name: 'Lojo',    gap: '+0.065', time: '54.006' },
  { pos: 8,  name: 'Balado',  gap: '+1.098', time: '55.104' },
  { pos: 9,  name: 'Misti',   gap: '+0.956', time: '56.060' },
  { pos: 10, name: 'Javisua', gap: '+0.791', time: '56.851' },
  { pos: 11, name: 'Lara',    gap: '+1.719', time: '58.570' },
  { pos: 12, name: 'Marvin',  gap: '+5.434', time: '1:04.004' },
  { pos: 13, name: 'Blanqui', gap: '+6.252', time: '1:10.256' },
  { pos: 14, name: 'Itziar',  gap: '+0.474', time: '1:10.730' },
  { pos: 15, name: 'Xiana',   gap: '+26.481', time: '1:37.211' },
];

const BEST_LAPS_WET = [
  { pos: 1,  name: 'Chino',   gap: null,     time: '1:12.126' },
  { pos: 2,  name: 'Caña',    gap: '+0.147', time: '1:11.979' },
  { pos: 3,  name: 'Misti',   gap: '+0.101', time: '1:12.227' },
  { pos: 4,  name: 'Jane',    gap: '+0.749', time: '1:12.976' },
  { pos: 5,  name: 'Enric',   gap: '+0.973', time: '1:13.949' },
  { pos: 6,  name: 'Isma',    gap: '+0.416', time: '1:14.365' },
  { pos: 7,  name: 'Lojo',    gap: '+0.087', time: '1:14.452' },
  { pos: 8,  name: 'Samu',    gap: '+0.780', time: '1:15.232' },
  { pos: 9,  name: 'Dape',    gap: '+0.733', time: '1:15.965' },
  { pos: 10, name: 'Balado',  gap: '+0.390', time: '1:16.355' },
  { pos: 11, name: 'Saray',   gap: '+8.742', time: '1:25.097' },
  { pos: 12, name: 'Lara',    gap: '+4.829', time: '1:29.926' },
];

// ───────────────────────────────────────────────────────────────────
// Datos del circuito de la próxima carrera (Países Bajos · Zandvoort)
// ───────────────────────────────────────────────────────────────────
const NEXT_CIRCUIT = {
  firstGp: 1952, // primer GP de Países Bajos puntuable para el Mundial
  editions: 35,
  mostWinsDriver: { name: 'M. Verstappen', wins: 3 },
  polePositions: [
    { year: 2022, driver: 'M. Verstappen' },
    { year: 2023, driver: 'M. Verstappen' },
    { year: 2024, driver: 'L. Norris' },
    { year: 2025, driver: 'O. Piastri' },
  ],
  funFacts: [
    'Zandvoort está literalmente entre dunas, junto al Mar del Norte: la arena en pista es un clásico del fin de semana.',
    'Tiene dos curvas peraltadas: la 3 (Hugenholtz) y la 14 (Arie Luyendyk), esta última con un peralte de 18 grados.',
    'Ese peralte final permite entrar en la recta a fondo y hace que el DRS valga oro en la primera frenada.',
    'Volvió al calendario en 2021 tras 36 años de ausencia, empujado por la fiebre naranja de Verstappen.',
    'Es de los trazados más estrechos y con menos escapatoria: adelantar aquí es casi tan difícil como en Mónaco.',
  ],
  // Sesiones del fin de semana (horario peninsular español)
  sessions: [
    { day: 'Viernes 29 de agosto', items: [
      { label: 'Entrenamientos Libres 1 (FP1)', time: '12:30' },
      { label: 'Previa clasificación Sprint',   time: '16:00' },
      { label: 'Clasificación Sprint',          time: '16:30' },
    ]},
    { day: 'Sábado 30 de agosto', items: [
      { label: 'Previa Sprint DAZN', time: '11:00' },
      { label: 'Sprint',             time: '12:00' },
      { label: 'Clasificación',      time: '16:00' },
    ]},
    { day: 'Domingo 31 de agosto', items: [
      { label: 'Carrera',        time: '15:00', highlight: true },
    ]},
  ],
  sessionsNote: '* Horario peninsular español',
  deadline: {
    label: 'Hora límite envío de la porra',
    when: 'Domingo 31 de agosto · 14:59',
  },
  // Para añadir al calendario del móvil (formato ISO con offset Madrid CEST = +02:00)
  event: {
    title: 'GP Países Bajos · La Porra',
    location: 'Circuit Zandvoort, Países Bajos',
    description: 'Carrera del GP de Países Bajos. Hora límite envío de la porra: 14:59h.',
    start: '2026-08-31T15:00:00+02:00',
    end:   '2026-08-31T17:00:00+02:00',
    filename: 'gp-paises-bajos-2026.ics',
  },
};

// ───────────────────────────────────────────────────────────────────
// Tablas históricas acumuladas (suma de todos los años por piloto/equipo)
// Normalizamos nombres (sin tildes, sin espacios, sin puntos) para unificar
// grafías distintas como 'JAVI SUA' / 'JAVISUA' o 'MARI ADRY' / 'MARIADRY'.
// ───────────────────────────────────────────────────────────────────
function _normLoose(s) {
  return (s || '').toString()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[\s\.]/g, '');
}
function _buildTotalDrivers() {
  const acc = {};
  // recorremos por años descendentes para que la "grafía oficial" sea la más reciente
  const years = Object.keys(HISTORY_DRIVERS).map(Number).sort((a, b) => b - a);
  for (const y of years) {
    for (const [name, pts] of HISTORY_DRIVERS[y]) {
      const k = _normLoose(name);
      if (!acc[k]) acc[k] = { name, pts: 0, years: 0 };
      acc[k].pts += pts;
      acc[k].years += 1;
    }
  }
  return Object.values(acc)
    .sort((a, b) => b.pts - a.pts)
    .map(r => [r.name, r.pts]);
}
function _buildTotalTeams() {
  const acc = {};
  const years = Object.keys(HISTORY_TEAMS).map(Number).sort((a, b) => b - a);
  for (const y of years) {
    for (const [name, emoji, pts] of HISTORY_TEAMS[y]) {
      const k = _normLoose(name);
      if (!acc[k]) acc[k] = { name, emoji, pts: 0, years: 0 };
      acc[k].pts += pts;
      acc[k].years += 1;
    }
  }
  return Object.values(acc)
    .sort((a, b) => b.pts - a.pts)
    .map(r => [r.name, r.emoji, r.pts]);
}
const TOTAL_DRIVERS = _buildTotalDrivers();
const TOTAL_TEAMS = _buildTotalTeams();

// ───────────────────────────────────────────────────────────────────
// Helpers para mostrar campeonatos en fichas
// Comparan ignorando mayúsculas, tildes y espacios extra.
// ───────────────────────────────────────────────────────────────────
function _norm(s) {
  return (s || '').toString()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toUpperCase().replace(/\s+/g, ' ').trim();
}
function getDriverTitles(name) {
  const k = _norm(name);
  return PALMARES_DRIVERS.filter(p => _norm(p.winner) === k).map(p => p.year);
}
function getTeamTitles(name) {
  const k = _norm(name);
  return PALMARES_TEAMS.filter(t => _norm(t.name) === k).map(t => t.year);
}
function getKartWins(name) {
  const k = _norm(name);
  return PALMARES_KART.filter(g => _norm(g.winner) === k).map(g => g.year);
}
function getKartFastest(name) {
  const k = _norm(name);
  return PALMARES_KART.filter(g => _norm(g.fastest) === k).map(g => g.year);
}

// URL del documento PDF con las normas de la porra
const RULES_URL = 'https://drive.google.com/file/d/1sEZVlJRlSHoYKc_j8xRqJWlao-4m_KFN/view?usp=sharing';

// ───────────────────────────────────────────────────────────────────
// Planes de La Porra Pro (paywall paródico)
// ───────────────────────────────────────────────────────────────────
const PRO_PLANS = [
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Para ponértelo un poco más fácil',
    monthly: '1€ bizum al chino',
    yearly: '9€ bizum al chino',
    yearlyNote: 'al año',
    discount: '-25%',
    accent: '#FFC700',
    cta: 'Obtener Plan Pro',
    perks: [
      'El chino se pone de tu parte si quieres cambiar alguna norma o lo que sea',
      'Si cometes algún error al enviar la porra, digamos que se te hace la vista gorda',
    ],
  },
  {
    id: 'max',
    name: 'Max',
    tagline: 'Para los más necesitados',
    monthly: '10€ bizum al chino',
    yearly: '45€ bizum al chino',
    yearlyNote: 'al año',
    discount: '-62%',
    accent: '#E10600',
    cta: 'Obtener Plan Max',
    featured: true,
    perks: [
      'Alterar los resultados de carreras anteriores cuando nadie se dé cuenta para sumar más puntos',
      'Errores al sumar puntos que casualmente te benefician, salvo que los detecte alguien',
      'Trucar el desempate a tu favor',
    ],
  },
];

// Comunicados que aparecen al pulsar "Obtener Plan X"
const PRO_COMUNICADOS = {
  pro: {
    title: 'Comunicado oficial',
    emoji: '🚨',
    kind: 'accusation',
    body: [
      'Vaya, vaya. Así que querías PAGAR para inclinar la balanza a tu favor.',
      'Intentar comprar ventaja en una competición justa es, sencillamente, RASTRERO. Va en contra de todo lo que representa La Porra: el honor, la cuñadez y el sufrimiento compartido.',
      'Que sepas que tu intento ha quedado registrado. Esto será comunicado al resto del grupo en el chat, con capturas, para que todos sepan la clase de persona que tenemos entre nosotros.',
      'La Porra no se compra. La Porra se sufre.',
    ],
    signature: '— La Comisión de Integridad de La Porra',
  },
  max: {
    title: 'Oda a la rata',
    emoji: '🐀',
    kind: 'poem',
    body: [
      'Mírate, campeón de la miseria,',
      'queriendo el oro sin sudar la feria.',
      'La rata más grande de todo el corral,',
      'con bigote de Mao y moral de chacal.',
      '',
      'Tu pequeño librito rojo y tu plan quinquenal',
      'no te darán los puntos, te saldrá fatal.',
      'Que el pueblo te juzgue, camarada tramposo:',
      'no eres dictador, eres solo un quejoso.',
      '',
      'Guárdate el bizum y aprende a perder,',
      'que la dignidad no se puede vender.',
    ],
    signature: '— Con cariño, La Porra',
  },
};

// ───────────────────────────────────────────────────────────────────
// Desafíos / logros de La Porra (estilo trofeos de videojuego)
// done: true = conseguido (para el prototipo marcamos algunos)
// ───────────────────────────────────────────────────────────────────
const CHALLENGES = [
  { id: 'top3',     emoji: '🍾', name: 'De Champán',          desc: 'Termina entre los 3 primeros en una carrera de la porra.', done: true },
  { id: 'top5',     emoji: '🎯', name: 'Zona Noble',          desc: 'Termina entre los 5 primeros en una carrera de la porra.', done: true },
  { id: 'pleno',    emoji: '💯', name: 'Pleno al Quince',     desc: 'Haz un pleno: clava todos los puntos posibles en una carrera.', done: false },
  { id: 'early',    emoji: '🐓', name: 'El Madrugador',       desc: 'Manda la porra el primero y sé quien más puntos hace en esa carrera.', done: false },
  { id: 'duo',      emoji: '🤝', name: 'Pareja de Hecho',     desc: 'Tu compañero y tú sois los dos pilotos que más suman en una carrera.', done: false },
  { id: 'pedos',    emoji: '💨', name: 'Trofeo Pedos',        desc: 'Queda segundo en una clasificación general de la porra.', done: false },
  { id: 'aleja',    emoji: '📖', name: 'Premio Aleja',        desc: 'Detecta un error en las normas de la porra.', done: true },
  { id: 'inspector',emoji: '🔍', name: 'Ojo de Lince',        desc: 'Detecta un error en los puntos oficiales de la porra.', done: false },
  { id: 'lojo',     emoji: '🃏', name: 'Premio Lojo',         desc: 'Haz trampas en el GP de la porra y sal de rositas.', done: false },
  { id: 'piastri',  emoji: '🥈', name: 'Premio Óscar Piastri',desc: 'Lidera el mundial de la porra... pero no lo ganes.', done: false },
];

Object.assign(window, {
  PRO_PLANS, PRO_COMUNICADOS, CHALLENGES,
  PLAYERS, TEAMS, PALETTE, RACES, RACE_NUMBER, NEXT_RACE,
  RACE_RESULTS, TEAM_RESULTS, OFFICIAL_RESULTS,
  TEAM_BEST, PALMARES_DRIVERS, PALMARES_TEAMS, PALMARES_KART, HALL_OF_FAME_TEAMS,
  NEXT_HISTORY, NEXT_CIRCUIT,
  CALENDAR, HISTORY_DRIVERS, HISTORY_TEAMS, BEST_LAPS_DRY, BEST_LAPS_WET,
  TOTAL_DRIVERS, TOTAL_TEAMS, RULES_URL,
  getDriverTitles, getTeamTitles, getKartWins, getKartFastest,
});
