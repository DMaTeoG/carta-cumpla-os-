"use client";

import { useEffect, useRef, useState } from "react";

interface ConfettiOrBubblesProps {
  enableConfetti: boolean;
  enableBubbles: boolean;
  trigger: number;
  prefersReducedMotion: boolean;
}

export function ConfettiOrBubbles({
  enableConfetti,
  enableBubbles,
  trigger,
  prefersReducedMotion,
}: ConfettiOrBubblesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = Array.from({ length: enableConfetti ? 160 : 60 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: enableConfetti ? 8 + Math.random() * 6 : 10 + Math.random() * 12,
        speedX: enableConfetti ? (Math.random() - 0.5) * 3 : 0,
        speedY: 2 + Math.random() * 4,
        color: enableConfetti
          ? `hsl(${Math.random() * 360}, 80%, 70%)`
          : `rgba(174, 210, 255, ${0.5 + Math.random() * 0.3})`,
      }));
    };

    const render = () => {
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        if (particle.y > canvas.height + particle.size) {
          particle.y = -particle.size;
          particle.x = Math.random() * canvas.width;
        }
      });

      animationFrame = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    initParticles();
    render();
    setReady(true);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      setReady(false);
    };
  }, [enableConfetti, prefersReducedMotion, enableBubbles]);

  useEffect(() => {
    if (!ready || prefersReducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    if (enableBubbles) {
      context.globalCompositeOperation = "lighter";
    }
  }, [ready, enableBubbles, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
      style={{ opacity: ready ? 1 : 0, transition: "opacity 400ms ease" }}
      data-trigger={trigger}
    />
  );
}
