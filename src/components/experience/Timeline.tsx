import clsx from "clsx";
import Image from "next/image";
import type { TimelineConfig } from "@/lib/types";

interface TimelineProps {
  timeline: TimelineConfig;
  prefersReducedMotion: boolean;
}

export function Timeline({ timeline, prefersReducedMotion }: TimelineProps) {
  if (timeline.variant === "vertical") {
    return (
      <section
        aria-label={timeline.ariaLabel}
        className="space-y-10 px-1 sm:px-3"
      >
        <div className="relative mx-auto max-w-3xl pl-6 sm:pl-8">
          <div className="absolute left-[0.4rem] h-full w-[2px] bg-[#E8BFD1]/70 sm:left-[0.65rem]" />
          <ul className="space-y-8 sm:space-y-10">
            {timeline.items.map((item) => (
              <li key={item.title} className="relative flex gap-4 sm:gap-6">
                <span className="absolute left-[-0.15rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-[#FFD7BA] shadow sm:left-[-0.25rem]" />
                <div className="ml-6 space-y-2 rounded-2xl border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur sm:ml-8 sm:p-6">
                  <h4 className="text-base font-semibold sm:text-lg">{item.title}</h4>
                  <p className="text-xs uppercase tracking-wide text-[#6d5a5b] sm:text-sm">
                    {item.date}
                  </p>
                  <p className="text-sm text-[#514041] sm:text-base">{item.text}</p>
                  {item.image ? (
                    <Image
                      src={item.image.url}
                      alt={item.image.alt}
                      width={540}
                      height={320}
                      loading="lazy"
                      className="mt-4 rounded-xl border border-white/80 object-cover"
                    />
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (timeline.variant === "carousel") {
    return (
      <section
        aria-label={timeline.ariaLabel}
        className="space-y-6 px-1 sm:px-3"
      >
        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 sm:pb-5 sm:pt-2 snap-x snap-mandatory">
          {timeline.items.map((item) => (
            <article
              key={item.title}
              className="w-72 shrink-0 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm snap-center"
            >
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm text-[#6d5a5b]">{item.date}</p>
              <p className="mt-3 text-sm">{item.text}</p>
              {item.image ? (
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={280}
                  height={200}
                  className="mt-4 rounded-xl object-cover"
                  loading="lazy"
                />
              ) : null}
            </article>
          ))}
        </div>
      </section>
    );
  }

  // scrapbook variant
  return (
    <section
      aria-label={timeline.ariaLabel}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {timeline.items.map((item, index) => (
        <article
          key={item.title}
          className={clsx(
            "relative space-y-3 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[12px_20px_30px_rgba(70,48,40,0.18)]",
            prefersReducedMotion ? "" : "animate-polaroid-float"
          )}
          style={{
            transform: prefersReducedMotion
              ? undefined
              : `rotate(${index % 2 === 0 ? "-" : ""}${5 + index}deg)`,
          }}
        >
          <div className="absolute inset-x-4 -top-4 flex justify-center">
            <span className="h-3 w-32 rounded-full bg-[#FFD7BA]/70" />
          </div>
          <header className="space-y-1 text-center">
            <p className="text-xs uppercase tracking-wide text-[#6d5a5b]">{item.date}</p>
            <h4 className="text-lg font-semibold">{item.title}</h4>
          </header>
          {item.image ? (
            <Image
              src={item.image.url}
              alt={item.image.alt}
              width={320}
              height={260}
              loading="lazy"
              className="h-48 w-full rounded-2xl object-cover shadow"
            />
          ) : null}
          <p className="text-sm leading-6 text-[#4e3f41]">{item.text}</p>
        </article>
      ))}
    </section>
  );
}
