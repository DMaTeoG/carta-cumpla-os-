// Importa el tipo TypeScript que define la estructura esperada de los datos.
// Esto garantiza que el objeto "birthdayContent" tenga las propiedades correctas.
import type { BirthdayContent } from "@/lib/types";

// Exporta un objeto llamado "birthdayContent" que cumple con la interfaz BirthdayContent.
// Este objeto contiene toda la información visual y textual de la página de cumpleaños.
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
    speedMs: 50,                  // Velocidad entre letras (ms por carácter).
    startDelayMs: 10000,            // Retraso antes de empezar a escribir (ms).
    soundClicks: true,            // Reproduce clics de máquina de escribir.
    endChime: true,               // Sonido final cuando termina de escribir.
    liveLabel: "La carta se está escribiendo",   // Descripción accesible mientras escribe.
    finishedLabel: "Carta terminada",            // Descripción accesible al finalizar.
  },

  // 🗓 Línea del tiempo de recuerdos (timeline de momentos compartidos).
  timeline: {
    variant: "scrapbook",  // Estilo visual tipo álbum o diario.
    ariaLabel: "Línea del tiempo de recuerdos importantes",
    items: [
      {
        date: "22 de marzo de 2025",
        title: "El café infinito",
        text: "Tres horas hablando de todo y de nada. Nuestro chiste interno nació ahí.",
        image: { url: "/photos/cafe.jpg", alt: "Tazas de café en mesa con manos" },
      },
      {
        date: "Ago 2023",
        title: "Mini viaje sorpresa",
        text: "Nos perdimos, pero encontramos el mejor mirador.",
        image: { url: "/photos/viaje.jpg", alt: "Mirador durante el atardecer naranja" },
      },
      {
        date: "Ene 2024",
        title: "Domingo lento",
        text: "Pelis, manta y galletas. Receta: quedarse.",
        image: { url: "/photos/domingo.jpg", alt: "Sofá con manta y tazas" },
      },
    ],
  },

  // 🏠 Sección principal o “hero” de la página.
  hero: {
    title: "Feliz Cumple, Sofi",             // Título grande de la página.
    emoji: "🎂",                             // Emoji decorativo.
    emojiLabel: "Pastel de cumpleaños",      // Etiqueta accesible para el emoji.
    scrollCta: "Ver carta",                  // Texto del botón para desplazarse a la carta.
    scrollAriaLabel: "Ir a la carta de cumpleaños", // Etiqueta accesible del botón.
  },

  // 💌 Contenido de la carta principal.
  letter: {
    heading: "Una carta para ti", // Título de la carta.
    body:
      // Cuerpo del texto, con saltos de línea explícitos (\n\n).
      "Hoy celebramos tu risa y todos esos momentos que hacen que el mundo sea más bonito cuando estás...\n\n" +
      "Que este año te regale viajes inesperados y cafés interminables. Pase lo que pase, aquí estaré para aplaudirte fuerte.\n\n" +
      "Feliz cumpleaños — con cariño, Andrés.",
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
    heading: "Momentos favoritos", // Título de la sección.
    ariaLabel: "Galería de recuerdos fotográficos", // Descripción accesible.
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
  footer: { note: "© 2025 Con cariño para Sofi" },

  // 🎵 Configuración del audio de fondo.
  audio: {
    src: "/happy.mp3",                             // Ruta del archivo de audio.
    playLabel: "Reproducir canción",               // Texto accesible para el botón de play.
    pauseLabel: "Pausar canción",                  // Texto accesible para el botón de pausa.
    description: "Canción favorita de Sofi para el cumpleaños", // Descripción del audio.
  },

  // 🔍 Configuración de accesibilidad.
  accessibility: { reducedMotionRespect: true }, // Respeta la preferencia del usuario sobre movimiento reducido.
};
