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
            {t("brandsTitle").replace("{count}", String(brands.length))}
          </h2>
        </Reveal>
        <RevealGroup className="flex flex-wrap justify-center gap-6">
          {brands.map((brand) => (
            <RevealItem key={brand.id} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
              <BrandCard brand={brand} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
