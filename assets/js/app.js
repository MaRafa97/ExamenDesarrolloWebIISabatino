/**
 * Aplicación Vue de la página principal.
 * Depende de `Vue` (CDN) y de `EXAMEN` (assets/js/datos-examen.js).
 */

/** Quita acentos y mayúsculas para que "galeria" encuentre "Galería". */
const normalizar = (texto) =>
  String(texto ?? '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();

const camposBuscables = (alumno) => [
  alumno.nombre,
  alumno.api,
  alumno.tematica,
  alumno.mision,
];

const contarUnicos = (lista, campo) => new Set(lista.map((item) => item[campo])).size;

const mostrarErrorDeCarga = () => {
  const app = document.getElementById('app');
  app.removeAttribute('v-cloak');
  app.innerHTML =
    '<p class="p-10 text-center text-slate-300">No se pudo cargar Vue desde el CDN. Revisa tu conexión a internet y recarga la página.</p>';
};

const iniciarApp = () => {
  const { createApp, ref, computed, nextTick } = Vue;

  createApp({
    setup() {
      const busqueda = ref('');
      const campoBusqueda = ref(null);

      const alumnosFiltrados = computed(() => {
        const termino = normalizar(busqueda.value.trim());

        if (!termino) {
          return EXAMEN.alumnos;
        }

        return EXAMEN.alumnos.filter((alumno) =>
          camposBuscables(alumno).some((campo) => normalizar(campo).includes(termino)),
        );
      });

      const limpiarBusqueda = async () => {
        busqueda.value = '';
        await nextTick();
        campoBusqueda.value?.focus();
      };

      return {
        herramientas: EXAMEN.herramientas,
        pasos: EXAMEN.pasos,
        criterios: EXAMEN.criterios,
        documentacion: EXAMEN.documentacion,
        motivacion: EXAMEN.motivacion,
        estadisticas: [
          { etiqueta: 'Alumnos', valor: EXAMEN.alumnos.length },
          { etiqueta: 'APIs', valor: contarUnicos(EXAMEN.alumnos, 'api') },
          { etiqueta: 'Misiones', valor: contarUnicos(EXAMEN.alumnos, 'mision') },
        ],
        busqueda,
        campoBusqueda,
        alumnosFiltrados,
        limpiarBusqueda,
      };
    },
  }).mount('#app');
};

if (typeof Vue === 'undefined') {
  mostrarErrorDeCarga();
} else {
  iniciarApp();
}
