// i18n.jsx — Sistema de idiomas de La Porra
//
// Cómo funciona:
//  - El español es el idioma base: las claves del diccionario SON los textos en español.
//  - t('Texto en español') devuelve la traducción del idioma activo, o el propio
//    texto español si no hay traducción (así las actualizaciones nunca rompen).
//  - Para textos con variables se usa {n}, {x}... y t() + .replace().
//  - La preferencia se guarda en localStorage ('lp-lang') → persiste por dispositivo.

const LP_LANGS = [
  { code: 'es',  label: 'Español',  flag: '🇪🇸' },
  { code: 'gl',  label: 'Galego',   flag: '🩵' },
  { code: 'ca',  label: 'Català',   flag: '💛' },
  { code: 'eu',  label: 'Euskera',  flag: '💚' },
  { code: 'en',  label: 'English',  flag: '🇬🇧' },
  { code: 'fil', label: 'Filipino', flag: '🇵🇭' },
  { code: 'de',  label: 'Deutsch',  flag: '🇩🇪' },
];

const LP_LANG_KEY = 'lp-lang';

function getLang() {
  try { return localStorage.getItem(LP_LANG_KEY) || null; } catch (e) { return null; }
}
function setLang(code) {
  try { localStorage.setItem(LP_LANG_KEY, code); } catch (e) {}
  window.dispatchEvent(new CustomEvent('lp-lang-changed', { detail: code }));
}

// ─── Diccionario ───────────────────────────────────────────────────────────
// Orden por idioma: gl, ca, en, fil, de (es = clave)
const I18N = {
  // ── Home ──
  'CAMPEONATO 2026': { gl: 'CAMPIONATO 2026', ca: 'CAMPIONAT 2026', en: '2026 CHAMPIONSHIP', fil: 'KAMPEONATO 2026', de: 'MEISTERSCHAFT 2026', eu: 'TXAPELKETA 2026' },
  'Palmarés': { gl: 'Palmarés', ca: 'Palmarès', en: 'Honours', fil: 'Mga Parangal', de: 'Erfolge', eu: 'Palmaresa' },
  'Desafíos': { gl: 'Desafíos', ca: 'Reptes', en: 'Challenges', fil: 'Mga Hamon', de: 'Challenges', eu: 'Erronkak' },
  'Consigue más con La Porra Pro': { gl: 'Consegue máis con La Porra Pro', ca: 'Aconsegueix més amb La Porra Pro', en: 'Get more with La Porra Pro', fil: 'Higit pa sa La Porra Pro', de: 'Mehr mit La Porra Pro', eu: 'Lortu gehiago La Porra Pro-rekin' },
  'Actualizar': { gl: 'Actualizar', ca: 'Actualitza', en: 'Upgrade', fil: 'Mag-upgrade', de: 'Upgraden', eu: 'Hobetu' },
  'Pilotos': { gl: 'Pilotos', ca: 'Pilots', en: 'Drivers', fil: 'Mga Driver', de: 'Fahrer', eu: 'Pilotuak' },
  'Equipos': { gl: 'Equipos', ca: 'Equips', en: 'Teams', fil: 'Mga Koponan', de: 'Teams', eu: 'Taldeak' },
  'General': { gl: 'Xeral', ca: 'General', en: 'Overall', fil: 'Pangkalahatan', de: 'Gesamt', eu: 'Orokorra' },
  'Últ.': { gl: 'Últ.', ca: 'Últ.', en: 'Last', fil: 'Huli', de: 'Letzte', eu: 'Azk.' },
  'Próx.': { gl: 'Próx.', ca: 'Pròx.', en: 'Next', fil: 'Susunod', de: 'Nächste', eu: 'Hurr.' },
  'CARRERA': { gl: 'CARREIRA', ca: 'CURSA', en: 'RACE', fil: 'KARERA', de: 'RENNEN', eu: 'LASTERKETA' },
  'Ver resultados': { gl: 'Ver resultados', ca: 'Veure resultats', en: 'See results', fil: 'Tingnan ang resulta', de: 'Ergebnisse ansehen', eu: 'Ikusi emaitzak' },
  'PRÓXIMA · CARRERA': { gl: 'PRÓXIMA · CARREIRA', ca: 'PROPERA · CURSA', en: 'NEXT · RACE', fil: 'SUSUNOD · KARERA', de: 'NÄCHSTES RENNEN', eu: 'HURRENGOA · LASTERKETA' },
  'Normas de la porra': { gl: 'Normas da porra', ca: 'Normes de la porra', en: 'La Porra rulebook', fil: 'Mga patakaran ng porra', de: 'Porra-Regeln', eu: 'Porraren arauak' },
  'culo': { gl: 'cu', ca: 'cul', en: 'ass', fil: 'puwit', de: 'Arsch', eu: 'ipurdia' },
  'piloto': { gl: 'piloto', ca: 'pilot', en: 'driver', fil: 'driver', de: 'Fahrer', eu: 'pilotu' },
  'pilotos': { gl: 'pilotos', ca: 'pilots', en: 'drivers', fil: 'mga driver', de: 'Fahrer', eu: 'pilotu' },
  'tot.': { gl: 'tot.', ca: 'tot.', en: 'tot.', fil: 'tot.', de: 'ges.', eu: 'guzt.' },

  // ── Selector de idioma ──
  '¿En qué idioma quieres disfrutar La Porra?': { gl: 'En que idioma queres gozar La Porra?', ca: 'En quin idioma vols gaudir La Porra?', en: 'Which language would you like to enjoy La Porra in?', fil: 'Anong wika ang gusto mong i-enjoy ang La Porra?', de: 'In welcher Sprache möchtest du La Porra genießen?', eu: 'Zein hizkuntzatan gozatu nahi duzu La Porra?' },
  'Podrás cambiarlo cuando quieras': { gl: 'Poderás cambialo cando queiras', ca: 'Podràs canviar-lo quan vulguis', en: 'You can change it anytime', fil: 'Maaari mo itong baguhin anumang oras', de: 'Du kannst sie jederzeit ändern', eu: 'Nahi duzunean alda dezakezu' },
  'Idioma': { gl: 'Idioma', ca: 'Idioma', en: 'Language', fil: 'Wika', de: 'Sprache', eu: 'Hizkuntza' },

  // ── Ficha piloto ──
  'PILOTO': { gl: 'PILOTO', ca: 'PILOT', en: 'DRIVER', fil: 'DRIVER', de: 'FAHRER', eu: 'PILOTUA' },
  'POSICIÓN': { gl: 'POSICIÓN', ca: 'POSICIÓ', en: 'POSITION', fil: 'POSISYON', de: 'POSITION', eu: 'POSTUA' },
  'PUNTOS': { gl: 'PUNTOS', ca: 'PUNTS', en: 'POINTS', fil: 'PUNTOS', de: 'PUNKTE', eu: 'PUNTUAK' },
  '= sin cambio': { gl: '= sen cambios', ca: '= sense canvis', en: '= no change', fil: '= walang pagbabago', de: '= unverändert', eu: '= aldaketarik ez' },
  'Estado de forma · últimas {n} carreras': { gl: 'Estado de forma · últimas {n} carreiras', ca: 'Estat de forma · darreres {n} curses', en: 'Form guide · last {n} races', fil: 'Porma · huling {n} karera', de: 'Formkurve · letzte {n} Rennen', eu: 'Forma · azken {n} lasterketa' },
  'PUNTOS · ÚLT. {n}': { gl: 'PUNTOS · ÚLT. {n}', ca: 'PUNTS · DARR. {n}', en: 'POINTS · LAST {n}', fil: 'PUNTOS · HULING {n}', de: 'PUNKTE · LETZTE {n}', eu: 'PUNTUAK · AZKEN {n}' },
  'Criterio de desempate': { gl: 'Criterio de desempate', ca: 'Criteri de desempat', en: 'Tiebreaker', fil: 'Pamantayan sa tabla', de: 'Tiebreak-Kriterium', eu: 'Berdinketa hausteko irizpidea' },
  'Carreras': { gl: 'Carreiras', ca: 'Curses', en: 'Races', fil: 'Mga Karera', de: 'Rennen', eu: 'Lasterketak' },
  'Carrera {n}': { gl: 'Carreira {n}', ca: 'Cursa {n}', en: 'Race {n}', fil: 'Karera {n}', de: 'Rennen {n}', eu: '{n}. lasterketa' },
  'Compañeros': { gl: 'Compañeiros', ca: 'Companys', en: 'Teammates', fil: 'Mga kakampi', de: 'Teamkollegen', eu: 'Taldekideak' },
  'Campeón': { gl: 'Campión', ca: 'Campió', en: 'Champion', fil: 'Kampeon', de: 'Champion', eu: 'Txapelduna' },
  'Título': { gl: 'Título', ca: 'Títol', en: 'Title', fil: 'Titulo', de: 'Titel', eu: 'Titulua' },
  'V. rápida': { gl: 'V. rápida', ca: 'V. ràpida', en: 'F. lap', fil: 'Pinakamabilis', de: 'S. Runde', eu: 'Itz. azk.' },

  // ── Ficha equipo ──
  'EQUIPO': { gl: 'EQUIPO', ca: 'EQUIP', en: 'TEAM', fil: 'KOPONAN', de: 'TEAM', eu: 'TALDEA' },
  'Mejor hist.': { gl: 'Mellor hist.', ca: 'Millor hist.', en: 'Best ever', fil: 'Pinakamahusay', de: 'Bestwert', eu: 'Onena hist.' },
  'Pilotos del equipo': { gl: 'Pilotos do equipo', ca: "Pilots de l'equip", en: 'Team drivers', fil: 'Mga driver ng koponan', de: 'Fahrer des Teams', eu: 'Taldeko pilotuak' },
  'Vs. resto de equipos': { gl: 'Vs. resto de equipos', ca: "Vs. resta d'equips", en: 'Vs. other teams', fil: 'Vs. ibang koponan', de: 'Vs. andere Teams', eu: 'Gainerako taldeen aurka' },
  'Última:': { gl: 'Última:', ca: 'Última:', en: 'Last:', fil: 'Huli:', de: 'Letzte:', eu: 'Azkena:' },

  // ── Ficha carrera ──
  'FINALIZADA': { gl: 'FINALIZADA', ca: 'FINALITZADA', en: 'FINISHED', fil: 'TAPOS NA', de: 'BEENDET', eu: 'AMAITUTA' },
  'RESULTADO OFICIAL · TOP 5': { gl: 'RESULTADO OFICIAL · TOP 5', ca: 'RESULTAT OFICIAL · TOP 5', en: 'OFFICIAL RESULT · TOP 5', fil: 'OPISYAL NA RESULTA · TOP 5', de: 'OFFIZIELLES ERGEBNIS · TOP 5', eu: 'EMAITZA OFIZIALA · TOP 5' },
  'PILOTO DE LA SEMANA': { gl: 'PILOTO DA SEMANA', ca: 'PILOT DE LA SETMANA', en: 'DRIVER OF THE WEEK', fil: 'DRIVER NG LINGGO', de: 'FAHRER DER WOCHE', eu: 'ASTEKO PILOTUA' },
  'VUELTA RÁPIDA': { gl: 'VOLTA RÁPIDA', ca: 'VOLTA RÀPIDA', en: 'FASTEST LAP', fil: 'PINAKAMABILIS NA LAP', de: 'SCHNELLSTE RUNDE', eu: 'ITZULI AZKARRENA' },
  'posición': { gl: 'posición', ca: 'posició', en: 'position', fil: 'posisyon', de: 'Position', eu: 'postua' },

  // ── Próxima carrera ──
  'Añadir': { gl: 'Engadir', ca: 'Afegir', en: 'Add', fil: 'Idagdag', de: 'Hinzufügen', eu: 'Gehitu' },
  'NO TE OLVIDES': { gl: 'NON O ESQUEZAS', ca: "NO TE N'OBLIDIS", en: "DON'T FORGET", fil: 'HUWAG KALIMUTAN', de: 'NICHT VERGESSEN', eu: 'EZ AHAZTU' },
  'Hora límite envío de la porra': { gl: 'Hora límite para enviar a porra', ca: 'Hora límit per enviar la porra', en: 'Porra submission deadline', fil: 'Deadline ng pagpapasa ng porra', de: 'Abgabefrist für die Porra', eu: 'Porra bidaltzeko azken ordua' },
  'Domingo 14 de junio · 14:59': { gl: 'Domingo 14 de xuño · 14:59', ca: 'Diumenge 14 de juny · 14:59', en: 'Sunday June 14 · 14:59', fil: 'Linggo, Hunyo 14 · 14:59', de: 'Sonntag, 14. Juni · 14:59', eu: 'Ekainak 14, igandea · 14:59' },
  'Horarios del GP': { gl: 'Horarios do GP', ca: 'Horaris del GP', en: 'GP schedule', fil: 'Iskedyul ng GP', de: 'GP-Zeitplan', eu: 'GPren ordutegia' },
  'Viernes 12 de junio': { gl: 'Venres 12 de xuño', ca: 'Divendres 12 de juny', en: 'Friday June 12', fil: 'Biyernes, Hunyo 12', de: 'Freitag, 12. Juni', eu: 'Ekainak 12, ostirala' },
  'Sábado 13 de junio': { gl: 'Sábado 13 de xuño', ca: 'Dissabte 13 de juny', en: 'Saturday June 13', fil: 'Sabado, Hunyo 13', de: 'Samstag, 13. Juni', eu: 'Ekainak 13, larunbata' },
  'Domingo 14 de junio': { gl: 'Domingo 14 de xuño', ca: 'Diumenge 14 de juny', en: 'Sunday June 14', fil: 'Linggo, Hunyo 14', de: 'Sonntag, 14. Juni', eu: 'Ekainak 14, igandea' },
  'Entrenamientos Libres 1 (FP1)': { gl: 'Adestramentos Libres 1 (FP1)', ca: 'Entrenaments Lliures 1 (FP1)', en: 'Free Practice 1 (FP1)', fil: 'Free Practice 1 (FP1)', de: 'Freies Training 1 (FP1)', eu: 'Entrenamendu Libreak 1 (FP1)' },
  'Entrenamientos Libres 2 (FP2)': { gl: 'Adestramentos Libres 2 (FP2)', ca: 'Entrenaments Lliures 2 (FP2)', en: 'Free Practice 2 (FP2)', fil: 'Free Practice 2 (FP2)', de: 'Freies Training 2 (FP2)', eu: 'Entrenamendu Libreak 2 (FP2)' },
  'Entrenamientos Libres 3 (FP3)': { gl: 'Adestramentos Libres 3 (FP3)', ca: 'Entrenaments Lliures 3 (FP3)', en: 'Free Practice 3 (FP3)', fil: 'Free Practice 3 (FP3)', de: 'Freies Training 3 (FP3)', eu: 'Entrenamendu Libreak 3 (FP3)' },
  'Clasificación': { gl: 'Clasificación', ca: 'Classificació', en: 'Qualifying', fil: 'Qualifying', de: 'Qualifying', eu: 'Sailkapena' },
  'Carrera': { gl: 'Carreira', ca: 'Cursa', en: 'Race', fil: 'Karera', de: 'Rennen', eu: 'Lasterketa' },
  '* Horario peninsular español': { gl: '* Horario peninsular español', ca: '* Horari peninsular espanyol', en: '* Spanish mainland time', fil: '* Oras ng Espanya (peninsular)', de: '* Spanische Festlandzeit', eu: '* Espainiako penintsulako ordua' },
  'Datos del circuito': { gl: 'Datos do circuíto', ca: 'Dades del circuit', en: 'Circuit facts', fil: 'Datos ng circuit', de: 'Strecken-Daten', eu: 'Zirkuituaren datuak' },
  'Longitud': { gl: 'Lonxitude', ca: 'Longitud', en: 'Length', fil: 'Haba', de: 'Länge', eu: 'Luzera' },
  'Vueltas': { gl: 'Voltas', ca: 'Voltes', en: 'Laps', fil: 'Mga lap', de: 'Runden', eu: 'Itzuliak' },
  'Curvas': { gl: 'Curvas', ca: 'Revolts', en: 'Corners', fil: 'Mga kurba', de: 'Kurven', eu: 'Bihurguneak' },
  'Ediciones': { gl: 'Edicións', ca: 'Edicions', en: 'Editions', fil: 'Mga edisyon', de: 'Austragungen', eu: 'Edizioak' },
  'Primera carrera': { gl: 'Primeira carreira', ca: 'Primera cursa', en: 'First race', fil: 'Unang karera', de: 'Erstes Rennen', eu: 'Lehen lasterketa' },
  'Récord vuelta': { gl: 'Récord de volta', ca: 'Rècord de volta', en: 'Lap record', fil: 'Lap record', de: 'Rundenrekord', eu: 'Itzuli errekorra' },
  'Récords en {name}': { gl: 'Récords en {name}', ca: 'Rècords a {name}', en: 'Records at {name}', fil: 'Mga record sa {name}', de: 'Rekorde in {name}', eu: 'Errekorrak {name}-n' },
  'Más victorias': { gl: 'Máis vitorias', ca: 'Més victòries', en: 'Most wins', fil: 'Pinakamaraming panalo', de: 'Meiste Siege', eu: 'Garaipen gehien' },
  'Récord vuelta rápida': { gl: 'Récord de volta rápida', ca: 'Rècord de volta ràpida', en: 'Fastest lap record', fil: 'Record ng pinakamabilis na lap', de: 'Rundenrekord', eu: 'Itzuli azkarrenaren errekorra' },
  'Empatado con {x}': { gl: 'Empatado con {x}', ca: 'Empatat amb {x}', en: 'Tied with {x}', fil: 'Tabla kay {x}', de: 'Gleichauf mit {x}', eu: 'Berdinduta {x}-rekin' },
  'Datos curiosos': { gl: 'Datos curiosos', ca: 'Curiositats', en: 'Fun facts', fil: 'Trivia', de: 'Fun Facts', eu: 'Bitxikeriak' },
  'Mejor de la porra · histórico {name}': { gl: 'Mellor da porra · histórico {name}', ca: 'Millor de la porra · històric {name}', en: 'Porra best · {name} history', fil: 'Pinakamahusay sa porra · {name}', de: 'Porra-Beste · Historie {name}', eu: 'Porrako onena · {name} historikoa' },

  // Datos curiosos de Barcelona
  'Los equipos lo conocen de memoria: durante décadas fue EL circuito de test de pretemporada de la F1.': {
    gl: 'Os equipos coñéceno de memoria: durante décadas foi O circuíto de test de pretempada da F1.',
    ca: "Els equips el coneixen de memòria: durant dècades va ser EL circuit de test de pretemporada de l'F1.",
    en: 'Teams know it by heart: for decades it was THE pre-season testing circuit of F1.',
    fil: 'Kabisado ito ng mga koponan: ilang dekada itong naging PANGUNAHING testing circuit ng F1.',
    de: 'Die Teams kennen sie auswendig: Jahrzehntelang war sie DIE Teststrecke der F1-Wintertests.',
    eu: 'Taldeek buruz dakite: hamarkadetan F1eko denboraldi aurreko test zirkuitua izan zen.' },
  'Se dice que un coche que va bien en Montmeló va bien en todas partes: tiene curvas de todos los tipos.': {
    gl: 'Dise que un coche que vai ben en Montmeló vai ben en todas partes: ten curvas de todos os tipos.',
    ca: 'Es diu que un cotxe que va bé a Montmeló va bé a tot arreu: té revolts de tota mena.',
    en: 'They say a car that works at Montmeló works everywhere: it has every type of corner.',
    fil: 'Sabi nila, ang kotseng mahusay sa Montmeló ay mahusay kahit saan: may lahat ng uri ng kurba.',
    de: 'Man sagt: Ein Auto, das in Montmeló funktioniert, funktioniert überall – hier gibt es jede Art von Kurve.',
    eu: 'Diotenez, Montmelón ondo dabilen autoa edonon dabil ondo: mota guztietako bihurguneak ditu.' },
  'La curva 3, larguísima y de derechas, es una de las que más castiga el neumático delantero izquierdo de todo el calendario.': {
    gl: 'A curva 3, longuísima e de dereitas, é unha das que máis castiga o pneumático dianteiro esquerdo de todo o calendario.',
    ca: 'El revolt 3, llarguíssim i de dretes, és un dels que més castiga el pneumàtic davanter esquerre de tot el calendari.',
    en: 'Turn 3, an endless right-hander, is one of the hardest on the front-left tyre in the whole calendar.',
    fil: 'Ang Turn 3, mahabang kanang kurba, ay isa sa pinakamabigat sa front-left tire sa buong kalendaryo.',
    de: 'Kurve 3, eine endlos lange Rechtskurve, beansprucht den linken Vorderreifen wie kaum eine andere im Kalender.',
    eu: '3. bihurgunea, oso luzea eta eskuinerakoa, egutegi osoko ezkerreko aurreko pneumatikoa gehien nekatzen duenetakoa da.' },
  'En 2023 se eliminó la chicane final y volvió el trazado original: dos curvas rápidas de derechas para cerrar la vuelta.': {
    gl: 'En 2023 eliminouse a chicane final e volveu o trazado orixinal: dúas curvas rápidas de dereitas para pechar a volta.',
    ca: "El 2023 es va eliminar la xicana final i va tornar el traçat original: dos revolts ràpids de dretes per tancar la volta.",
    en: 'In 2023 the final chicane was removed and the original layout returned: two fast right-handers to close the lap.',
    fil: 'Noong 2023 inalis ang huling chicane at bumalik ang orihinal na layout: dalawang mabilis na kanang kurba sa dulo ng lap.',
    de: '2023 wurde die letzte Schikane entfernt und das Original-Layout kehrte zurück: zwei schnelle Rechtskurven zum Rundenende.',
    eu: '2023an azken txikanea kendu eta jatorrizko trazatua itzuli zen: bi eskuineko bihurgune azkar itzulia ixteko.' },
  'El viento cambia mucho el comportamiento del coche aquí: por la tarde suele girar y desestabiliza la frenada de la curva 1.': {
    gl: 'O vento cambia moito o comportamento do coche aquí: pola tarde adoita xirar e desestabiliza a freada da curva 1.',
    ca: "El vent canvia molt el comportament del cotxe aquí: a la tarda sol girar i desestabilitza la frenada del revolt 1.",
    en: 'Wind changes the car balance a lot here: it tends to shift in the afternoon, destabilising braking into Turn 1.',
    fil: 'Malaki ang epekto ng hangin dito: madalas itong umiiba sa hapon at nakakasira ng preno papasok ng Turn 1.',
    de: 'Der Wind verändert hier die Balance stark: Nachmittags dreht er oft und destabilisiert die Anbremszone von Kurve 1.',
    eu: 'Haizeak asko aldatzen du autoaren portaera hemen: arratsaldean biratu ohi da eta 1. bihurguneko balaztada desegonkortzen du.' },

  // ── Palmarés ──
  'PALMARÉS · 2021 — 2025': { gl: 'PALMARÉS · 2021 — 2025', ca: 'PALMARÈS · 2021 — 2025', en: 'HONOURS · 2021 — 2025', fil: 'MGA PARANGAL · 2021 — 2025', de: 'ERFOLGE · 2021 — 2025', eu: 'PALMARESA · 2021 — 2025' },
  'Campeones, equipos y GP de la Porra': { gl: 'Campións, equipos e GP da Porra', ca: 'Campions, equips i GP de la Porra', en: 'Champions, teams & the Porra GP', fil: 'Mga kampeon, koponan at Porra GP', de: 'Champions, Teams & Porra-GP', eu: 'Txapeldunak, taldeak eta Porrako GP' },
  'Mundial de pilotos': { gl: 'Mundial de pilotos', ca: 'Mundial de pilots', en: "Drivers' championship", fil: 'Kampeonato ng mga driver', de: 'Fahrer-WM', eu: 'Pilotuen munduko txapelketa' },
  'Mundial de constructores': { gl: 'Mundial de construtores', ca: 'Mundial de constructors', en: "Constructors' championship", fil: 'Kampeonato ng mga koponan', de: 'Konstrukteurs-WM', eu: 'Eraikitzaileen munduko txapelketa' },
  'Tabla final por temporada': { gl: 'Táboa final por tempada', ca: 'Taula final per temporada', en: 'Final standings by season', fil: 'Huling talaan kada season', de: 'Endstand pro Saison', eu: 'Denboraldiko azken sailkapena' },
  'Salón de la fama · equipos históricos': { gl: 'Salón da fama · equipos históricos', ca: 'Saló de la fama · equips històrics', en: 'Hall of fame · past teams', fil: 'Hall of fame · mga dating koponan', de: 'Hall of Fame · historische Teams', eu: 'Ospearen aretoa · talde historikoak' },
  '{n} equipos han competido desde 2021': { gl: '{n} equipos competiron desde 2021', ca: '{n} equips han competit des de 2021', en: '{n} teams have competed since 2021', fil: '{n} koponan ang nakipagkumpitensya mula 2021', de: '{n} Teams sind seit 2021 angetreten', eu: '{n} taldek lehiatu dute 2021etik' },
  '🏁 Carrera presencial anual de karting entre los participantes.': { gl: '🏁 Carreira presencial anual de karting entre os participantes.', ca: '🏁 Cursa presencial anual de kàrting entre els participants.', en: '🏁 Annual in-person karting race between participants.', fil: '🏁 Taunang karting race ng mga kalahok.', de: '🏁 Jährliches Kart-Rennen aller Teilnehmer vor Ort.', eu: '🏁 Parte-hartzaileen arteko urteko karting lasterketa presentziala.' },
  'CAMPEÓN': { gl: 'CAMPIÓN', ca: 'CAMPIÓ', en: 'CHAMPION', fil: 'KAMPEON', de: 'CHAMPION', eu: 'TXAPELDUNA' },
  'Vuelta rápida': { gl: 'Volta rápida', ca: 'Volta ràpida', en: 'Fastest lap', fil: 'Pinakamabilis na lap', de: 'Schnellste Runde', eu: 'Itzuli azkarrena' },
  'Mejores tiempos': { gl: 'Mellores tempos', ca: 'Millors temps', en: 'Best times', fil: 'Pinakamahusay na oras', de: 'Bestzeiten', eu: 'Denbora onenak' },
  'En seco': { gl: 'En seco', ca: 'En sec', en: 'Dry', fil: 'Tuyo', de: 'Trocken', eu: 'Lehorrean' },
  'En mojado': { gl: 'En mollado', ca: 'En mullat', en: 'Wet', fil: 'Basa', de: 'Nass', eu: 'Bustita' },
  'VIGENTE': { gl: 'VIXENTE', ca: 'VIGENT', en: 'REIGNING', fil: 'KASALUKUYAN', de: 'AKTUELL', eu: 'INDARREAN' },
  'Sin datos disponibles': { gl: 'Sen datos dispoñibles', ca: 'Sense dades disponibles', en: 'No data available', fil: 'Walang datos', de: 'Keine Daten verfügbar', eu: 'Ez dago daturik' },

  // ── La Porra Pro ──
  'LA PORRA PRO': { eu: 'LA PORRA PRO' },
  'Obtén más de La Porra': { gl: 'Obtén máis de La Porra', ca: 'Obtén més de La Porra', en: 'Get more out of La Porra', fil: 'Kunin ang higit pa sa La Porra', de: 'Hol mehr aus La Porra raus', eu: 'Atera gehiago La Porratik' },
  'Elige el plan que mejor se adapte a ti': { gl: 'Elixe o plan que mellor se adapte a ti', ca: "Tria el pla que millor s'adapti a tu", en: 'Choose the plan that suits you best', fil: 'Piliin ang planong bagay sa iyo', de: 'Wähle den Plan, der zu dir passt', eu: 'Aukeratu ondoen egokitzen zaizun plana' },
  'Mensual': { gl: 'Mensual', ca: 'Mensual', en: 'Monthly', fil: 'Buwanan', de: 'Monatlich', eu: 'Hilero' },
  'Anual': { gl: 'Anual', ca: 'Anual', en: 'Yearly', fil: 'Taunan', de: 'Jährlich', eu: 'Urtero' },
  'AHORRA': { gl: 'AFORRA', ca: 'ESTALVIA', en: 'SAVE', fil: 'TIPID', de: 'SPAREN', eu: 'AURREZTU' },
  'EL MÁS ELEGIDO': { gl: 'O MÁIS ELIXIDO', ca: 'EL MÉS TRIAT', en: 'MOST POPULAR', fil: 'PINAKASIKAT', de: 'AM BELIEBTESTEN', eu: 'AUKERATUENA' },
  'al mes': { gl: 'ao mes', ca: 'al mes', en: 'per month', fil: 'kada buwan', de: 'pro Monat', eu: 'hilean' },
  'al año': { gl: 'ao ano', ca: "a l'any", en: 'per year', fil: 'kada taon', de: 'pro Jahr', eu: 'urtean' },
  'Para ponértelo un poco más fácil': { gl: 'Para poñercho un pouco máis fácil', ca: "Per posar-t'ho una mica més fàcil", en: 'To make things a little easier for you', fil: 'Para mas mapadali ang buhay mo', de: 'Damit du es etwas leichter hast', eu: 'Zerbait errazago jartzeko' },
  'Para los más necesitados': { gl: 'Para os máis necesitados', ca: 'Per als més necessitats', en: 'For the truly desperate', fil: 'Para sa mga sadyang nangangailangan', de: 'Für die ganz Verzweifelten', eu: 'Beharrizan handienekoentzat' },
  '1€ bizum al chino': { gl: '1€ bizum ao chino', ca: '1€ bizum al chino', en: '€1 Bizum to el chino', fil: '1€ bizum kay chino', de: '1€ Bizum an den Chino', eu: '1€ bizum txinatarrari' },
  '9€ bizum al chino': { gl: '9€ bizum ao chino', ca: '9€ bizum al chino', en: '€9 Bizum to el chino', fil: '9€ bizum kay chino', de: '9€ Bizum an den Chino', eu: '9€ bizum txinatarrari' },
  '10€ bizum al chino': { gl: '10€ bizum ao chino', ca: '10€ bizum al chino', en: '€10 Bizum to el chino', fil: '10€ bizum kay chino', de: '10€ Bizum an den Chino', eu: '10€ bizum txinatarrari' },
  '45€ bizum al chino': { gl: '45€ bizum ao chino', ca: '45€ bizum al chino', en: '€45 Bizum to el chino', fil: '45€ bizum kay chino', de: '45€ Bizum an den Chino', eu: '45€ bizum txinatarrari' },
  'Obtener Plan Pro': { gl: 'Obter o Plan Pro', ca: 'Obtenir el Pla Pro', en: 'Get the Pro Plan', fil: 'Kunin ang Pro Plan', de: 'Pro-Plan holen', eu: 'Lortu Pro Plana' },
  'Obtener Plan Max': { gl: 'Obter o Plan Max', ca: 'Obtenir el Pla Max', en: 'Get the Max Plan', fil: 'Kunin ang Max Plan', de: 'Max-Plan holen', eu: 'Lortu Max Plana' },
  'El chino se pone de tu parte si quieres cambiar alguna norma o lo que sea': { gl: 'O chino ponse da túa parte se queres cambiar algunha norma ou o que sexa', ca: 'El chino es posa de la teva part si vols canviar alguna norma o el que sigui', en: 'El chino takes your side if you want to change a rule or whatever', fil: 'Papanig sa iyo si chino kung gusto mong baguhin ang anumang patakaran', de: 'Der Chino schlägt sich auf deine Seite, wenn du eine Regel ändern willst', eu: 'Txinatarra zure alde jarriko da arauren bat aldatu nahi baduzu edo dena delakoa' },
  'Si cometes algún error al enviar la porra, digamos que se te hace la vista gorda': { gl: 'Se cometes algún erro ao enviar a porra, digamos que se che fai a vista gorda', ca: "Si comets algun error en enviar la porra, diguem que es fa la vista grossa", en: 'If you make a mistake sending your porra, let’s say we look the other way', fil: 'Kung magkamali ka sa pagpapasa ng porra, sabihin nating papalampasin ito', de: 'Wenn dir beim Abschicken der Porra ein Fehler passiert, drücken wir mal ein Auge zu', eu: 'Porra bidaltzean akatsen bat egiten baduzu, demagun begia itxiko dizugula' },
  'Alterar los resultados de carreras anteriores cuando nadie se dé cuenta para sumar más puntos': { gl: 'Alterar os resultados de carreiras anteriores cando ninguén se decate para sumar máis puntos', ca: "Alterar els resultats de curses anteriors quan ningú se n'adoni per sumar més punts", en: 'Alter past race results when nobody is looking to gain extra points', fil: 'Baguhin ang resulta ng mga nakaraang karera kapag walang nakatingin para makadagdag ng puntos', de: 'Ergebnisse vergangener Rennen heimlich ändern, um mehr Punkte zu kassieren', eu: 'Aurreko lasterketen emaitzak aldatu inor konturatzen ez denean puntu gehiago batzeko' },
  'Errores al sumar puntos que casualmente te benefician, salvo que los detecte alguien': { gl: 'Erros ao sumar puntos que casualmente te benefician, salvo que os detecte alguén', ca: 'Errors en sumar punts que casualment et beneficien, tret que algú els detecti', en: 'Point-counting mistakes that happen to favour you, unless someone catches them', fil: 'Mga pagkakamali sa pagbilang na nagkataong pabor sa iyo, maliban kung may makahuli', de: 'Rechenfehler, die zufällig zu deinen Gunsten ausfallen – außer jemand merkt es', eu: 'Puntuak batzean egindako akatsak, kasualitatez zure mesederako, norbaitek atzematen ez baditu behintzat' },
  'Trucar el desempate a tu favor': { gl: 'Trucar o desempate ao teu favor', ca: 'Trucar el desempat a favor teu', en: 'Rig the tiebreaker in your favour', fil: 'Dayain ang tiebreaker pabor sa iyo', de: 'Den Tiebreak zu deinen Gunsten manipulieren', eu: 'Berdinketa zure alde tranpaz erabakitzea' },
  'Pago vía bizum al chino. Sin reembolsos, sin vergüenza, sin honor.': { gl: 'Pago vía bizum ao chino. Sen reembolsos, sen vergoña, sen honor.', ca: 'Pagament via bizum al chino. Sense reemborsaments, sense vergonya, sense honor.', en: 'Payment via Bizum to el chino. No refunds, no shame, no honour.', fil: 'Bayad sa pamamagitan ng bizum kay chino. Walang refund, walang hiya, walang dangal.', de: 'Zahlung per Bizum an den Chino. Keine Rückerstattung, keine Scham, keine Ehre.', eu: 'Ordainketa txinatarrari bizum bidez. Itzulketarik gabe, lotsarik gabe, ohorerik gabe.' },
  'Lo he entendido, me retiro': { gl: 'Entendido, retírome', ca: 'Ho he entès, em retiro', en: "Understood, I'll see myself out", fil: 'Naiintindihan ko, aalis na ako', de: 'Verstanden, ich ziehe mich zurück', eu: 'Ulertu dut, banoa' },
  'Comunicado oficial': { gl: 'Comunicado oficial', ca: 'Comunicat oficial', en: 'Official statement', fil: 'Opisyal na pahayag', de: 'Offizielle Mitteilung', eu: 'Ohar ofiziala' },
  'Oda a la rata': { gl: 'Oda á rata', ca: 'Oda a la rata', en: 'Ode to the rat', fil: 'Oda sa daga', de: 'Ode an die Ratte', eu: 'Arratoiari oda' },
  // Comunicado Pro (acusatorio)
  'Vaya, vaya. Así que querías PAGAR para inclinar la balanza a tu favor.': { gl: 'Vaia, vaia. Así que querías PAGAR para inclinar a balanza ao teu favor.', ca: 'Vaja, vaja. Així que volies PAGAR per inclinar la balança a favor teu.', en: 'Well, well. So you wanted to PAY to tip the scales in your favour.', fil: 'Aba, aba. Gusto mo palang MAGBAYAD para kumiling sa iyo ang timbangan.', de: 'Sieh an. Du wolltest also BEZAHLEN, um die Waage zu deinen Gunsten zu neigen.', eu: 'Hara, hara. Beraz, ORDAINDU nahi zenuen balantza zure alde makurtzeko.' },
  'Intentar comprar ventaja en una competición justa es, sencillamente, RASTRERO. Va en contra de todo lo que representa La Porra: el honor, la cuñadez y el sufrimiento compartido.': { gl: 'Intentar mercar vantaxe nunha competición xusta é, sinxelamente, RASTREIRO. Vai en contra de todo o que representa La Porra: o honor, a cuñadez e o sufrimento compartido.', ca: "Intentar comprar avantatge en una competició justa és, senzillament, RASTRER. Va en contra de tot el que representa La Porra: l'honor, el cunyadisme i el patiment compartit.", en: 'Trying to buy an advantage in a fair competition is, simply put, SLEAZY. It goes against everything La Porra stands for: honour, uncle-at-dinner energy and shared suffering.', fil: 'Ang pagbili ng bentahe sa patas na kumpetisyon ay simpleng KADIRI. Salungat ito sa lahat ng pinaninindigan ng La Porra: dangal, kayabangan at sama-samang paghihirap.', de: 'Sich in einem fairen Wettbewerb einen Vorteil kaufen zu wollen ist schlicht SCHÄBIG. Es widerspricht allem, wofür La Porra steht: Ehre, Stammtisch-Weisheit und geteiltes Leid.', eu: 'Lehiaketa justu batean abantaila erostea saiatzea, besterik gabe, ZIKINA da. La Porrak ordezkatzen duen guztiaren aurka doa: ohorea, koinatukeria eta partekatutako sufrimendua.' },
  'Que sepas que tu intento ha quedado registrado. Esto será comunicado al resto del grupo en el chat, con capturas, para que todos sepan la clase de persona que tenemos entre nosotros.': { gl: 'Que saibas que o teu intento quedou rexistrado. Isto será comunicado ao resto do grupo no chat, con capturas, para que todos saiban a clase de persoa que temos entre nós.', ca: "Que sàpigues que el teu intent ha quedat registrat. Això es comunicarà a la resta del grup al xat, amb captures, perquè tothom sàpiga la mena de persona que tenim entre nosaltres.", en: 'Know that your attempt has been logged. This will be reported to the rest of the group chat, with screenshots, so everyone knows what kind of person walks among us.', fil: 'Alamin mong naitala ang tangka mo. Ibabalita ito sa group chat, may kalakip na screenshot, para malaman ng lahat kung anong klaseng tao ka.', de: 'Du sollst wissen: Dein Versuch wurde protokolliert. Das wird der Gruppe im Chat mitgeteilt – mit Screenshots, damit alle wissen, was für eine Person unter uns ist.', eu: 'Jakin ezazu zure saiakera erregistratuta geratu dela. Hau taldeko gainerakoei jakinaraziko zaie txatean, pantaila-argazkiekin, denek jakin dezaten nolako pertsona dugun gure artean.' },
  'La Porra no se compra. La Porra se sufre.': { gl: 'La Porra non se merca. La Porra súfrese.', ca: 'La Porra no es compra. La Porra es pateix.', en: "You don't buy La Porra. You suffer it.", fil: 'Hindi binibili ang La Porra. Pinagdurusahan ito.', de: 'La Porra kauft man nicht. La Porra erleidet man.', eu: 'La Porra ez da erosten. La Porra sufritu egiten da.' },
  '— La Comisión de Integridad de La Porra': { gl: '— A Comisión de Integridade de La Porra', ca: '— La Comissió d’Integritat de La Porra', en: '— The La Porra Integrity Committee', fil: '— Ang Komite ng Integridad ng La Porra', de: '— Die Integritätskommission von La Porra', eu: '— La Porraren Osotasun Batzordea' },
  // Poema Max (traducción libre, manteniendo el tono)
  'Mírate, campeón de la miseria,': { gl: 'Mírate, campión da miseria,', ca: 'Mira’t, campió de la misèria,', en: 'Look at you, champion of misery,', fil: 'Tingnan mo ang sarili mo, kampeon ng kahirapan,', de: 'Sieh dich an, Champion des Elends,', eu: 'Begira zeure buruari, miseriaren txapeldun,' },
  'queriendo el oro sin sudar la feria.': { gl: 'querendo o ouro sen suar a feira.', ca: 'volent l’or sense suar la fira.', en: 'wanting the gold without sweating the fair.', fil: 'gusto ng ginto nang hindi nagpapawis.', de: 'willst das Gold, ohne dafür zu schwitzen.', eu: 'urrea nahian izerdirik bota gabe.' },
  'La rata más grande de todo el corral,': { gl: 'A rata máis grande de todo o curral,', ca: 'La rata més grossa de tot el corral,', en: 'The biggest rat in the whole barnyard,', fil: 'Ang pinakamalaking daga sa buong bakuran,', de: 'Die größte Ratte im ganzen Stall,', eu: 'Korraleko arratoirik handiena,' },
  'con bigote de Mao y moral de chacal.': { gl: 'con bigote de Mao e moral de chacal.', ca: 'amb bigoti de Mao i moral de xacal.', en: 'with Mao’s moustache and a jackal’s morals.', fil: 'may bigote ni Mao at moralidad ng asong-gubat.', de: 'mit Mao-Schnurrbart und Schakal-Moral.', eu: 'Maoren bibotea eta txakalaren morala.' },
  'Tu pequeño librito rojo y tu plan quinquenal': { gl: 'O teu pequeno libriño vermello e o teu plan quinquenal', ca: 'El teu petit llibret vermell i el teu pla quinquennal', en: 'Your little red book and your five-year plan', fil: 'Ang munting pulang libro mo at ang five-year plan mo', de: 'Dein kleines rotes Buch und dein Fünfjahresplan', eu: 'Zure liburu txiki gorria eta bosturteko plana' },
  'no te darán los puntos, te saldrá fatal.': { gl: 'non che darán os puntos, sairáche fatal.', ca: 'no et donaran els punts, et sortirà fatal.', en: 'won’t earn you points, it will end in disaster.', fil: 'hindi magbibigay sa iyo ng puntos, sasablay ka.', de: 'bringen dir keine Punkte – das geht böse schief.', eu: 'ez dizute punturik emango, gaizki aterako zaizu.' },
  'Que el pueblo te juzgue, camarada tramposo:': { gl: 'Que o pobo te xulgue, camarada tramposo:', ca: 'Que el poble et jutgi, camarada trampós:', en: 'Let the people judge you, comrade cheat:', fil: 'Hayaang husgahan ka ng bayan, kasamang mandaraya:', de: 'Das Volk soll dich richten, Genosse Betrüger:', eu: 'Herriak epai zaitzala, kamarada tranpatia:' },
  'no eres dictador, eres solo un quejoso.': { gl: 'non es ditador, es só un queixoso.', ca: 'no ets dictador, només ets un queixós.', en: 'you’re no dictator, just a whiner.', fil: 'hindi ka diktador, reklamador ka lang.', de: 'du bist kein Diktator, nur ein Nörgler.', eu: 'ez zara diktadorea, kexati bat besterik ez.' },
  'Guárdate el bizum y aprende a perder,': { gl: 'Garda o bizum e aprende a perder,', ca: 'Guarda’t el bizum i aprèn a perdre,', en: 'Keep your Bizum and learn to lose,', fil: 'Itago mo ang bizum mo at matutong matalo,', de: 'Behalt dein Bizum und lern zu verlieren,', eu: 'Gorde ezazu bizuma eta ikasi galtzen,' },
  'que la dignidad no se puede vender.': { gl: 'que a dignidade non se pode vender.', ca: 'que la dignitat no es pot vendre.', en: 'for dignity is not for sale.', fil: 'dahil ang dignidad ay hindi nabibili.', de: 'denn Würde kann man nicht verkaufen.', eu: 'duintasuna ezin baita saldu.' },
  '— Con cariño, La Porra': { gl: '— Con cariño, La Porra', ca: '— Amb afecte, La Porra', en: '— With love, La Porra', fil: '— Nagmamahal, La Porra', de: '— In Liebe, La Porra', eu: '— Maitasunez, La Porra' },

  // ── Desafíos ──
  'LOGROS': { gl: 'LOGROS', ca: 'ASSOLIMENTS', en: 'ACHIEVEMENTS', fil: 'MGA TAGUMPAY', de: 'ERFOLGE', eu: 'LORPENAK' },
  'Trofeos por las gestas (y miserias) de la porra': { gl: 'Trofeos polas fazañas (e miserias) da porra', ca: 'Trofeus per les gestes (i misèries) de la porra', en: 'Trophies for porra feats (and misery)', fil: 'Mga tropeo para sa mga tagumpay (at kahihiyan) ng porra', de: 'Trophäen für Heldentaten (und Elend) der Porra', eu: 'Porrako balentria (eta miseria) sariak' },
  'Termina entre los 3 primeros en una carrera de la porra.': { gl: 'Remata entre os 3 primeiros nunha carreira da porra.', ca: 'Acaba entre els 3 primers en una cursa de la porra.', en: 'Finish in the top 3 of a porra race.', fil: 'Pumasok sa top 3 ng isang karera ng porra.', de: 'Beende ein Porra-Rennen unter den Top 3.', eu: 'Amaitu porrako lasterketa batean lehen 3en artean.' },
  'Termina entre los 5 primeros en una carrera de la porra.': { gl: 'Remata entre os 5 primeiros nunha carreira da porra.', ca: 'Acaba entre els 5 primers en una cursa de la porra.', en: 'Finish in the top 5 of a porra race.', fil: 'Pumasok sa top 5 ng isang karera ng porra.', de: 'Beende ein Porra-Rennen unter den Top 5.', eu: 'Amaitu porrako lasterketa batean lehen 5en artean.' },
  'Haz un pleno: clava todos los puntos posibles en una carrera.': { gl: 'Fai un pleno: crava todos os puntos posibles nunha carreira.', ca: 'Fes un ple: clava tots els punts possibles en una cursa.', en: 'Score a perfect round: nail every possible point in a race.', fil: 'Perpektong round: makuha lahat ng posibleng puntos sa isang karera.', de: 'Volltreffer: Hole alle möglichen Punkte in einem Rennen.', eu: 'Egin betea: iltzatu lasterketa bateko puntu guztiak.' },
  'Manda la porra el primero y sé quien más puntos hace en esa carrera.': { gl: 'Manda a porra o primeiro e sé quen máis puntos fai nesa carreira.', ca: 'Envia la porra el primer i sigues qui més punts fa en aquella cursa.', en: 'Submit your porra first and score the most points in that race.', fil: 'Ikaw ang unang magpasa ng porra at ikaw ang pinakamataas sa karerang iyon.', de: 'Reiche die Porra als Erster ein und hole die meisten Punkte in dem Rennen.', eu: 'Bidali porra lehenengo eta izan lasterketa horretan puntu gehien egiten dituena.' },
  'Tu compañero y tú sois los dos pilotos que más suman en una carrera.': { gl: 'O teu compañeiro e ti sodes os dous pilotos que máis suman nunha carreira.', ca: 'El teu company i tu sou els dos pilots que més sumen en una cursa.', en: 'You and your teammate are the two highest scorers in a race.', fil: 'Ikaw at ang kakampi mo ang dalawang pinakamataas sa isang karera.', de: 'Du und dein Teamkollege seid die zwei Topscorer eines Rennens.', eu: 'Zure taldekidea eta zu zarete lasterketa batean gehien batzen duten bi pilotuak.' },
  'Queda segundo en una clasificación general de la porra.': { gl: 'Queda segundo nunha clasificación xeral da porra.', ca: 'Queda segon en una classificació general de la porra.', en: 'Finish second in a porra season standings.', fil: 'Pumangalawa sa pangkalahatang talaan ng porra.', de: 'Werde Zweiter einer Porra-Gesamtwertung.', eu: 'Geratu bigarren porrako sailkapen orokor batean.' },
  'Detecta un error en las normas de la porra.': { gl: 'Detecta un erro nas normas da porra.', ca: 'Detecta un error a les normes de la porra.', en: 'Spot an error in the porra rulebook.', fil: 'Makakita ng mali sa mga patakaran ng porra.', de: 'Finde einen Fehler im Porra-Regelwerk.', eu: 'Antzeman akats bat porraren arauetan.' },
  'Detecta un error en los puntos oficiales de la porra.': { gl: 'Detecta un erro nos puntos oficiais da porra.', ca: 'Detecta un error als punts oficials de la porra.', en: 'Spot an error in the official porra points.', fil: 'Makakita ng mali sa opisyal na puntos ng porra.', de: 'Finde einen Fehler in den offiziellen Porra-Punkten.', eu: 'Antzeman akats bat porraren puntu ofizialetan.' },
  'Haz trampas en el GP de la porra y sal de rositas.': { gl: 'Fai trampas no GP da porra e sae de rositas.', ca: "Fes trampes al GP de la porra i surt-ne d'estranquis.", en: 'Cheat at the Porra GP and get away with it.', fil: 'Mandaya sa Porra GP at makalusot.', de: 'Schummle beim Porra-GP und komm ungeschoren davon.', eu: 'Egin tranpa porrako GPan eta atera onik.' },
  'Lidera el mundial de la porra... pero no lo ganes.': { gl: 'Lidera o mundial da porra... pero non o gañes.', ca: 'Lidera el mundial de la porra... però no el guanyis.', en: 'Lead the porra championship... but don’t win it.', fil: 'Manguna sa kampeonato ng porra... pero huwag manalo.', de: 'Führe die Porra-WM an ... aber gewinne sie nicht.', eu: 'Lideratu porrako mundiala... baina ez irabazi.' },

  // ── Próxima carrera · Bélgica (Spa) ──
  'Domingo 19 de julio · 14:59': { gl: 'Domingo 19 de xullo · 14:59', ca: 'Diumenge 19 de juliol · 14:59', eu: 'Uztailak 19, igandea · 14:59', en: 'Sunday July 19 · 14:59', fil: 'Linggo, Hulyo 19 · 14:59', de: 'Sonntag, 19. Juli · 14:59' },
  'Viernes 17 de julio': { gl: 'Venres 17 de xullo', ca: 'Divendres 17 de juliol', eu: 'Uztailak 17, ostirala', en: 'Friday July 17', fil: 'Biyernes, Hulyo 17', de: 'Freitag, 17. Juli' },
  'Sábado 18 de julio': { gl: 'Sábado 18 de xullo', ca: 'Dissabte 18 de juliol', eu: 'Uztailak 18, larunbata', en: 'Saturday July 18', fil: 'Sabado, Hulyo 18', de: 'Samstag, 18. Juli' },
  'Domingo 19 de julio': { gl: 'Domingo 19 de xullo', ca: 'Diumenge 19 de juliol', eu: 'Uztailak 19, igandea', en: 'Sunday July 19', fil: 'Linggo, Hulyo 19', de: 'Sonntag, 19. Juli' },
  'Previa clasificación DAZN': { gl: 'Previa clasificación DAZN', ca: 'Prèvia classificació DAZN', eu: 'Sailkapen aurrekoa DAZN', en: 'DAZN qualifying preview', fil: 'DAZN qualifying preview', de: 'DAZN Quali-Vorschau' },
  'Es el circuito más largo del calendario: 7 km de subidas, bajadas y bosque en plena región de las Ardenas.': { gl: 'É o circuíto máis longo do calendario: 7 km de subidas, baixadas e bosque en plena rexión das Ardenas.', ca: "És el circuit més llarg del calendari: 7 km de pujades, baixades i bosc al bell mig de la regió de les Ardenes.", eu: 'Egutegiko zirkuiturik luzeena da: 7 km igoera, jaitsiera eta baso Ardenetako eskualdearen erdian.', en: 'The longest track of the calendar: 7 km of climbs, drops and forest in the heart of the Ardennes.', fil: 'Ito ang pinakamahabang sirkito sa kalendaryo: 7 km ng akyat, baba at gubat sa gitna ng Ardennes.', de: 'Die längste Strecke im Kalender: 7 km Anstiege, Gefälle und Wald mitten in den Ardennen.' },
  'Eau Rouge–Raidillon es la secuencia más mítica de la F1: una subida ciega que los coches actuales toman casi a fondo.': { gl: 'Eau Rouge–Raidillon é a secuencia máis mítica da F1: unha subida cega que os coches actuais toman case a fondo.', ca: "Eau Rouge–Raidillon és la seqüència més mítica de la F1: una pujada cega que els cotxes actuals prenen gairebé a fons.", eu: 'Eau Rouge–Raidillon F1eko sekuentziarik mitikoena da: egungo autoek ia erabat hartzen duten igoera itsua.', en: 'Eau Rouge–Raidillon is F1’s most iconic sequence: a blind uphill that modern cars take almost flat out.', fil: 'Ang Eau Rouge–Raidillon ang pinaka-iconic na sequence sa F1: isang blind uphill na halos flat-out sa modernong kotse.', de: 'Eau Rouge–Raidillon ist die legendärste Sequenz der F1: eine blinde Steigung, die moderne Autos fast voll nehmen.' },
  'El microclima de Spa es legendario: puede estar lloviendo en una punta del trazado y seco en la otra al mismo tiempo.': { gl: 'O microclima de Spa é lendario: pode estar chovendo nunha punta do trazado e seco na outra ao mesmo tempo.', ca: "El microclima de Spa és llegendari: pot estar plovent en una punta del traçat i sec a l'altra alhora.", eu: 'Spako mikroklima mitikoa da: trazatuaren mutur batean euria ari dezake eta bestean lehor egon aldi berean.', en: 'Spa’s microclimate is legendary: it can be raining at one end of the track and dry at the other at the same time.', fil: 'Alamat ang microclimate ng Spa: pwedeng umuulan sa isang dulo ng track habang tuyo naman ang kabila.', de: 'Spas Mikroklima ist legendär: Es kann an einem Ende der Strecke regnen und am anderen gleichzeitig trocken sein.' },
  'La recta de Kemmel, tras Eau Rouge, es una de las mejores zonas para adelantar de todo el año.': { gl: 'A recta de Kemmel, tras Eau Rouge, é unha das mellores zonas para adiantar de todo o ano.', ca: "La recta de Kemmel, després d'Eau Rouge, és una de les millors zones per avançar de tot l'any.", eu: 'Kemmel zuzena, Eau Rougeren ondoren, urte osoko aurreratzeko gunerik onenetakoa da.', en: 'The Kemmel straight, after Eau Rouge, is one of the best overtaking spots of the whole year.', fil: 'Ang Kemmel straight, pagkatapos ng Eau Rouge, ay isa sa pinakamagandang overtaking spot sa buong taon.', de: 'Die Kemmel-Gerade nach Eau Rouge ist eine der besten Überholstellen des ganzen Jahres.' },
  'Aquí Michael Schumacher debutó en 1991 y logró su primera victoria en 1992: Spa es "su" circuito.': { gl: 'Aquí Michael Schumacher debutou en 1991 e logrou a súa primeira vitoria en 1992: Spa é "o seu" circuíto.', ca: 'Aquí Michael Schumacher va debutar el 1991 i va aconseguir la seva primera victòria el 1992: Spa és "el seu" circuit.', eu: 'Hemen Michael Schumacherrek 1991n debutatu zuen eta 1992an lortu zuen bere lehen garaipena: Spa "bere" zirkuitua da.', en: 'Michael Schumacher made his debut here in 1991 and took his first win in 1992: Spa is "his" track.', fil: 'Dito nag-debut si Michael Schumacher noong 1991 at nanalo sa unang pagkakataon noong 1992: Spa ang "kaniyang" sirkito.', de: 'Hier gab Michael Schumacher 1991 sein Debüt und holte 1992 seinen ersten Sieg: Spa ist "seine" Strecke.' },

  // ── Próxima carrera · Países Bajos (Zandvoort) ──
  'Domingo 31 de agosto · 14:59': { gl: 'Domingo 31 de agosto · 14:59', ca: "Diumenge 31 d'agost · 14:59", eu: 'Abuztuak 31, igandea · 14:59', en: 'Sunday August 31 · 14:59', fil: 'Linggo, Agosto 31 · 14:59', de: 'Sonntag, 31. August · 14:59' },
  'Viernes 29 de agosto': { gl: 'Venres 29 de agosto', ca: "Divendres 29 d'agost", eu: 'Abuztuak 29, ostirala', en: 'Friday August 29', fil: 'Biyernes, Agosto 29', de: 'Freitag, 29. August' },
  'Sábado 30 de agosto': { gl: 'Sábado 30 de agosto', ca: "Dissabte 30 d'agost", eu: 'Abuztuak 30, larunbata', en: 'Saturday August 30', fil: 'Sabado, Agosto 30', de: 'Samstag, 30. August' },
  'Domingo 31 de agosto': { gl: 'Domingo 31 de agosto', ca: "Diumenge 31 d'agost", eu: 'Abuztuak 31, igandea', en: 'Sunday August 31', fil: 'Linggo, Agosto 31', de: 'Sonntag, 31. August' },
  'Previa clasificación Sprint': { gl: 'Previa clasificación Sprint', ca: 'Prèvia classificació Sprint', eu: 'Sprint sailkapen aurrekoa', en: 'Sprint qualifying preview', fil: 'Sprint qualifying preview', de: 'Sprint-Quali-Vorschau' },
  'Clasificación Sprint': { gl: 'Clasificación Sprint', ca: 'Classificació Sprint', eu: 'Sprint sailkapena', en: 'Sprint qualifying', fil: 'Sprint qualifying', de: 'Sprint-Qualifying' },
  'Previa Sprint DAZN': { gl: 'Previa Sprint DAZN', ca: 'Prèvia Sprint DAZN', eu: 'Sprint aurrekoa DAZN', en: 'DAZN Sprint preview', fil: 'DAZN Sprint preview', de: 'DAZN Sprint-Vorschau' },
  'Sprint': { gl: 'Sprint', ca: 'Sprint', eu: 'Sprint', en: 'Sprint', fil: 'Sprint', de: 'Sprint' },
  'Zandvoort está literalmente entre dunas, junto al Mar del Norte: la arena en pista es un clásico del fin de semana.': { gl: 'Zandvoort está literalmente entre dunas, xunto ao Mar do Norte: a area na pista é un clásico da fin de semana.', ca: 'Zandvoort és literalment entre dunes, al costat del Mar del Nord: la sorra a pista és un clàssic del cap de setmana.', eu: 'Zandvoort dunen artean dago, Ipar Itsasoaren ondoan: pistako hondarra asteburuko klasikoa da.', en: 'Zandvoort sits literally among sand dunes by the North Sea: sand on track is a weekend classic.', fil: 'Ang Zandvoort ay nasa gitna mismo ng mga buhanginan sa tabi ng North Sea: klasiko na ang buhangin sa track tuwing weekend.', de: 'Zandvoort liegt buchstäblich zwischen Dünen an der Nordsee: Sand auf der Strecke gehört zum Wochenende dazu.' },
  'Tiene dos curvas peraltadas: la 3 (Hugenholtz) y la 14 (Arie Luyendyk), esta última con un peralte de 18 grados.': { gl: 'Ten dúas curvas peraltadas: a 3 (Hugenholtz) e a 14 (Arie Luyendyk), esta última cun peralte de 18 graos.', ca: 'Té dos revolts peraltats: el 3 (Hugenholtz) i el 14 (Arie Luyendyk), aquest últim amb un peralt de 18 graus.', eu: 'Bi bihurgune peraltatu ditu: 3.a (Hugenholtz) eta 14.a (Arie Luyendyk), azken hau 18 graduko peraltarekin.', en: 'It has two banked corners: Turn 3 (Hugenholtz) and Turn 14 (Arie Luyendyk), the latter banked at 18 degrees.', fil: 'May dalawang banked corner: Turn 3 (Hugenholtz) at Turn 14 (Arie Luyendyk), ang huli ay may 18 degrees na banking.', de: 'Sie hat zwei Steilkurven: Kurve 3 (Hugenholtz) und Kurve 14 (Arie Luyendyk), letztere mit 18 Grad Überhöhung.' },
  'Ese peralte final permite entrar en la recta a fondo y hace que el DRS valga oro en la primera frenada.': { gl: 'Ese peralte final permite entrar na recta a fondo e fai que o DRS valla ouro na primeira freada.', ca: "Aquest peralt final permet entrar a la recta a fons i fa que el DRS valgui or a la primera frenada.", eu: 'Azken peralte horrek zuzenean erabat sartzeko aukera ematen du eta DRSak urrea balio du lehen balaztadan.', en: 'That final banking lets cars go flat out onto the straight, making DRS worth gold into the first braking zone.', fil: 'Dahil sa banking na iyon, flat out ang labas papuntang straight, kaya sobrang halaga ng DRS sa unang preno.', de: 'Diese letzte Überhöhung erlaubt Vollgas auf die Gerade und macht DRS in der ersten Bremszone zu Gold wert.' },
  'Volvió al calendario en 2021 tras 36 años de ausencia, empujado por la fiebre naranja de Verstappen.': { gl: 'Volveu ao calendario en 2021 tras 36 anos de ausencia, empuxado pola febre laranxa de Verstappen.', ca: "Va tornar al calendari el 2021 després de 36 anys d'absència, empès per la febre taronja de Verstappen.", eu: '2021ean itzuli zen egutegira 36 urteko absentziaren ondoren, Verstappenen sukar laranjak bultzatuta.', en: 'It returned to the calendar in 2021 after a 36-year absence, driven by Verstappen’s orange fever.', fil: 'Bumalik ito sa kalendaryo noong 2021 matapos ang 36 taon, dulot ng orange fever ni Verstappen.', de: 'Sie kehrte 2021 nach 36 Jahren Abwesenheit zurück – getrieben vom orangen Verstappen-Fieber.' },
  'Es de los trazados más estrechos y con menos escapatoria: adelantar aquí es casi tan difícil como en Mónaco.': { gl: 'É dos trazados máis estreitos e con menos escapatoria: adiantar aquí é case tan difícil coma en Mónaco.', ca: "És dels traçats més estrets i amb menys escapatòria: avançar aquí és gairebé tan difícil com a Mònaco.", eu: 'Trazatu estuenetakoa da eta ihesbide gutxienekoa: hemen aurreratzea Monakon bezain zaila da ia.', en: 'It’s one of the narrowest layouts with the least run-off: overtaking here is nearly as hard as at Monaco.', fil: 'Isa ito sa pinakamakikitid na layout na may kaunting run-off: halos kasinghirap mag-overtake dito gaya sa Monaco.', de: 'Sie ist eine der engsten Strecken mit den wenigsten Auslaufzonen: Überholen ist hier fast so schwer wie in Monaco.' },
};

function t(key) {
  const lang = getLang();
  if (!lang || lang === 'es') return key;
  const entry = I18N[key];
  return (entry && entry[lang]) || key;
}

// ─── UI: menú desplegable de idioma (Home) ─────────────────────────────────
function LangMenu() {
  const P = window.PALETTE;
  const [open, setOpen] = React.useState(false);
  const current = LP_LANGS.find(l => l.code === (getLang() || 'es')) || LP_LANGS[0];
  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)} className="touchable" style={{
        height: 38, padding: '0 11px', borderRadius: 10,
        background: P.ov(0.06),
        border: `1px solid ${P.text}15`, color: P.text,
        fontSize: 11, fontWeight: 700, letterSpacing: 0.4,
        cursor: 'pointer', fontFamily: 'inherit',
        display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap',
        justifyContent: 'center',
      }}>
        🌐 {current.code.toUpperCase()} <span style={{ fontSize: 8, opacity: 0.6 }}>▼</span>
      </button>
      {open && (
        <>
          {/* capa para cerrar al tocar fuera */}
          <div onClick={() => setOpen(false)} style={{
            position: 'fixed', inset: 0, zIndex: 40,
          }} />
          <div style={{
            position: 'absolute', top: 'calc(100% + 6px)', right: 0, zIndex: 50,
            background: P.surface2 || P.surface, borderRadius: 12,
            border: `1px solid ${P.text}1A`,
            boxShadow: '0 14px 34px -10px rgba(0,0,0,0.7)',
            padding: 4, minWidth: 150,
          }}>
            {LP_LANGS.map(l => {
              const active = l.code === current.code;
              return (
                <button key={l.code} className="touchable"
                  onClick={() => { setLang(l.code); setOpen(false); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    width: '100%', padding: '8px 10px', borderRadius: 8,
                    background: active ? `${P.accent}22` : 'transparent',
                    border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                    color: active ? P.accent2 : P.text,
                    fontSize: 12.5, fontWeight: active ? 800 : 600, textAlign: 'left',
                  }}>
                  <span style={{ fontSize: 14 }}>{l.flag}</span>
                  <span style={{ flex: 1 }}>{l.label}</span>
                  {active && <span style={{ fontSize: 11 }}>✓</span>}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// ─── UI: pop-up de primera visita (centrado) ───────────────────────────────
// onChosen(code) -> el usuario eligió idioma; onClose() -> cerró sin elegir (queda 'es')
function LangModal({ onChosen, onClose }) {
  const P = window.PALETTE;
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 100,
      background: 'rgba(10,17,24,0.82)',
      backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20,
    }}>
      <div className="lp-pop" style={{
        position: 'relative',
        width: '100%', maxWidth: 380,
        background: `linear-gradient(180deg, ${P.bg2}, ${P.bg})`,
        borderRadius: 22,
        border: `1px solid ${P.text}14`,
        boxShadow: '0 24px 60px -16px rgba(0,0,0,0.8)',
        padding: '22px 18px 18px',
        fontFamily: '"Space Grotesk", -apple-system, system-ui, sans-serif',
        color: P.text,
      }}>
        {/* Botón cerrar (queda en español por defecto) */}
        <button onClick={() => onClose && onClose()} className="touchable" aria-label="Cerrar" style={{
          position: 'absolute', top: 12, right: 12,
          width: 30, height: 30, borderRadius: 999,
          background: P.ov(0.08), border: `1px solid ${P.text}15`,
          color: P.text, cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 700, lineHeight: 1,
        }}>✕</button>

        <div style={{ textAlign: 'center', marginBottom: 4 }}>
          <div style={{ fontSize: 30 }}>🌐</div>
          <div style={{ fontSize: 19, fontWeight: 900, letterSpacing: -0.5, marginTop: 8, lineHeight: 1.25, padding: '0 8px' }}>
            ¿En qué idioma quieres disfrutar La Porra?
          </div>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: P.muted, marginTop: 6 }}>
            Podrás cambiarlo cuando quieras
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 16 }}>
          {LP_LANGS.map(l => (
            <button key={l.code} className="touchable"
              onClick={() => { setLang(l.code); onChosen && onChosen(l.code); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 9,
                padding: '12px 12px', borderRadius: 13,
                background: P.surface, border: `1px solid ${P.text}14`,
                cursor: 'pointer', fontFamily: 'inherit', color: P.text,
                fontSize: 13.5, fontWeight: 700, textAlign: 'left',
              }}>
              <span style={{ fontSize: 18 }}>{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { LP_LANGS, I18N, t, getLang, setLang, LangMenu, LangModal });
