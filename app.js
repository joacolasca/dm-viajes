/* DM Viajes — lógica del sitio.
   Los datos (destinos, paquetes, preguntas) están arriba; la clase Component
   maneja el estado y devuelve los valores que usa la plantilla de index.html. */

class DCLogic {
  constructor(props) { this.props = props || {}; this.state = {}; }
  setState(patch) { Object.assign(this.state, typeof patch === 'function' ? patch(this.state) : patch); }
  forceUpdate() {}
}

var ART = {
  puntacana: { img: 'img/puntacana.jpg', alt: 'Vista aérea de una playa de Punta Cana' },
  rivieramaya: { img: 'img/rivieramaya.jpg', alt: 'Palmera frente al mar turquesa de la Riviera Maya' },
  aruba: { img: 'img/aruba.jpg', alt: 'Árbol sobre una playa de Aruba' },
  italia: { img: 'img/italia.jpg', alt: 'Positano sobre la Costa Amalfitana' },
  grecia: { img: 'img/grecia.jpg', alt: 'Casas blancas y cúpulas azules en Santorini' },
  espana: { img: 'img/espana.jpg', alt: 'Plaza de España en Sevilla' },
  maldivas: { img: 'img/maldivas.jpg', alt: 'Villas sobre el agua en Maldivas' },
  japon: { img: 'img/japon.jpg', alt: 'Pagoda con el monte Fuji de fondo' },
  tailandia: { img: 'img/tailandia.jpg', alt: 'Botes de madera en una playa de Tailandia' },
  orlando: { img: 'img/orlando.jpg', alt: 'Castillo en un parque temático de Orlando' },
  nuevayork: { img: 'img/nuevayork.jpg', alt: 'Puente de Brooklyn y el skyline de Nueva York' },
  canada: { img: 'img/canada.jpg', alt: 'Lago entre las Montañas Rocosas de Canadá' },
  egipto: { img: 'img/egipto.jpg', alt: 'Pirámide de Giza bajo el cielo azul' },
  turquia: { img: 'img/turquia.jpg', alt: 'Globos aerostáticos sobre Capadocia' },
  dubai: { img: 'img/dubai.jpg', alt: 'Skyline de Dubái' },
  peru: { img: 'img/peru.jpg', alt: 'Ruinas de Machu Picchu entre montañas' },
  patagonia: { img: 'img/patagonia.jpg', alt: 'Glaciar Perito Moreno en la Patagonia' },
  brasil: { img: 'img/brasil.jpg', alt: 'Vista aérea de Río de Janeiro' }
};

var REGIONS = [
  { id: 'caribe', name: 'Caribe', tag: 'Arena blanca, agua turquesa y all inclusive', art: 'puntacana' },
  { id: 'europa', name: 'Europa', tag: 'Historia, arte y ciudades para caminar', art: 'grecia' },
  { id: 'exoticos', name: 'Exóticos', tag: 'Culturas lejanas y paraísos remotos', art: 'maldivas' },
  { id: 'norteamerica', name: 'Norteamérica', tag: 'Parques, rascacielos y naturaleza gigante', art: 'nuevayork' },
  { id: 'medio-oriente', name: 'Medio Oriente', tag: 'Desiertos, bazares y civilizaciones milenarias', art: 'egipto' },
  { id: 'sudamerica', name: 'Sudamérica', tag: 'Montañas, glaciares y sabores cercanos', art: 'patagonia' }
];

var DESTS = [
  { id: 'puntacana', region: 'caribe', name: 'Punta Cana', country: 'República Dominicana', blurb: 'Resorts all inclusive frente a playas de arena blanca. Ideal para desconectar en familia o en pareja.', best: 'diciembre a abril', pkg: 'p-puntacana' },
  { id: 'rivieramaya', region: 'caribe', name: 'Riviera Maya', country: 'México', blurb: 'Playa del Carmen, Tulum y cenotes: playa caribeña con historia maya a pocos kilómetros.', best: 'noviembre a abril', pkg: 'p-rivieramaya' },
  { id: 'aruba', region: 'caribe', name: 'Aruba', country: 'Caribe neerlandés', blurb: 'Fuera de la ruta de huracanes, con playas tranquilas y atardeceres imperdibles.', best: 'todo el año', pkg: null },
  { id: 'italia', region: 'europa', name: 'Costa Amalfitana', country: 'Italia', blurb: 'Pueblos colgados sobre el mar, limoneros y la mejor cocina del sur italiano.', best: 'mayo a septiembre', pkg: 'p-italia' },
  { id: 'grecia', region: 'europa', name: 'Santorini y Mykonos', country: 'Grecia', blurb: 'Casas blancas, cúpulas azules y un Egeo perfecto para recorrer en ferry.', best: 'junio a septiembre', pkg: 'p-grecia' },
  { id: 'espana', region: 'europa', name: 'Madrid y Sevilla', country: 'España', blurb: 'Museos, tapas, flamenco y plazas monumentales en una ruta diseñada a medida.', best: 'abril a junio', pkg: null },
  { id: 'maldivas', region: 'exoticos', name: 'Maldivas', country: 'Océano Índico', blurb: 'Villas sobre el agua y arrecifes de coral: el clásico de las lunas de miel.', best: 'noviembre a abril', pkg: 'p-maldivas' },
  { id: 'japon', region: 'exoticos', name: 'Japón', country: 'Asia', blurb: 'Templos de Kioto, neones de Tokio y ryokans con vista al monte Fuji.', best: 'marzo a mayo', pkg: 'p-japon' },
  { id: 'tailandia', region: 'exoticos', name: 'Tailandia', country: 'Asia', blurb: 'Bangkok, templos del norte e islas de agua cálida en un mismo viaje.', best: 'noviembre a marzo', pkg: null },
  { id: 'orlando', region: 'norteamerica', name: 'Orlando', country: 'Estados Unidos', blurb: 'Parques temáticos para toda la familia, con itinerarios que evitan filas y cansancio.', best: 'todo el año', pkg: 'p-orlando' },
  { id: 'nuevayork', region: 'norteamerica', name: 'Nueva York', country: 'Estados Unidos', blurb: 'Museos, Broadway y barrios con personalidad propia. Siempre hay algo nuevo.', best: 'septiembre a diciembre', pkg: 'p-nyc' },
  { id: 'canada', region: 'norteamerica', name: 'Montañas Rocosas', country: 'Canadá', blurb: 'Lagos color esmeralda, glaciares y rutas escénicas en Banff y Jasper.', best: 'junio a septiembre', pkg: null },
  { id: 'egipto', region: 'medio-oriente', name: 'Egipto', country: 'El Cairo y el Nilo', blurb: 'Pirámides, templos y un crucero por el Nilo con guía en español.', best: 'octubre a abril', pkg: 'p-egipto' },
  { id: 'turquia', region: 'medio-oriente', name: 'Estambul y Capadocia', country: 'Turquía', blurb: 'Entre Europa y Asia: bazares, mezquitas y globos al amanecer.', best: 'abril a junio', pkg: 'p-turquia' },
  { id: 'dubai', region: 'medio-oriente', name: 'Dubái', country: 'Emiratos Árabes Unidos', blurb: 'Rascacielos, desierto y playas. Una escala que se convierte en destino.', best: 'noviembre a marzo', pkg: 'p-dubai' },
  { id: 'peru', region: 'sudamerica', name: 'Machu Picchu', country: 'Perú', blurb: 'Cusco, el Valle Sagrado y la ciudadela inca, con una de las mejores cocinas del mundo.', best: 'abril a octubre', pkg: 'p-peru' },
  { id: 'patagonia', region: 'sudamerica', name: 'Patagonia', country: 'Argentina', blurb: 'Glaciar Perito Moreno, senderos en El Chaltén y paisajes del fin del mundo.', best: 'octubre a abril', pkg: 'p-patagonia' },
  { id: 'brasil', region: 'sudamerica', name: 'Río y Búzios', country: 'Brasil', blurb: 'Playas, samba y naturaleza exuberante a pocas horas de Buenos Aires.', best: 'todo el año', pkg: null }
];

var PKGS = [
  { id: 'p-italia', region: 'europa', art: 'italia', title: 'Italia clásica y Costa Amalfitana', route: 'Roma, Florencia, Toscana, Positano y Capri', nights: 12, price: 4890, types: ['Cultura', 'Luna de miel'], comp: ['pareja', 'solo'], land: 'ciudad', pace: 'equilibrado',
    incl: ['Aéreo desde Buenos Aires', 'Hoteles 4 estrellas con desayuno', 'Trenes de alta velocidad entre ciudades', 'Traslado privado a Positano', 'Asistencia al viajero'],
    days: [{ d: 'Días 1 a 4', t: 'Roma', x: 'Coliseo y Museos Vaticanos con guía, Trastevere al atardecer.' }, { d: 'Días 5 a 8', t: 'Florencia y Toscana', x: 'Galería Uffizi y un día de viñedos en Chianti.' }, { d: 'Días 9 a 12', t: 'Costa Amalfitana', x: 'Positano, Amalfi y Capri en barco.' }, { d: 'Día 13', t: 'Regreso', x: 'Traslado al aeropuerto de Nápoles.' }] },
  { id: 'p-maldivas', region: 'exoticos', art: 'maldivas', title: 'Maldivas, luna de miel', route: 'Siete noches en una villa sobre el agua', nights: 7, price: 5900, types: ['Luna de miel', 'Playa'], comp: ['pareja'], land: 'playa', pace: 'descanso',
    incl: ['Aéreo desde Buenos Aires con una escala', '7 noches en villa sobre el agua con pensión completa', 'Traslado en hidroavión o lancha rápida', 'Cena privada en la playa', 'Asistencia al viajero'],
    days: [{ d: 'Días 1 y 2', t: 'Viaje y llegada', x: 'Vuelo con escala y traslado en hidroavión hasta el resort.' }, { d: 'Días 3 a 7', t: 'El atolón', x: 'Snorkel en el arrecife, spa y paseo en barco al atardecer.' }, { d: 'Día 8', t: 'Cena en la playa', x: 'Última noche con cena privada frente al mar.' }, { d: 'Día 9', t: 'Regreso', x: 'Traslado a Malé y vuelo a Buenos Aires.' }] },
  { id: 'p-peru', region: 'sudamerica', art: 'peru', title: 'Perú imperial', route: 'Lima, Cusco, Valle Sagrado y Machu Picchu', nights: 8, price: 2090, types: ['Aventura', 'Cultura'], comp: ['amigos', 'pareja', 'solo'], land: 'montana', pace: 'activo',
    incl: ['Aéreo desde Buenos Aires', 'Hoteles 3 y 4 estrellas con desayuno', 'Tren a Aguas Calientes', 'Entrada a Machu Picchu con guía', 'Traslados y asistencia al viajero'],
    days: [{ d: 'Días 1 y 2', t: 'Lima', x: 'Miraflores, Barranco y una noche gastronómica.' }, { d: 'Días 3 a 5', t: 'Cusco y Valle Sagrado', x: 'Pisac, Ollantaytambo y mercados locales, con tiempo para aclimatarse.' }, { d: 'Día 6', t: 'Machu Picchu', x: 'Tren panorámico y visita guiada a la ciudadela.' }, { d: 'Días 7 y 8', t: 'Cusco', x: 'Día libre o excursión opcional a la Montaña de Colores.' }] },
  { id: 'p-orlando', region: 'norteamerica', art: 'orlando', title: 'Orlando en familia', route: 'Walt Disney World, Universal y Kennedy Space Center', nights: 9, price: 3280, types: ['Familia'], comp: ['familia'], land: 'ciudad', pace: 'activo',
    incl: ['Aéreo desde Buenos Aires', 'Hotel en la zona de parques', '4 días en parques Disney y 2 en Universal', 'Auto de alquiler', 'Asistencia al viajero'],
    days: [{ d: 'Días 1 a 5', t: 'Walt Disney World', x: 'Magic Kingdom, EPCOT, Hollywood Studios y Animal Kingdom, con plan de atracciones por edad.' }, { d: 'Días 6 y 7', t: 'Universal Orlando', x: 'Islands of Adventure y Universal Studios.' }, { d: 'Días 8 y 9', t: 'Compras y espacio', x: 'Outlets y visita opcional a Kennedy Space Center.' }, { d: 'Día 10', t: 'Regreso', x: 'Devolución del auto y vuelo a Buenos Aires.' }] },
  { id: 'p-puntacana', region: 'caribe', art: 'puntacana', title: 'Punta Cana all inclusive', route: 'Resort 5 estrellas frente a Playa Bávaro', nights: 7, price: 2190, types: ['Playa', 'Familia', 'Luna de miel'], comp: ['pareja', 'familia'], land: 'playa', pace: 'descanso',
    incl: ['Aéreo desde Buenos Aires', '7 noches en resort 5 estrellas all inclusive', 'Traslados aeropuerto y hotel', 'Excursión a Isla Saona', 'Asistencia al viajero'],
    days: [{ d: 'Día 1', t: 'Llegada', x: 'Traslado y check-in frente al mar.' }, { d: 'Días 2 a 4', t: 'Playa Bávaro', x: 'Descanso, spa y deportes náuticos.' }, { d: 'Día 5', t: 'Isla Saona', x: 'Catamarán, piscina natural y almuerzo en la isla.' }, { d: 'Días 6 a 8', t: 'Libre y regreso', x: 'Cena de despedida y vuelo a Buenos Aires.' }] },
  { id: 'p-rivieramaya', region: 'caribe', art: 'rivieramaya', title: 'Riviera Maya esencial', route: 'Playa del Carmen, Chichén Itzá y Tulum', nights: 9, price: 2650, types: ['Playa', 'Cultura', 'Amigos'], comp: ['amigos', 'pareja'], land: 'playa', pace: 'equilibrado',
    incl: ['Aéreo desde Buenos Aires', '5 noches en Playa del Carmen y 4 en Tulum', 'Excursión a Chichén Itzá con cenote', 'Traslados', 'Asistencia al viajero'],
    days: [{ d: 'Días 1 a 5', t: 'Playa del Carmen', x: 'Quinta Avenida, playa y día opcional en Cozumel.' }, { d: 'Día 6', t: 'Chichén Itzá', x: 'Pirámide de Kukulcán y baño en el cenote Ik Kil.' }, { d: 'Días 7 a 9', t: 'Tulum', x: 'Ruinas frente al mar y beach clubs.' }, { d: 'Día 10', t: 'Regreso', x: 'Traslado al aeropuerto de Cancún.' }] },
  { id: 'p-grecia', region: 'europa', art: 'grecia', title: 'Islas griegas', route: 'Atenas, Mykonos y Santorini', nights: 10, price: 4350, types: ['Playa', 'Luna de miel'], comp: ['pareja', 'amigos'], land: 'playa', pace: 'descanso',
    incl: ['Aéreo desde Buenos Aires', 'Hoteles boutique con desayuno', 'Ferries entre islas', 'Traslados en cada isla', 'Asistencia al viajero'],
    days: [{ d: 'Días 1 y 2', t: 'Atenas', x: 'Acrópolis y barrio de Plaka.' }, { d: 'Días 3 a 6', t: 'Mykonos', x: 'Pequeña Venecia, molinos y playas del sur.' }, { d: 'Días 7 a 10', t: 'Santorini', x: 'Atardecer en Oia y navegación por la caldera.' }, { d: 'Día 11', t: 'Regreso', x: 'Vuelo vía Atenas.' }] },
  { id: 'p-japon', region: 'exoticos', art: 'japon', title: 'Japón esencial', route: 'Tokio, Hakone, Kioto, Nara y Osaka', nights: 13, price: 5600, types: ['Cultura', 'Ciudad'], comp: ['pareja', 'amigos', 'solo'], land: 'exotico', pace: 'activo',
    incl: ['Aéreo desde Buenos Aires', 'Hoteles 4 estrellas y una noche en ryokan', 'Japan Rail Pass de 7 días', 'Tarjeta de transporte urbano', 'Asistencia al viajero'],
    days: [{ d: 'Días 1 a 4', t: 'Tokio', x: 'Shibuya, Asakusa y el mercado de Tsukiji.' }, { d: 'Días 5 y 6', t: 'Hakone', x: 'Ryokan con baños termales y vista al Fuji.' }, { d: 'Días 7 a 10', t: 'Kioto y Nara', x: 'Fushimi Inari, Arashiyama y los ciervos de Nara.' }, { d: 'Días 11 a 13', t: 'Osaka', x: 'Dotonbori y comida callejera.' }] },
  { id: 'p-nyc', region: 'norteamerica', art: 'nuevayork', title: 'Nueva York imperdible', route: 'Manhattan, Brooklyn y Broadway', nights: 6, price: 2450, types: ['Ciudad', 'Amigos'], comp: ['amigos', 'solo', 'pareja'], land: 'ciudad', pace: 'activo',
    incl: ['Aéreo desde Buenos Aires', 'Hotel en Manhattan', 'Pase de atracciones', 'Traslados', 'Asistencia al viajero'],
    days: [{ d: 'Día 1', t: 'Llegada', x: 'Check-in en Midtown y paseo por Times Square.' }, { d: 'Días 2 y 3', t: 'Clásicos', x: 'Central Park, el MET y Top of the Rock.' }, { d: 'Día 4', t: 'Brooklyn', x: 'Puente de Brooklyn y DUMBO.' }, { d: 'Días 5 a 7', t: 'Broadway y regreso', x: 'Un musical, compras y vuelo a Buenos Aires.' }] },
  { id: 'p-egipto', region: 'medio-oriente', art: 'egipto', title: 'Egipto milenario', route: 'El Cairo, crucero por el Nilo y Abu Simbel', nights: 10, price: 3790, types: ['Cultura', 'Aventura'], comp: ['pareja', 'amigos', 'solo'], land: 'exotico', pace: 'activo',
    incl: ['Aéreo desde Buenos Aires', '4 noches en El Cairo', '4 noches de crucero con pensión completa', 'Excursión a Abu Simbel', 'Guía en español'],
    days: [{ d: 'Días 1 a 3', t: 'El Cairo', x: 'Pirámides de Giza, la Esfinge y el Gran Museo Egipcio.' }, { d: 'Días 4 a 7', t: 'Crucero por el Nilo', x: 'Luxor, Karnak, Edfu y Asuán.' }, { d: 'Día 8', t: 'Abu Simbel', x: 'Los templos de Ramsés II.' }, { d: 'Días 9 a 11', t: 'El Cairo y regreso', x: 'Barrio copto, bazar Khan el-Khalili y vuelo.' }] },
  { id: 'p-turquia', region: 'medio-oriente', art: 'turquia', title: 'Estambul y Capadocia', route: 'Bósforo, Gran Bazar y globo al amanecer', nights: 9, price: 3150, types: ['Cultura', 'Luna de miel'], comp: ['pareja', 'amigos'], land: 'ciudad', pace: 'equilibrado',
    incl: ['Aéreo desde Buenos Aires', 'Hoteles 4 estrellas y hotel cueva', 'Vuelo en globo en Capadocia', 'Vuelo interno', 'Guía en español'],
    days: [{ d: 'Días 1 a 4', t: 'Estambul', x: 'Santa Sofía, Mezquita Azul y crucero por el Bósforo.' }, { d: 'Días 5 a 7', t: 'Capadocia', x: 'Globo al amanecer y ciudades subterráneas.' }, { d: 'Días 8 a 10', t: 'Estambul y regreso', x: 'Gran Bazar, barrio de Balat y vuelo.' }] },
  { id: 'p-dubai', region: 'medio-oriente', art: 'dubai', title: 'Dubái y Abu Dabi', route: 'Rascacielos, desierto y la Gran Mezquita', nights: 6, price: 2890, types: ['Ciudad', 'Familia', 'Aventura'], comp: ['familia', 'amigos', 'pareja'], land: 'ciudad', pace: 'equilibrado',
    incl: ['Aéreo desde Buenos Aires', '6 noches en hotel 5 estrellas con desayuno', 'Safari en el desierto con cena', 'Excursión de día completo a Abu Dabi', 'Traslados y asistencia al viajero'],
    days: [{ d: 'Días 1 y 2', t: 'Dubái moderno', x: 'Burj Khalifa, Dubai Mall y la fuente danzante.' }, { d: 'Día 3', t: 'Desierto', x: 'Safari 4x4 por las dunas y cena bajo las estrellas.' }, { d: 'Día 4', t: 'Abu Dabi', x: 'Gran Mezquita Sheikh Zayed y Louvre Abu Dabi.' }, { d: 'Días 5 a 7', t: 'Dubái clásico y regreso', x: 'Zoco del oro, cruce del Creek en abra y vuelo.' }] },
  { id: 'p-patagonia', region: 'sudamerica', art: 'patagonia', title: 'Patagonia de glaciares', route: 'El Calafate y El Chaltén', nights: 7, price: 1450, types: ['Aventura', 'Familia'], comp: ['familia', 'amigos', 'pareja'], land: 'montana', pace: 'activo',
    incl: ['Aéreo de cabotaje', 'Hosterías con desayuno', 'Glaciar Perito Moreno con pasarelas', 'Navegación Ríos de Hielo', 'Traslado a El Chaltén'],
    days: [{ d: 'Días 1 a 4', t: 'El Calafate', x: 'Perito Moreno, navegación entre témpanos y estancia patagónica.' }, { d: 'Días 5 a 7', t: 'El Chaltén', x: 'Senderos a Laguna Capri y Laguna de los Tres.' }, { d: 'Día 8', t: 'Regreso', x: 'Vuelo a Buenos Aires.' }] }
];

var HERO = ['grecia', 'maldivas', 'patagonia', 'japon', 'egipto'];
var MEMO = ['egipto', 'peru', 'turquia', 'japon', 'grecia', 'maldivas', 'patagonia', 'nuevayork'];
var FEATURED = ['p-italia', 'p-maldivas', 'p-peru', 'p-orlando', 'p-grecia', 'p-egipto'];
var NAV = [{ id: 'home', label: 'Inicio' }, { id: 'destinos', label: 'Destinos' }, { id: 'paquetes', label: 'Paquetes' }, { id: 'nosotros', label: 'Nosotros' }, { id: 'juegos', label: 'Juegos' }, { id: 'contacto', label: 'Contacto' }];
var TYPES = ['todos', 'Playa', 'Luna de miel', 'Familia', 'Amigos', 'Aventura', 'Cultura', 'Ciudad'];
var BUDGETS = [{ id: 'todos', label: 'Cualquier presupuesto' }, { id: 'b1', label: 'Hasta USD 2.500' }, { id: 'b2', label: 'USD 2.500 a 4.500' }, { id: 'b3', label: 'Más de USD 4.500' }];
var SORTS = [{ id: 'rel', label: 'Destacados' }, { id: 'asc', label: 'Menor precio' }, { id: 'desc', label: 'Mayor precio' }, { id: 'dur', label: 'Más días' }];
var REGION_OPTS = [{ v: 'todas', l: 'Todas las regiones' }].concat(REGIONS.map(function (r) { return { v: r.id, l: r.name }; }));
var TYPE_OPTS = [{ v: 'todos', l: 'Cualquier estilo' }].concat(TYPES.slice(1).map(function (t) { return { v: t, l: t }; }));
var BUDGET_OPTS = BUDGETS.map(function (b) { return { v: b.id, l: b.id === 'todos' ? 'Cualquiera' : b.label }; });
var SORT_OPTS = SORTS.map(function (o) { return { v: o.id, l: o.label }; });
var FORM_TYPES = ['Luna de miel', 'Familia', 'Amigos', 'Aventura', 'Cultura', 'Playa', 'Otro'];
var FAQS = [
  { q: '¿Qué incluye un viaje a medida?', a: 'Diseñamos el itinerario completo: vuelos, alojamiento, traslados, excursiones y asistencia al viajero, según tus fechas, intereses y presupuesto. Vos decidís qué sumar y qué dejar afuera.' },
  { q: '¿Con cuánta anticipación conviene reservar?', a: 'Para viajes internacionales recomendamos empezar entre tres y seis meses antes; para destinos nacionales, entre dos y tres. En temporada alta, cuanto antes mejor: hay más disponibilidad y mejores tarifas.' },
  { q: '¿Ofrecen financiación?', a: 'Trabajamos con distintas formas de pago. Tu asesor te detalla las opciones vigentes al momento de cotizar, para que elijas la que mejor te convenga.' },
  { q: '¿Qué pasa si necesito cancelar mi viaje?', a: 'Las condiciones dependen de cada proveedor (aerolínea, hotel u operador). Antes de confirmar te explicamos por escrito las políticas de cambio y cancelación, y te recomendamos una asistencia al viajero con cobertura de cancelación.' },
  { q: '¿Me acompañan durante el viaje?', a: 'Sí. Tenés un asesor que conoce tu reserva y asistencia 24/7 mientras viajás. Si algo cambia en el camino, lo resolvemos nosotros.' }
];
var QUIZ = [
  { key: 'comp', q: '¿Con quién viajás?', opts: [{ v: 'pareja', label: 'En pareja', desc: 'Escapada romántica o luna de miel' }, { v: 'familia', label: 'En familia', desc: 'Con chicos y ritmos para todos' }, { v: 'amigos', label: 'Con amigos', desc: 'Planes compartidos y buena energía' }, { v: 'solo', label: 'Solo o sola', desc: 'A tu ritmo y a tu manera' }] },
  { key: 'land', q: '¿Qué paisaje te llama?', opts: [{ v: 'playa', label: 'Playa', desc: 'Arena, mar y cero alarmas' }, { v: 'montana', label: 'Montaña y naturaleza', desc: 'Senderos, glaciares y aire puro' }, { v: 'ciudad', label: 'Ciudades y cultura', desc: 'Museos, historia y gastronomía' }, { v: 'exotico', label: 'Algo exótico', desc: 'Culturas lejanas y paisajes únicos' }] },
  { key: 'pace', q: '¿Qué ritmo preferís?', opts: [{ v: 'descanso', label: 'Descanso total', desc: 'Pocas actividades, mucho disfrute' }, { v: 'equilibrado', label: 'Equilibrado', desc: 'Un poco de todo' }, { v: 'activo', label: 'Activo', desc: 'Ver y hacer lo más posible' }, { v: 'equilibrado', label: 'Me da igual', desc: 'Lo que el viaje proponga' }] },
  { key: 'budget', q: '¿Cuál es tu presupuesto por persona?', opts: [{ v: 'b1', label: 'Hasta USD 2.500', desc: 'Viajes más cortos o cercanos' }, { v: 'b2', label: 'USD 2.500 a 4.500', desc: 'El rango más elegido' }, { v: 'b3', label: 'Más de USD 4.500', desc: 'Una experiencia sin recortes' }, { v: 'any', label: 'Todavía no sé', desc: 'Primero quiero inspirarme' }] }
];
var WA = '5491163720022';

function money(n) { return 'USD ' + n.toLocaleString('es-AR'); }
function tier(p) { return p.price <= 2500 ? 'b1' : (p.price <= 4500 ? 'b2' : 'b3'); }
function byId(list, id) { for (var i = 0; i < list.length; i++) { if (list[i].id === id) return list[i]; } return null; }
function shuffle(a) { var b = a.slice(); for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t; } return b; }
var MEMO_NAMES = { egipto: 'Egipto', peru: 'Perú', turquia: 'Turquía', japon: 'Japón', grecia: 'Grecia', maldivas: 'Maldivas', patagonia: 'Patagonia', nuevayork: 'Nueva York' };
function newDeck() { var cards = MEMO.map(function (id) { return { id: id, name: MEMO_NAMES[id] }; }); return shuffle(cards.concat(cards.map(function (c) { return { id: c.id, name: c.name }; }))); }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home', slide: 0, menuOpen: false,
      fRegion: 'todas', fType: 'todos', fBudget: 'todos', sort: 'rel',
      dRegion: 'todas', pkgId: null, faq: 0, dd: null,
      planner: { region: 'todas', type: 'todos', budget: 'todos' },
      news: '', newsOk: false, newsErr: false,
      form: { name: '', email: '', phone: '', interest: '', date: '', travelers: 2, type: '', message: '', code: '' },
      errs: {}, sent: false,
      game: 'memo', deck: newDeck(), flipped: [], matched: [], moves: 0, lock: false, memo: 'playing', copied: false,
      qStep: 0, qAns: {}
    };
  }

  componentDidMount() {
    var self = this;
    this.setupFx();
    this.onDoc = function (e) { if (self.state.dd && !(e.target && e.target.closest && e.target.closest('.ddw'))) self.setState({ dd: null }); };
    document.addEventListener('click', this.onDoc);
    var root = document.documentElement, ticking = false;
    this.onScroll = function (e) {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var t = (e && e.target && e.target.nodeType === 1) ? e.target : (document.scrollingElement || root);
        var y = t.scrollTop || window.scrollY || 0, max = (t.scrollHeight - t.clientHeight) || 1;
        root.style.setProperty('--sy', Math.min(y, 1200));
        root.style.setProperty('--sp', Math.max(0, Math.min(1, y / max)));
      });
    };
    document.addEventListener('scroll', this.onScroll, true);
    var self = this;
    this.iv = setInterval(function () { if (self.state.view === 'home') self.setState({ slide: (self.state.slide + 1) % HERO.length }); }, 6000);
  }

  componentDidUpdate() { var self = this; this.scanFx(); setTimeout(function () { self.scanFx(); }, 60); }

  componentWillUnmount() { clearInterval(this.iv); clearTimeout(this.t); if (this.io) this.io.disconnect(); document.removeEventListener('click', this.onDoc); document.removeEventListener('scroll', this.onScroll, true); }

  setupFx() {
    try {
      if (!('IntersectionObserver' in window)) return;
      this.io = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.setAttribute('data-in', ''); obs.unobserve(en.target); } });
      }, { threshold: 0.01, rootMargin: '0px 0px -40px 0px' });
      document.documentElement.classList.add('fx-on');
      this.scanFx();
    } catch (e) { document.documentElement.classList.remove('fx-on'); }
  }

  scanFx() {
    var io = this.io; if (!io) return;
    try { var els = document.querySelectorAll('.fx:not([data-obs])'); for (var i = 0; i < els.length; i++) { els[i].setAttribute('data-obs', ''); io.observe(els[i]); } } catch (e) {}
  }

  nav(v, extra) {
    this.setState(Object.assign({ view: v, menuOpen: false, pkgId: null, dd: null }, extra || {}));
    var toTop = function () {
      try { window.scrollTo(0, 0); } catch (e) {}
      try { document.documentElement.scrollTop = 0; document.body.scrollTop = 0; } catch (e) {}
      try { var els = document.querySelectorAll('div, main, section'); for (var i = 0; i < els.length; i++) { if (els[i].scrollTop > 0) els[i].scrollTop = 0; } } catch (e) {}
    };
    toTop(); setTimeout(toTop, 30);
  }

  flip(i) {
    var s = this.state, self = this;
    if (s.lock || s.memo !== 'playing') return;
    if (s.flipped.indexOf(i) !== -1 || s.matched.indexOf(s.deck[i].id) !== -1) return;
    var flipped = s.flipped.concat([i]);
    if (flipped.length < 2) { this.setState({ flipped: flipped }); return; }
    var moves = s.moves + 1, a = s.deck[flipped[0]], b = s.deck[flipped[1]];
    if (a.id === b.id) {
      var matched = s.matched.concat([a.id]);
      var won = matched.length === MEMO.length;
      this.setState({ flipped: [], matched: matched, moves: moves, memo: won ? 'won' : (moves >= 35 ? 'lost' : 'playing') });
    } else {
      this.setState({ flipped: flipped, moves: moves, lock: true });
      this.t = setTimeout(function () { self.setState({ flipped: [], lock: false, memo: moves >= 35 ? 'lost' : 'playing' }); }, 900);
    }
  }

  resetMemo() { clearTimeout(this.t); this.setState({ deck: newDeck(), flipped: [], matched: [], moves: 0, lock: false, memo: 'playing', copied: false }); }

  prize() { var m = this.state.moves; return m <= 16 ? { pct: 10, code: 'DMMEMO10' } : (m <= 24 ? { pct: 7, code: 'DMMEMO7' } : { pct: 5, code: 'DMMEMO5' }); }

  submit() {
    var f = this.state.form;
    var errs = { name: !f.name.trim(), email: !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()), message: !f.message.trim() };
    if (errs.name || errs.email || errs.message) { this.setState({ errs: errs }); return; }
    this.setState({ errs: {}, sent: true });
  }

  renderVals() {
    var s = this.state, self = this;
    var go = function (v, extra) { return function () { self.nav(v, extra); }; };
    var field = function (k) { return function (e) { var f = Object.assign({}, self.state.form); f[k] = e.target.value; var er = Object.assign({}, self.state.errs); er[k] = false; self.setState({ form: f, errs: er }); }; };
    var withForm = function (patch) { return Object.assign({}, s.form, patch); };

    var mkDD = function (key, label, opts, cur, onPick, isFilter, align) {
      var open = s.dd === key, sel = opts.filter(function (o) { return o.v === cur; })[0] || opts[0];
      return {
        label: label, value: sel.l, open: open, exp: open ? 'true' : 'false', align: align || '',
        cls: (open ? 'open ' : '') + (isFilter && cur !== opts[0].v ? 'on' : ''),
        toggle: function () { self.setState({ dd: self.state.dd === key ? null : key }); },
        opts: opts.map(function (o) { return { label: o.l, cls: o.v === cur ? 'sel' : '', sel: o.v === cur ? 'true' : 'false', pick: function () { onPick(o.v); self.setState({ dd: null }); } }; })
      };
    };
    var planSet = function (k) { return function (v) { var p = Object.assign({}, self.state.planner); p[k] = v; self.setState({ planner: p }); }; };
    var pv = function (p) {
      return Object.assign({}, p, {
        priceTxt: money(p.price), nightsTxt: p.nights + ' noches', regionName: byId(REGIONS, p.region).name, art: ART[p.art],
        tags: p.types.map(function (t) { return { t: t }; }),
        incl: p.incl.map(function (t) { return { t: t }; }),
        open: function () { self.setState({ pkgId: p.id }); },
        quote: function () { self.nav('contacto', { form: withForm({ interest: p.title }), sent: false }); }
      });
    };

    var list = PKGS.filter(function (p) {
      return (s.fRegion === 'todas' || p.region === s.fRegion) && (s.fType === 'todos' || p.types.indexOf(s.fType) !== -1) && (s.fBudget === 'todos' || tier(p) === s.fBudget);
    });
    if (s.sort === 'asc') list = list.slice().sort(function (a, b) { return a.price - b.price; });
    if (s.sort === 'desc') list = list.slice().sort(function (a, b) { return b.price - a.price; });
    if (s.sort === 'dur') list = list.slice().sort(function (a, b) { return b.nights - a.nights; });

    var pl = s.planner;
    var plannerN = PKGS.filter(function (p) { return (pl.region === 'todas' || p.region === pl.region) && (pl.type === 'todos' || p.types.indexOf(pl.type) !== -1) && (pl.budget === 'todos' || tier(p) === pl.budget); }).length;
    var setPlan = function (k) { return function (e) { var p = Object.assign({}, self.state.planner); p[k] = e.target.value; self.setState({ planner: p }); }; };

    var dList = DESTS.filter(function (d) { return s.dRegion === 'todas' || d.region === s.dRegion; }).map(function (d) {
      var p = d.pkg ? byId(PKGS, d.pkg) : null;
      return Object.assign({}, d, {
        art: ART[d.id], regionName: byId(REGIONS, d.region).name,
        priceTxt: p ? 'Desde ' + money(p.price) : 'Viaje a medida',
        ctaLabel: p ? 'Ver paquete' : 'Cotizar',
        cta: p ? function () { self.nav('paquetes', { fRegion: d.region, fType: 'todos', fBudget: 'todos', sort: 'rel' }); } : function () { self.nav('contacto', { form: withForm({ interest: d.name + ', ' + d.country }), sent: false }); }
      });
    });

    var marquee = DESTS.map(function (d) { return { name: d.name }; });
    marquee = marquee.concat(marquee);

    var memoCards = s.deck.map(function (c, i) {
      var done = s.matched.indexOf(c.id) !== -1, up = done || s.flipped.indexOf(i) !== -1;
      return { name: c.name, art: ART[c.id], cls: (up ? 'up ' : '') + (done ? 'done' : ''), label: up ? c.name : 'Carta ' + (i + 1) + ', boca abajo', flip: function () { self.flip(i); } };
    });
    var pct = Math.min(100, Math.round(s.moves / 35 * 100));
    var prize = this.prize();

    var qDone = s.qStep >= QUIZ.length;
    var qCur = QUIZ[Math.min(s.qStep, QUIZ.length - 1)];
    var qTop = null, qAlts = [];
    if (qDone) {
      var a = s.qAns;
      var ranked = PKGS.map(function (p) {
        var sc = (p.comp.indexOf(a.comp) !== -1 ? 3 : 0) + (p.land === a.land ? 3 : 0) + (p.pace === a.pace ? 2 : 0) + (a.budget === 'any' || tier(p) === a.budget ? 2 : 0);
        return { p: p, sc: sc };
      }).sort(function (x, y) { return y.sc - x.sc || x.p.price - y.p.price; });
      qTop = pv(ranked[0].p);
      qAlts = [pv(ranked[1].p), pv(ranked[2].p)];
    }

    var f = s.form;
    var firstName = (f.name.trim().split(' ')[0]) || '';
    var pkg = s.pkgId ? pv(byId(PKGS, s.pkgId)) : null;

    return {
      nav: NAV.map(function (n) { return { label: n.label, cls: s.view === n.id ? 'on' : '', go: go(n.id) }; }),
      menuOpen: s.menuOpen,
      toggleMenu: function () { self.setState({ menuOpen: !self.state.menuOpen }); },
      goHome: go('home'), goDestinos: go('destinos', { dRegion: 'todas' }), goPaquetes: go('paquetes'), goContact: go('contacto', { sent: false }),
      goMemo: go('juegos', { game: 'memo' }), goQuiz: go('juegos', { game: 'quiz' }),
      isHome: s.view === 'home', isDestinos: s.view === 'destinos', isPaquetes: s.view === 'paquetes', isNosotros: s.view === 'nosotros', isJuegos: s.view === 'juegos', isContacto: s.view === 'contacto',

      slides: HERO.map(function (k, i) { return { art: ART[k], cls: i === s.slide ? 'on' : '' }; }),
      dots: HERO.map(function (k, i) { return { cls: i === s.slide ? 'on' : '', label: 'Ver ' + byId(DESTS, k).name, pick: function () { self.setState({ slide: i }); } }; }),
      cur: byId(DESTS, HERO[s.slide]),
      pdds: [mkDD('p-region', '¿A dónde?', REGION_OPTS, pl.region, planSet('region')), mkDD('p-type', 'Tipo de viaje', TYPE_OPTS, pl.type, planSet('type')), mkDD('p-budget', 'Presupuesto por persona', BUDGET_OPTS, pl.budget, planSet('budget'))],
      plannerCount: plannerN === 1 ? '1 paquete' : plannerN + ' paquetes',
      searchPlanner: function () { var p = self.state.planner; self.nav('paquetes', { fRegion: p.region, fType: p.type, fBudget: p.budget, sort: 'rel' }); },
      marquee: marquee,
      regions: REGIONS.map(function (r, i) {
        var n = DESTS.filter(function (d) { return d.region === r.id; }).length;
        return { name: r.name, tag: r.tag, art: ART[r.art], count: n + ' destinos', cls: i === 0 ? 's22' : (i >= 3 ? 's21' : ''), go: go('destinos', { dRegion: r.id }) };
      }),
      featured: FEATURED.map(function (id) { return pv(byId(PKGS, id)); }),
      teaser: { a: ART.japon, b: ART.grecia },
      about: { a: ART.patagonia, b: ART.italia, c: ART.peru },
      pkgTotal: PKGS.length,
      ctaArt: ART.patagonia,
      faqs: FAQS.map(function (q, i) { return { q: q.q, a: q.a, cls: s.faq === i ? 'open' : '', expanded: s.faq === i ? 'true' : 'false', toggle: function () { self.setState({ faq: self.state.faq === i ? -1 : i }); } }; }),
      waLink: 'https://wa.me/' + WA + '?text=' + encodeURIComponent('Hola DM Viajes, quiero consultar por un viaje.'),

      dChips: [{ id: 'todas', name: 'Todos' }].concat(REGIONS).map(function (r) {
        var n = r.id === 'todas' ? DESTS.length : DESTS.filter(function (d) { return d.region === r.id; }).length;
        return { label: r.name, count: n, cls: s.dRegion === r.id ? 'on' : '', pick: function () { self.setState({ dRegion: r.id }); } };
      }),
      dests: dList,

      fdds: [mkDD('f-region', 'Región', REGION_OPTS, s.fRegion, function (v) { self.setState({ fRegion: v }); }, true), mkDD('f-type', 'Estilo', TYPE_OPTS, s.fType, function (v) { self.setState({ fType: v }); }, true), mkDD('f-budget', 'Presupuesto', BUDGET_OPTS, s.fBudget, function (v) { self.setState({ fBudget: v }); }, true)],
      sdds: [mkDD('f-sort', 'Ordenar', SORT_OPTS, s.sort, function (v) { self.setState({ sort: v }); }, false, 'right')],
      hasFilters: s.fRegion !== 'todas' || s.fType !== 'todos' || s.fBudget !== 'todos',
      pkgs: list.map(pv),
      pkgCount: list.length === 1 ? '1 paquete' : list.length + ' paquetes',
      noResults: list.length === 0,
      clearFilters: function () { self.setState({ fRegion: 'todas', fType: 'todos', fBudget: 'todos', sort: 'rel' }); },

      hasPkg: !!pkg, pkg: pkg || { title: '', days: [], incl: [], art: ART.grecia },
      closePkg: function () { self.setState({ pkgId: null }); },

      isMemo: s.game === 'memo', isQuiz: s.game === 'quiz',
      tabMemo: s.game === 'memo' ? 'on' : '', tabQuiz: s.game === 'quiz' ? 'on' : '',
      memoCards: memoCards, moves: s.moves, pairs: s.matched.length, movesPct: pct,
      barColor: pct > 80 ? '#B42318' : (pct > 60 ? '#E08A2E' : '#1B6A98'),
      memoWon: s.memo === 'won', memoLost: s.memo === 'lost', prize: prize,
      resetMemo: function () { self.resetMemo(); },
      copyLabel: s.copied ? 'Copiado' : 'Copiar',
      copyCode: function () { try { navigator.clipboard.writeText(prize.code); } catch (e) {} self.setState({ copied: true }); },
      useCode: function () { self.nav('contacto', { form: withForm({ code: prize.code }), sent: false }); },

      quizOn: !qDone, quizDone: qDone, qNum: Math.min(s.qStep + 1, 4), qCur: qCur,
      qSteps: QUIZ.map(function (q, i) { return { bg: i <= s.qStep ? '#0A0A0B' : '#D5DEE5' }; }),
      qOpts: qCur.opts.map(function (o) { return { label: o.label, desc: o.desc, pick: function () { var a = Object.assign({}, self.state.qAns); a[qCur.key] = o.v; self.setState({ qAns: a, qStep: self.state.qStep + 1 }); } }; }),
      qCanBack: s.qStep > 0 && !qDone,
      qBack: function () { self.setState({ qStep: Math.max(0, self.state.qStep - 1) }); },
      qReset: function () { self.setState({ qStep: 0, qAns: {} }); },
      qTop: qTop || { art: ART.grecia }, qAlts: qAlts,

      form: f, errs: s.errs,
      errCls: { name: s.errs.name ? 'err' : '', email: s.errs.email ? 'err' : '', message: s.errs.message ? 'err' : '' },
      on: { name: field('name'), email: field('email'), phone: field('phone'), interest: field('interest'), date: field('date'), message: field('message'), code: field('code') },
      fTypes: FORM_TYPES.map(function (t) { return { label: t, cls: f.type === t ? 'on' : '', pick: function () { self.setState({ form: Object.assign({}, self.state.form, { type: self.state.form.type === t ? '' : t }) }); } }; }),
      travelersTxt: f.travelers === 1 ? '1 viajero' : f.travelers + ' viajeros',
      incT: function () { self.setState({ form: Object.assign({}, self.state.form, { travelers: Math.min(20, self.state.form.travelers + 1) }) }); },
      decT: function () { self.setState({ form: Object.assign({}, self.state.form, { travelers: Math.max(1, self.state.form.travelers - 1) }) }); },
      submit: function () { self.submit(); },
      formOn: !s.sent, sent: s.sent, firstName: firstName,
      sumInterest: f.interest || f.type || 'A definir con tu asesor', sumCode: f.code || 'Sin código',
      newForm: function () { self.setState({ sent: false, form: { name: '', email: '', phone: '', interest: '', date: '', travelers: 2, type: '', message: '', code: '' } }); },

      news: s.news, newsForm: !s.newsOk, newsOk: s.newsOk, newsErr: s.newsErr,
      onNews: function (e) { self.setState({ news: e.target.value, newsErr: false }); },
      subscribe: function () { var v = self.state.news.trim(); if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) self.setState({ newsOk: true }); else self.setState({ newsErr: true }); }
    };
  }
}

(function () {
  var inst = new Component({});
  var app = Vue.createApp({
    setup: function () {
      inst.state = Vue.reactive(inst.state);
      var all = Vue.computed(function () { return inst.renderVals(); });
      var out = {};
      Object.keys(inst.renderVals()).forEach(function (k) { out[k] = Vue.computed(function () { return all.value[k]; }); });
      Vue.onMounted(function () { if (inst.componentDidMount) inst.componentDidMount(); });
      Vue.onUpdated(function () { if (inst.componentDidUpdate) inst.componentDidUpdate(); });
      Vue.onBeforeUnmount(function () { if (inst.componentWillUnmount) inst.componentWillUnmount(); });
      return out;
    }
  });
  app.mount('#app');
})();
