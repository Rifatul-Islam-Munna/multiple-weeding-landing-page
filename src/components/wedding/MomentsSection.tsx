import { motion } from "framer-motion";

const moments = [
  {
    image: "/images/moment-1.jpg",
    title: "Night out",
    subtitle: "At our favorite restaurant",
  },
  {
    image: "/images/moment-2.jpg",
    title: "Magical sunset",
    subtitle: "Romantic moments together",
  },
  {
    image: "/images/moment-3.jpg",
    title: "Music night",
    subtitle: "Jazz and love",
  },
];

const MomentsSection = () => {
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
          A WALK THROUGH OUR MEMORIES
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
          Moments
        </h2>
        <div
          className="mx-auto"
          style={{ width: "4rem", height: "1.5px", backgroundColor: "#d4845a" }}
        />
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {moments.map((m, idx) => (
          <motion.div
            key={idx}
            className="group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
          >
            {/* Card — fixed tall height, overflow hidden for zoom effect */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "1.25rem",
                height: "32rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              }}
            >
              {/* Image — zooms on hover, card itself stays still */}
              <img
                src={m.image}
                alt={m.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Dark gradient overlay — only visible on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
                }}
              />

              {/* Text overlay — bottom left, slides up on hover */}
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <h4
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "#ffffff",
                    lineHeight: "1.4",
                    marginBottom: "0.25rem",
                  }}
                >
                  {m.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.5",
                  }}
                >
                  {m.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MomentsSection;
