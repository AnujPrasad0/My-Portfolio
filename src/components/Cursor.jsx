// Lenis-like stable cursor — ready to paste
import React, { useEffect, useRef } from "react";

export default function LenisCursor({
  size = 16,                 // px
  color = "#323232",
  // baseLerp: logical smoothing per 1/60s frame. 0.12 ~ Lenis-like. Lower = smoother/slower.
  baseLerp = 0.3,
  hideClass = "cursor-hide", // elements with this class hide the cursor
  showOnMobile = false,      // set true if you want it on small screens
}) {
  const elRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });    // displayed position
  const targetRef = useRef({ x: 0, y: 0 }); // pointer position
  const rafRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const visibleRef = useRef(true);

  useEffect(() => {
    // avoid running on server
    if (typeof window === "undefined") return;

    // init positions to center so cursor is visible immediately
    posRef.current.x = window.innerWidth / 2;
    posRef.current.y = window.innerHeight / 2;
    targetRef.current.x = posRef.current.x;
    targetRef.current.y = posRef.current.y;

    // write initial transform and style
    if (elRef.current) {
      elRef.current.style.transform = `translate3d(${posRef.current.x - size / 2}px, ${posRef.current.y - size / 2}px, 0)`;
      elRef.current.style.opacity = "1";
    }

    function onMove(e) {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      const shouldHide = e.target?.closest?.(`.${hideClass}`);
      if (shouldHide) {
        if (visibleRef.current) {
          visibleRef.current = false;
          if (elRef.current) elRef.current.style.opacity = "0";
        }
      } else {
        if (!visibleRef.current) {
          visibleRef.current = true;
          if (elRef.current) elRef.current.style.opacity = "1";
        }
      }
    }

    function onTouchStart() {
      // hide on touch by default
      if (elRef.current) elRef.current.style.opacity = "0";
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    // RAF loop with delta-time corrected lerp
    const loop = (now) => {
      const dt = Math.min(40, now - lastTimeRef.current); // clamp dt to avoid huge jumps
      lastTimeRef.current = now;

      // Convert baseLerp (per 1/60s) to an effective lerp depending on dt:
      // factor = 1 - (1 - base)^(dt / (1000/60))
      const frameMs = 1000 / 60;
      const factor = 1 - Math.pow(1 - baseLerp, dt / frameMs);

      const p = posRef.current;
      const t = targetRef.current;

      p.x += (t.x - p.x) * factor;
      p.y += (t.y - p.y) * factor;

      if (elRef.current) {
        elRef.current.style.transform = `translate3d(${p.x - size / 2}px, ${p.y - size / 2}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onTouchStart);
      cancelAnimationFrame(rafRef.current);
    };
  }, [baseLerp, hideClass, size]);

  // Inline style — visible by default; no display:none nonsense
  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "999px",
    background: color,
    pointerEvents: "none",
    transform: `translate3d(-9999px, -9999px, 0)`, // overwritten by effect ASAP
    transition: "opacity 120ms ease", // subtle fade when hiding
    opacity: 1,
    zIndex: 9999,
    willChange: "transform, opacity",
  };

  // If you want to hide the native cursor globally, add in your CSS:
  // body { cursor: none; } — optional and recommended for full effect.
  // If you want it only on desktop, rely on the media query below.

  return (
    <>
      <style>{`
        /* show on desktop by default; remove media query if you always want it */
        @media (min-width: 768px) {
          .lenis-cursor { display: block; }
        }
        @media (max-width: 767px) {
          .lenis-cursor { display: ${showOnMobile ? "block" : "none"}; }
        }
      `}</style>

      <div
        ref={elRef}
        className="lenis-cursor"
        style={style}
        aria-hidden
      />
    </>
  );
}
