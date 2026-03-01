import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useRSVPStore } from "../../../store/rsvpStore";
import type { WeddingData } from "@/static-data/data";

type RSVPButtonProps = {
  data: WeddingData["rsvpButton"];
};

const RSVPButton = ({ data }: RSVPButtonProps) => {
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBurst(1);
    }, data.firstBurstDelayMs);

    const interval = setInterval(() => {
      setBurst((prev) => prev + 1);
    }, data.intervalMs);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [data.firstBurstDelayMs, data.intervalMs]);

  const { open, isOpen } = useRSVPStore((set) => set);
  console.log(isOpen);

  return (
    <div className="relative inline-flex items-center justify-center">
      <AnimatePresence>
        {burst > 0 &&
          data.hearts.map((heart, idx) => (
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
        {data.label}
      </motion.button>
    </div>
  );
};

export default RSVPButton;
