import { motion } from "framer-motion";
import { EVENT } from "../eventConfig.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import Divider from "./Divider.jsx";

export default function InvitationText() {
  const { language, t } = useLanguage();

  return (
    <section className="px-6 py-14 text-center bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-script italic text-4xl text-gold-dark">{t.invitationHeading}</h2>
        <Divider />
        <p className="font-body text-[0.95rem] leading-relaxed text-ink/85 max-w-md mx-auto">
          {EVENT.invitationText[language]}
        </p>
        <p className="font-body text-xs tracking-widest uppercase text-ink/60 mt-6">
          {EVENT.hostsText[language]}
        </p>
      </motion.div>
    </section>
  );
}
