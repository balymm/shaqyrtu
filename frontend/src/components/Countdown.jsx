import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EVENT } from "../eventConfig.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function getTimeLeft() {
  const total = new Date(EVENT.eventDateISO).getTime() - Date.now();
  const clamped = Math.max(total, 0);

  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
    isOver: total <= 0,
  };
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-16 w-16 rounded-full border border-gold flex items-center justify-center">
        <span className="font-display text-2xl text-ink">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="font-body text-[0.6rem] tracking-widest uppercase text-ink/60 mt-2">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { t } = useLanguage();
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-6 py-12 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl shadow-soft mx-auto max-w-sm px-6 py-8 text-center"
      >
        <h3 className="font-script italic text-4xl text-gold-dark">{t.countdownHeading}</h3>

        {time.isOver ? (
          <p className="font-body text-sm text-ink/70 mt-4">{t.countdownOver}</p>
        ) : (
          <div className="flex items-center justify-center gap-3 mt-6">
            <TimeUnit value={time.days} label={t.unitDays} />
            <TimeUnit value={time.hours} label={t.unitHours} />
            <TimeUnit value={time.minutes} label={t.unitMinutes} />
            <TimeUnit value={time.seconds} label={t.unitSeconds} />
          </div>
        )}
      </motion.div>
    </section>
  );
}
