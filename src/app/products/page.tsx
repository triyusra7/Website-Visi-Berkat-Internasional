import type { Metadata } from "next";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { ProductsBrowser } from "@/components/product/ProductsBrowser";
import { Reveal } from "@/components/shared/Reveal";
import { getTranslations, Locale } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as Locale;
  const dict = getTranslations(lang);

  return {
    title: `${dict.navProducts} | Catalog`,
    description: dict.productsDesc,
  };
}

export default async function ProductsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as Locale;
  const dict = getTranslations(lang);

  const loadingText = lang === "id" 
    ? "Memuat produk…" 
    : lang === "zh" 
      ? "正在加载产品…" 
      : "Loading products…";

  const headingText = lang === "id"
    ? "Katalog Produk Lengkap"
    : lang === "zh"
      ? "完整产品目录"
      : "Full Product Catalog";

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-vbi-red">
            {dict.navProducts}
          </p>
          <h1 className="font-heading text-3xl font-bold text-vbi-navy md:text-4xl">
            {headingText}
          </h1>
        </div>
        <a
          href="/catalog/VBI-Product-Catalog.pdf"
          download
          data-analytics-event="catalog_download_click"
          className="tap-scale inline-flex shrink-0 items-center justify-center gap-2 rounded-md border-2 border-vbi-navy px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-vbi-navy transition-colors hover:bg-vbi-navy hover:text-white"
        >
          {dict.btnDownloadCatalog}
        </a>
      </Reveal>


      <Suspense fallback={<p className="text-sm text-muted-foreground">{loadingText}</p>}>
        <ProductsBrowser />
      </Suspense>
    </section>
  );
}

