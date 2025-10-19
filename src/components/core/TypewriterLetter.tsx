"use client";

import { useEffect, useState } from "react";

interface TypewriterLetterProps {
  heading: string;
  body: string;
  typewriterSpeed: number;
  startDelay: number;
  liveLabel: string;
  finishedLabel: string;
  onFinished?: () => void;
  prefersReducedMotion: boolean;
}

export function TypewriterLetter({
  heading,
  body,
  typewriterSpeed,
  startDelay,
  liveLabel,
  finishedLabel,
  onFinished,
  prefersReducedMotion,
}: TypewriterLetterProps) {
  const [displayText, setDisplayText] = useState(prefersReducedMotion ? body : "");
  const [done, setDone] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(body);
      setDone(true);
      return;
    }

    let timeout: number;
    let index = 0;
    const characters = Array.from(body);

    const start = window.setTimeout(() => {
      timeout = window.setInterval(() => {
        index += 1;
        setDisplayText(characters.slice(0, index).join(""));
        if (index >= characters.length) {
          window.clearInterval(timeout);
          setDone(true);
          onFinished?.();
        }
      }, typewriterSpeed);
    }, startDelay);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(timeout);
    };
  }, [body, prefersReducedMotion, typewriterSpeed, startDelay, onFinished]);

  return (
    <article aria-live="polite" aria-label={done ? finishedLabel : liveLabel} className="space-y-6 text-lg leading-relaxed text-[color:var(--ink)]">
      <h2 className="font-semibold text-[color:var(--ink)]">{heading}</h2>
      <p className="whitespace-pre-wrap">{displayText}</p>
    </article>
  );
}
