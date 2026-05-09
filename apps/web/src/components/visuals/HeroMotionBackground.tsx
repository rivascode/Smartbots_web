import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function HeroMotionBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let startTime = performance.now();

    // Recalcula densidad y tamaño para que el canvas se vea fluido en desktop y mobile.
    const reset = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      startTime = performance.now();

      particles.length = 0;
      const count = Math.max(46, Math.min(92, Math.floor(width / 20)));
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9,
          radius: Math.random() * 2.4 + 1.4
        });
      }
    };

    // Dibuja barridos, partículas, conexiones y pequeños paquetes de datos en movimiento continuo.
    const draw = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      context.clearRect(0, 0, width, height);

      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(216, 27, 184, 0.16)");
      gradient.addColorStop(0.55, "rgba(15, 174, 200, 0.1)");
      gradient.addColorStop(1, "rgba(15, 174, 200, 0.2)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      for (let index = 0; index < 5; index += 1) {
        const y = ((elapsed * 70 + index * height * 0.24) % (height + 140)) - 70;
        const scan = context.createLinearGradient(0, y, width, y + 80);
        scan.addColorStop(0, "rgba(216, 27, 184, 0)");
        scan.addColorStop(0.5, "rgba(105, 224, 242, 0.22)");
        scan.addColorStop(1, "rgba(216, 27, 184, 0)");
        context.fillStyle = scan;
        context.fillRect(0, y, width, 80);
      }

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const other = particles[nextIndex];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 145) {
            const opacity = 1 - distance / 145;
            context.strokeStyle = `rgba(105, 224, 242, ${opacity * 0.34})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();

            if ((index + nextIndex) % 13 === 0) {
              const travel = (elapsed * 0.85 + index * 0.11) % 1;
              const packetX = particle.x + (other.x - particle.x) * travel;
              const packetY = particle.y + (other.y - particle.y) * travel;
              context.fillStyle = `rgba(255, 255, 255, ${opacity * 0.9})`;
              context.beginPath();
              context.arc(packetX, packetY, 2.4, 0, Math.PI * 2);
              context.fill();
            }
          }
        }

        context.fillStyle = index % 3 === 0 ? "rgba(216, 27, 184, 0.9)" : "rgba(105, 224, 242, 0.9)";
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    reset();
    draw();
    window.addEventListener("resize", reset);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", reset);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-motion-canvas" aria-hidden="true" />;
}
