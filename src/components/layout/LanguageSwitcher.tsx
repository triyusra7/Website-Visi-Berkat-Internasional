"use client";

import { useTranslation } from "@/context/LanguageContext";
import { Locale } from "@/lib/translations";
import { motion } from "motion/react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  const options: { value: Locale; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "id", label: "ID" },
    { value: "zh", label: "中" },
  ];

  return (
    <div className="relative flex items-center rounded-full bg-secondary p-0.5 border border-border">
      {options.map((opt) => {
        const isSelected = language === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLanguage(opt.value)}
            className="relative px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus:outline-none"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {isSelected && (
              <motion.span
                layoutId="active-lang"
                className="absolute inset-0 rounded-full bg-vbi-navy"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                isSelected ? "text-white font-extrabold" : "text-vbi-navy/60 hover:text-vbi-navy"
              }`}
            >
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
