import { motion } from "framer-motion";

const GalleryStrip = () => {
  const images = [
    { src: "/images/couple-photo.jpg", alt: "Michalis & Fenia" },
    { src: "/images/gallery-1.jpg", alt: "Michalis & Fenia - At the bar" },
    { src: "/images/gallery-5.jpg", alt: "Michalis & Fenia - Adventure" },
  ];

  return (
    <section id="gallery" className="py-4 bg-card">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {images.map((img, idx) => (
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
