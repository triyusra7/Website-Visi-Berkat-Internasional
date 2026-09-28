"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { EmptyState } from "@/components/product/EmptyState";
import { ProductDetailModal } from "@/components/product/ProductDetailModal";
import { ProductFilterBar, type FilterOptions } from "@/components/product/ProductFilterBar";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductGroupTabs } from "@/components/product/ProductGroupTabs";
import { useTranslation } from "@/context/LanguageContext";
import { getProductBySlug, products } from "@/data/products";
import type { ProductGroupId } from "@/data/taxonomy";
import {
  countByGroup,
  filterProducts,
  filtersToQuery,
  getAvailableOptions,
  parseFilters,
  switchGroup,
  type ProductFilters,
} from "@/lib/product-filters";
import { translatePackaging } from "@/lib/translations";

const GROUP_COUNTS = countByGroup(products);

export function ProductsBrowser() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t, language } = useTranslation();

  const filters = parseFilters(searchParams);
  const filterQuery = filtersToQuery(filters).toString();

  const activeItem = searchParams.get("item");
  const activeProduct = activeItem ? getProductBySlug(activeItem) ?? null : null;

  const filtered = filterProducts(products, filters);

  const available = getAvailableOptions(products, filters.group);
  const options: FilterOptions = {
    packaging: available.packaging.map((value) => ({ value, label: translatePackaging(value, language) })),
    categoryGroups: available.categoryGroups.map((bucket) => ({
      groupLabel: filters.group ? null : t(bucket.group.labelKey),
      categories: bucket.categories,
    })),
    brands: available.brands.map((b) => ({ value: b.slug, label: b.name })),
  };

  function updateUrl(next: ProductFilters, item?: string | null) {
    const params = filtersToQuery(next);
    const currentItem = item !== undefined ? item : activeItem;
    if (currentItem) params.set("item", currentItem);
    const query = params.toString();
    router.push(`/products${query ? `?${query}` : ""}`, { scroll: false });
  }

  function handleGroupChange(group: ProductGroupId | null) {
    updateUrl(switchGroup(products, filters, group));
  }

  function handleClearFilters() {
    updateUrl({ group: null, packaging: null, category: null, brand: null });
  }

  function handleCloseModal() {
    updateUrl(filters, null);
  }

  const showingText = t("showingProducts")
    .replace("{count}", String(filtered.length))
    .replace("{total}", String(products.length));

  return (
    <div className="flex flex-col gap-6">
      <ProductGroupTabs active={filters.group} counts={GROUP_COUNTS} onSelect={handleGroupChange} />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        <aside>
          <ProductFilterBar filters={filters} options={options} onChange={(next) => updateUrl(next)} />
        </aside>

        <div>
          <p className="mb-4 text-sm text-muted-foreground" aria-live="polite">
            {showingText}
          </p>
          {filtered.length > 0 ? (
            <ProductGrid products={filtered} preserveQuery={filterQuery} />
          ) : (
            <EmptyState onClear={handleClearFilters} />
          )}
        </div>
      </div>

      <ProductDetailModal product={activeProduct} onClose={handleCloseModal} />
    </div>
  );
}
