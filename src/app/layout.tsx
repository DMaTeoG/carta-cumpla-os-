import type { Metadata } from "next";
import "./globals.css";
import { birthdayContent } from "@/data/content";
import { loadFonts } from "@/lib/fonts";

const { bodyClass, titleClass } = loadFonts(birthdayContent.typography.title);

export const metadata: Metadata = {
  title: birthdayContent.hero.title,
  description: birthdayContent.letter.heading,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bodyClass} ${titleClass}`}>
      <body className="antialiased bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
