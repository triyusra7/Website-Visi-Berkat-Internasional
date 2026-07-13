"use client";

import Image from "next/image";
import Link from "next/link";
import { RyoriWordmark } from "@/components/brand/RyoriWordmark";
import { useTranslation } from "@/context/LanguageContext";
import type { BrandInfo } from "@/types/product";

export function BrandCard({ brand }: { brand: BrandInfo }) {
  const { t, language } = useTranslation();

  const descTranslated = t(`brand_${brand.id}_desc` as any) || brand.description;
  
  const positionTranslated = brand.position.toLowerCase() === "retail" 
    ? t("packaging_retail") 
    : (language === "id" ? "Grosir/Kartonan" : language === "zh" ? "散装/批发" : "Bulk/Wholesale");

  const viewText = language === "id" 
    ? `Lihat Produk ${brand.name}` 
    : language === "zh" 
      ? `查看 ${brand.name} 产品` 
      : `View ${brand.name} Products`;

  return (
    <Link
      href={`/products?brand=${brand.id.toLowerCase()}`}
      className="tap-scale lift-on-hover group flex h-full flex-col items-center rounded-xl border border-border bg-white p-6 text-center hover:border-vbi-navy/20 hover:shadow-xl"
    >
      <div className="mb-4 flex size-24 items-center justify-center rounded-full border border-border bg-secondary transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
        {brand.logo ? (
          <Image src={brand.logo} alt={brand.name} width={80} height={80} className="rounded-full object-cover" />
        ) : (
          <RyoriWordmark className="text-2xl" />
        )}
      </div>
      <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-vbi-navy">
        {brand.name}
      </h3>
      <span className="mt-1 mb-3 inline-block rounded-full bg-secondary px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-vbi-navy/70">
        {positionTranslated}
      </span>
      <p className="flex-1 text-sm text-muted-foreground">{descTranslated}</p>
      <span className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-vbi-red transition-colors group-hover:text-vbi-navy">
        {viewText}
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

