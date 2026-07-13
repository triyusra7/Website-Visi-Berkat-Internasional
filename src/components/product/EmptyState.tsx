"use client";

import { motion } from "motion/react";
import { useTranslation } from "@/context/LanguageContext";

type Props = {
  onClear: () => void;
};

export function EmptyState({ onClear }: Props) {
  const { t, language } = useTranslation();

  const title = language === "id"
    ? "Tidak ada produk yang cocok dengan filter Anda"
    : language === "zh"
      ? "没有符合筛选条件的产品"
      : "No products match your filters";

  const desc = language === "id"
    ? "Coba ubah atau hapus filter Anda untuk melihat lebih banyak produk di katalog kami."
    : language === "zh"
      ? "尝试调整或重置您的筛选条件，以查看更多我们的产品目录。"
      : "Try adjusting or clearing your filters to see more of our catalog.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-secondary/50 px-6 py-20 text-center"
    >
      <p className="font-heading text-xl font-semibold text-vbi-navy">{title}</p>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        {desc}
      </p>
      <motion.button
        type="button"
        onClick={onClear}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 inline-flex items-center justify-center rounded-md bg-vbi-navy px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-vbi-navy/90"
      >
        {t("btnClearFilters")}
      </motion.button>
    </motion.div>
  );
}

