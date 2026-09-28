import { brands, getBrand } from "@/data/brands";
import { getGroupIdForCategory, getProductGroup, productGroups, toSlug, type ProductGroupId } from "@/data/taxonomy";
import type { BrandInfo, Product } from "@/types/product";

export type ProductFilters = {
  group: ProductGroupId | null;
  packaging: string | null;
  /** Category slug, e.g. "kerupuk-udang". */
  category: string | null;
  /** Brand slug, e.g. "ny-sioe". */
  brand: string | null;
};

const EMPTY_FILTERS: ProductFilters = { group: null, packaging: null, category: null, brand: null };

function brandSlug(product: Product): string {
  return getBrand(product.brand)?.slug ?? toSlug(product.brand);
}

/**
 * Reads filters from URL params. Accepts legacy values (`?category=spring roll`,
 * `?brand=Sarikaya`) and infers the group from a category when `group` is missing.
 */
export function parseFilters(params: { get(name: string): string | null }): ProductFilters {
  const rawGroup = params.get("group");
  const rawCategory = params.get("category");
  const rawBrand = params.get("brand");
  const rawPackaging = params.get("packaging");

  const category = rawCategory ? toSlug(rawCategory) : null;
  const categoryName = category
    ? productGroups.flatMap((g) => g.categories).find((c) => toSlug(c) === category)
    : undefined;
  const group = getProductGroup(rawGroup)?.id ?? (categoryName ? getGroupIdForCategory(categoryName) : undefined);

  return {
    ...EMPTY_FILTERS,
    group: group ?? null,
    category,
    brand: rawBrand ? toSlug(rawBrand) : null,
    packaging: rawPackaging ? rawPackaging.toLowerCase() : null,
  };
}

export function filtersToQuery(filters: ProductFilters): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.group) params.set("group", filters.group);
  if (filters.category) params.set("category", filters.category);
  if (filters.packaging) params.set("packaging", filters.packaging);
  if (filters.brand) params.set("brand", filters.brand);
  return params;
}

function matchesGroup(product: Product, group: ProductGroupId | null): boolean {
  return !group || getGroupIdForCategory(product.category) === group;
}

export function filterProducts(products: readonly Product[], filters: ProductFilters): Product[] {
  return products.filter(
    (p) =>
      matchesGroup(p, filters.group) &&
      (!filters.packaging || p.packaging_type.toLowerCase() === filters.packaging) &&
      (!filters.category || toSlug(p.category) === filters.category) &&
      (!filters.brand || brandSlug(p) === filters.brand)
  );
}

export function countByGroup(products: readonly Product[]): Record<ProductGroupId | "all", number> {
  const counts = { all: products.length } as Record<ProductGroupId | "all", number>;
  for (const group of productGroups) {
    counts[group.id] = products.filter((p) => matchesGroup(p, group.id)).length;
  }
  return counts;
}

/** Option values (not labels) that yield results inside the selected group. */
export function getAvailableOptions(products: readonly Product[], group: ProductGroupId | null) {
  const inGroup = products.filter((p) => matchesGroup(p, group));
  const usedCategories = new Set(inGroup.map((p) => p.category));
  const usedBrands = new Set(inGroup.map(brandSlug));

  return {
    packaging: Array.from(new Set(inGroup.map((p) => p.packaging_type.toLowerCase()))).sort(),
    categoryGroups: productGroups
      .filter((g) => !group || g.id === group)
      .map((g) => ({ group: g, categories: g.categories.filter((c) => usedCategories.has(c)) }))
      .filter((bucket) => bucket.categories.length > 0),
    brands: brands.filter((b) => usedBrands.has(b.slug)),
  };
}

/**
 * Switching product group clears the category, and drops packaging/brand
 * selections that would leave the new group empty.
 */
export function switchGroup(
  products: readonly Product[],
  filters: ProductFilters,
  group: ProductGroupId | null
): ProductFilters {
  const available = getAvailableOptions(products, group);
  return {
    group,
    category: null,
    packaging: filters.packaging && available.packaging.includes(filters.packaging) ? filters.packaging : null,
    brand: filters.brand && available.brands.some((b) => b.slug === filters.brand) ? filters.brand : null,
  };
}

/** Link to a brand's products; also selects the product group when all of the brand's products share one. */
export function getBrandProductsHref(products: readonly Product[], slug: string): string {
  const groups = new Set(
    products.filter((p) => brandSlug(p) === slug).map((p) => getGroupIdForCategory(p.category))
  );
  const [onlyGroup] = groups;
  const filters: ProductFilters = { ...EMPTY_FILTERS, brand: slug, group: groups.size === 1 ? onlyGroup ?? null : null };
  return `/products?${filtersToQuery(filters).toString()}`;
}

/** Brands bucketed by the product groups they have products in, in taxonomy order. */
export function getBrandsByProductGroup(
  products: readonly Product[]
): { group: (typeof productGroups)[number]; brands: BrandInfo[] }[] {
  return productGroups
    .map((group) => {
      const slugs = new Set(products.filter((p) => matchesGroup(p, group.id)).map(brandSlug));
      return { group, brands: brands.filter((b) => slugs.has(b.slug)) };
    })
    .filter((bucket) => bucket.brands.length > 0);
}
