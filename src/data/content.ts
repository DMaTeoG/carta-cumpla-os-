import type { BirthdayContent } from "@/lib/types";

export const birthdayContent: BirthdayContent = {
  theme: { palette: "dulcePastel" },
  typography: { title: "DM Serif Display", body: "Architects Daughter" },
  effects: { confetti: true, bubbles: false, bokeh: true, polaroidsFloat: true },
  typewriter: {
    speedMs: 24,
    startDelayMs: 700,
    soundClicks: true,
    endChime: true,
    liveLabel: "La carta se está escribiendo",
    finishedLabel: "Carta terminada",
  },
  timeline: {
    variant: "scrapbook",
    ariaLabel: "Línea del tiempo de recuerdos importantes",
    items: [
      {
        date: "Mar 2023",
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
  hero: {
    title: "Feliz Cumple, Sofi",
    emoji: "🎂",
    emojiLabel: "Pastel de cumpleaños",
    scrollCta: "Ver carta",
    scrollAriaLabel: "Ir a la carta de cumpleaños",
  },
  letter: {
    heading: "Una carta para ti",
    body:
      "Hoy celebramos tu risa y todos esos momentos que hacen que el mundo sea más bonito cuando estás...\n\n" +
      "Que este año te regale viajes inesperados y cafés interminables. Pase lo que pase, aquí estaré para aplaudirte fuerte.\n\n" +
      "Feliz cumpleaños — con cariño, Andrés.",
    ariaLabel: "Carta de cumpleaños narrada como máquina de escribir",
  },
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
  cta: {
    share: "Compartir",
    copyLabel: "Copiar enlace",
    copiedFeedback: "Enlace copiado",
    unavailable: "Compartir no disponible en este dispositivo",
  },
  footer: { note: "© 2025 Con cariño para Sofi" },
  audio: {
    src: "/happy.mp3",
    playLabel: "Reproducir canción",
    pauseLabel: "Pausar canción",
    description: "Canción favorita de Sofi para el cumpleaños",
  },
  accessibility: { reducedMotionRespect: true },
};
