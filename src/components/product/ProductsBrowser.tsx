"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { EmptyState } from "@/components/product/EmptyState";
import { ProductDetailModal } from "@/components/product/ProductDetailModal";
import { ProductFilterBar, type Filters } from "@/components/product/ProductFilterBar";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getProductBySlug, products } from "@/data/products";

export function ProductsBrowser() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters: Filters = {
    brand: searchParams.get("brand"),
    packaging: searchParams.get("packaging"),
    category: searchParams.get("category"),
  };

  const activeItem = searchParams.get("item");
  const activeProduct = activeItem ? getProductBySlug(activeItem) ?? null : null;

  const filterQuery = new URLSearchParams();
  if (filters.brand) filterQuery.set("brand", filters.brand);
  if (filters.packaging) filterQuery.set("packaging", filters.packaging);
  if (filters.category) filterQuery.set("category", filters.category);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.brand && p.brand.toLowerCase() !== filters.brand) return false;
      if (filters.packaging && p.packaging_type.toLowerCase() !== filters.packaging) return false;
      if (filters.category && p.category.toLowerCase() !== filters.category) return false;
      return true;
    });
  }, [filters.brand, filters.packaging, filters.category]);

  function updateUrl(next: Filters, item?: string | null) {
    const params = new URLSearchParams();
    if (next.brand) params.set("brand", next.brand);
    if (next.packaging) params.set("packaging", next.packaging);
    if (next.category) params.set("category", next.category);
    const currentItem = item !== undefined ? item : activeItem;
    if (currentItem) params.set("item", currentItem);
    const query = params.toString();
    router.push(`/products${query ? `?${query}` : ""}`, { scroll: false });
  }

  function handleFilterChange(next: Filters) {
    updateUrl(next);
  }

  function handleClearFilters() {
    updateUrl({ brand: null, packaging: null, category: null });
  }

  function handleCloseModal() {
    updateUrl(filters, null);
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
      <aside>
        <ProductFilterBar filters={filters} onChange={handleFilterChange} />
      </aside>

      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          Showing {filtered.length} of {products.length} products
        </p>
        {filtered.length > 0 ? (
          <ProductGrid products={filtered} preserveQuery={filterQuery.toString()} />
        ) : (
          <EmptyState onClear={handleClearFilters} />
        )}
      </div>

      <ProductDetailModal product={activeProduct} onClose={handleCloseModal} />
    </div>
  );
}
