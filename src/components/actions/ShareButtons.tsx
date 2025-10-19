"use client";

import { useState } from "react";

interface ShareButtonsProps {
  label: string;
  copyLabel: string;
  copiedFeedback: string;
  unavailable: string;
}

export function ShareButtons({
  label,
  copyLabel,
  copiedFeedback,
  unavailable,
}: ShareButtonsProps) {
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setFeedback(unavailable);
        }
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      setFeedback(copiedFeedback);
      window.setTimeout(() => setFeedback(null), 2000);
    } catch {
      setFeedback(unavailable);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <button
        type="button"
        className="focus-outline rounded-full bg-[#514041] px-6 py-3 text-sm font-medium uppercase tracking-wider text-white shadow transition hover:-translate-y-[2px] hover:bg-[#6a5354]"
        onClick={handleShare}
      >
        {label}
      </button>
      <p className="text-xs text-[#6d5a5b] sm:text-sm">{feedback ?? copyLabel}</p>
    </div>
  );
}
