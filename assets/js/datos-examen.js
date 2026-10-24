/**
 * Contenido de la página principal del examen.
 * Para agregar o cambiar un alumno, edita solo el arreglo `alumnos`.
 */
const EXAMEN = Object.freeze({
  herramientas: {
    resumen: 'Vue 3 y Tailwind CSS, cargados solo por CDN.',
    detalle:
      'Nada de npm, Vite ni procesos de build: tu solución debe funcionar abriendo el archivo HTML en el navegador.',
  },

  pasos: [
    {
      titulo: 'Encuentra tu archivo',
      descripcion: 'Busca tu nombre en la lista de abajo y abre tu examen.',
    },
    {
      titulo: 'Lee tu panel',
      descripcion:
        'Arriba de tu página está el panel con tu API, tu temática visual y tu misión interactiva.',
    },
    {
      titulo: 'Refactoriza con IA',
      descripcion:
        'Reescribe la página con Vue 3 y Tailwind CSS por CDN. Usa la IA como copiloto y apóyate en tu tip de prompting.',
    },
    {
      titulo: 'Escapa',
      descripcion:
        'Cuando tu página consuma la API, luzca la temática y la misión funcione, saliste del escape room.',
    },
  ],

  criterios: [
    {
      titulo: 'Código limpio',
      descripcion:
        'Nada de tablas para maquetar, etiquetas obsoletas, estilos en línea ni onclick escritos en el HTML.',
    },
    {
      titulo: 'Vue 3 + Tailwind por CDN',
      descripcion: 'La interactividad usa Vue 3 y los estilos usan Tailwind CSS, ambos cargados por CDN.',
    },
    {
      titulo: 'API real',
      descripcion: 'Los datos vienen de la API asignada, no escritos a mano.',
    },
    {
      titulo: 'Temática visual',
      descripcion: 'La página respeta la estética exigida en tu panel.',
    },
    {
      titulo: 'Misión interactiva',
      descripcion: 'La lógica exclusiva funciona exactamente como se describe.',
    },
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
      api: 'RestCountries API',
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
