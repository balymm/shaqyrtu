import { motion, AnimatePresence } from "framer-motion";
import { EVENT } from "../eventConfig.js";
import Divider from "./Divider.jsx";

export default function WelcomeOverlay({ visible, onOpen }) {
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
            Мерейтойға шақыру
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
            className="font-script text-4xl text-ink mt-2"
          >
            {EVENT.personName}
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
            Шақыруды ашу
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
