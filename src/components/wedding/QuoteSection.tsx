import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { WeddingData } from "@/static-data/data";

type QuoteSectionProps = {
  data: WeddingData["quote"];
};

const QuoteSection = ({ data }: QuoteSectionProps) => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? data.photos.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === data.photos.length - 1 ? 0 : c + 1));

  return (
    <section className=" wedding-section">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
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
                src={data.photos[current]}
                alt={data.imageAlt}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
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
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {data.photos.map((_, idx) => (
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

          <motion.div
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <blockquote className="font-serif text-xl md:text-2xl italic font-light leading-relaxed text-muted-foreground">
              {data.quote}
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
