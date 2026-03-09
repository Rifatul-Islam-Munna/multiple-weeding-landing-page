import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import RSVPButton from "./RSVPButton";
import type { WeddingData } from "@/static-data/data";

type HeroSectionProps = {
  data: WeddingData["hero"];
  rsvpButtonData: WeddingData["rsvpButton"];
};

const HeroSection = ({ data, rsvpButtonData }: HeroSectionProps) => {
  const scrollToNext = () => {
    document
      .getElementById(data.scrollTargetId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative"
      style={{
        background:
          "linear-gradient(160deg, #fdeee9 0%, #f7ece8 40%, #e9eef7 75%, #dce8f5 100%)",
      }}
    >
      <motion.img
        src={data.monogram.src}
        alt={data.monogram.alt}
        className="mb-8"
        style={{ width: "16rem" }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

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
        {data.names.first} <span style={{ fontSize: "70%" }}>&</span>{" "}
        {data.names.second}
      </motion.h1>

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

      {data.subtitleLines.map((line, index) => (
        <motion.p
          key={index}
          style={{
            color: "#6b7280",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom:
              index === data.subtitleLines.length - 1 ? "3rem" : "0.2rem",
            whiteSpace: "pre-line",
          }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 + index * 0.15 }}
        >
          {line}
        </motion.p>
      ))}

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
          {data.date}
        </p>
        <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>{data.venue}</p>
      </motion.div>

      <RSVPButton data={rsvpButtonData} />

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8"
        style={{ color: "#d4845a" }}
        aria-label={data.scrollButtonAriaLabel}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
