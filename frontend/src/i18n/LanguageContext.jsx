import { createContext, useContext, useEffect, useState } from "react";
import { translations, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "./translations.js";

const LanguageContext = createContext(null);

const STORAGE_KEY = "mereitoi-lang";

function readInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(saved) ? saved : DEFAULT_LANGUAGE;
  } catch {
    // localStorage может быть недоступен (приватный режим и т.п.) — не падаем
    return DEFAULT_LANGUAGE;
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore — сохранение выбора языка не критично для работы сайта
    }
  }, [language]);

  function setLanguage(lang) {
    if (SUPPORTED_LANGUAGES.includes(lang)) setLanguageState(lang);
  }

  const value = {
    language,
    setLanguage,
    t: translations[language],
    supported: SUPPORTED_LANGUAGES,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage() должен использоваться внутри <LanguageProvider>");
  }
  return ctx;
}
