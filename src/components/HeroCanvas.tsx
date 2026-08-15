"use client";

import { useEffect, useRef } from "react";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Particle nodes definition (scaled down for 60fps mobile performance)
    const PARTICLE_COUNT = Math.min(Math.floor(width / 40), 30);
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.15,
    }));

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Subtle Grid Pattern
      const gridSize = 60;
      ctx.strokeStyle = "rgba(0, 0, 0, 0.02)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Mouse Spotlight Gradient
      const spotlight = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        400
      );
      spotlight.addColorStop(0, "rgba(255, 176, 32, 0.08)");
      spotlight.addColorStop(0.5, "rgba(255, 176, 32, 0.02)");
      spotlight.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, width, height);

      // 3. Central Animated Gradient Mesh Orbs
      const orb1X = width * 0.5 + Math.sin(time * 0.5) * 120;
      const orb1Y = height * 0.3 + Math.cos(time * 0.3) * 80;
      const orb1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, 350);
      orb1.addColorStop(0, "rgba(255, 176, 32, 0.08)");
      orb1.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = orb1;
      ctx.fillRect(0, 0, width, height);

      const orb2X = width * 0.7 + Math.cos(time * 0.4) * 100;
      const orb2Y = height * 0.6 + Math.sin(time * 0.6) * 90;
      const orb2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, 300);
      orb2.addColorStop(0, "rgba(16, 185, 129, 0.05)");
      orb2.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = orb2;
      ctx.fillRect(0, 0, width, height);

      // 4. Update & Draw Particles with Connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = `rgba(255, 176, 32, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect near particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(255, 176, 32, ${
              (1 - dist / 120) * 0.12
            })`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
