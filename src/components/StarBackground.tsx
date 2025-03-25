import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  origZ: number;
  twinklePhase: number;
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);

    const numStars = 500;
    const stars: Star[] = [];
    const focalLength = width * 0.5;
    const speed = 0.05;

    // Initialize stars with random positions and depth (z)
    for (let i = 0; i < numStars; i++) {
      const z = Math.random() * width;
      stars.push({
        x: (Math.random() - 0.5) * width,
        y: (Math.random() - 0.5) * height,
        z,
        origZ: z,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      for (let star of stars) {
        // Move the star closer (simulate forward movement)
        star.z -= speed * dt;
        // Reset star when it gets too close
        if (star.z < 1) {
          star.x = (Math.random() - 0.5) * width;
          star.y = (Math.random() - 0.5) * height;
          star.z = star.origZ = width;
          star.twinklePhase = Math.random() * Math.PI * 2;
        }

        // Projection to 2D screen coordinates
        const k = focalLength / star.z;
        const x = star.x * k + width / 2;
        const y = star.y * k + height / 2;

        // Stars fade in and out with a twinkle effect
        const twinkle = 0.5 + Math.sin(time * 0.005 + star.twinklePhase) * 0.5;
        // Brightness and size based on distance (closer stars are larger and brighter)
        const size = (1 - star.z / width) * 3;
        const brightness = (1 - star.z / width) * twinkle;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness.toFixed(2)})`;
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate(lastTime);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ backgroundColor: 'black' }}
    />
  );
};

export default StarBackground;
