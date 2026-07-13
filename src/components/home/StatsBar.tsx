"use client";

import { motion, type Variants } from "motion/react";
import { products } from "@/data/products";
import { useTranslation } from "@/context/LanguageContext";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function StatsBar() {
  const { t } = useTranslation();
  const productCount = products.length;

  const stats = [
    { value: `${productCount}+`, label: t("statProducts"), tone: "bg-vbi-navy-dark" },
    { value: "100%", label: t("statQuality"), tone: "bg-vbi-blue" },
    { value: "100%", label: t("statOriginal"), tone: "bg-vbi-red" },
  ];

  return (
    <motion.section
      className="mx-auto -mt-10 grid max-w-4xl grid-cols-3 gap-3 px-4 md:-mt-14 md:gap-4 md:px-8"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={item}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className={`relative z-10 flex flex-col items-center justify-center rounded-lg ${stat.tone} px-4 py-6 text-center text-white shadow-lg md:py-8`}
        >
          <span className="font-heading text-3xl font-bold md:text-4xl">{stat.value}</span>
          <span className="mt-1 text-xs font-medium uppercase tracking-wide text-white/85 md:text-sm">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.section>
  );
}

