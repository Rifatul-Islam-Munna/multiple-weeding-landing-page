import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRSVPStore } from "../../../store/rsvpStore";

const topHearts = [
  { x: -34, y: -48, filled: false },
  { x: 0, y: -62, filled: true },
  { x: 34, y: -48, filled: false },
];

const bottomHearts = [
  { x: -34, y: 48, filled: false },
  { x: 0, y: 62, filled: true },
  { x: 34, y: 48, filled: false },
];

const allHearts = [...topHearts, ...bottomHearts];

const FloatingRSVP = () => {
  const { open } = useRSVPStore();
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setBurst(1), 2500);
    const interval = setInterval(() => setBurst((prev) => prev + 1), 4000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center">
      {/* Heart burst animation */}
      <AnimatePresence>
        {burst > 0 &&
          allHearts.map((heart, idx) => (
            <motion.div
              key={`${burst}-${idx}`}
              className="absolute pointer-events-none z-20"
              style={{
                left: "50%",
                top: "50%",
                marginLeft: -7,
                marginTop: -7,
              }}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: heart.x,
                y: heart.y,
                scale: [0, 1.4, 1.1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: idx * 0.07,
                ease: "easeOut",
              }}
            >
              <Heart
                size={heart.filled ? 15 : 12}
                fill={heart.filled ? "#d4845a" : "none"}
                color="#d4845a"
                strokeWidth={2}
              />
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        className="wedding-btn relative z-10 shadow-lg"
        onClick={open}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Heart size={16} />
        RSVP
      </motion.button>
    </div>
  );
};

export default FloatingRSVP;
