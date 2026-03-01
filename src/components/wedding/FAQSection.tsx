import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { WeddingData } from "@/static-data/data";

type FAQSectionProps = {
  data: WeddingData["faq"];
};

const FAQSection = ({ data }: FAQSectionProps) => {
  return (
    <section
      className="wedding-section"
      style={{
        background:
          "linear-gradient(160deg, #fdeee9 0%, #f7ece8 40%, #e9eef7 75%, #dce8f5 100%)",
      }}
    >
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
          {data.headingEyebrow}
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
          {data.headingTitle}
        </h2>
        <div
          className="mx-auto"
          style={{ width: "4rem", height: "1.5px", backgroundColor: "#d4845a" }}
        />
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto mt-12 px-4 text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="space-y-4">
          {data.items.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              style={{
                background: "#ffffff",
                borderRadius: "0.875rem",
                border: "1px solid #e5e7eb",
                padding: "0 1.75rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <AccordionTrigger
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  color: "#374151",
                  paddingTop: "1.4rem",
                  paddingBottom: "1.4rem",
                  textDecoration: "none",
                }}
                className="hover:no-underline"
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                style={{
                  color: "#6b7280",
                  fontSize: "0.95rem",
                  lineHeight: "1.75",
                  paddingBottom: "1.25rem",
                }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQSection;
