import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [visible, setVisible] = useState(true);

  // Smooth spring (similar to GSAP duration + ease)
  const smoothX = useSpring(x, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);

      // Check if target or parent has the hiding class
      const shouldHide = e.target.closest(".cursor-hide");
      setVisible(!shouldHide);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.9 }}
      transition={{
        opacity: { duration: 0.12, ease: "easeInOut" },
        scale: { duration: 0.12 },
      }}
      className="z-999 fixed top-0 left-0 w-4 h-4 bg-[#323232] rounded-full pointer-events-none translate-[-50%] hidden lg:inline"
    />
  );
}
