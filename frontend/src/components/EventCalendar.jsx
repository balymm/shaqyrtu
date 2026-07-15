import { motion } from "framer-motion";
import { EVENT } from "../eventConfig.js";

const WEEKDAYS_KK = ["ДС", "СС", "СР", "БС", "ЖМ", "СБ", "ЖС"];

function buildMonthGrid(dateISO) {
  const date = new Date(dateISO);
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // JS: 0=Sunday..6=Saturday. Переводим так, чтобы неделя начиналась с понедельника (ДС).
  const jsWeekday = firstDay.getDay();
  const leadingBlanks = (jsWeekday + 6) % 7;

  const cells = Array.from({ length: leadingBlanks }, () => null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return cells;
}

export default function EventCalendar() {
  const cells = buildMonthGrid(EVENT.eventDateISO);

  return (
    <section className="px-6 py-10 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl shadow-soft mx-auto max-w-sm px-5 py-7"
      >
        <div className="flex items-baseline justify-between border-b border-line pb-3 mb-4">
          <span className="font-display text-2xl text-ink">{EVENT.monthLabel}</span>
          <span className="font-display text-2xl text-gold-dark">{EVENT.monthYear}</span>
        </div>

        <div className="grid grid-cols-7 gap-y-3 text-center">
          {WEEKDAYS_KK.map((day) => (
            <span key={day} className="font-body text-[0.65rem] tracking-wider text-ink/50">
              {day}
            </span>
          ))}

          {cells.map((day, idx) => (
            <div key={idx} className="relative flex items-center justify-center h-9">
              {day && (
                <>
                  <span className="font-display text-lg text-ink z-10">{day}</span>
                  {day === EVENT.eventDay && (
                    <svg
                      className="absolute h-10 w-10 text-gold"
                      viewBox="0 0 40 40"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 32c-6-4.5-12-9-12-15.2C8 12 11 9 15 9c2.4 0 4.3 1.2 5 3 0.7-1.8 2.6-3 5-3 4 0 7 3 7 7.8C32 23 26 27.5 20 32z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <p className="text-center font-body text-xs tracking-widest uppercase text-ink/60 mt-6">
          Басталу уақыты
        </p>
        <p className="text-center font-script text-4xl text-gold-dark mt-1">
          {EVENT.timeLabel}
        </p>
      </motion.div>
    </section>
  );
}
