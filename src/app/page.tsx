"use client";

import { useEffect, useMemo, useState } from "react";
import { birthdayContent } from "@/data/content";
import { themeClassNames } from "@/lib/theme";
import { BackgroundBokeh } from "@/components/background/BackgroundBokeh";
import { HeaderTitle } from "@/components/core/HeaderTitle";
import { PaperCard } from "@/components/core/PaperCard";
import { TypewriterLetter } from "@/components/core/TypewriterLetter";
import { PhotoRail } from "@/components/media/PhotoRail";
import { Timeline } from "@/components/experience/Timeline";
import { MemoriesGrid } from "@/components/memories/MemoriesGrid";
import { ShareButtons } from "@/components/actions/ShareButtons";
import { FooterNote } from "@/components/layout/FooterNote";
import { ConfettiOrBubbles } from "@/components/feedback/ConfettiOrBubbles";
import { AudioPlayer } from "@/components/media/AudioPlayer";

/** Grid fijo: 3 columnas (rails 240px, carta 640px) para que no se mueva. */
const GRID_COLS = "md:grid-cols-[240px_minmax(0,640px)_240px]";
/** Para pantallas chicas, la carta ocupa ancho completo y los rails se ocultan. */

function RailSlot({
  enabled,
  children,
  side,
}: {
  enabled: boolean;
  children: React.ReactNode;
  side: "left" | "right";
}) {
  // Siempre renderizamos la columna del rail (reserva espacio),
  // pero si está desactivado, mostramos un "espaciador" vacío.
  return (
    <div
      className={
        // oculto en mobile; visible en md+ para reservar columna
        "hidden md:block"
      }
      aria-hidden={!enabled}
    >
      {enabled ? children : <div className="h-full w-full" />}
    </div>
  );
}

export default function Home() {
  const [typewriterFinishedAt, setTypewriterFinishedAt] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [triggerCount, setTriggerCount] = useState(0);

  const paletteClasses = useMemo(
    () => themeClassNames(birthdayContent.theme.palette),
    []
  );

  useEffect(() => {
    if (!birthdayContent.accessibility.reducedMotionRespect) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.body.dataset.reducedMotion = String(prefersReducedMotion);
  }, [prefersReducedMotion]);

  const handleTypewriterFinished = () => {
    setTypewriterFinishedAt(Date.now());
    setTriggerCount((prev) => prev + 1);
  };

  const handleCakeClick = () => setTriggerCount((prev) => prev + 1);

  return (
    <div className="relative min-h-screen overflow-hidden pb-20">
      {/* Fondo bokeh */}
      {birthdayContent.sections.background && (
        <BackgroundBokeh
          palette={birthdayContent.theme.palette}
          enableBokeh={birthdayContent.effects.bokeh}
          prefersReducedMotion={prefersReducedMotion}
        />
      )}

      {/* Confeti / burbujas */}
      {birthdayContent.sections.effects && (
        <ConfettiOrBubbles
          enableConfetti={birthdayContent.effects.confetti}
          enableBubbles={birthdayContent.effects.bubbles}
          trigger={triggerCount}
          prefersReducedMotion={prefersReducedMotion}
        />
      )}

      <main
        className={`relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-16 md:px-12 ${paletteClasses}`}
      >
        {/* Hero (independiente) */}
        {birthdayContent.sections.hero && (
          <HeaderTitle
            title={birthdayContent.hero.title}
            palette={birthdayContent.theme.palette}
            emoji={birthdayContent.hero.emoji}
            emojiLabel={birthdayContent.hero.emojiLabel}
            prefersReducedMotion={prefersReducedMotion}
            onCakeClick={handleCakeClick}
          />
        )}

        {/* Botón para bajar a la carta (solo si hay carta) */}
        {birthdayContent.sections.letter && (
          <button
            type="button"
            className="mx-auto rounded-full border border-white/70 bg-white/80 px-6 py-2 text-sm font-medium uppercase tracking-widest text-[#4e3f41] shadow transition hover:-translate-y-1 hover:shadow-lg focus-outline"
            onClick={() => {
              const anchor = document.getElementById("letter-section");
              anchor?.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
              });
            }}
            aria-label={birthdayContent.hero.scrollAriaLabel}
          >
            {birthdayContent.hero.scrollCta}
          </button>
        )}

        {/* Sección central con grid SIEMPRE de 3 columnas en md+.
            Si desactivas photos, se quedan espaciadores y la carta no se mueve. */}
        {(birthdayContent.sections.letter || birthdayContent.sections.photos) && (
          <section
            className={`grid gap-8 ${GRID_COLS} md:items-start`}
            role="region"
            aria-label="Carta y rieles"
          >
            {/* Rail izquierdo (reserva columna aunque esté desactivado) */}
            <RailSlot enabled={birthdayContent.sections.photos} side="left">
              <PhotoRail
                photos={birthdayContent.photos.left}
                floatPolaroids={birthdayContent.effects.polaroidsFloat}
                prefersReducedMotion={prefersReducedMotion}
                direction="left"
              />
            </RailSlot>

            {/* Carta (columna central fija) */}
            {birthdayContent.sections.letter ? (
              <PaperCard withTornEdge className="mx-auto max-w-2xl">
                <div id="letter-section" />
                <TypewriterLetter
                  heading={birthdayContent.letter.heading}
                  body={birthdayContent.letter.body}
                  typewriterSpeed={birthdayContent.typewriter.speedMs}
                  startDelay={birthdayContent.typewriter.startDelayMs}
                  liveLabel={birthdayContent.typewriter.liveLabel}
                  finishedLabel={birthdayContent.typewriter.finishedLabel}
                  onFinished={handleTypewriterFinished}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </PaperCard>
            ) : (
              // Si desactivas la carta, igual reservamos el ancho central para que nada “salte”.
              <div className="mx-auto max-w-2xl" aria-hidden />
            )}

            {/* Rail derecho (reserva columna aunque esté desactivado) */}
            <RailSlot enabled={birthdayContent.sections.photos} side="right">
              <PhotoRail
                photos={birthdayContent.photos.right}
                floatPolaroids={birthdayContent.effects.polaroidsFloat}
                prefersReducedMotion={prefersReducedMotion}
                direction="right"
              />
            </RailSlot>
          </section>
        )}

        {/* Audio (independiente, no afecta el grid anterior) */}
        {birthdayContent.sections.audio && birthdayContent.audio && (
          <AudioPlayer
            src={birthdayContent.audio.src}
            playLabel={birthdayContent.audio.playLabel}
            pauseLabel={birthdayContent.audio.pauseLabel}
            description={birthdayContent.audio.description}
          />
        )}

        {/* Timeline (independiente) */}
        {birthdayContent.sections.timeline && (
          <Timeline
            timeline={birthdayContent.timeline}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}

        {/* Memorias (independiente) */}
        {birthdayContent.sections.memories && (
          <MemoriesGrid
            memories={birthdayContent.memories}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}

        {/* Share (independiente) */}
        {birthdayContent.sections.share && (
          <ShareButtons
            label={birthdayContent.cta.share}
            copyLabel={birthdayContent.cta.copyLabel}
            copiedFeedback={birthdayContent.cta.copiedFeedback}
            unavailable={birthdayContent.cta.unavailable}
          />
        )}

        {/* Footer (independiente) */}
        {birthdayContent.sections.footer && (
          <FooterNote note={birthdayContent.footer.note} />
        )}
      </main>
    </div>
  );
}
