import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function MusicPlayer({ isPlaying, onToggle }) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isPlaying ? t.musicOn : t.musicOff}
      aria-pressed={isPlaying}
      className="fixed top-4 right-4 z-40 h-14 w-14 rounded-full glass-card shadow-soft
                 flex items-center justify-center text-gold-dark active:scale-95 transition-transform"
    >
      <div
        className={`h-9 w-9 rounded-full border border-dashed border-gold flex items-center justify-center
                    ${isPlaying ? "animate-[spin_8s_linear_infinite]" : ""}`}
      >
        {isPlaying ? (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="6" y="5" width="3.5" height="14" rx="1" fill="#8E6E32" />
            <rect x="14" y="5" width="3.5" height="14" rx="1" fill="#8E6E32" />
          </svg>
        ) : (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 5v14l11-7L8 5z" fill="#8E6E32" />
          </svg>
        )}
      </div>
    </button>
  );
}
