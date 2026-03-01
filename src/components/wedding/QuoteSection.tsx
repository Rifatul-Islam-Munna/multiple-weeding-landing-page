import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  "/images/couple-photo.jpg",
  "/images/gallery-1.jpg",
  "/images/gallery-5.jpg",
  "/images/moment-1.jpg",
  "/images/moment-2.jpg",
  "/images/moment-3.jpg",
];

const QuoteSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  return (
    <section className=" wedding-section">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image Carousel */}
          <motion.div
            className="md:w-1/2 w-full max-w-md"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <motion.img
                key={current}
                src={photos[current]}
                alt="Michalis & Fenia"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Navigation arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={32} />
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === current
                        ? "bg-primary-foreground scale-125"
                        : "bg-primary-foreground/50"
                    }`}
                    aria-label={`Go to photo ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <blockquote className="font-serif text-xl md:text-2xl italic font-light leading-relaxed text-muted-foreground">
              "From our first ride, to the packed weekends, the trips with Elli
              in the back seat, and the weekdays with coffee in hand… every
              journey has brought us here."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
