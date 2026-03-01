import { motion } from "framer-motion";
import { useRSVPStore } from "../../../store/rsvpStore";

// Hearts placed on a circle, alternating filled/outline
const circleHearts = [
  { angle: 0, filled: true },
  { angle: 45, filled: false },
  { angle: 90, filled: true },
  { angle: 135, filled: false },
  { angle: 180, filled: true },
  { angle: 225, filled: false },
  { angle: 270, filled: true },
  { angle: 315, filled: false },
];

const HeartRipple = () => {
  return (
    <>
      {circleHearts.map((h, idx) => {
        const rad = (h.angle * Math.PI) / 180;
        return (
          <motion.div
            key={idx}
            className="absolute pointer-events-none"
            style={{
              left: "50%",
              top: "50%",
              width: 12,
              height: 12,
              marginLeft: -6,
              marginTop: -6,
            }}
            animate={{
              x: [Math.cos(rad) * 48, Math.cos(rad) * 90, Math.cos(rad) * 90],
              y: [Math.sin(rad) * 48, Math.sin(rad) * 90, Math.sin(rad) * 90],
              opacity: [0, 0.85, 0],
              scale: [0.4, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: idx * 0.18,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeOut",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill={h.filled ? "#d4845a" : "none"}
              stroke="#d4845a"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </motion.div>
        );
      })}
    </>
  );
};

const InvitationSection = () => {
  const { open } = useRSVPStore();

  return (
    <section
      id="rsvp"
      className="wedding-section"
      style={{
        background:
          "linear-gradient(160deg, #fdeee9 0%, #f7ece8 40%, #e9eef7 75%, #dce8f5 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="overflow-hidden"
          style={{
            background: "#ffffff",
            borderRadius: "1.5rem",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            border: "1.5px solid #f0ddd5",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* ── LEFT — monogram + spinning diamonds + heart ripples ── */}
            <div
              className="md:w-1/2 relative flex items-center justify-center"
              style={{ padding: "4rem 3rem", minHeight: "340px" }}
            >
              {/* Diamond frame 1 — spins clockwise slowly */}
              {/* Diamond frame 1 — same size, spins clockwise */}
              <motion.div
                className="absolute"
                style={{
                  width: "50%",
                  paddingBottom: "50%",
                  top: "50%",
                  left: "50%",
                  marginLeft: "-25%",
                  marginTop: "-25%",
                  border: "1px solid rgba(212,132,90,0.28)",
                  borderRadius: "4px",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Diamond frame 2 — same size, spins counter-clockwise */}
              <motion.div
                className="absolute"
                style={{
                  width: "50%",
                  paddingBottom: "50%",
                  top: "50%",
                  left: "50%",
                  marginLeft: "-25%",
                  marginTop: "-25%",
                  border: "1px solid rgba(212,132,90,0.38)",
                  borderRadius: "4px",
                  rotate: 45,
                }}
                animate={{ rotate: [45, 45 - 360] }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Heart ripple circles */}
              <HeartRipple />

              {/* Monogram — slightly smaller */}
              <motion.img
                src="/images/floral-monogram.png"
                alt="Monogram"
                className="relative z-10"
                style={{ width: "8.5rem" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>

            {/* ── RIGHT — content ── */}
            <motion.div
              className="md:w-1/2 flex flex-col justify-center p-10 md:p-14 text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Invite line */}
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "0.9rem",
                  marginBottom: "0.6rem",
                }}
              >
                We invite you to our wedding.
              </p>

              {/* Short gold line */}
              <div
                style={{
                  width: "2.5rem",
                  height: "1.5px",
                  backgroundColor: "#d4845a",
                  marginBottom: "1rem",
                }}
              />

              {/* Names */}
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "2.4rem",
                  fontWeight: 300,
                  color: "#2d3a4a",
                  marginBottom: "1.75rem",
                  lineHeight: 1.2,
                }}
              >
                Michalis <span style={{ fontSize: "1.6rem" }}>&</span> Fenia
              </h2>

              {/* Date + venue */}
              <div
                style={{
                  borderTop: "1px solid #e5e7eb",
                  paddingTop: "1.25rem",
                  marginBottom: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.1rem",
                    color: "#2d3a4a",
                    marginBottom: "0.3rem",
                  }}
                >
                  September 13, 2025, 18:00
                </p>
                <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                  Chapel of Saint Gerasimos, Nefeles Estate, Koropi
                </p>
              </div>

              {/* Families + Best men */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  borderTop: "1px solid #e5e7eb",
                  paddingTop: "1.25rem",
                  marginBottom: "1.75rem",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "#2d3a4a",
                      marginBottom: "0.5rem",
                    }}
                  >
                    The families
                  </h4>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Aristotle & Vasiliki Polyzou
                  </p>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Elias & Soulas Vlachogiannis
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "#2d3a4a",
                      marginBottom: "0.5rem",
                    }}
                  >
                    The best men
                  </h4>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Neophytos Syriotis
                  </p>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Evelina Zafiri
                  </p>
                </div>
              </div>

              {/* CTA row */}
              <div className="flex items-center gap-5 flex-wrap">
                <motion.button
                  onClick={open}
                  style={{
                    backgroundColor: "#d4845a",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "0.7rem 1.8rem",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#c4733f" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Confirmation of Presence
                </motion.button>
                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                  }}
                >
                  RSVP by August 13th
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationSection;
