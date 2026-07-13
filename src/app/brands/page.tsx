import type { Metadata } from "next";
import { cookies } from "next/headers";
import { BrandCard } from "@/components/brand/BrandCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { brands } from "@/data/brands";
import { getTranslations, Locale } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as Locale;
  const dict = getTranslations(lang);

  return {
    title: dict.navBrands,
    description: dict.brandsPageDesc,
  };
}

export default async function BrandsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as Locale;
  const dict = getTranslations(lang);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-vbi-red">
          {dict.brandsSub}
        </p>
        <h1 className="font-heading text-3xl font-bold text-vbi-navy md:text-5xl">
          {dict.brandsPageTitle}
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          {dict.brandsPageDesc}
        </p>
      </Reveal>


      <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {brands.map((brand) => (
          <RevealItem key={brand.id}>
            <BrandCard brand={brand} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

