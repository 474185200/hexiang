import { useEffect, useRef } from 'react';

const hexToRgb = (hex) => {
  const normalized = hex.replace('#', '');
  const value =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized;

  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
};

const hsvToRgb = (h, s, v) => {
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  const values = [
    [v, t, p],
    [q, v, p],
    [p, v, t],
    [p, q, v],
    [t, p, v],
    [v, p, q],
  ][i % 6];

  return {
    r: Math.round(values[0] * 255),
    g: Math.round(values[1] * 255),
    b: Math.round(values[2] * 255),
  };
};

function SplashCursor({
  DENSITY_DISSIPATION = 3.5,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  COLOR_UPDATE_SPEED = 10,
  RAINBOW_MODE = false,
  COLOR = '#94a3b8',
}) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const splatsRef = useRef([]);
  const pointerRef = useRef({ x: 0, y: 0, px: 0, py: 0, active: false });
  const colorTickRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d', { alpha: true });
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let hue = 0.54;
    let lastSplatTime = 0;

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * pixelRatio);
      canvas.height = Math.floor(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const getColor = () => {
      if (!RAINBOW_MODE) return hexToRgb(COLOR);
      hue = (hue + 0.002 * COLOR_UPDATE_SPEED) % 1;
      return hsvToRgb(hue, 0.46, 1);
    };

    const startAnimation = () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      animationRef.current = requestAnimationFrame(draw);
    };

    const addSplat = (x, y, dx = 0, dy = 0) => {
      const color = getColor();
      const force = Math.min(Math.hypot(dx, dy) / Math.max(SPLAT_FORCE / 120, 1), 1.8);
      const radius = Math.max(34, SPLAT_RADIUS * 260 + force * 42);

      for (let index = 0; index < 4; index += 1) {
        splatsRef.current.push({
          x: x + (Math.random() - 0.5) * radius * 0.26,
          y: y + (Math.random() - 0.5) * radius * 0.26,
          vx: dx * 0.012 + (Math.random() - 0.5) * 1.4,
          vy: dy * 0.012 + (Math.random() - 0.5) * 1.4,
          radius: radius * (0.45 + Math.random() * 0.55),
          age: 0,
          life: 0.72 + Math.random() * 0.42,
          color,
        });
      }

      startAnimation();
    };

    const updatePointer = (event) => {
      const pointer = pointerRef.current;
      const x = event.clientX;
      const y = event.clientY;
      const dx = pointer.active ? x - pointer.x : 0;
      const dy = pointer.active ? y - pointer.y : 0;

      pointer.px = pointer.x;
      pointer.py = pointer.y;
      pointer.x = x;
      pointer.y = y;
      pointer.active = true;

      colorTickRef.current += 1;
      const now = event.timeStamp || performance.now();
      if (
        now - lastSplatTime > 28 &&
        (Math.abs(dx) + Math.abs(dy) > 4 || colorTickRef.current % 8 === 0)
      ) {
        lastSplatTime = now;
        addSplat(x, y, dx, dy);
      }
    };

    const updateTouch = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      updatePointer(touch);
    };

    const handleDown = (event) => {
      addSplat(event.clientX, event.clientY, 14, -18);
    };

    function draw(time) {
      const dt = 1 / 60;
      context.globalCompositeOperation = 'source-over';
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.globalCompositeOperation = 'lighter';

      splatsRef.current = splatsRef.current.filter((splat) => {
        splat.age += dt * (DENSITY_DISSIPATION / 2.9);
        splat.x += splat.vx;
        splat.y += splat.vy;
        splat.vx *= 0.985;
        splat.vy *= 0.985;

        const progress = splat.age / splat.life;
        if (progress >= 1) return false;

        const alpha = (1 - progress) * 0.24;
        const pulse = 1 + Math.sin(time * 0.002 + splat.radius) * 0.025;
        const radius = splat.radius * (0.8 + progress * 0.72) * pulse;
        const gradient = context.createRadialGradient(
          splat.x,
          splat.y,
          0,
          splat.x,
          splat.y,
          radius,
        );

        gradient.addColorStop(
          0,
          `rgba(${splat.color.r}, ${splat.color.g}, ${splat.color.b}, ${alpha})`,
        );
        gradient.addColorStop(
          0.45,
          `rgba(${splat.color.r}, ${splat.color.g}, ${splat.color.b}, ${alpha * 0.42})`,
        );
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(splat.x, splat.y, radius, 0, Math.PI * 2);
        context.fill();
        return true;
      });

      if (splatsRef.current.length > 0) {
        animationRef.current = requestAnimationFrame(draw);
      } else {
        isAnimatingRef.current = false;
        animationRef.current = null;
      }
    }

    resize();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', updatePointer, { passive: true });
    window.addEventListener('mousedown', handleDown, { passive: true });
    window.addEventListener('touchstart', updateTouch, { passive: true });
    window.addEventListener('touchmove', updateTouch, { passive: true });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', updatePointer);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('touchstart', updateTouch);
      window.removeEventListener('touchmove', updateTouch);
    };
  }, [
    COLOR,
    COLOR_UPDATE_SPEED,
    DENSITY_DISSIPATION,
    RAINBOW_MODE,
    SPLAT_FORCE,
    SPLAT_RADIUS,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="splashCursorCanvas"
      aria-hidden="true"
    />
  );
}

export default SplashCursor;
