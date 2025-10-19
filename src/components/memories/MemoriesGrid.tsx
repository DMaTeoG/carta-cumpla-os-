import Image from "next/image";
import type { MemoriesConfig, MediaItem } from "@/lib/types";

interface MemoriesGridProps {
  memories: MemoriesConfig;
  prefersReducedMotion: boolean;
}

function isVideo(m: MediaItem) {
  // Discriminante por 'type' o, si falta, por extensión (back-compat)
  return m.type === "video" || /\.(mp4|webm|ogg)$/i.test(m.url);
}

export function MemoriesGrid({ memories, prefersReducedMotion }: MemoriesGridProps) {
  return (
    <section aria-label={memories.ariaLabel} className="space-y-6">
      <h3 className="text-xl font-semibold text-center sm:text-left">
        {memories.heading}
      </h3>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {memories.photos.map((memory) => (
          <figure
            key={memory.url}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/70 bg-white/60 shadow-sm transition"
          >
            {isVideo(memory) ? (
              <video
                src={memory.url}
                poster={"posterUrl" in memory ? memory.posterUrl : undefined}
                className="h-full w-full object-cover"
                autoPlay={"autoPlay" in memory ? !!memory.autoPlay : true}
                loop={"loop" in memory ? !!memory.loop : true}
                muted={"muted" in memory ? !!memory.muted : true}
                playsInline={"playsInline" in memory ? !!memory.playsInline : true}
                controls={"controls" in memory ? !!memory.controls : false}
                style={
                  prefersReducedMotion
                    ? undefined
                    : { transform: "translateZ(0)", animation: "breath 7.5s ease-in-out infinite" }
                }
              />
            ) : (
              <Image
                src={memory.url}
                alt={memory.alt}
                width={360}
                height={320}
                loading="lazy"
                className="h-full w-full object-cover transition-transform group-hover:scale-[1.05]"
                style={
                  prefersReducedMotion
                    ? undefined
                    : { transform: "translateZ(0)", animation: "breath 7.5s ease-in-out infinite" }
                }
              />
            )}

            <div className="pointer-events-none absolute inset-0 border-4 border-transparent transition group-hover:border-[#FFD7BA]/70" />
            <figcaption className="sr-only">{memory.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
