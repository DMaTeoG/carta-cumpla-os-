"use client";

import Image from "next/image";
import clsx from "clsx";
import type { PhotoItem } from "@/lib/types";

interface PhotoRailProps {
  photos: PhotoItem[];
  floatPolaroids: boolean;
  prefersReducedMotion: boolean;
  direction: "left" | "right";
}

export function PhotoRail({
  photos,
  floatPolaroids,
  prefersReducedMotion,
  direction,
}: PhotoRailProps) {
  return (
    <div
      className={clsx(
        "flex w-full max-w-full gap-4 overflow-x-auto pb-2 pt-2 sm:pb-3 sm:pt-3 md:flex-col md:items-center md:gap-6 md:overflow-visible md:py-0",
        "snap-x snap-mandatory md:snap-none",
        direction === "left" ? "justify-end md:items-end" : "justify-start md:items-start"
      )}
    >
      {photos.map((photo, index) => (
        <figure
          key={photo.url}
          className={clsx(
            "relative flex min-w-[9.5rem] max-w-[75vw] shrink-0 cursor-pointer flex-col rounded-xl border border-white/70 bg-white/90 p-3 shadow-[12px_18px_30px_rgba(70,48,40,0.15)] transition sm:min-w-[10.5rem]",
            "hover:-translate-y-2 hover:shadow-[20px_30px_40px_rgba(70,48,40,0.18)]",
            "snap-center",
            !prefersReducedMotion && floatPolaroids ? "animate-polaroid-float" : "",
            direction === "left" ? "origin-right md:min-w-[10rem]" : "origin-left md:min-w-[10rem]"
          )}
          style={{
            transform: prefersReducedMotion
              ? undefined
              : `rotate(${direction === "left" ? "-" : ""}${2 + (index % 3)}deg)`,
          }}
        >
          <div className="absolute inset-x-8 -top-4 h-2 rounded-full bg-[#E8D7FF]/60" />
          <Image
            src={photo.url}
            alt={photo.alt}
            width={360}
            height={480}
            className="h-48 w-full rounded-md object-cover md:h-56"
            loading="lazy"
          />
          <figcaption className="mt-2 text-center text-sm text-[#6b5c5f]">
            {photo.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
