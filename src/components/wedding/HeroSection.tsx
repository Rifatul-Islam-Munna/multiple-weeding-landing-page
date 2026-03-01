import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import RSVPButton from "./RSVPButton";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative"
      style={{
        background:
          "linear-gradient(160deg, #fdeee9 0%, #f7ece8 40%, #e9eef7 75%, #dce8f5 100%)",
      }}
    >
      {/* Monogram — drops in from above */}
      <motion.img
        src="/images/floral-monogram.png"
        alt="Floral Monogram"
        className="mb-8"
        style={{ width: "16rem" }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Names — large, drops in from above */}
      <motion.h1
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(2.4rem, 6vw, 3.8rem)",
          fontWeight: 300,
          letterSpacing: "0.02em",
          color: "#2d3a4a",
          marginBottom: "1rem",
          lineHeight: 1.2,
        }}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        Michalis <span style={{ fontSize: "70%" }}>&</span> Fenia
      </motion.h1>

      {/* Gold divider — scales in */}
      <motion.div
        style={{
          width: "4rem",
          height: "1.5px",
          backgroundColor: "#d4845a",
          margin: "0 auto 1.75rem",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />

      {/* Subtitle lines — drop in from above */}
      <motion.p
        style={{
          color: "#6b7280",
          fontSize: "1.05rem",
          lineHeight: 1.8,
          marginBottom: "0.2rem",
        }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
      >
        The most beautiful day of our lives,
      </motion.p>
      <motion.p
        style={{
          color: "#6b7280",
          fontSize: "1.05rem",
          lineHeight: 1.8,
          marginBottom: "3rem",
        }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        with our most special people
      </motion.p>

      {/* Date + venue block — drops in from above */}
      <motion.div
        style={{
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
          padding: "1.5rem 3rem",
          marginBottom: "2.5rem",
          width: "100%",
          maxWidth: "520px",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: 300,
            color: "#2d3a4a",
            marginBottom: "0.5rem",
          }}
        >
          September 13, 2025
        </p>
        <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
          Chapel of Saint Gerasimos, Nefeles Estate, Koropi
        </p>
      </motion.div>

      {/* RSVP Button */}
      <RSVPButton />

      {/* Scroll chevron — bounces */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8"
        style={{ color: "#d4845a" }}
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
