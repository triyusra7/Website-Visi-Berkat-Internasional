import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import type { Product } from "@/types/product";

type SpecRow = { label: string; value: string };

function buildSpecRows(product: Product): SpecRow[] {
  const rows: SpecRow[] = [
    { label: "Brand", value: product.brand },
    { label: "Packaging Type", value: product.packaging_type },
    { label: "Category", value: product.category },
    { label: "Flavor", value: product.flavor },
    { label: "Net Weight", value: product.net_weight },
  ];
  if (product.carton_size_cm) {
    rows.push({ label: "Carton Size (cm)", value: product.carton_size_cm });
  }
  if (product.shelf_life) {
    rows.push({ label: "Shelf Life", value: product.shelf_life });
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
  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      {product && (
        <DialogContent className="max-w-2xl sm:max-w-2xl" data-analytics-event="product_detail_open">
          <DialogTitle className="text-xl">{product.product_name}</DialogTitle>
          <DialogDescription className="sr-only">
            Full specifications for {product.product_name}
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
                {buildSpecRows(product).map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 py-2">
                    <dt className="text-muted-foreground">{row.label}</dt>
                    <dd className="text-right font-medium text-vbi-navy">{row.value}</dd>
                  </div>
                ))}
              </dl>

              {product.description && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              )}

              <WhatsAppButton
                message={`Hi, I'm interested in ${product.product_name}.`}
                className="mt-6 w-full"
              >
                Inquire About This Product
              </WhatsAppButton>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
