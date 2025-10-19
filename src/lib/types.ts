export type PaletteOption = "dulcePastel" | "champanElegante" | "atardecerSuave";

export type TitleFontOption =
  | "DM Serif Display"
  | "Playfair Display"
  | "Great Vibes"
  | "Quicksand"
  | "Poppins";

export interface ThemeConfig {
  palette: PaletteOption;
}

export interface TypographyConfig {
  title: TitleFontOption;
  body: "Architects Daughter";
}

export interface EffectsConfig {
  confetti: boolean;
  bubbles: boolean;
  bokeh: boolean;
  polaroidsFloat: boolean;
}

export interface TypewriterConfig {
  speedMs: number;
  startDelayMs: number;
  soundClicks: boolean;
  endChime: boolean;
  liveLabel: string;
  finishedLabel: string;
}

export interface TimelineImage {
  url: string;
  alt: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  text: string;
  image?: TimelineImage;
}

export type TimelineVariant = "vertical" | "carousel" | "scrapbook";

export interface TimelineConfig {
  variant: TimelineVariant;
  items: TimelineItem[];
  ariaLabel: string;
}

export interface HeroConfig {
  title: string;
  emoji?: string;
  emojiLabel?: string;
  scrollCta: string;
  scrollAriaLabel: string;
}

export interface LetterConfig {
  heading: string;
  body: string;
  ariaLabel: string;
}

export interface PhotoItem {
  url: string;
  alt: string;
}

export interface PhotosConfig {
  left: PhotoItem[];
  right: PhotoItem[];
}

export interface MemoriesConfig {
  heading: string;
  ariaLabel: string;
  photos: PhotoItem[];
}

export interface ShareConfig {
  share: string;
  copyLabel: string;
  copiedFeedback: string;
  unavailable: string;
}

export interface FooterConfig {
  note: string;
}

export interface AudioConfig {
  src: string;
  playLabel: string;
  pauseLabel: string;
  description: string;
}

export interface AccessibilityConfig {
  reducedMotionRespect: boolean;
}

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
}
