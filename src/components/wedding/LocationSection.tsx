import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { WeddingData } from "@/static-data/data";

type LocationSectionProps = {
  data: WeddingData["location"];
};

const ProgramAndLocation = ({ data }: LocationSectionProps) => {
  return (
    <div className="">
      <section className="wedding-section pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="wedding-subtext mb-2">{data.headingEyebrow}</p>
          <h2 className="wedding-heading mb-2">{data.headingTitle}</h2>
          <div className="w-16 h-[2px] bg-wedding-gold mx-auto mb-4" />
        </motion.div>

        <div className="max-w-5xl mx-auto mt-20 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wedding-gold -translate-x-1/2" />

          <div className="space-y-28">
            {data.events.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative">
                  <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-wedding-gold" />
                  </div>

                  <div
                    className={`flex flex-col gap-8 items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <motion.div
                      className="w-full md:w-[45%]"
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="bg-white rounded-2xl shadow-md p-3">
                        <img
                          src={event.image}
                          alt={event.imageAlt}
                          className="w-full h-56 md:h-64 object-cover rounded-xl"
                          loading="lazy"
                        />
                      </div>
                    </motion.div>

                    <div className="hidden md:block md:w-[10%]" />

                    <motion.div
                      className={`w-full md:w-[45%] text-center ${
                        isLeft ? "md:text-left" : "md:text-right"
                      }`}
                      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7, delay: 0.15 }}
                    >
                      <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-2">
                        {event.time}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl font-light text-wedding-gold mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px bg-wedding-gold"
            style={{ bottom: "-6rem", height: "6rem" }}
          />
        </div>
      </section>

      <section className="wedding-section pt-24">
        <motion.div
          className="max-w-2xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px bg-wedding-gold z-10"
            style={{ top: "-6rem", height: "6rem" }}
          />

          <div
            className="bg-white rounded-2xl shadow-md text-center px-10 py-10"
            style={{ border: "1.5px solid #e8c9b8" }}
          >
            <p className="text-sm text-gray-500 tracking-wide mb-2">
              {data.card.label}
            </p>
            <div className="w-8 h-[1.5px] bg-wedding-gold mx-auto mb-6" />

            <h3 className="font-serif text-2xl md:text-3xl font-light text-wedding-dark mb-6 leading-snug">
              {data.card.venue}
            </h3>

            <hr className="border-gray-100 mb-5" />

            <p className="text-gray-600 font-medium mb-1">{data.card.city}</p>
            <p className="text-gray-400 text-sm mb-5">{data.card.address}</p>

            <hr className="border-gray-100 mb-5" />

            <p className="text-gray-400 text-sm mb-8">{data.card.parking}</p>

            <motion.a
              href={data.card.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm text-wedding-gold transition-all"
              style={{ border: "1.5px solid #d4845a" }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#d4845a",
                color: "#fff",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin size={15} />
              {data.card.buttonLabel}
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProgramAndLocation;
