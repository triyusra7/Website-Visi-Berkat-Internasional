/**
 * Single source of truth for the product filter hierarchy:
 * product group (layer 1) → category (layer 2). Brands (layer 3) live in `brands.ts`.
 *
 * Adding a category or group only requires editing this file (plus its label in
 * `translations.ts`); the Products page filters pick it up automatically.
 */
export type ProductGroupId = "snacks" | "kerupuk" | "lapis-legit";

export type ProductGroup = {
  id: ProductGroupId;
  /** Translation key for the group label. */
  labelKey: string;
  /** Cover photo for the group card on the Products page. */
  image: string;
  categories: readonly string[];
};

export const productGroups: readonly ProductGroup[] = [
  {
    id: "snacks",
    labelKey: "group_snacks",
    image: "/images/groups/snacks.webp",
    categories: [
      "Bolu Kering",
      "Choux/Soes",
      "Ekado",
      "Nuts",
      "Pangsit",
      "Pastel",
      "Potato Chips",
      "Potato Cone",
      "Potato Stick",
      "Samosa",
      "Spring Roll",
      "Tambang",
      "Telur Gabus",
    ],
  },
  {
    id: "kerupuk",
    labelKey: "group_kerupuk",
    image: "/images/groups/kerupuk.webp",
    categories: ["Kerupuk Udang", "Kerupuk Ikan", "Kerupuk Bawang", "Kerupuk Sayur"],
  },
  {
    id: "lapis-legit",
    labelKey: "group_lapis_legit",
    image: "/images/groups/lapis-legit.webp",
    categories: ["Lapis Legit"],
  },
];

/** URL-safe form used for `?category=` and `?brand=` values. Also accepts legacy values like "spring roll". */
export function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProductGroup(id: string | null): ProductGroup | undefined {
  return id ? productGroups.find((g) => g.id === id) : undefined;
}

export function getGroupIdForCategory(category: string): ProductGroupId | undefined {
  return productGroups.find((g) => g.categories.includes(category))?.id;
}
