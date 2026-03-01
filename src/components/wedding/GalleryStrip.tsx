import { motion } from "framer-motion";
import type { WeddingData } from "@/static-data/data";

type GalleryStripProps = {
  data: WeddingData["gallery"];
};

const GalleryStrip = ({ data }: GalleryStripProps) => {
  return (
    <section id="gallery" className="py-4 bg-card">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {data.images.map((img, idx) => (
          <motion.div
            key={idx}
            className="aspect-[4/5] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GalleryStrip;
