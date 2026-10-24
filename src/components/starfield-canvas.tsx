import { useEffect, useRef } from "react";

interface StarfieldCanvasProps {
  className?: string;
  density?: "hero" | "footer";
}

interface Star {
  x: number;
  y: number;
  layer: number; // 0 = far, 1 = mid, 2 = near/accent
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
  isAccent?: boolean;
}

/**
 * 60fps canvas starfield with multi-layer parallax, lag lerp,
 * page-visibility pausing, intersection-observer pausing, and
 * prefers-reduced-motion support.
 */
export function StarfieldCanvas({ className = "", density = "hero" }: StarfieldCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number | null = null;
    let isVisible = true;
    let isPageVisible = !document.hidden;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const isMobile = width < 640;
    const starCount = isMobile
      ? density === "hero" ? 34 : 20
      : density === "hero" ? 76 : 42;

    const stars: Star[] = [];
    const GOLD = "#ffcc00";
    const WARM_WHITE = "#f3efe4";
    const MIST = "#ddd8ea";

    for (let i = 0; i < starCount; i++) {
      const rand = Math.random();
      let layer = 0;
      let size = 0.8 + Math.random() * 0.5;
      let baseAlpha = 0.25 + Math.random() * 0.3;
      let color = MIST;
      let isAccent = false;

      if (rand > 0.84) {
        // Foreground accent stars (Europa-Park Gold)
        layer = 2;
        size = 1.8 + Math.random() * 1.2;
        baseAlpha = 0.75 + Math.random() * 0.25;
        color = GOLD;
        isAccent = Math.random() > 0.45;
      } else if (rand > 0.5) {
        // Mid layer
        layer = 1;
        size = 1.2 + Math.random() * 0.6;
        baseAlpha = 0.45 + Math.random() * 0.35;
        color = Math.random() > 0.35 ? WARM_WHITE : GOLD;
      }

      stars.push({
        x: Math.random(),
        y: Math.random(),
        layer,
        size,
        baseAlpha,
        twinkleSpeed: 0.015 + Math.random() * 0.03,
        twinkleOffset: Math.random() * Math.PI * 2,
        color,
        isAccent,
      });
    }

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const drawCrossStar = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      arm: number,
      color: string
    ) => {
      c.save();
      c.fillStyle = color;
      c.beginPath();
      c.moveTo(cx, cy - arm);
      c.quadraticCurveTo(cx, cy, cx + arm * 0.22, cy);
      c.quadraticCurveTo(cx, cy, cx, cy + arm);
      c.quadraticCurveTo(cx, cy, cx - arm * 0.22, cy);
      c.closePath();
      c.fill();

      c.beginPath();
      c.moveTo(cx - arm, cy);
      c.quadraticCurveTo(cx, cy, cx, cy + arm * 0.22);
      c.quadraticCurveTo(cx, cy, cx + arm, cy);
      c.quadraticCurveTo(cx, cy, cx, cy - arm * 0.22);
      c.closePath();
      c.fill();

      c.beginPath();
      c.arc(cx, cy, arm * 0.28, 0, Math.PI * 2);
      c.fill();
      c.restore();
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const px = s.x * width;
        const py = s.y * height;
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.baseAlpha;

        if (s.isAccent) {
          drawCrossStar(ctx, px, py, s.size * 2, s.color);
        } else {
          ctx.beginPath();
          ctx.arc(px, py, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    if (prefersReducedMotion) {
      drawStatic();
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }

    let time = 0;

    const render = () => {
      if (!isVisible || !isPageVisible) {
        animationFrameId = null;
        return;
      }

      time += 0.016;
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const parallaxFactors = [0.25, 0.48, 0.72];

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const factor = parallaxFactors[s.layer];
        const scrollShift = currentScrollY * factor;

        const rawY = s.y * height + scrollShift;
        const py = ((rawY % height) + height) % height;
        const px = s.x * width;

        const twinkle = Math.sin(time * s.twinkleSpeed * 60 + s.twinkleOffset);
        const currentAlpha = Math.max(0.12, Math.min(1, s.baseAlpha + twinkle * 0.25));

        ctx.globalAlpha = currentAlpha;

        if (s.isAccent) {
          drawCrossStar(ctx, px, py, s.size * 2.2, s.color);
        } else {
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(px, py, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (isVisible && !animationFrameId && isPageVisible) {
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible && isVisible && !animationFrameId) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(container);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [density]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block size-full" />
    </div>
  );
}
