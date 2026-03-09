import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  X,
  Plus,
  Minus,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRSVPStore } from "../../../store/rsvpStore";
import type { WeddingData } from "@/static-data/data";
import { toast } from "sonner";

interface Guest {
  id: number;
  name: string;
  attending: "yes" | "no" | null;
  phone: string;
  dietary: string;
  isChild: boolean;
  isYoungChild: boolean;
}

type RSVPModalProps = {
  data: WeddingData["rsvpModal"];
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const defaultGuest = (id: number): Guest => ({
  id,
  name: "",
  attending: null,
  phone: "",
  dietary: "",
  isChild: false,
  isYoungChild: false,
});

const Toggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) => (
  <button
    type="button"
    onClick={() => onChange(!checked)}
    className="relative flex-shrink-0 w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none"
    style={{ backgroundColor: checked ? "#d4845a" : "#d1d5db" }}
  >
    <span
      className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300"
      style={{ transform: checked ? "translateX(1.5rem)" : "translateX(0)" }}
    />
  </button>
);

// ─── Feedback Banner ────────────────────────────────────────────────────────
const FeedbackBanner = ({
  status,
  successMessage,
  errorMessage,
}: {
  status: SubmitStatus;
  successMessage: string;
  errorMessage: string;
}) => {
  if (status !== "success" && status !== "error") return null;

  const isSuccess = status === "success";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
        className="flex items-center gap-2 mx-5 mb-3 px-4 py-3 rounded-xl text-sm font-medium"
        style={{
          background: isSuccess ? "#f0fdf4" : "#fef2f2",
          border: `1px solid ${isSuccess ? "#bbf7d0" : "#fecaca"}`,
          color: isSuccess ? "#15803d" : "#b91c1c",
        }}
      >
        {isSuccess ? (
          <CheckCircle size={16} className="flex-shrink-0" />
        ) : (
          <AlertCircle size={16} className="flex-shrink-0" />
        )}
        {isSuccess ? successMessage : errorMessage}
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
const RSVPModal = ({ data }: RSVPModalProps) => {
  const { isOpen, close } = useRSVPStore();
  const [guests, setGuests] = useState<Guest[]>([defaultGuest(1)]);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const scrollRef = useRef<HTMLDivElement>(null);

  const updateGuest = (id: number, fields: Partial<Guest>) => {
    setGuests((prev) =>
      prev.map((g) => (g.id === id ? { ...g, ...fields } : g)),
    );
  };

  const addGuest = () => {
    setGuests((prev) => [...prev, defaultGuest(Date.now())]);
    setTimeout(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  const removeGuest = (id: number) => {
    setGuests((prev) => prev.filter((g) => g.id !== id));
  };

  // ─── Submit Handler ──────────────────────────────────────────────────────
  const handleSubmit = async () => {
    // Basic guard: first guest must have a name
    const primaryGuest = guests[0];
    if (!primaryGuest.name.trim()) return;

    setSubmitStatus("loading");

    try {
      const res = await fetch("/api/send-rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(guests),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      setSubmitStatus("success");

      // Auto-close after success
      handleReset();
      toast.success("RSVP submitted successfully!");
    } catch (err) {
      console.error("RSVP submission error:", err);
      setSubmitStatus("error");
    }
  };

  const handleReset = () => {
    setGuests([defaultGuest(1)]);
    setSubmitStatus("idle");
    close();
  };

  const isLoading = submitStatus === "loading";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent
        className="p-0 gap-0 !animate-none duration-0 overflow-hidden"
        style={{
          maxWidth: "480px",
          width: "100%",
          borderRadius: "1.5rem",
          border: "none",
          background: "transparent",
          boxShadow: "none",
          maxHeight: "90vh",
        }}
      >
        <DialogTitle className="sr-only">{data.dialogTitle}</DialogTitle>

        <motion.div
          className="flex flex-col w-full overflow-hidden"
          style={{
            background: "#ffffff",
            borderRadius: "1.5rem",
            boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
            maxHeight: "90vh",
          }}
          initial={{ opacity: 0, scale: 0.93, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 16 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close Button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
            style={{ background: "#fff" }}
          >
            <X size={15} />
          </button>

          {/* Header */}
          <div className="text-center pt-8 pb-4 px-6 flex-shrink-0">
            <Heart
              size={28}
              color="#d4845a"
              fill="none"
              strokeWidth={1.5}
              className="mx-auto mb-3"
            />
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.6rem",
                fontWeight: 400,
                color: "#2d3a4a",
                marginBottom: "0.4rem",
              }}
            >
              {data.title}
            </h2>
            <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
              {data.confirmByText}
            </p>
          </div>

          {/* Feedback Banner */}
          <FeedbackBanner
            status={submitStatus}
            successMessage={
              data.successMessage ?? "Your RSVP has been sent successfully!"
            }
            errorMessage={
              data.errorMessage ?? "Something went wrong. Please try again."
            }
          />

          {/* Scrollable Guest List */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-5 pb-4"
            style={{ minHeight: 0 }}
          >
            <div className="space-y-4">
              {guests.map((guest, idx) => (
                <div
                  key={guest.id}
                  style={{
                    background: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    borderRadius: "1rem",
                    padding: "1.25rem",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "1.05rem",
                        fontWeight: 500,
                        color: "#2d3a4a",
                      }}
                    >
                      {idx === 0
                        ? data.firstGuestLabel
                        : `${data.guestLabelPrefix} ${idx + 1}`}
                    </h3>
                    {idx > 0 ? (
                      <button
                        onClick={() => removeGuest(guest.id)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                    ) : (
                      <span className="text-gray-200">
                        <Minus size={16} />
                      </span>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder={data.namePlaceholder}
                    value={guest.name}
                    onChange={(e) =>
                      updateGuest(guest.id, { name: e.target.value })
                    }
                    className="w-full mb-3 focus:outline-none"
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "9999px",
                      padding: "0.65rem 1.1rem",
                      fontSize: "0.9rem",
                      color: "#374151",
                    }}
                  />

                  {idx === 0 && (
                    <div className="flex gap-2 mb-3">
                      <button
                        type="button"
                        onClick={() =>
                          updateGuest(guest.id, { attending: "yes" })
                        }
                        className="flex-1 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                        style={{
                          background:
                            guest.attending === "yes" ? "#6aaa64" : "#ffffff",
                          color:
                            guest.attending === "yes" ? "#ffffff" : "#374151",
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        {data.comingLabel}
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          updateGuest(guest.id, { attending: "no" })
                        }
                        className="flex-1 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                        style={{
                          background:
                            guest.attending === "no" ? "#ef4444" : "#ffffff",
                          color:
                            guest.attending === "no" ? "#ffffff" : "#374151",
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        {data.notComingLabel}
                      </button>
                    </div>
                  )}

                  {idx === 0 && (
                    <input
                      type="tel"
                      placeholder={data.phonePlaceholder}
                      value={guest.phone}
                      onChange={(e) =>
                        updateGuest(guest.id, { phone: e.target.value })
                      }
                      className="w-full mb-3 focus:outline-none"
                      style={{
                        background: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "9999px",
                        padding: "0.65rem 1.1rem",
                        fontSize: "0.9rem",
                        color: "#374151",
                      }}
                    />
                  )}

                  {idx > 0 && (
                    <>
                      <div
                        className="flex items-center justify-between mb-2 px-3 py-3 rounded-xl"
                        style={{ background: "#f0f7f4" }}
                      >
                        <div className="flex items-center gap-2">
                          <span style={{ fontSize: "1.1rem" }}>
                            {data.childIcon}
                          </span>
                          <span
                            style={{ color: "#374151", fontSize: "0.9rem" }}
                          >
                            {data.childLabel}
                          </span>
                        </div>
                        <Toggle
                          checked={guest.isChild}
                          onChange={(v) =>
                            updateGuest(guest.id, {
                              isChild: v,
                              isYoungChild: v ? guest.isYoungChild : false,
                            })
                          }
                        />
                      </div>

                      <AnimatePresence>
                        {guest.isChild && (
                          <motion.div
                            key="young-child"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div
                              className="flex items-center justify-between mb-2 px-3 py-3 rounded-xl"
                              style={{ background: "#fef3ed" }}
                            >
                              <span
                                style={{ color: "#374151", fontSize: "0.9rem" }}
                              >
                                {data.childAgeLabel}
                              </span>
                              <Toggle
                                checked={guest.isYoungChild}
                                onChange={(v) =>
                                  updateGuest(guest.id, { isYoungChild: v })
                                }
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}

                  <textarea
                    placeholder={data.dietaryPlaceholder}
                    value={guest.dietary}
                    onChange={(e) =>
                      updateGuest(guest.id, { dietary: e.target.value })
                    }
                    rows={3}
                    className="w-full focus:outline-none resize-none mt-1"
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "0.875rem",
                      padding: "0.75rem 1rem",
                      fontSize: "0.875rem",
                      color: "#374151",
                    }}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addGuest}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 mt-4 py-3 rounded-full text-sm transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                border: "1.5px dashed #d1d5db",
                color: "#6b7280",
                background: "transparent",
              }}
            >
              <Plus size={15} />
              {data.addGuestLabel}
            </button>
          </div>

          {/* Footer Buttons */}
          <div
            className="flex gap-3 px-5 py-4 flex-shrink-0"
            style={{ borderTop: "1px solid #f3f4f6" }}
          >
            <button
              type="button"
              onClick={handleReset}
              disabled={isLoading}
              className="flex-1 py-3 rounded-full text-sm font-medium transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                border: "1.5px solid #e5e7eb",
                color: "#374151",
                background: "#fff",
              }}
            >
              {data.resetLabel}
            </button>

            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading || submitStatus === "success"}
              className="flex-1 py-3 rounded-full text-sm font-medium text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: "#d4845a" }}
              whileHover={!isLoading ? { scale: 1.03 } : {}}
              whileTap={!isLoading ? { scale: 0.97 } : {}}
            >
              {isLoading ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  {data.sendingLabel ?? "Sending..."}
                </>
              ) : (
                data.submitLabel
              )}
            </motion.button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default RSVPModal;
