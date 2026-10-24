import { useEffect, useState } from "react";

/**
 * Ultra-slim 1.5px Europa-Park gold scroll progress indicator.
 * Driven strictly by GPU transform: scaleX for 60fps smoothness.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      setProgress(nextProgress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="no-print pointer-events-none fixed top-0 left-0 right-0 z-50 h-[2px] bg-night/20"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gold transition-transform duration-75 ease-out"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: "left",
          boxShadow: "0 0 8px rgba(255, 204, 0, 0.7)",
        }}
      />
    </div>
  );
}
