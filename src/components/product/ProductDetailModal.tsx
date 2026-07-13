"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { useTranslation } from "@/context/LanguageContext";
import {
  translateCategory,
  translateDescription,
  translateFlavor,
  translatePackaging,
  translateShelfLife,
} from "@/lib/translations";
import type { Product } from "@/types/product";

type SpecRow = { label: string; value: string };

function buildSpecRows(
  product: Product,
  t: (key: any) => string,
  language: string
): SpecRow[] {
  const rows: SpecRow[] = [
    { label: t("specBrand"), value: product.brand },
    { label: t("specPackaging"), value: translatePackaging(product.packaging_type, language) },
    { label: t("specCategory"), value: translateCategory(product.category, language) },
    { label: t("specFlavor"), value: translateFlavor(product.flavor, language) },
    { label: t("specWeight"), value: product.net_weight },
  ];
  if (product.carton_size_cm) {
    rows.push({ label: t("specCartonSize"), value: product.carton_size_cm });
  }
  if (product.shelf_life) {
    rows.push({ label: t("specShelfLife"), value: translateShelfLife(product.shelf_life, language) || product.shelf_life });
  }
  return rows;
}

export function ProductDetailModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { t, language } = useTranslation();

  const modalDesc = product
    ? language === "id"
      ? `Spesifikasi lengkap untuk ${product.product_name}`
      : language === "zh"
        ? `${product.product_name} 的完整规格`
        : `Full specifications for ${product.product_name}`
    : "";

  const waMessage = product
    ? language === "id"
      ? `Halo, saya tertarik dengan ${product.product_name}.`
      : language === "zh"
        ? `您好，我对 ${product.product_name} 感兴趣。`
        : `Hi, I'm interested in ${product.product_name}.`
    : "";

  const descTranslated = product ? translateDescription(product.description, language) : null;

  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      {product && (
        <DialogContent className="max-w-2xl sm:max-w-2xl" data-analytics-event="product_detail_open">
          <DialogTitle className="text-xl">{product.product_name}</DialogTitle>
          <DialogDescription className="sr-only">
            {modalDesc}
          </DialogDescription>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
              <Image
                src={product.image}
                alt={product.product_name}
                fill
                sizes="(min-width: 640px) 320px, 90vw"
                className="object-contain p-4"
              />
            </div>

            <div className="flex flex-col">
              <dl className="divide-y divide-border text-sm">
                {buildSpecRows(product, t, language).map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 py-2">
                    <dt className="text-muted-foreground">{row.label}</dt>
                    <dd className="text-right font-medium text-vbi-navy">{row.value}</dd>
                  </div>
                ))}
              </dl>

              {descTranslated && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {descTranslated}
                </p>
              )}

              <WhatsAppButton
                message={waMessage}
                className="mt-6 w-full"
              >
                {t("btnInquireProduct")}
              </WhatsAppButton>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

