import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useRSVPStore } from "../../../store/rsvpStore";

// Top semi-arc: left outline, center filled, right outline
const topHearts = [
  { x: -34, y: -48, filled: false },
  { x: 0, y: -62, filled: true },
  { x: 34, y: -48, filled: false },
];

// Bottom semi-arc: mirror of top
const bottomHearts = [
  { x: -34, y: 48, filled: false },
  { x: 0, y: 62, filled: true },
  { x: 34, y: 48, filled: false },
];

const allHearts = [...topHearts, ...bottomHearts];

const RSVPButton = () => {
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    // First burst after 2.5s, then every 4s
    const timeout = setTimeout(() => {
      setBurst(1);
    }, 40000);

    const interval = setInterval(() => {
      setBurst((prev) => prev + 1);
    }, 4000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);
  const { open, isOpen } = useRSVPStore((set) => set);
  console.log(isOpen);
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Heart bursts — remount on each burst tick via key */}
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

      {/* The actual button — unchanged style */}
      <motion.button
        className="wedding-btn relative z-10"
        onClick={() => open()}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Heart size={16} />
        RSVP
      </motion.button>
    </div>
  );
};

export default RSVPButton;
