import { motion } from "framer-motion";
import { EVENT } from "../eventConfig.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { getMonthLabel, getDay, getYear, getTimeLabel } from "../i18n/dateFormat.js";
import Divider from "./Divider.jsx";

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-end overflow-hidden">
      {/* Фоновое фото — замените /public/hero.jpg на своё */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${EVENT.heroImageSrc})`,
          backgroundPosition: "70% 30%",
        }}
      />
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

        <p className="font-script italic text-5xl text-ink mt-2">{EVENT.personName}</p>

        <Divider />

        <p className="font-body text-sm tracking-wider text-ink/80">
          {getMonthLabel(EVENT.eventDateISO, language)} {getDay(EVENT.eventDateISO)},{" "}
          {getYear(EVENT.eventDateISO)} · {getTimeLabel(EVENT.eventDateISO)}
        </p>
      </motion.div>
    </section>
  );
}
