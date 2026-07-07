import type { Metadata } from "next";
import { BrandCard } from "@/components/brand/BrandCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "From bulk export snacks to retail-ready products, VBI's four brands — Sarikaya, Springlee, Ryori, and Sweetfulli — represent the diversity, quality, and authenticity of Indonesian snacks.",
};

export default function BrandsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-vbi-red">
          Our Brands
        </p>
        <h1 className="font-heading text-3xl font-bold text-vbi-navy md:text-5xl">
          Four brands, every kind of buyer.
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          From bulk export snacks to retail-ready products, our brands represent the diversity,
          quality, and authenticity of Indonesian snacks.
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
