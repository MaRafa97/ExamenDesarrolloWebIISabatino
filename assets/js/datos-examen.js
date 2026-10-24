/**
 * Contenido de la página principal del examen.
 * Para agregar o cambiar un alumno, edita solo el arreglo `alumnos`.
 */
const EXAMEN = Object.freeze({
  herramientas: {
    resumen: 'Vue 3 y Tailwind CSS, pegando una línea de cada uno (CDN).',
    detalle:
      'No hay que instalar nada: tu página debe funcionar abriendo el archivo con doble clic. Los datos de tu API ya vienen listos al final de tu archivo, así que tú te encargas del diseño y de la interacción.',
  },

  pasos: [
    {
      titulo: 'Encuentra tu archivo',
      descripcion: 'Busca tu nombre en la lista de abajo y abre tu examen.',
    },
    {
      titulo: 'Lee tu panel',
      descripcion:
        'Arriba de tu página hay un panel que te explica, paso a paso, qué estilo usar, qué datos mostrar y qué interacción construir.',
    },
    {
      titulo: 'Diseña con IA',
      descripcion:
        'Rehaz la página con Vue y Tailwind. Tu panel trae un esqueleto para copiar y un mensaje listo para pegarle a la IA.',
    },
    {
      titulo: 'Escapa',
      descripcion:
        'Cuando tu página muestre los datos reales, luzca el estilo pedido y la interacción funcione, saliste del escape room.',
    },
  ],

  criterios: [
    {
      titulo: 'Código ordenado',
      descripcion:
        'Sin tablas para acomodar el diseño, sin etiquetas viejas como <font> o <center> y sin estilos escritos dentro de cada etiqueta.',
    },
    {
      titulo: 'Vue y Tailwind',
      descripcion: 'Los estilos se hacen con clases de Tailwind y la interacción con Vue, ambos cargados con su línea de CDN.',
    },
    {
      titulo: 'Datos reales',
      descripcion: 'La página muestra los datos que llegan de la API (la conexión ya viene en tu archivo), no texto inventado.',
    },
    {
      titulo: 'Estilo visual',
      descripcion: 'A simple vista, la página se ve como el estilo que te tocó.',
    },
    {
      titulo: 'Interacción',
      descripcion: 'La interacción de tu misión funciona exactamente como la describe tu panel.',
    },
  ],

  documentacion: [
    { titulo: 'Vue: cómo empezar usando el CDN', url: 'https://vuejs.org/guide/quick-start.html#using-vue-from-cdn' },
    { titulo: 'Vue: guía de lo esencial', url: 'https://vuejs.org/guide/essentials/template-syntax.html' },
    { titulo: 'Tailwind: cómo usarlo con el CDN', url: 'https://v3.tailwindcss.com/docs/installation/play-cdn' },
    { titulo: 'Tailwind: paleta de colores', url: 'https://v3.tailwindcss.com/docs/customizing-colors' },
  ],

  alumnos: [
    {
      nombre: 'Nayeli Belen Bautista Maldonado',
      archivo: 'nayeli.html',
      api: 'Studio Ghibli API',
      tematica: 'Kawaii / Pastel',
      mision: 'Acordeón de FAQs',
    },
    {
      nombre: 'Yareli Chavez Cruz',
      archivo: 'yareli.html',
      api: 'Open-Meteo',
      tematica: 'Corporativo Minimalista',
      mision: 'Menú Sidebar',
    },
    {
      nombre: 'Cesar Said Luna Arellano',
      archivo: 'cesar.html',
      api: 'SpaceX API',
      tematica: 'Cyberpunk Neón',
      mision: 'Sistema de Pestañas',
    },
    {
      nombre: 'Yhael Ruiz Galindo',
      archivo: 'yhael.html',
      api: 'The Cat API',
      tematica: 'Brutalismo Web',
      mision: 'Notificación Flotante (Toast)',
    },
    {
      nombre: 'Yair Palafox Cabrera',
      archivo: 'yair.html',
      api: 'Bored API',
      tematica: 'Orgánico / Naturaleza',
      mision: 'Ventana Modal de Seguridad',
    },
    {
      nombre: 'Jose Luis Lopez Ramirez',
      archivo: 'joseluis.html',
      api: 'Dog API',
      tematica: 'Glassmorphism',
      mision: 'Visor de Galería Ampliada',
    },
    {
      nombre: 'Emilio Rodriguez Roldan',
      archivo: 'emilio.html',
      api: 'Open Brewery DB',
      tematica: 'Steampunk / Industrial',
      mision: 'Buscador Instantáneo',
    },
    {
      nombre: 'Monica Lizeth Hernandez Lira',
      archivo: 'monica.html',
      api: 'Art Institute of Chicago API',
      tematica: 'Art Deco',
      mision: 'Sistema de Cargar Más',
    },
    {
      nombre: 'Hector Rodriguez Rivera',
      archivo: 'hector_r.html',
      api: 'D&D 5e API',
      tematica: 'Vampírico / Gótico',
      mision: 'Tooltips Contextuales',
    },
    {
      nombre: 'Hector Dael Marquez Rodriguez',
      archivo: 'hector_m.html',
      api: 'Datos de países (antes RestCountries)',
      tematica: 'Material Design Clásico',
      mision: 'Deslizador de Tarjetas (Slider)',
    },
    {
      nombre: 'Jonathan Gonzalez Rivera',
      archivo: 'jonathan.html',
      api: 'PokeAPI',
      tematica: 'Pop Art / Cómic',
      mision: 'Switch Tema Claro/Oscuro',
    },
  ],

  motivacion: {
    frase:
      'Si el profe aguantó una chamarra de cuero en plena playa, tú puedes aguantar un div mal anidado.',
    remate: 'Flexiona esos dedos, abre tu editor y escapa de ese código.',
    imagen: 'assets/img/caricatura-profe.svg',
    textoAlternativo:
      'Caricatura del profesor con chamarra de cuero en la playa, flexionando los brazos con las palabras v-if y fetch en los bíceps',
  },
});
