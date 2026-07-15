import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Divider from "./Divider.jsx";
import { submitRsvp } from "../lib/api.js";

const OPTIONS = [
  { value: "COMING", label: "Әрине келемін" },
  { value: "COMING_WITH_SPOUSE", label: "Жұбайыммен келемін" },
  { value: "NOT_COMING", label: "Келе алмаймын" },
];

export default function RSVPForm() {
  const [fullName, setFullName] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState("idle"); // idle | loading | success

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (fullName.trim().length < 2) {
      setError("Аты-жөніңізді толық енгізіңіз");
      return;
    }
    if (!status) {
      setError("Жауап түрін таңдаңыз");
      return;
    }

    setState("loading");
    try {
      await submitRsvp({ fullName, status });
      setState("success");
    } catch (err) {
      setError(err.message || "Қате шықты, қайталап көріңіз");
      setState("idle");
    }
  }

  return (
    <section className="px-6 py-12 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl shadow-soft mx-auto max-w-sm px-6 py-8"
      >
        <h3 className="font-script text-4xl text-gold-dark text-center">
          Тойға қатысуыңызды растаңыз
        </h3>
        <Divider />

        <AnimatePresence mode="wait">
          {state === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-6"
            >
              <div className="mx-auto mb-4 h-14 w-14 rounded-full border border-gold flex items-center justify-center">
                <svg className="h-6 w-6 text-gold-dark" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-body text-sm text-ink/80">
                Рахмет! Жауабыңыз қабылданды.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Аты-жөніңіз"
                maxLength={120}
                className="w-full rounded-full border border-line bg-ivory px-5 py-3.5
                           font-script text-xl text-ink placeholder:text-ink/40 outline-none
                           focus:border-gold transition-colors"
              />

              <p className="font-body text-xs leading-relaxed text-ink/60">
                Жұбайыңызбен келсеңіз, есімдеріңізді бірге жаза кетіңіз
              </p>

              <div className="space-y-3">
                {OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-3 cursor-pointer font-body text-sm text-ink/85"
                  >
                    <input
                      type="radio"
                      name="rsvp-status"
                      value={opt.value}
                      checked={status === opt.value}
                      onChange={() => setStatus(opt.value)}
                      className="h-4 w-4 accent-[#B8944F]"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>

              {error && (
                <p className="font-body text-xs text-red-600" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full rounded-full bg-gold-dark text-ivory font-script text-2xl
                           py-3 active:scale-95 transition-transform disabled:opacity-60"
              >
                {state === "loading" ? "Жіберілуде…" : "Жауапты жіберу"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
