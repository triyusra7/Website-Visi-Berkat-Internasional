"use client";

import React, { createContext, useContext, useState } from "react";
import { Locale, getTranslations } from "@/lib/translations";

type LanguageContextType = {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Locale;
}) {
  const [language, setLanguageState] = useState<Locale>(initialLang);

  const setLanguage = (lang: Locale) => {
    setLanguageState(lang);
    // Set cookie that expires in 1 year
    document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    // Force a full reload to clean client states and fetch fresh translations from Server Components
    window.location.reload();
  };

  const t = (key: string) => {
    const dict = getTranslations(language);
    // @ts-ignore
    return dict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
