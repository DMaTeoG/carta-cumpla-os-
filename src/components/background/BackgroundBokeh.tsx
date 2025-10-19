"use client";

import { useEffect, useMemo, useRef } from "react";
import clsx from "clsx";
import { themeClassNames } from "@/lib/theme";
import type { PaletteOption } from "@/lib/types";

interface BackgroundBokehProps {
  palette: PaletteOption;
  enableBokeh: boolean;
  prefersReducedMotion: boolean;
}

const circleCount = 18;

export function BackgroundBokeh({
  palette,
  enableBokeh,
  prefersReducedMotion,
}: BackgroundBokehProps) {
  const { pageBackground, bokehColors } = themeClassNames(palette);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableBokeh || prefersReducedMotion) return;
    const layer = layerRef.current;
    if (!layer) return;

    let frame = 0;
    const animate = () => {
      if (!layer) return;
      frame += 0.0015;
      const translate = Math.sin(frame) * 6;
      layer.style.transform = `translateY(${translate}px)`;
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [enableBokeh, prefersReducedMotion]);

  const circles = useMemo(
    () =>
      Array.from({ length: circleCount }).map((_, index) => {
        const size = 120 + Math.random() * 140;
        const color = bokehColors[index % bokehColors.length];
        const offsetX = Math.random() * 100;
        const offsetY = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = 8 + Math.random() * 6;

        return (
          <span
            key={index}
            className="absolute rounded-full blur-3xl opacity-60"
            style={{
              background: color,
              width: size,
              height: size,
              left: `${offsetX}%`,
              top: `${offsetY}%`,
              animation: prefersReducedMotion
                ? undefined
                : `float ${duration}s ease-in-out ${delay}s infinite alternate`,
            }}
          />
        );
      }),
    [bokehColors, prefersReducedMotion]
  );

  return (
    <div
      className={clsx(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-colors duration-700",
        pageBackground
      )}
      aria-hidden="true"
    >
      <div
        ref={layerRef}
        className="absolute inset-0"
        style={{ transform: "translateY(0)" }}
      >
        {enableBokeh ? circles : null}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent)]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),transparent_60%)]" />
    </div>
  );
}
