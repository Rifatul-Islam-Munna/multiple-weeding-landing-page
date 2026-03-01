import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const events = [
  {
    time: "AT 18:00",
    title: "The mystery",
    description:
      "In a small chapel, as the sun sets, something truly beautiful begins.",
    image: "/images/church.jpg",
    imageAlt: "Chapel of Saint Gerasimos",
  },
  {
    time: "AT 19:00",
    title: "Aperitif Hour",
    description:
      "A short break with drinks and treats before the party starts.",
    image: "/images/aperitif.png",
    imageAlt: "Aperitif Hour",
  },
  {
    time: "AT 20:30",
    title: "The Party!",
    description:
      "A summer evening full of lights, music and dancing that starts without a program.",
    image: "/images/party.jpg",
    imageAlt: "The Party",
  },
];

const ProgramAndLocation = () => {
  return (
    <div className="">
      {/* ───────────── SCHEDULE SECTION ───────────── */}
      <section className="wedding-section pb-0">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="wedding-subtext mb-2">THE BIG DAY</p>
          <h2 className="wedding-heading mb-2">Program</h2>
          <div className="w-16 h-[2px] bg-wedding-gold mx-auto mb-4" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto mt-20 relative">
          {/* Orange vertical line — extends fully through + into location below */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wedding-gold -translate-x-1/2" />

          <div className="space-y-28">
            {events.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative">
                  {/* Orange dot on the line */}
                  <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-wedding-gold" />
                  </div>

                  <div
                    className={`flex flex-col gap-8 items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Image card */}
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

                    {/* Center spacer */}
                    <div className="hidden md:block md:w-[10%]" />

                    {/* Text */}
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

          {/* Orange line extension below last event → into location card */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px bg-wedding-gold"
            style={{ bottom: "-6rem", height: "6rem" }}
          />
        </div>
      </section>

      {/* ───────────── LOCATION SECTION ───────────── */}
      <section className="wedding-section pt-24">
        <motion.div
          className="max-w-2xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* The orange line plugs into the top-center of this card */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px bg-wedding-gold z-10"
            style={{ top: "-6rem", height: "6rem" }}
          />

          {/* Location card — orange border matches the line */}
          <div
            className="bg-white rounded-2xl shadow-md text-center px-10 py-10"
            style={{ border: "1.5px solid #e8c9b8" }}
          >
            {/* "Location" label inside card top */}
            <p className="text-sm text-gray-500 tracking-wide mb-2">Location</p>
            {/* Short gold underline under label */}
            <div className="w-8 h-[1.5px] bg-wedding-gold mx-auto mb-6" />

            {/* Venue name */}
            <h3 className="font-serif text-2xl md:text-3xl font-light text-wedding-dark mb-6 leading-snug">
              Chapel of Saint Gerasimos - Nefeles Estate
            </h3>

            <hr className="border-gray-100 mb-5" />

            {/* Address */}
            <p className="text-gray-600 font-medium mb-1">Koropi</p>
            <p className="text-gray-400 text-sm mb-5">
              50 Agios Ioannou and Theseos, Koropi 194 00
            </p>

            <hr className="border-gray-100 mb-5" />

            {/* Parking */}
            <p className="text-gray-400 text-sm mb-8">Parking available</p>

            {/* Maps button — outlined pill with orange border */}
            <motion.a
              href="https://maps.google.com/?q=Κτήμα+Νεφέλες+Κορωπί"
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
              Location
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProgramAndLocation;
