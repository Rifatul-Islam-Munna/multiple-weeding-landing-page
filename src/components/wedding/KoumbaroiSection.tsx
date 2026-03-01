import { motion } from "framer-motion";

const koumbaroi = [
  {
    image: "/images/koumbaroi-1.jpg",
    name: "Evelina Zafiri\n& Panagiotis Karathanasis",
  },
  {
    image: "/images/koumbaroi-2.jpg",
    name: "Neophytos Syriotis\n& Renia Vitouladiti",
  },
];

const KoumbaroiSection = () => {
  return (
    <section
      className="wedding-section"
      style={{
        background:
          "linear-gradient(160deg, #fdeee9 0%, #f7ece8 40%, #e9eef7 75%, #dce8f5 100%)",
      }}
    >
      {/* Heading */}
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
          OUR FAVORITE PEOPLE
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
          Our best men
        </h2>
        <div
          className="mx-auto"
          style={{ width: "4rem", height: "1.5px", backgroundColor: "#d4845a" }}
        />
      </motion.div>

      {/* Cards grid — wider container, equal gap */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {koumbaroi.map((k, idx) => (
          <motion.div
            key={idx}
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
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image — full width, taller */}
              <img
                src={k.image}
                alt={k.name}
                className="w-full object-cover"
                style={{ height: "26rem" }}
                loading="lazy"
              />

              {/* Name inside card */}
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
