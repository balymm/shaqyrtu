import { motion } from "framer-motion";
import { EVENT } from "../eventConfig.js";
import Divider from "./Divider.jsx";

export default function LocationTime() {
  return (
    <section className="px-6 py-10 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl shadow-soft mx-auto max-w-sm px-6 py-8 text-center"
      >
        <h3 className="font-script text-4xl text-gold-dark">Мекен-жайы</h3>
        <Divider />

        <p className="font-body text-sm text-ink/80 leading-relaxed">
          {EVENT.venueCity}
          <br />
          {EVENT.venueAddress}
        </p>

        <p className="font-script text-3xl text-ink mt-4">{EVENT.venueName}</p>

        <a
          href={EVENT.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 w-full rounded-full bg-gold-dark text-ivory
                     font-body text-xs tracking-widest uppercase py-3.5 active:scale-95 transition-transform"
        >
          2GIS картасына өту
        </a>
      </motion.div>
    </section>
  );
}
