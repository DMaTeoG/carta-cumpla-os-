"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { themeClassNames } from "@/lib/theme";
import type { PaletteOption } from "@/lib/types";

interface HeaderTitleProps {
  title: string;
  emoji?: string;
  emojiLabel?: string;
  palette: PaletteOption;
  prefersReducedMotion: boolean;
  onCakeClick?: () => void;
}

export function HeaderTitle({
  title,
  emoji,
  emojiLabel,
  palette,
  prefersReducedMotion,
  onCakeClick,
}: HeaderTitleProps) {
  const { text } = themeClassNames(palette);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => setPulse(true), 6500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="flex flex-col items-center gap-4 text-center sm:gap-5">
      <button
        type="button"
        onClick={onCakeClick}
        className="focus-outline rounded-full border border-transparent bg-white/50 px-4 py-2 text-3xl shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:px-6 sm:py-3 sm:text-4xl"
        aria-label={emojiLabel}
      >
        {emoji}
      </button>
      <h1
        className={clsx(
          "text-balance text-3xl font-semibold tracking-wide sm:text-4xl md:text-5xl lg:text-6xl",
          text,
          prefersReducedMotion
            ? ""
            : pulse
            ? "animate-none scale-105 transition-transform duration-300"
            : "animate-heartbeat"
        )}
        onAnimationEnd={() => setPulse(false)}
      >
        {title}
      </h1>
    </div>
  );
}
