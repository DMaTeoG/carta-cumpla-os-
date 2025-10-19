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

export default function Home() {
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
    setTriggerCount((prev) => prev + 1);
  };

  const handleCakeClick = () => setTriggerCount((prev) => prev + 1);

  return (
    <div className="relative min-h-screen overflow-hidden pb-20">
      <BackgroundBokeh
        palette={birthdayContent.theme.palette}
        enableBokeh={birthdayContent.effects.bokeh}
        prefersReducedMotion={prefersReducedMotion}
      />

      <ConfettiOrBubbles
        enableConfetti={birthdayContent.effects.confetti}
        enableBubbles={birthdayContent.effects.bubbles}
        trigger={triggerCount}
        prefersReducedMotion={prefersReducedMotion}
      />

      <main
        className={`relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pt-14 sm:gap-14 sm:px-6 md:gap-16 md:px-10 lg:gap-20 lg:px-12 ${paletteClasses.text}`}
      >
        <HeaderTitle
          title={birthdayContent.hero.title}
          palette={birthdayContent.theme.palette}
          emoji={birthdayContent.hero.emoji}
          emojiLabel={birthdayContent.hero.emojiLabel}
          prefersReducedMotion={prefersReducedMotion}
          onCakeClick={handleCakeClick}
        />

        <button
          type="button"
          className="mx-auto w-full max-w-xs rounded-full border border-white/70 bg-white/80 px-6 py-2 text-sm font-medium uppercase tracking-widest text-[#4e3f41] shadow transition hover:-translate-y-1 hover:shadow-lg focus-outline sm:max-w-[16rem]"
          onClick={() => {
            const anchor = document.getElementById("letter-section");
            anchor?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
          }}
          aria-label={birthdayContent.hero.scrollAriaLabel}
        >
          {birthdayContent.hero.scrollCta}
        </button>

        <section className="grid gap-8 sm:gap-10 md:grid-cols-[0.8fr_minmax(0,640px)_0.8fr] md:items-start lg:grid-cols-[minmax(0,1fr)_minmax(0,640px)_minmax(0,1fr)] lg:gap-12">
          <PhotoRail
            photos={birthdayContent.photos.left}
            floatPolaroids={birthdayContent.effects.polaroidsFloat}
            prefersReducedMotion={prefersReducedMotion}
            direction="left"
          />

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

          <PhotoRail
            photos={birthdayContent.photos.right}
            floatPolaroids={birthdayContent.effects.polaroidsFloat}
            prefersReducedMotion={prefersReducedMotion}
            direction="right"
          />
        </section>

        {birthdayContent.audio ? (
          <AudioPlayer
            src={birthdayContent.audio.src}
            playLabel={birthdayContent.audio.playLabel}
            pauseLabel={birthdayContent.audio.pauseLabel}
            description={birthdayContent.audio.description}
          />
        ) : null}

        <Timeline
          timeline={birthdayContent.timeline}
          prefersReducedMotion={prefersReducedMotion}
        />

        <MemoriesGrid
          memories={birthdayContent.memories}
          prefersReducedMotion={prefersReducedMotion}
        />

        <ShareButtons
          label={birthdayContent.cta.share}
          copyLabel={birthdayContent.cta.copyLabel}
          copiedFeedback={birthdayContent.cta.copiedFeedback}
          unavailable={birthdayContent.cta.unavailable}
        />

        <FooterNote note={birthdayContent.footer.note} />
      </main>
    </div>
  );
}
