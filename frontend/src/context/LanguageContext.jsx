import { createContext, useContext, useState, useCallback } from "react";
import { content } from "@/data/content";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("pl");

  const changeLang = useCallback((code) => {
    if (content[code]) setLang(code);
  }, []);

  const t = content[lang];

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
