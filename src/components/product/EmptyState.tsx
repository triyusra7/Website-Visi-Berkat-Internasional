"use client";

import { motion } from "motion/react";

type Props = {
  onClear: () => void;
};

export function EmptyState({ onClear }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-secondary/50 px-6 py-20 text-center"
    >
      <p className="font-heading text-xl font-semibold text-vbi-navy">No products match your filters</p>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Try adjusting or clearing your filters to see more of our catalog.
      </p>
      <motion.button
        type="button"
        onClick={onClear}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 inline-flex items-center justify-center rounded-md bg-vbi-navy px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-vbi-navy/90"
      >
        Clear Filters
      </motion.button>
    </motion.div>
  );
}
