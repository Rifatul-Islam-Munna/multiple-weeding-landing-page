import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Where will the ceremony and reception take place?",
    answer:
      "The ceremony and reception will take place at the Chapel of Saint Gerasimos, Nefeles Estate, Koropi.",
  },
  {
    question: "Is there a dress code for the wedding?",
    answer:
      "We suggest elegant attire in soft tones. Please avoid white and black.",
  },
  {
    question: "Can I bring children to the wedding?",
    answer: "Of course! Children are welcome at our celebration.",
  },
  {
    question: "What if I have dietary requirements?",
    answer:
      "Please let us know through the RSVP about any allergies or dietary preferences.",
  },
  {
    question: "By when do I have to send the RSVP?",
    answer: "Please send your RSVP by August 13, 2025.",
  },
  {
    question: "Is there any way we can contribute to your new beginning?",
    answer:
      "Your presence is the greatest gift. If you'd like to contribute, a monetary gift would be greatly appreciated.",
  },
];

const FAQSection = () => {
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
          EVERYTHING YOU WANT TO KNOW
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
          Frequently Asked Questions
        </h2>
        <div
          className="mx-auto"
          style={{ width: "4rem", height: "1.5px", backgroundColor: "#d4845a" }}
        />
      </motion.div>

      {/* FAQ list — max-w-4xl to match screenshot width */}
      <motion.div
        className="max-w-4xl mx-auto mt-12 px-4 text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
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
