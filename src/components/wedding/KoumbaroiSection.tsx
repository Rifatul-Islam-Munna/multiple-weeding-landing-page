import { motion } from "framer-motion";
import type { WeddingData } from "@/static-data/data";

type KoumbaroiSectionProps = {
  data: WeddingData["koumbaroi"];
};

const KoumbaroiSection = ({ data }: KoumbaroiSectionProps) => {
  return (
    <section
      className="wedding-section"
      style={{
        background:
          "linear-gradient(160deg, #fdeee9 0%, #f7ece8 40%, #e9eef7 75%, #dce8f5 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p
          className="mb-2"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9ca3af",
          }}
        >
          {data.headingEyebrow}
        </p>
        <h2
          className="mb-3"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "2.75rem",
            fontWeight: 300,
            color: "#2d3a4a",
          }}
        >
          {data.headingTitle}
        </h2>
        <div
          className="mx-auto"
          style={{ width: "4rem", height: "1.5px", backgroundColor: "#d4845a" }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto mt-12 flex flex-wrap justify-center gap-8 px-6">
        {data.people.map((k, idx) => (
          <motion.div
            key={idx}
            style={{ width: "28rem" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <motion.div
              className="overflow-hidden"
              style={{
                background: "#ffffff",
                borderRadius: "1.25rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.01)",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={k.image}
                alt={k.name}
                className="w-full object-cover"
                style={{ height: "26rem" }}
                loading="lazy"
              />

              <div className="py-6 px-4 text-center">
                {k.name.split("\n").map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.1rem",
                      fontWeight: 300,
                      color: "#2d3a4a",
                      lineHeight: "1.7",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KoumbaroiSection;
