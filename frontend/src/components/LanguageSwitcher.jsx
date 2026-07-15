import { useLanguage } from "../i18n/LanguageContext.jsx";
import { LANGUAGE_LABELS } from "../i18n/translations.js";

export default function LanguageSwitcher() {
  const { language, setLanguage, supported } = useLanguage();

  return (
    <div
      className="fixed top-4 left-4 z-[60] glass-card rounded-full shadow-soft flex p-1 gap-0.5"
      role="group"
      aria-label="Тіл / Язык / Dil"
    >
      {supported.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={`px-2.5 py-1.5 rounded-full font-body text-[0.65rem] tracking-wider transition-colors
                      ${
                        language === lang
                          ? "bg-gold-dark text-ivory"
                          : "text-ink/60 active:scale-95"
                      }`}
        >
          {LANGUAGE_LABELS[lang]}
        </button>
      ))}
    </div>
  );
}
