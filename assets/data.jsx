// data.jsx — La Porra · datos reales hasta Carrera 3 (Japón · 29 mar 2026)

const RACE_NUMBER = 3;

// Calendario — solo las carreras disputadas + próxima
const RACES = [
  { n: 1, name: 'Australia', emoji: '🇦🇺', short: 'AUS', date: '16 MAR 2026', circuit: 'Albert Park' },
  { n: 2, name: 'China',     emoji: '🇨🇳', short: 'CHN', date: '23 MAR 2026', circuit: 'Shanghai Intl.' },
  { n: 3, name: 'Japón',     emoji: '🇯🇵', short: 'JPN', date: '29 MAR 2026', circuit: 'Suzuka' },
];

// Próxima: Miami (C4)
const NEXT_RACE = {
  n: 4, name: 'Miami', emoji: '🇺🇸', short: 'MIA',
  date: '3 MAYO 2026',
  circuit: 'Miami International Autodrome',
  length: '5.412 km',
  laps: 57,
  corners: 19,
  drsZones: 3,
  lapRecord: "1:29.708 — M. Verstappen (2023)",
  firstGp: 2022,
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

// Building
function buildPlayers() {
  const enriched = ROSTER.map((r, i) => {
    const results = [1, 2, 3].map(n => RACE_RESULTS[n][r.name] ?? 0);
    const total = results.reduce((a, b) => a + b, 0);
    const last = results[RACE_NUMBER - 1];
    const prevTotal = total - last;
    return { ...r, results, total, last, prevTotal, _i: i, emoji: TEAM_EMOJI[r.team] || '🏁' };
  });
  // rank prev
  const prev = [...enriched].sort((a, b) => b.prevTotal - a.prevTotal || a._i - b._i);
  const prevRank = new Map(prev.map((p, i) => [p.name, i + 1]));
  // rank cur
  const cur = [...enriched].sort((a, b) => b.total - a.total || a._i - b._i);
  return cur.map((p, i) => ({
    ...p, pos: i + 1, prevPos: prevRank.get(p.name),
    delta: prevRank.get(p.name) - (i + 1),
  }));
}

function buildTeams() {
  const enriched = TEAM_META.map((t, i) => {
    const results = [1, 2, 3].map(n => TEAM_RESULTS[n][t.name] ?? 0);
    const total = results.reduce((a, b) => a + b, 0);
    const last = results[RACE_NUMBER - 1];
    const prevTotal = total - last;
    return { ...t, results, total, last, prevTotal, _i: i };
  });
  const prev = [...enriched].sort((a, b) => b.prevTotal - a.prevTotal || a._i - b._i);
  const prevRank = new Map(prev.map((t, i) => [t.name, i + 1]));
  const cur = [...enriched].sort((a, b) => b.total - a.total || a._i - b._i);
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
};

// Palmarés
const PALMARES_DRIVERS = [
  { year: 2021, winner: 'Caña',      note: null },
  { year: 2022, winner: 'Mari Adry', note: 'Ya no compite' },
  { year: 2023, winner: 'Jane',      note: null },
  { year: 2024, winner: 'Chino',     note: null },
  { year: 2025, winner: 'Lojo',      note: null },
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

// Miami · histórico ganador de la porra (por año, simulado desde 2021)
const MIAMI_HISTORY = [
  { year: 2022, player: 'Chino',     team: 'Okavangδ',              pts: 8, note: '1ª edición en Miami' },
  { year: 2023, player: 'Jane',      team: 'El Pulplan',            pts: 9, note: null },
  { year: 2024, player: 'Caña',      team: 'Biscoito de amorodos',  pts: 7, note: null },
  { year: 2025, player: 'Lojo',      team: 'Azkarrak Racing',       pts: 10, note: 'Récord' },
];

// Paleta Paddock
const PALETTE = {
  name: 'Paddock',
  bg: '#0F1923', bg2: '#1A2634',
  surface: '#1F2D3D', surface2: '#2A3A4D',
  text: '#F5F7FA', muted: '#8B98A7', mutedDim: '#5B6878',
  accent: '#E10600', accent2: '#FFC700',
  success: '#27AE60', danger: '#E63946',
  teams: {
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
  },
};

// ───────────────────────────────────────────────────────────────────
// Calendario completo 2026 (22 carreras). status: done | next | future
// ───────────────────────────────────────────────────────────────────
const CALENDAR = [
  { n: 1,  name: 'Australia',    emoji: '🇦🇺', short: 'AUS', date: '16 MAR 2026', status: 'done' },
  { n: 2,  name: 'China',        emoji: '🇨🇳', short: 'CHN', date: '23 MAR 2026', status: 'done' },
  { n: 3,  name: 'Japón',        emoji: '🇯🇵', short: 'JPN', date: '29 MAR 2026', status: 'done' },
  { n: 4,  name: 'Miami',        emoji: '🇺🇸', short: 'MIA', date: '3 MAY 2026',  status: 'next' },
  { n: 5,  name: 'Canadá',       emoji: '🇨🇦', short: 'CAN', date: '7 JUN 2026',  status: 'future' },
  { n: 6,  name: 'Mónaco',       emoji: '🇲🇨', short: 'MON', date: '14 JUN 2026', status: 'future' },
  { n: 7,  name: 'Barcelona',    emoji: '🇪🇸', short: 'BCN', date: '21 JUN 2026', status: 'future' },
  { n: 8,  name: 'Austria',      emoji: '🇦🇹', short: 'AUT', date: '5 JUL 2026',  status: 'future' },
  { n: 9,  name: 'Gran Bretaña', emoji: '🇬🇧', short: 'GBR', date: '19 JUL 2026', status: 'future' },
  { n: 10, name: 'Bélgica',      emoji: '🇧🇪', short: 'BEL', date: '26 JUL 2026', status: 'future' },
  { n: 11, name: 'Hungría',      emoji: '🇭🇺', short: 'HUN', date: '2 AGO 2026',  status: 'future' },
  { n: 12, name: 'Países Bajos', emoji: '🇳🇱', short: 'NED', date: '23 AGO 2026', status: 'future' },
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
// Datos del circuito de Miami (próxima carrera)
// ───────────────────────────────────────────────────────────────────
const MIAMI_CIRCUIT = {
  firstGp: 2022,
  editions: 4, // 2022, 2023, 2024, 2025
  mostWinsDriver: { name: 'M. Verstappen', wins: 2 }, // 2022, 2023
  mostWinsAlsoNorris: { name: 'L. Norris', wins: 2 }, // 2024, 2025 (empate)
  polePositions: [
    { year: 2022, driver: 'S. Pérez' },
    { year: 2023, driver: 'S. Pérez' },
    { year: 2024, driver: 'M. Verstappen' },
    { year: 2025, driver: 'M. Verstappen' },
  ],
  funFacts: [
    'El trazado se monta en el aparcamiento del Hard Rock Stadium, casa de los Miami Dolphins.',
    'La "marina" del paddock es decorativa: los yates están sobre el asfalto, no en el agua.',
    'El asfalto se repavimentó en 2023 para reducir el grano que sufrió la primera edición.',
    'La curva 17 es la más lenta del calendario en su categoría: paso por curva ~85 km/h.',
    'Récord de velocidad punta: ≈ 340 km/h en la recta hacia la curva 17.',
  ],
};

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

Object.assign(window, {
  PLAYERS, TEAMS, PALETTE, RACES, RACE_NUMBER, NEXT_RACE,
  RACE_RESULTS, TEAM_RESULTS, OFFICIAL_RESULTS,
  TEAM_BEST, PALMARES_DRIVERS, PALMARES_TEAMS, PALMARES_KART, HALL_OF_FAME_TEAMS,
  MIAMI_HISTORY, MIAMI_CIRCUIT,
  CALENDAR, HISTORY_DRIVERS, HISTORY_TEAMS, BEST_LAPS_DRY, BEST_LAPS_WET,
  getDriverTitles, getTeamTitles, getKartWins, getKartFastest,
});
