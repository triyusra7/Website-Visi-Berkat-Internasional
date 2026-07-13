"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { useTranslation } from "@/context/LanguageContext";

export function AboutSnippet() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <Reveal direction="left" className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/images/brand/about-springlee-bags.png"
            alt="Springlee snack packaging"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
        <Reveal direction="right" delay={0.1}>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-vbi-red">
            {t("aboutSub")}
          </p>
          <h2 className="font-heading text-3xl font-bold text-vbi-navy md:text-4xl">
            {t("aboutSnippetTitle")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("aboutSnippetDesc")}
          </p>
          <Link
            href="/about"
            className="group mt-6 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-vbi-navy transition-colors hover:text-vbi-red"
          >
            {t("btnReadMore")}
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

