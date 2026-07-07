import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="mb-10 flex flex-col items-center gap-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vbi-red">
          Featured Products
        </p>
        <h2 className="font-heading text-3xl font-bold text-vbi-navy md:text-4xl">
          A taste of our full catalog.
        </h2>
      </Reveal>

      <RevealGroup
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6"
        stagger={0.06}
      >
        {featured.map((product) => (
          <RevealItem key={product.sku_id}>
            <ProductCard product={product} />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10 text-center" delay={0.1}>
        <Link
          href="/products"
          className="tap-scale inline-flex items-center justify-center rounded-md bg-vbi-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-vbi-navy/90 hover:shadow-md"
        >
          View Full Catalog
        </Link>
      </Reveal>
    </section>
  );
}
