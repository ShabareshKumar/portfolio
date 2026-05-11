"use client";
import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const STAR_COUNT = 700;
    const stars = Array.from({ length: STAR_COUNT }, () => {
      const rand = Math.random();

      // Size tiers
      const size =
        rand < 0.70 ? Math.random() * 0.35 + 0.1   // tiny — majority
        : rand < 0.90 ? Math.random() * 0.45 + 0.35 // small
        : rand < 0.98 ? Math.random() * 0.5 + 0.7   // medium
        : Math.random() * 0.6 + 1.1;                // few bright ones

      // Keep opacity LOW so text stays readable
      const opacity =
        rand < 0.70 ? Math.random() * 0.18 + 0.06   // very dim
        : rand < 0.90 ? Math.random() * 0.18 + 0.20 // dim
        : rand < 0.98 ? Math.random() * 0.15 + 0.38 // moderate
        : Math.random() * 0.15 + 0.55;              // bright but not blinding

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        opacity,
        twinkleSpeed: Math.random() * 0.005 + 0.001,
        twinkleOffset: Math.random() * Math.PI * 2,
        isBright: rand > 0.98,
      };
    });

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      stars.forEach((star) => {
        const twinkle = Math.sin(frame * star.twinkleSpeed + star.twinkleOffset);
        const opacity = Math.max(0.03, star.opacity + twinkle * 0.04);

        // Tiny soft halo only for the few bright stars
        if (star.isBright) {
          const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4);
          glow.addColorStop(0, `rgba(255,255,255,${opacity * 0.25})`);
          glow.addColorStop(1, `rgba(255,255,255,0)`);
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Star dot
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -5 }}
    />
  );
}
