// 🎨 Paletas de colores disponibles
export type PaletteOption =
  | "dulcePastel"
  | "champanElegante"
  | "atardecerSuave";

// 🖋 Fuentes para los títulos
export type TitleFontOption =
  | "DM Serif Display"
  | "Playfair Display"
  | "Great Vibes"
  | "Quicksand"
  | "Poppins";

// 🎨 Configuración del tema visual
export interface ThemeConfig {
  palette: PaletteOption;
}

// 🖋 Configuración tipográfica
export interface TypographyConfig {
  title: TitleFontOption;
  body: "Architects Daughter";
}

// ✨ Efectos visuales decorativos
export interface EffectsConfig {
  confetti: boolean;
  bubbles: boolean;
  bokeh: boolean;
  polaroidsFloat: boolean;
}

// ⌨️ Configuración del efecto de máquina de escribir
export interface TypewriterConfig {
  speedMs: number;
  startDelayMs: number;
  soundClicks: boolean;
  endChime: boolean;
  liveLabel: string;
  finishedLabel: string;
}

// 🖼 Imagen o video en la línea del tiempo
export interface TimelineMedia {
  url: string;
  alt: string;
}

// 🗓 Ítems dentro de la línea del tiempo
export interface TimelineItem {
  date: string;
  title: string;
  text: string;
  image?: TimelineMedia; // Imagen opcional
  video?: TimelineMedia; // Video opcional
}

// Variantes visuales de la línea del tiempo
export type TimelineVariant = "vertical" | "carousel" | "scrapbook";

// Configuración general de la línea del tiempo
export interface TimelineConfig {
  variant: TimelineVariant;
  items: TimelineItem[];
  ariaLabel: string;
}

// 🏠 Sección "Hero" (encabezado principal)
export interface HeroConfig {
  title: string;
  emoji?: string;
  emojiLabel?: string;
  scrollCta: string;
  scrollAriaLabel: string;
}

// 💌 Carta de cumpleaños
export interface LetterConfig {
  heading: string;
  body: string;
  ariaLabel: string;
}

// 📸 Fotos polaroid
export interface PhotoItem {
  url: string;
  alt: string;
}

// Fotos a los lados de la carta
export interface PhotosConfig {
  left: PhotoItem[];
  right: PhotoItem[];
}

// 🖼 Recuerdos tipo galería
export interface MemoriesConfig {
  heading: string;
  ariaLabel: string;
  photos: PhotoItem[];
}

// 🔗 Botones de compartir
export interface ShareConfig {
  share: string;
  copyLabel: string;
  copiedFeedback: string;
  unavailable: string;
}

// 📜 Pie de página
export interface FooterConfig {
  note: string;
}

// 🎵 Configuración del audio
export interface AudioConfig {
  src: string;
  playLabel: string;
  pauseLabel: string;
  description: string;
}

// ♿ Accesibilidad
export interface AccessibilityConfig {
  reducedMotionRespect: boolean;
}

// ⚙️ NUEVO: Control de secciones activas/inactivas
export interface SectionsConfig {
  background: boolean;
  effects: boolean;
  hero: boolean;
  letter: boolean;
  photos: boolean;
  timeline: boolean;
  memories: boolean;
  audio: boolean;
  share: boolean;
  footer: boolean;
}

// 🎁 Contenido completo de la página
export interface BirthdayContent {
  theme: ThemeConfig;
  typography: TypographyConfig;
  effects: EffectsConfig;
  typewriter: TypewriterConfig;
  timeline: TimelineConfig;
  hero: HeroConfig;
  letter: LetterConfig;
  photos: PhotosConfig;
  memories: MemoriesConfig;
  cta: ShareConfig;
  footer: FooterConfig;
  audio?: AudioConfig;
  accessibility: AccessibilityConfig;

  // 👇 NUEVO: control de qué secciones mostrar
  sections: SectionsConfig;
}
