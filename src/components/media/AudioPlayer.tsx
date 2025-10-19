"use client";

import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  src: string;
  playLabel: string;
  pauseLabel: string;
  description: string;
}

export function AudioPlayer({ src, playLabel, pauseLabel, description }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl border border-white/70 bg-white/80 px-4 py-3 text-center shadow-sm sm:flex-row sm:justify-start sm:px-6 sm:py-4 sm:text-left">
      <button
        type="button"
        onClick={toggle}
        className="focus-outline rounded-full bg-[#FFD7BA] px-4 py-2 text-sm font-semibold text-[#4e3f41] transition hover:-translate-y-[2px] hover:bg-[#fbc29a]"
      >
        {isPlaying ? pauseLabel : playLabel}
      </button>
      <p className="text-xs text-[#6d5a5b] sm:text-sm">{description}</p>
      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}
