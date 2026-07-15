import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EVENT } from "../eventConfig.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { getMonthLabel, getDay, getYear, getTimeLabel } from "../i18n/dateFormat.js";
import Divider from "./Divider.jsx";

// Через сколько миллисекунд меняется слайд в фоновом слайд-шоу
const SLIDE_INTERVAL_MS = 5000;

export default function Hero() {
  const { language, t } = useLanguage();
  const images = EVENT.heroImages;
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setSlideIndex((i) => (i + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-end overflow-hidden">
      {/* Фоновое слайд-шоу — фото берутся из EVENT.heroImages в eventConfig.js */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={images[slideIndex]}
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url(${images[slideIndex]})`,
              backgroundPosition: "70% 30%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/5 to-cream" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full glass-card rounded-t-[2.5rem] px-6 pt-10 pb-12 text-center shadow-soft"
      >
        <span className="font-body tracking-[0.35em] text-[0.65rem] text-gold-dark uppercase">
          {t.topLabel}
        </span>

        <h1 className="font-display text-7xl text-gold-dark mt-3">{EVENT.age}</h1>

        <p className="font-script italic text-5xl text-ink mt-2">{EVENT.personName[language]}</p>

        <p className="font-script italic text-2xl text-ink/80 mt-3">
          {EVENT.secondaryEvent.personName[language]} — {EVENT.secondaryEvent.label[language]}
        </p>

        <Divider />

        <p className="font-body text-sm tracking-wider text-ink/80">
          {getMonthLabel(EVENT.eventDateISO, language)} {getDay(EVENT.eventDateISO)},{" "}
          {getYear(EVENT.eventDateISO)} · {getTimeLabel(EVENT.eventDateISO)}
        </p>
      </motion.div>
    </section>
  );
}
