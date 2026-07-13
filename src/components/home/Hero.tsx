"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { useTranslation } from "@/context/LanguageContext";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-vbi-navy-dark">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/images/brand/hero-flatlay.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-vbi-navy-dark via-vbi-navy-dark/90 to-vbi-navy-dark/60" />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="max-w-2xl">
          <motion.p
            variants={item}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-vbi-red"
          >
            {t("heroSub")}
          </motion.p>
          <motion.h1
            variants={item}
            className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            {t("heroTitle")}
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
            {t("heroDesc")}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-vbi-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-vbi-red/90 hover:shadow-md"
              >
                {t("btnViewCatalog")}
              </Link>
            </motion.div>
            <WhatsAppButton
              message={t("waInquiryHero")}
              variant="outline"
            >
              {t("btnChatWa")}
            </WhatsAppButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

