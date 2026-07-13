"use client";

import { BrandCard } from "@/components/brand/BrandCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { brands } from "@/data/brands";
import { useTranslation } from "@/context/LanguageContext";

export function BrandShowcase() {
  const { t } = useTranslation();

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-vbi-red">
            {t("brandsSub")}
          </p>
          <h2 className="font-heading text-3xl font-bold text-vbi-navy md:text-4xl">
            {t("brandsTitle")}
          </h2>
        </Reveal>
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <RevealItem key={brand.id} className="h-full">
              <BrandCard brand={brand} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

