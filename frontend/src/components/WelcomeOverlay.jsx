import { motion, AnimatePresence } from "framer-motion";
import { EVENT } from "../eventConfig.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import Divider from "./Divider.jsx";

export default function WelcomeOverlay({ visible, onOpen }) {
  const { language, t } = useLanguage();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center
                     bg-cream bg-gold-radial"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body tracking-[0.35em] text-xs text-gold-dark uppercase"
          >
            {t.welcomeLabel}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-display text-[5.5rem] leading-none text-gold-dark mt-4"
          >
            {EVENT.age}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="font-script italic text-4xl text-ink mt-2"
          >
            {EVENT.personName[language]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-script italic text-2xl text-ink/80 mt-3"
          >
            {EVENT.secondaryEvent.personName[language]} — {EVENT.secondaryEvent.label[language]}
          </motion.p>

          <Divider />

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            onClick={onOpen}
            type="button"
            className="mt-8 rounded-full border border-gold px-8 py-3 font-body text-sm
                       tracking-widest uppercase text-gold-dark active:scale-95 transition-transform"
          >
            {t.openInvitation}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
