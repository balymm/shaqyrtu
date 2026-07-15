import { motion } from "framer-motion";
import { EVENT } from "../eventConfig.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import Divider from "./Divider.jsx";

export default function LocationTime() {
  const { language, t } = useLanguage();

  return (
    <section className="px-6 py-10 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl shadow-soft mx-auto max-w-sm px-6 py-8 text-center"
      >
        <h3 className="font-script italic text-4xl text-gold-dark">{t.locationHeading}</h3>
        <Divider />

        <p className="font-body text-sm text-ink/80 leading-relaxed">
          {EVENT.venueCity[language]}
          <br />
          {EVENT.venueAddress[language]}
        </p>

        <p className="font-script italic text-3xl text-ink mt-4">{EVENT.venueName[language]}</p>

        <a
          href={EVENT.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 w-full rounded-full bg-gold-dark text-ivory
                     font-body text-xs tracking-widest uppercase py-3.5 active:scale-95 transition-transform"
        >
          {t.mapButtonLabel}
        </a>
      </motion.div>
    </section>
  );
}
