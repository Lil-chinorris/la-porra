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
  'CAMPEONATO 2026': { gl: 'CAMPIONATO 2026', ca: 'CAMPIONAT 2026', en: '2026 CHAMPIONSHIP', fil: 'KAMPEONATO 2026', de: 'MEISTERSCHAFT 2026' },
  'Palmarés': { gl: 'Palmarés', ca: 'Palmarès', en: 'Honours', fil: 'Mga Parangal', de: 'Erfolge' },
  'Desafíos': { gl: 'Desafíos', ca: 'Reptes', en: 'Challenges', fil: 'Mga Hamon', de: 'Challenges' },
  'Consigue más con La Porra Pro': { gl: 'Consegue máis con La Porra Pro', ca: 'Aconsegueix més amb La Porra Pro', en: 'Get more with La Porra Pro', fil: 'Higit pa sa La Porra Pro', de: 'Mehr mit La Porra Pro' },
  'Actualizar': { gl: 'Actualizar', ca: 'Actualitza', en: 'Upgrade', fil: 'Mag-upgrade', de: 'Upgraden' },
  'Pilotos': { gl: 'Pilotos', ca: 'Pilots', en: 'Drivers', fil: 'Mga Driver', de: 'Fahrer' },
  'Equipos': { gl: 'Equipos', ca: 'Equips', en: 'Teams', fil: 'Mga Koponan', de: 'Teams' },
  'General': { gl: 'Xeral', ca: 'General', en: 'Overall', fil: 'Pangkalahatan', de: 'Gesamt' },
  'Últ.': { gl: 'Últ.', ca: 'Últ.', en: 'Last', fil: 'Huli', de: 'Letzte' },
  'Próx.': { gl: 'Próx.', ca: 'Pròx.', en: 'Next', fil: 'Susunod', de: 'Nächste' },
  'CARRERA': { gl: 'CARREIRA', ca: 'CURSA', en: 'RACE', fil: 'KARERA', de: 'RENNEN' },
  'Ver resultados': { gl: 'Ver resultados', ca: 'Veure resultats', en: 'See results', fil: 'Tingnan ang resulta', de: 'Ergebnisse ansehen' },
  'PRÓXIMA · CARRERA': { gl: 'PRÓXIMA · CARREIRA', ca: 'PROPERA · CURSA', en: 'NEXT · RACE', fil: 'SUSUNOD · KARERA', de: 'NÄCHSTES RENNEN' },
  'Normas de la porra': { gl: 'Normas da porra', ca: 'Normes de la porra', en: 'La Porra rulebook', fil: 'Mga patakaran ng porra', de: 'Porra-Regeln' },
  'culo': { gl: 'cu', ca: 'cul', en: 'ass', fil: 'puwit', de: 'Arsch' },
  'piloto': { gl: 'piloto', ca: 'pilot', en: 'driver', fil: 'driver', de: 'Fahrer' },
  'pilotos': { gl: 'pilotos', ca: 'pilots', en: 'drivers', fil: 'mga driver', de: 'Fahrer' },
  'tot.': { gl: 'tot.', ca: 'tot.', en: 'tot.', fil: 'tot.', de: 'ges.' },

  // ── Selector de idioma ──
  '¿En qué idioma quieres disfrutar La Porra?': { gl: 'En que idioma queres gozar La Porra?', ca: 'En quin idioma vols gaudir La Porra?', en: 'Which language would you like to enjoy La Porra in?', fil: 'Anong wika ang gusto mong i-enjoy ang La Porra?', de: 'In welcher Sprache möchtest du La Porra genießen?' },
  'Podrás cambiarlo cuando quieras': { gl: 'Poderás cambialo cando queiras', ca: 'Podràs canviar-lo quan vulguis', en: 'You can change it anytime', fil: 'Maaari mo itong baguhin anumang oras', de: 'Du kannst sie jederzeit ändern' },
  'Idioma': { gl: 'Idioma', ca: 'Idioma', en: 'Language', fil: 'Wika', de: 'Sprache' },

  // ── Ficha piloto ──
  'PILOTO': { gl: 'PILOTO', ca: 'PILOT', en: 'DRIVER', fil: 'DRIVER', de: 'FAHRER' },
  'POSICIÓN': { gl: 'POSICIÓN', ca: 'POSICIÓ', en: 'POSITION', fil: 'POSISYON', de: 'POSITION' },
  'PUNTOS': { gl: 'PUNTOS', ca: 'PUNTS', en: 'POINTS', fil: 'PUNTOS', de: 'PUNKTE' },
  '= sin cambio': { gl: '= sen cambios', ca: '= sense canvis', en: '= no change', fil: '= walang pagbabago', de: '= unverändert' },
  'Estado de forma · últimas {n} carreras': { gl: 'Estado de forma · últimas {n} carreiras', ca: 'Estat de forma · darreres {n} curses', en: 'Form guide · last {n} races', fil: 'Porma · huling {n} karera', de: 'Formkurve · letzte {n} Rennen' },
  'PUNTOS · ÚLT. {n}': { gl: 'PUNTOS · ÚLT. {n}', ca: 'PUNTS · DARR. {n}', en: 'POINTS · LAST {n}', fil: 'PUNTOS · HULING {n}', de: 'PUNKTE · LETZTE {n}' },
  'Criterio de desempate': { gl: 'Criterio de desempate', ca: 'Criteri de desempat', en: 'Tiebreaker', fil: 'Pamantayan sa tabla', de: 'Tiebreak-Kriterium' },
  'Carreras': { gl: 'Carreiras', ca: 'Curses', en: 'Races', fil: 'Mga Karera', de: 'Rennen' },
  'Carrera {n}': { gl: 'Carreira {n}', ca: 'Cursa {n}', en: 'Race {n}', fil: 'Karera {n}', de: 'Rennen {n}' },
  'Compañeros': { gl: 'Compañeiros', ca: 'Companys', en: 'Teammates', fil: 'Mga kakampi', de: 'Teamkollegen' },
  'Campeón': { gl: 'Campión', ca: 'Campió', en: 'Champion', fil: 'Kampeon', de: 'Champion' },
  'Título': { gl: 'Título', ca: 'Títol', en: 'Title', fil: 'Titulo', de: 'Titel' },
  'V. rápida': { gl: 'V. rápida', ca: 'V. ràpida', en: 'F. lap', fil: 'Pinakamabilis', de: 'S. Runde' },

  // ── Ficha equipo ──
  'EQUIPO': { gl: 'EQUIPO', ca: 'EQUIP', en: 'TEAM', fil: 'KOPONAN', de: 'TEAM' },
  'Mejor hist.': { gl: 'Mellor hist.', ca: 'Millor hist.', en: 'Best ever', fil: 'Pinakamahusay', de: 'Bestwert' },
  'Pilotos del equipo': { gl: 'Pilotos do equipo', ca: "Pilots de l'equip", en: 'Team drivers', fil: 'Mga driver ng koponan', de: 'Fahrer des Teams' },
  'Vs. resto de equipos': { gl: 'Vs. resto de equipos', ca: "Vs. resta d'equips", en: 'Vs. other teams', fil: 'Vs. ibang koponan', de: 'Vs. andere Teams' },
  'Última:': { gl: 'Última:', ca: 'Última:', en: 'Last:', fil: 'Huli:', de: 'Letzte:' },

  // ── Ficha carrera ──
  'FINALIZADA': { gl: 'FINALIZADA', ca: 'FINALITZADA', en: 'FINISHED', fil: 'TAPOS NA', de: 'BEENDET' },
  'RESULTADO OFICIAL · TOP 5': { gl: 'RESULTADO OFICIAL · TOP 5', ca: 'RESULTAT OFICIAL · TOP 5', en: 'OFFICIAL RESULT · TOP 5', fil: 'OPISYAL NA RESULTA · TOP 5', de: 'OFFIZIELLES ERGEBNIS · TOP 5' },
  'PILOTO DE LA SEMANA': { gl: 'PILOTO DA SEMANA', ca: 'PILOT DE LA SETMANA', en: 'DRIVER OF THE WEEK', fil: 'DRIVER NG LINGGO', de: 'FAHRER DER WOCHE' },
  'VUELTA RÁPIDA': { gl: 'VOLTA RÁPIDA', ca: 'VOLTA RÀPIDA', en: 'FASTEST LAP', fil: 'PINAKAMABILIS NA LAP', de: 'SCHNELLSTE RUNDE' },
  'posición': { gl: 'posición', ca: 'posició', en: 'position', fil: 'posisyon', de: 'Position' },

  // ── Próxima carrera ──
  'Añadir': { gl: 'Engadir', ca: 'Afegir', en: 'Add', fil: 'Idagdag', de: 'Hinzufügen' },
  'NO TE OLVIDES': { gl: 'NON O ESQUEZAS', ca: "NO TE N'OBLIDIS", en: "DON'T FORGET", fil: 'HUWAG KALIMUTAN', de: 'NICHT VERGESSEN' },
  'Hora límite envío de la porra': { gl: 'Hora límite para enviar a porra', ca: 'Hora límit per enviar la porra', en: 'Porra submission deadline', fil: 'Deadline ng pagpapasa ng porra', de: 'Abgabefrist für die Porra' },
  'Domingo 14 de junio · 14:59': { gl: 'Domingo 14 de xuño · 14:59', ca: 'Diumenge 14 de juny · 14:59', en: 'Sunday June 14 · 14:59', fil: 'Linggo, Hunyo 14 · 14:59', de: 'Sonntag, 14. Juni · 14:59' },
  'Horarios del GP': { gl: 'Horarios do GP', ca: 'Horaris del GP', en: 'GP schedule', fil: 'Iskedyul ng GP', de: 'GP-Zeitplan' },
  'Viernes 12 de junio': { gl: 'Venres 12 de xuño', ca: 'Divendres 12 de juny', en: 'Friday June 12', fil: 'Biyernes, Hunyo 12', de: 'Freitag, 12. Juni' },
  'Sábado 13 de junio': { gl: 'Sábado 13 de xuño', ca: 'Dissabte 13 de juny', en: 'Saturday June 13', fil: 'Sabado, Hunyo 13', de: 'Samstag, 13. Juni' },
  'Domingo 14 de junio': { gl: 'Domingo 14 de xuño', ca: 'Diumenge 14 de juny', en: 'Sunday June 14', fil: 'Linggo, Hunyo 14', de: 'Sonntag, 14. Juni' },
  'Entrenamientos Libres 1 (FP1)': { gl: 'Adestramentos Libres 1 (FP1)', ca: 'Entrenaments Lliures 1 (FP1)', en: 'Free Practice 1 (FP1)', fil: 'Free Practice 1 (FP1)', de: 'Freies Training 1 (FP1)' },
  'Entrenamientos Libres 2 (FP2)': { gl: 'Adestramentos Libres 2 (FP2)', ca: 'Entrenaments Lliures 2 (FP2)', en: 'Free Practice 2 (FP2)', fil: 'Free Practice 2 (FP2)', de: 'Freies Training 2 (FP2)' },
  'Entrenamientos Libres 3 (FP3)': { gl: 'Adestramentos Libres 3 (FP3)', ca: 'Entrenaments Lliures 3 (FP3)', en: 'Free Practice 3 (FP3)', fil: 'Free Practice 3 (FP3)', de: 'Freies Training 3 (FP3)' },
  'Clasificación': { gl: 'Clasificación', ca: 'Classificació', en: 'Qualifying', fil: 'Qualifying', de: 'Qualifying' },
  'Carrera': { gl: 'Carreira', ca: 'Cursa', en: 'Race', fil: 'Karera', de: 'Rennen' },
  '* Horario peninsular español': { gl: '* Horario peninsular español', ca: '* Horari peninsular espanyol', en: '* Spanish mainland time', fil: '* Oras ng Espanya (peninsular)', de: '* Spanische Festlandzeit' },
  'Datos del circuito': { gl: 'Datos do circuíto', ca: 'Dades del circuit', en: 'Circuit facts', fil: 'Datos ng circuit', de: 'Strecken-Daten' },
  'Longitud': { gl: 'Lonxitude', ca: 'Longitud', en: 'Length', fil: 'Haba', de: 'Länge' },
  'Vueltas': { gl: 'Voltas', ca: 'Voltes', en: 'Laps', fil: 'Mga lap', de: 'Runden' },
  'Curvas': { gl: 'Curvas', ca: 'Revolts', en: 'Corners', fil: 'Mga kurba', de: 'Kurven' },
  'Ediciones': { gl: 'Edicións', ca: 'Edicions', en: 'Editions', fil: 'Mga edisyon', de: 'Austragungen' },
  'Primera carrera': { gl: 'Primeira carreira', ca: 'Primera cursa', en: 'First race', fil: 'Unang karera', de: 'Erstes Rennen' },
  'Récord vuelta': { gl: 'Récord de volta', ca: 'Rècord de volta', en: 'Lap record', fil: 'Lap record', de: 'Rundenrekord' },
  'Récords en {name}': { gl: 'Récords en {name}', ca: 'Rècords a {name}', en: 'Records at {name}', fil: 'Mga record sa {name}', de: 'Rekorde in {name}' },
  'Más victorias': { gl: 'Máis vitorias', ca: 'Més victòries', en: 'Most wins', fil: 'Pinakamaraming panalo', de: 'Meiste Siege' },
  'Récord vuelta rápida': { gl: 'Récord de volta rápida', ca: 'Rècord de volta ràpida', en: 'Fastest lap record', fil: 'Record ng pinakamabilis na lap', de: 'Rundenrekord' },
  'Empatado con {x}': { gl: 'Empatado con {x}', ca: 'Empatat amb {x}', en: 'Tied with {x}', fil: 'Tabla kay {x}', de: 'Gleichauf mit {x}' },
  'Datos curiosos': { gl: 'Datos curiosos', ca: 'Curiositats', en: 'Fun facts', fil: 'Trivia', de: 'Fun Facts' },
  'Mejor de la porra · histórico {name}': { gl: 'Mellor da porra · histórico {name}', ca: 'Millor de la porra · històric {name}', en: 'Porra best · {name} history', fil: 'Pinakamahusay sa porra · {name}', de: 'Porra-Beste · Historie {name}' },

  // Datos curiosos de Barcelona
  'Los equipos lo conocen de memoria: durante décadas fue EL circuito de test de pretemporada de la F1.': {
    gl: 'Os equipos coñéceno de memoria: durante décadas foi O circuíto de test de pretempada da F1.',
    ca: "Els equips el coneixen de memòria: durant dècades va ser EL circuit de test de pretemporada de l'F1.",
    en: 'Teams know it by heart: for decades it was THE pre-season testing circuit of F1.',
    fil: 'Kabisado ito ng mga koponan: ilang dekada itong naging PANGUNAHING testing circuit ng F1.',
    de: 'Die Teams kennen sie auswendig: Jahrzehntelang war sie DIE Teststrecke der F1-Wintertests.' },
  'Se dice que un coche que va bien en Montmeló va bien en todas partes: tiene curvas de todos los tipos.': {
    gl: 'Dise que un coche que vai ben en Montmeló vai ben en todas partes: ten curvas de todos os tipos.',
    ca: 'Es diu que un cotxe que va bé a Montmeló va bé a tot arreu: té revolts de tota mena.',
    en: 'They say a car that works at Montmeló works everywhere: it has every type of corner.',
    fil: 'Sabi nila, ang kotseng mahusay sa Montmeló ay mahusay kahit saan: may lahat ng uri ng kurba.',
    de: 'Man sagt: Ein Auto, das in Montmeló funktioniert, funktioniert überall – hier gibt es jede Art von Kurve.' },
  'La curva 3, larguísima y de derechas, es una de las que más castiga el neumático delantero izquierdo de todo el calendario.': {
    gl: 'A curva 3, longuísima e de dereitas, é unha das que máis castiga o pneumático dianteiro esquerdo de todo o calendario.',
    ca: 'El revolt 3, llarguíssim i de dretes, és un dels que més castiga el pneumàtic davanter esquerre de tot el calendari.',
    en: 'Turn 3, an endless right-hander, is one of the hardest on the front-left tyre in the whole calendar.',
    fil: 'Ang Turn 3, mahabang kanang kurba, ay isa sa pinakamabigat sa front-left tire sa buong kalendaryo.',
    de: 'Kurve 3, eine endlos lange Rechtskurve, beansprucht den linken Vorderreifen wie kaum eine andere im Kalender.' },
  'En 2023 se eliminó la chicane final y volvió el trazado original: dos curvas rápidas de derechas para cerrar la vuelta.': {
    gl: 'En 2023 eliminouse a chicane final e volveu o trazado orixinal: dúas curvas rápidas de dereitas para pechar a volta.',
    ca: "El 2023 es va eliminar la xicana final i va tornar el traçat original: dos revolts ràpids de dretes per tancar la volta.",
    en: 'In 2023 the final chicane was removed and the original layout returned: two fast right-handers to close the lap.',
    fil: 'Noong 2023 inalis ang huling chicane at bumalik ang orihinal na layout: dalawang mabilis na kanang kurba sa dulo ng lap.',
    de: '2023 wurde die letzte Schikane entfernt und das Original-Layout kehrte zurück: zwei schnelle Rechtskurven zum Rundenende.' },
  'El viento cambia mucho el comportamiento del coche aquí: por la tarde suele girar y desestabiliza la frenada de la curva 1.': {
    gl: 'O vento cambia moito o comportamento do coche aquí: pola tarde adoita xirar e desestabiliza a freada da curva 1.',
    ca: "El vent canvia molt el comportament del cotxe aquí: a la tarda sol girar i desestabilitza la frenada del revolt 1.",
    en: 'Wind changes the car balance a lot here: it tends to shift in the afternoon, destabilising braking into Turn 1.',
    fil: 'Malaki ang epekto ng hangin dito: madalas itong umiiba sa hapon at nakakasira ng preno papasok ng Turn 1.',
    de: 'Der Wind verändert hier die Balance stark: Nachmittags dreht er oft und destabilisiert die Anbremszone von Kurve 1.' },

  // ── Palmarés ──
  'PALMARÉS · 2021 — 2025': { gl: 'PALMARÉS · 2021 — 2025', ca: 'PALMARÈS · 2021 — 2025', en: 'HONOURS · 2021 — 2025', fil: 'MGA PARANGAL · 2021 — 2025', de: 'ERFOLGE · 2021 — 2025' },
  'Campeones, equipos y GP de la Porra': { gl: 'Campións, equipos e GP da Porra', ca: 'Campions, equips i GP de la Porra', en: 'Champions, teams & the Porra GP', fil: 'Mga kampeon, koponan at Porra GP', de: 'Champions, Teams & Porra-GP' },
  'Mundial de pilotos': { gl: 'Mundial de pilotos', ca: 'Mundial de pilots', en: "Drivers' championship", fil: 'Kampeonato ng mga driver', de: 'Fahrer-WM' },
  'Mundial de constructores': { gl: 'Mundial de construtores', ca: 'Mundial de constructors', en: "Constructors' championship", fil: 'Kampeonato ng mga koponan', de: 'Konstrukteurs-WM' },
  'Tabla final por temporada': { gl: 'Táboa final por tempada', ca: 'Taula final per temporada', en: 'Final standings by season', fil: 'Huling talaan kada season', de: 'Endstand pro Saison' },
  'Salón de la fama · equipos históricos': { gl: 'Salón da fama · equipos históricos', ca: 'Saló de la fama · equips històrics', en: 'Hall of fame · past teams', fil: 'Hall of fame · mga dating koponan', de: 'Hall of Fame · historische Teams' },
  '{n} equipos han competido desde 2021': { gl: '{n} equipos competiron desde 2021', ca: '{n} equips han competit des de 2021', en: '{n} teams have competed since 2021', fil: '{n} koponan ang nakipagkumpitensya mula 2021', de: '{n} Teams sind seit 2021 angetreten' },
  '🏁 Carrera presencial anual de karting entre los participantes.': { gl: '🏁 Carreira presencial anual de karting entre os participantes.', ca: '🏁 Cursa presencial anual de kàrting entre els participants.', en: '🏁 Annual in-person karting race between participants.', fil: '🏁 Taunang karting race ng mga kalahok.', de: '🏁 Jährliches Kart-Rennen aller Teilnehmer vor Ort.' },
  'CAMPEÓN': { gl: 'CAMPIÓN', ca: 'CAMPIÓ', en: 'CHAMPION', fil: 'KAMPEON', de: 'CHAMPION' },
  'Vuelta rápida': { gl: 'Volta rápida', ca: 'Volta ràpida', en: 'Fastest lap', fil: 'Pinakamabilis na lap', de: 'Schnellste Runde' },
  'Mejores tiempos': { gl: 'Mellores tempos', ca: 'Millors temps', en: 'Best times', fil: 'Pinakamahusay na oras', de: 'Bestzeiten' },
  'En seco': { gl: 'En seco', ca: 'En sec', en: 'Dry', fil: 'Tuyo', de: 'Trocken' },
  'En mojado': { gl: 'En mollado', ca: 'En mullat', en: 'Wet', fil: 'Basa', de: 'Nass' },
  'VIGENTE': { gl: 'VIXENTE', ca: 'VIGENT', en: 'REIGNING', fil: 'KASALUKUYAN', de: 'AKTUELL' },
  'Sin datos disponibles': { gl: 'Sen datos dispoñibles', ca: 'Sense dades disponibles', en: 'No data available', fil: 'Walang datos', de: 'Keine Daten verfügbar' },

  // ── La Porra Pro ──
  'LA PORRA PRO': {},
  'Obtén más de La Porra': { gl: 'Obtén máis de La Porra', ca: 'Obtén més de La Porra', en: 'Get more out of La Porra', fil: 'Kunin ang higit pa sa La Porra', de: 'Hol mehr aus La Porra raus' },
  'Elige el plan que mejor se adapte a ti': { gl: 'Elixe o plan que mellor se adapte a ti', ca: "Tria el pla que millor s'adapti a tu", en: 'Choose the plan that suits you best', fil: 'Piliin ang planong bagay sa iyo', de: 'Wähle den Plan, der zu dir passt' },
  'Mensual': { gl: 'Mensual', ca: 'Mensual', en: 'Monthly', fil: 'Buwanan', de: 'Monatlich' },
  'Anual': { gl: 'Anual', ca: 'Anual', en: 'Yearly', fil: 'Taunan', de: 'Jährlich' },
  'AHORRA': { gl: 'AFORRA', ca: 'ESTALVIA', en: 'SAVE', fil: 'TIPID', de: 'SPAREN' },
  'EL MÁS ELEGIDO': { gl: 'O MÁIS ELIXIDO', ca: 'EL MÉS TRIAT', en: 'MOST POPULAR', fil: 'PINAKASIKAT', de: 'AM BELIEBTESTEN' },
  'al mes': { gl: 'ao mes', ca: 'al mes', en: 'per month', fil: 'kada buwan', de: 'pro Monat' },
  'al año': { gl: 'ao ano', ca: "a l'any", en: 'per year', fil: 'kada taon', de: 'pro Jahr' },
  'Para ponértelo un poco más fácil': { gl: 'Para poñercho un pouco máis fácil', ca: "Per posar-t'ho una mica més fàcil", en: 'To make things a little easier for you', fil: 'Para mas mapadali ang buhay mo', de: 'Damit du es etwas leichter hast' },
  'Para los más necesitados': { gl: 'Para os máis necesitados', ca: 'Per als més necessitats', en: 'For the truly desperate', fil: 'Para sa mga sadyang nangangailangan', de: 'Für die ganz Verzweifelten' },
  '1€ bizum al chino': { gl: '1€ bizum ao chino', ca: '1€ bizum al chino', en: '€1 Bizum to el chino', fil: '1€ bizum kay chino', de: '1€ Bizum an den Chino' },
  '9€ bizum al chino': { gl: '9€ bizum ao chino', ca: '9€ bizum al chino', en: '€9 Bizum to el chino', fil: '9€ bizum kay chino', de: '9€ Bizum an den Chino' },
  '10€ bizum al chino': { gl: '10€ bizum ao chino', ca: '10€ bizum al chino', en: '€10 Bizum to el chino', fil: '10€ bizum kay chino', de: '10€ Bizum an den Chino' },
  '45€ bizum al chino': { gl: '45€ bizum ao chino', ca: '45€ bizum al chino', en: '€45 Bizum to el chino', fil: '45€ bizum kay chino', de: '45€ Bizum an den Chino' },
  'Obtener Plan Pro': { gl: 'Obter o Plan Pro', ca: 'Obtenir el Pla Pro', en: 'Get the Pro Plan', fil: 'Kunin ang Pro Plan', de: 'Pro-Plan holen' },
  'Obtener Plan Max': { gl: 'Obter o Plan Max', ca: 'Obtenir el Pla Max', en: 'Get the Max Plan', fil: 'Kunin ang Max Plan', de: 'Max-Plan holen' },
  'El chino se pone de tu parte si quieres cambiar alguna norma o lo que sea': { gl: 'O chino ponse da túa parte se queres cambiar algunha norma ou o que sexa', ca: 'El chino es posa de la teva part si vols canviar alguna norma o el que sigui', en: 'El chino takes your side if you want to change a rule or whatever', fil: 'Papanig sa iyo si chino kung gusto mong baguhin ang anumang patakaran', de: 'Der Chino schlägt sich auf deine Seite, wenn du eine Regel ändern willst' },
  'Si cometes algún error al enviar la porra, digamos que se te hace la vista gorda': { gl: 'Se cometes algún erro ao enviar a porra, digamos que se che fai a vista gorda', ca: "Si comets algun error en enviar la porra, diguem que es fa la vista grossa", en: 'If you make a mistake sending your porra, let’s say we look the other way', fil: 'Kung magkamali ka sa pagpapasa ng porra, sabihin nating papalampasin ito', de: 'Wenn dir beim Abschicken der Porra ein Fehler passiert, drücken wir mal ein Auge zu' },
  'Alterar los resultados de carreras anteriores cuando nadie se dé cuenta para sumar más puntos': { gl: 'Alterar os resultados de carreiras anteriores cando ninguén se decate para sumar máis puntos', ca: "Alterar els resultats de curses anteriors quan ningú se n'adoni per sumar més punts", en: 'Alter past race results when nobody is looking to gain extra points', fil: 'Baguhin ang resulta ng mga nakaraang karera kapag walang nakatingin para makadagdag ng puntos', de: 'Ergebnisse vergangener Rennen heimlich ändern, um mehr Punkte zu kassieren' },
  'Errores al sumar puntos que casualmente te benefician, salvo que los detecte alguien': { gl: 'Erros ao sumar puntos que casualmente te benefician, salvo que os detecte alguén', ca: 'Errors en sumar punts que casualment et beneficien, tret que algú els detecti', en: 'Point-counting mistakes that happen to favour you, unless someone catches them', fil: 'Mga pagkakamali sa pagbilang na nagkataong pabor sa iyo, maliban kung may makahuli', de: 'Rechenfehler, die zufällig zu deinen Gunsten ausfallen – außer jemand merkt es' },
  'Trucar el desempate a tu favor': { gl: 'Trucar o desempate ao teu favor', ca: 'Trucar el desempat a favor teu', en: 'Rig the tiebreaker in your favour', fil: 'Dayain ang tiebreaker pabor sa iyo', de: 'Den Tiebreak zu deinen Gunsten manipulieren' },
  'Pago vía bizum al chino. Sin reembolsos, sin vergüenza, sin honor.': { gl: 'Pago vía bizum ao chino. Sen reembolsos, sen vergoña, sen honor.', ca: 'Pagament via bizum al chino. Sense reemborsaments, sense vergonya, sense honor.', en: 'Payment via Bizum to el chino. No refunds, no shame, no honour.', fil: 'Bayad sa pamamagitan ng bizum kay chino. Walang refund, walang hiya, walang dangal.', de: 'Zahlung per Bizum an den Chino. Keine Rückerstattung, keine Scham, keine Ehre.' },
  'Lo he entendido, me retiro': { gl: 'Entendido, retírome', ca: 'Ho he entès, em retiro', en: "Understood, I'll see myself out", fil: 'Naiintindihan ko, aalis na ako', de: 'Verstanden, ich ziehe mich zurück' },
  'Comunicado oficial': { gl: 'Comunicado oficial', ca: 'Comunicat oficial', en: 'Official statement', fil: 'Opisyal na pahayag', de: 'Offizielle Mitteilung' },
  'Oda a la rata': { gl: 'Oda á rata', ca: 'Oda a la rata', en: 'Ode to the rat', fil: 'Oda sa daga', de: 'Ode an die Ratte' },
  // Comunicado Pro (acusatorio)
  'Vaya, vaya. Así que querías PAGAR para inclinar la balanza a tu favor.': { gl: 'Vaia, vaia. Así que querías PAGAR para inclinar a balanza ao teu favor.', ca: 'Vaja, vaja. Així que volies PAGAR per inclinar la balança a favor teu.', en: 'Well, well. So you wanted to PAY to tip the scales in your favour.', fil: 'Aba, aba. Gusto mo palang MAGBAYAD para kumiling sa iyo ang timbangan.', de: 'Sieh an. Du wolltest also BEZAHLEN, um die Waage zu deinen Gunsten zu neigen.' },
  'Intentar comprar ventaja en una competición justa es, sencillamente, RASTRERO. Va en contra de todo lo que representa La Porra: el honor, la cuñadez y el sufrimiento compartido.': { gl: 'Intentar mercar vantaxe nunha competición xusta é, sinxelamente, RASTREIRO. Vai en contra de todo o que representa La Porra: o honor, a cuñadez e o sufrimento compartido.', ca: "Intentar comprar avantatge en una competició justa és, senzillament, RASTRER. Va en contra de tot el que representa La Porra: l'honor, el cunyadisme i el patiment compartit.", en: 'Trying to buy an advantage in a fair competition is, simply put, SLEAZY. It goes against everything La Porra stands for: honour, uncle-at-dinner energy and shared suffering.', fil: 'Ang pagbili ng bentahe sa patas na kumpetisyon ay simpleng KADIRI. Salungat ito sa lahat ng pinaninindigan ng La Porra: dangal, kayabangan at sama-samang paghihirap.', de: 'Sich in einem fairen Wettbewerb einen Vorteil kaufen zu wollen ist schlicht SCHÄBIG. Es widerspricht allem, wofür La Porra steht: Ehre, Stammtisch-Weisheit und geteiltes Leid.' },
  'Que sepas que tu intento ha quedado registrado. Esto será comunicado al resto del grupo en el chat, con capturas, para que todos sepan la clase de persona que tenemos entre nosotros.': { gl: 'Que saibas que o teu intento quedou rexistrado. Isto será comunicado ao resto do grupo no chat, con capturas, para que todos saiban a clase de persoa que temos entre nós.', ca: "Que sàpigues que el teu intent ha quedat registrat. Això es comunicarà a la resta del grup al xat, amb captures, perquè tothom sàpiga la mena de persona que tenim entre nosaltres.", en: 'Know that your attempt has been logged. This will be reported to the rest of the group chat, with screenshots, so everyone knows what kind of person walks among us.', fil: 'Alamin mong naitala ang tangka mo. Ibabalita ito sa group chat, may kalakip na screenshot, para malaman ng lahat kung anong klaseng tao ka.', de: 'Du sollst wissen: Dein Versuch wurde protokolliert. Das wird der Gruppe im Chat mitgeteilt – mit Screenshots, damit alle wissen, was für eine Person unter uns ist.' },
  'La Porra no se compra. La Porra se sufre.': { gl: 'La Porra non se merca. La Porra súfrese.', ca: 'La Porra no es compra. La Porra es pateix.', en: "You don't buy La Porra. You suffer it.", fil: 'Hindi binibili ang La Porra. Pinagdurusahan ito.', de: 'La Porra kauft man nicht. La Porra erleidet man.' },
  '— La Comisión de Integridad de La Porra': { gl: '— A Comisión de Integridade de La Porra', ca: '— La Comissió d’Integritat de La Porra', en: '— The La Porra Integrity Committee', fil: '— Ang Komite ng Integridad ng La Porra', de: '— Die Integritätskommission von La Porra' },
  // Poema Max (traducción libre, manteniendo el tono)
  'Mírate, campeón de la miseria,': { gl: 'Mírate, campión da miseria,', ca: 'Mira’t, campió de la misèria,', en: 'Look at you, champion of misery,', fil: 'Tingnan mo ang sarili mo, kampeon ng kahirapan,', de: 'Sieh dich an, Champion des Elends,' },
  'queriendo el oro sin sudar la feria.': { gl: 'querendo o ouro sen suar a feira.', ca: 'volent l’or sense suar la fira.', en: 'wanting the gold without sweating the fair.', fil: 'gusto ng ginto nang hindi nagpapawis.', de: 'willst das Gold, ohne dafür zu schwitzen.' },
  'La rata más grande de todo el corral,': { gl: 'A rata máis grande de todo o curral,', ca: 'La rata més grossa de tot el corral,', en: 'The biggest rat in the whole barnyard,', fil: 'Ang pinakamalaking daga sa buong bakuran,', de: 'Die größte Ratte im ganzen Stall,' },
  'con bigote de Mao y moral de chacal.': { gl: 'con bigote de Mao e moral de chacal.', ca: 'amb bigoti de Mao i moral de xacal.', en: 'with Mao’s moustache and a jackal’s morals.', fil: 'may bigote ni Mao at moralidad ng asong-gubat.', de: 'mit Mao-Schnurrbart und Schakal-Moral.' },
  'Tu pequeño librito rojo y tu plan quinquenal': { gl: 'O teu pequeno libriño vermello e o teu plan quinquenal', ca: 'El teu petit llibret vermell i el teu pla quinquennal', en: 'Your little red book and your five-year plan', fil: 'Ang munting pulang libro mo at ang five-year plan mo', de: 'Dein kleines rotes Buch und dein Fünfjahresplan' },
  'no te darán los puntos, te saldrá fatal.': { gl: 'non che darán os puntos, sairáche fatal.', ca: 'no et donaran els punts, et sortirà fatal.', en: 'won’t earn you points, it will end in disaster.', fil: 'hindi magbibigay sa iyo ng puntos, sasablay ka.', de: 'bringen dir keine Punkte – das geht böse schief.' },
  'Que el pueblo te juzgue, camarada tramposo:': { gl: 'Que o pobo te xulgue, camarada tramposo:', ca: 'Que el poble et jutgi, camarada trampós:', en: 'Let the people judge you, comrade cheat:', fil: 'Hayaang husgahan ka ng bayan, kasamang mandaraya:', de: 'Das Volk soll dich richten, Genosse Betrüger:' },
  'no eres dictador, eres solo un quejoso.': { gl: 'non es ditador, es só un queixoso.', ca: 'no ets dictador, només ets un queixós.', en: 'you’re no dictator, just a whiner.', fil: 'hindi ka diktador, reklamador ka lang.', de: 'du bist kein Diktator, nur ein Nörgler.' },
  'Guárdate el bizum y aprende a perder,': { gl: 'Garda o bizum e aprende a perder,', ca: 'Guarda’t el bizum i aprèn a perdre,', en: 'Keep your Bizum and learn to lose,', fil: 'Itago mo ang bizum mo at matutong matalo,', de: 'Behalt dein Bizum und lern zu verlieren,' },
  'que la dignidad no se puede vender.': { gl: 'que a dignidade non se pode vender.', ca: 'que la dignitat no es pot vendre.', en: 'for dignity is not for sale.', fil: 'dahil ang dignidad ay hindi nabibili.', de: 'denn Würde kann man nicht verkaufen.' },
  '— Con cariño, La Porra': { gl: '— Con cariño, La Porra', ca: '— Amb afecte, La Porra', en: '— With love, La Porra', fil: '— Nagmamahal, La Porra', de: '— In Liebe, La Porra' },

  // ── Desafíos ──
  'LOGROS': { gl: 'LOGROS', ca: 'ASSOLIMENTS', en: 'ACHIEVEMENTS', fil: 'MGA TAGUMPAY', de: 'ERFOLGE' },
  'Trofeos por las gestas (y miserias) de la porra': { gl: 'Trofeos polas fazañas (e miserias) da porra', ca: 'Trofeus per les gestes (i misèries) de la porra', en: 'Trophies for porra feats (and misery)', fil: 'Mga tropeo para sa mga tagumpay (at kahihiyan) ng porra', de: 'Trophäen für Heldentaten (und Elend) der Porra' },
  'Termina entre los 3 primeros en una carrera de la porra.': { gl: 'Remata entre os 3 primeiros nunha carreira da porra.', ca: 'Acaba entre els 3 primers en una cursa de la porra.', en: 'Finish in the top 3 of a porra race.', fil: 'Pumasok sa top 3 ng isang karera ng porra.', de: 'Beende ein Porra-Rennen unter den Top 3.' },
  'Termina entre los 5 primeros en una carrera de la porra.': { gl: 'Remata entre os 5 primeiros nunha carreira da porra.', ca: 'Acaba entre els 5 primers en una cursa de la porra.', en: 'Finish in the top 5 of a porra race.', fil: 'Pumasok sa top 5 ng isang karera ng porra.', de: 'Beende ein Porra-Rennen unter den Top 5.' },
  'Haz un pleno: clava todos los puntos posibles en una carrera.': { gl: 'Fai un pleno: crava todos os puntos posibles nunha carreira.', ca: 'Fes un ple: clava tots els punts possibles en una cursa.', en: 'Score a perfect round: nail every possible point in a race.', fil: 'Perpektong round: makuha lahat ng posibleng puntos sa isang karera.', de: 'Volltreffer: Hole alle möglichen Punkte in einem Rennen.' },
  'Manda la porra el primero y sé quien más puntos hace en esa carrera.': { gl: 'Manda a porra o primeiro e sé quen máis puntos fai nesa carreira.', ca: 'Envia la porra el primer i sigues qui més punts fa en aquella cursa.', en: 'Submit your porra first and score the most points in that race.', fil: 'Ikaw ang unang magpasa ng porra at ikaw ang pinakamataas sa karerang iyon.', de: 'Reiche die Porra als Erster ein und hole die meisten Punkte in dem Rennen.' },
  'Tu compañero y tú sois los dos pilotos que más suman en una carrera.': { gl: 'O teu compañeiro e ti sodes os dous pilotos que máis suman nunha carreira.', ca: 'El teu company i tu sou els dos pilots que més sumen en una cursa.', en: 'You and your teammate are the two highest scorers in a race.', fil: 'Ikaw at ang kakampi mo ang dalawang pinakamataas sa isang karera.', de: 'Du und dein Teamkollege seid die zwei Topscorer eines Rennens.' },
  'Queda segundo en una clasificación general de la porra.': { gl: 'Queda segundo nunha clasificación xeral da porra.', ca: 'Queda segon en una classificació general de la porra.', en: 'Finish second in a porra season standings.', fil: 'Pumangalawa sa pangkalahatang talaan ng porra.', de: 'Werde Zweiter einer Porra-Gesamtwertung.' },
  'Detecta un error en las normas de la porra.': { gl: 'Detecta un erro nas normas da porra.', ca: 'Detecta un error a les normes de la porra.', en: 'Spot an error in the porra rulebook.', fil: 'Makakita ng mali sa mga patakaran ng porra.', de: 'Finde einen Fehler im Porra-Regelwerk.' },
  'Detecta un error en los puntos oficiales de la porra.': { gl: 'Detecta un erro nos puntos oficiais da porra.', ca: 'Detecta un error als punts oficials de la porra.', en: 'Spot an error in the official porra points.', fil: 'Makakita ng mali sa opisyal na puntos ng porra.', de: 'Finde einen Fehler in den offiziellen Porra-Punkten.' },
  'Haz trampas en el GP de la porra y sal de rositas.': { gl: 'Fai trampas no GP da porra e sae de rositas.', ca: "Fes trampes al GP de la porra i surt-ne d'estranquis.", en: 'Cheat at the Porra GP and get away with it.', fil: 'Mandaya sa Porra GP at makalusot.', de: 'Schummle beim Porra-GP und komm ungeschoren davon.' },
  'Lidera el mundial de la porra... pero no lo ganes.': { gl: 'Lidera o mundial da porra... pero non o gañes.', ca: 'Lidera el mundial de la porra... però no el guanyis.', en: 'Lead the porra championship... but don’t win it.', fil: 'Manguna sa kampeonato ng porra... pero huwag manalo.', de: 'Führe die Porra-WM an ... aber gewinne sie nicht.' },
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
        background: 'rgba(255,255,255,0.06)',
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
          background: 'rgba(255,255,255,0.08)', border: `1px solid ${P.text}15`,
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
