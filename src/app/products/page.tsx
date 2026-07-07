import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsBrowser } from "@/components/product/ProductsBrowser";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Products / Catalog",
  description:
    "Browse VBI's full catalog of 65 authentic Indonesian snacks across Sarikaya, Springlee, Ryori, and Sweetfulli — filter by brand, packaging type, and category.",
};

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-vbi-red">
            Products
          </p>
          <h1 className="font-heading text-3xl font-bold text-vbi-navy md:text-4xl">
            Full Product Catalog
          </h1>
        </div>
        <a
          href="/catalog/VBI-Product-Catalog.pdf"
          download
          data-analytics-event="catalog_download_click"
          className="tap-scale inline-flex shrink-0 items-center justify-center gap-2 rounded-md border-2 border-vbi-navy px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-vbi-navy transition-colors hover:bg-vbi-navy hover:text-white"
        >
          Download Full Catalog (PDF)
        </a>
      </Reveal>

      <Suspense fallback={<p className="text-sm text-muted-foreground">Loading products…</p>}>
        <ProductsBrowser />
      </Suspense>
    </section>
  );
}
