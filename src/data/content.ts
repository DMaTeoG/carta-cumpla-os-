import type { BirthdayContent } from "@/lib/types";

export const birthdayContent: BirthdayContent = {
  // 🎨 Tema general: define los colores de la página.
  theme: { palette: "dulcePastel" },

  // 🖋 Tipografía para los textos principales.
  typography: { title: "DM Serif Display", body: "Architects Daughter" },

  // ✨ Efectos visuales decorativos activados o desactivados.
  effects: {
    confetti: true,        // Confeti al inicio o durante la animación.
    bubbles: false,        // Desactiva burbujas.
    bokeh: true,           // Activa efecto de luces borrosas.
    polaroidsFloat: true,  // Las fotos tipo Polaroid flotan suavemente.
  },

  // ⌨️ Configuración del efecto de "máquina de escribir" para la carta.
  typewriter: {
    speedMs: 60,                   // Velocidad entre letras (ms por carácter).
    startDelayMs: 1000,            // Retraso antes de empezar a escribir (ms).
    soundClicks: true,             // Reproduce clics de máquina de escribir.
    endChime: true,                // Sonido final cuando termina de escribir.
    liveLabel: "La carta se está escribiendo", // Descripción accesible mientras escribe.
    finishedLabel: "Carta terminada",          // Descripción accesible al finalizar.
  },

  // 🗓 Línea del tiempo de recuerdos (timeline de momentos compartidos).
  timeline: {
    variant: "scrapbook",  // Estilo visual tipo álbum o diario.
    ariaLabel: "Línea del tiempo de recuerdos importantes",
    items: [
      {
        date: "22 de agosto de 2023",
        title: "El día que nos conocimos",
        text: "Ese día fue más divertido de lo que esperaba. Nunca pensé que iba a conocer a alguien como tú, y mucho menos que te volverías una amiga tan especial. Desde ese día algo me dijo que íbamos a llevarnos bien, y no me equivoqué. Me alegra un montón haber coincidido contigo.",
        image: { url: "/dia_c.jpg", alt: "Foto del día que nos conocimos" },
      },
      {
        date: "29 de agosto de 2025",
        title: "fuimos al onomástico",
        text: "Nos fuimos a disfrutar la música. Todo se puso muy random después, jajaja, pero lo gocé un montón. Gracias por estar ahí.",
        image: { url: "/onomastico.jpg", alt: "Foto del onomástico" },
      },
      {
        date: "21 de septiembre de 2025",
        title: "un Domingo normalito",
        text: "No fue un plan épico, pero me encantó. Saliste del examen y nos pusimos a echar chisme un buen rato. Esos momentos tranquilos también valen oro.",
        image: { url: "/random.jpg", alt: "foto casual" },
      },
    ],
  },

  // 🏠 Sección principal o “hero” de la página.
  hero: {
    title: "Feliz Cumple, Estefania",              // Título grande de la página.
    emoji: "🎂",                              // Emoji decorativo.
    emojiLabel: "Pastel de cumpleaños",       // Etiqueta accesible para el emoji.
    scrollCta: "Ver carta",                   // Texto del botón para desplazarse a la carta.
    scrollAriaLabel: "Ir a la carta de cumpleaños", // Etiqueta accesible del botón.
  },

  // 💌 Contenido de la carta principal.
  letter: {
    heading: "Una carta para ti", // Título de la carta.
    body:
      "Hoy celebramos que llegaste a este mundo y que tuve la suerte de coincidir contigo.\n\n" +
    "Te deseo un año lleno de cosas lindas: metas cumplidas, sorpresas buenas y días tranquilos.\n\n" +
    "Que la vida te siga regalando razones para sonreír, y que nunca te falte quien te acompañe en las locuras.\n\n" +
    "Gracias por ser como eres y por dejarme ser parte de tu historia.\n\n" +
    "¡Feliz cumpleaños, Estefania! 🎉🎂\n\n" +
    "Con cariño,\nMateo",
    ariaLabel: "Carta de cumpleaños narrada como máquina de escribir", // Descripción accesible.
  },

  // 📷 Sección de fotos decorativas a los lados de la carta.
  photos: {
    left: [
      { url: "/photos/1.jpg", alt: "Selfie divertida" },
      { url: "/photos/2.jpg", alt: "Camino entre árboles" },
      { url: "/photos/3.jpg", alt: "Tazas de café" },
    ],
    right: [
      { url: "/photos/4.jpg", alt: "Risa espontánea" },
      { url: "/photos/5.jpg", alt: "Atardecer rosado" },
      { url: "/photos/6.jpg", alt: "Manos brindando" },
    ],
  },

  // 🖼 Galería de recuerdos (memories).
  memories: {
    heading: "Momentos favoritos",
    ariaLabel: "Galería de recuerdos fotográficos",
    photos: [
      { url: "/photos/m1.jpg", alt: "Brindis" },
      { url: "/photos/m2.jpg", alt: "Paseo" },
      { url: "/photos/m3.jpg", alt: "Pastel" },
      { url: "/photos/m4.jpg", alt: "Playa" },
      { url: "/photos/m5.jpg", alt: "Museo" },
      { url: "/photos/m6.jpg", alt: "Fiesta" },
    ],
  },

  // 🔗 Sección de botones para compartir la carta.
  cta: {
    share: "Compartir",                   // Texto principal del botón.
    copyLabel: "Copiar enlace",           // Etiqueta del botón de copiar.
    copiedFeedback: "Enlace copiado",     // Mensaje al copiar.
    unavailable: "Compartir no disponible en este dispositivo", // Mensaje si no hay soporte.
  },

  // 🧾 Pie de página (footer).
  footer: { note: "© 2025 Con cariño para Estefania" },

  // 🎵 Configuración del audio de fondo.
  audio: {
    src: "/happy.mp3",                             // Ruta del archivo de audio.
    playLabel: "Reproducir canción",               // Texto accesible para el botón de play.
    pauseLabel: "Pausar canción",                  // Texto accesible para el botón de pausa.
    description: "Canción favorita de Estefania para el cumpleaños", // Descripción del audio.
  },

  // 🧩 NUEVO: Control de secciones activas/inactivas
  sections: {
    background: true, // Fondo bokeh
    effects: true,    // Confeti y burbujas
    hero: true,       // Título principal
    letter: true,     // Carta con efecto de máquina de escribir
    photos: false,     // Fotos laterales
    timeline: true,   // Línea del tiempo
    memories: false,   // Galería de recuerdos
    audio: false,      // Reproductor musical
    share: true,      // Botones para compartir
    footer: true,     // Pie de página
  },

  // ♿ Configuración de accesibilidad
  accessibility: { reducedMotionRespect: true },
};
