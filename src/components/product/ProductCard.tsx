"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import { translateFlavor, translatePackaging } from "@/lib/translations";
import type { Product } from "@/types/product";

const BRAND_BADGE_STYLES: Record<Product["brand"], string> = {
  Sarikaya: "bg-[#e02020]",
  Springlee: "bg-[#7a4a2b]",
  Ryori: "bg-[#a13a1f]",
  Sweetfulli: "bg-[#f2a900]",
};

export function ProductCard({
  product,
  preserveQuery = "",
}: {
  product: Product;
  /** Existing filter query string (without leading "?") to preserve when opening the detail modal. */
  preserveQuery?: string;
}) {
  const { language } = useTranslation();
  const params = new URLSearchParams(preserveQuery);
  params.set("item", product.slug);

  const packagingTranslated = translatePackaging(product.packaging_type, language);
  const flavorTranslated = translateFlavor(product.flavor, language);

  return (
    <Link
      href={`/products?${params.toString()}`}
      scroll={false}
      className="tap-scale lift-on-hover group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white hover:border-vbi-navy/20 hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <span
          className={`absolute left-2 top-2 z-10 rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white transition-transform duration-200 group-hover:scale-105 ${BRAND_BADGE_STYLES[product.brand]}`}
        >
          {product.brand}
        </span>
        <span className="absolute right-2 top-2 z-10 rounded bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-vbi-navy transition-transform duration-200 group-hover:scale-105">
          {packagingTranslated}
        </span>
        <Image
          src={product.image}
          alt={product.product_name}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-3 transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-vbi-navy transition-colors group-hover:text-vbi-red">
          {product.product_name}
        </h3>
        <p className="text-xs text-muted-foreground">{flavorTranslated}</p>
        <p className="mt-auto pt-2 text-xs font-medium text-vbi-navy/80">{product.net_weight}</p>
      </div>
    </Link>
  );
}

