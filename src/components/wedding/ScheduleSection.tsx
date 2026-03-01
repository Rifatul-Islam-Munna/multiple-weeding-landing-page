import { motion } from "framer-motion";
import Divider from "./Divider";

const events = [
  {
    time: "AT 18:00",
    title: "The mystery",
    description:
      "In a small chapel, as the sun sets, something truly beautiful begins",
    image: "/images/church.jpg",
    imageAlt: "Chapel of Saint Gerasimos",
  },
  {
    time: "AT 19:00",
    title: "Aperitif Hour",
    description:
      "A short break with drinks and treats before the party starts",
    image: "/images/aperitif.png",
    imageAlt: "Aperitif Hour",
  },
  {
    time: "AT 20:30",
    title: "The Party!",
    description:
      "A summer evening full of lights, music and dances that begin without a schedule",
    image: "/images/party.jpg",
    imageAlt: "The Party",
  },
];

const ScheduleSection = () => {
  return (
    <section className="wedding-gradient wedding-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="wedding-subtext mb-2">THE BIG DAY</p>
        <h2 className="wedding-heading mb-2">Program</h2>
        <div className="w-16 h-[2px] bg-wedding-gold mx-auto mb-4" />
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto mt-16 relative">
        {/* Vertical timeline line - centered */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        <div className="space-y-24">
          {events.map((event, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className="w-3 h-3 rounded-full bg-wedding-gold" />
                </div>

                <div
                  className={`flex flex-col gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  {/* Image card side */}
                  <motion.div
                    className="md:w-[45%]"
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="wedding-card p-3">
                      <img
                        src={event.image}
                        alt={event.imageAlt}
                        className="w-full h-56 md:h-64 object-cover rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>

                  {/* Spacer for timeline */}
                  <div className="hidden md:block md:w-[10%]" />

                  {/* Text side */}
                  <motion.div
                    className={`md:w-[45%] ${
                      isLeft ? "md:text-left" : "md:text-right"
                    } text-center`}
                    initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                  >
                    <p className="wedding-subtext text-xs mb-2">{event.time}</p>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-wedding-gold mb-3">
                      {event.title}
                    </h3>
                    <p className="wedding-body">{event.description}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
