import type { Metadata } from "next";
import { cookies } from "next/headers";
import { BrandCard } from "@/components/brand/BrandCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { getBrandsByProductGroup } from "@/lib/product-filters";
import { getTranslations, Locale, type TranslationKey } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as Locale;
  const dict = getTranslations(lang);

  return {
    title: dict.navBrands,
    description: dict.brandsPageDesc.replace("{count}", String(brands.length)),
  };
}

export default async function BrandsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as Locale;
  const dict = getTranslations(lang);

  const count = String(brands.length);
  // All brands are partner brands; they are grouped only by the product type they supply.
  const sections = getBrandsByProductGroup(products).map(({ group, brands: items }) => ({
    id: `brands-${group.id}`,
    title: dict[group.labelKey as TranslationKey],
    desc: dict[`${group.labelKey}_desc` as TranslationKey],
    items,
  }));

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="mx-auto mb-14 max-w-4xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-vbi-red">
          {dict.brandsSub}
        </p>
        <h1 className="font-heading text-3xl font-bold text-vbi-navy md:text-4xl lg:text-5xl">
          {dict.brandsPageTitle.replace("{count}", count)}
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          {dict.brandsPageDesc.replace("{count}", count)}
        </p>
      </Reveal>

      <div className="flex flex-col gap-16 md:gap-20">
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <Reveal className="mb-8 flex flex-col gap-2 border-l-4 border-vbi-red pl-4 md:flex-row md:items-end md:justify-between md:gap-8">
              <h2 id={section.id} className="font-heading text-2xl font-bold text-vbi-navy md:text-3xl">
                {section.title}
                <span className="ml-3 align-middle text-sm font-semibold text-vbi-navy/40 tabular-nums">
                  {section.items.length}
                </span>
              </h2>
              <p className="max-w-xl text-sm text-muted-foreground md:text-right">{section.desc}</p>
            </Reveal>
            <RevealGroup className="flex flex-wrap justify-center gap-6">
              {section.items.map((brand) => (
                <RevealItem key={brand.id} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                  <BrandCard brand={brand} />
                </RevealItem>
              ))}
            </RevealGroup>
          </section>
        ))}
      </div>
    </section>
  );
}
