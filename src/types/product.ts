export type Brand =
  | "Sarikaya"
  | "Springlee"
  | "Ryori"
  | "Sweetfulli"
  | "Komodo"
  | "Aloha"
  | "Amigo"
  | "Ny. Sioe"
  | "Finna"
  | "Monica"
  | "Morisca"
  | "Mariza";
export type PackagingType = "Bulk" | "Retail";

export type Product = {
  sku_id: string;
  slug: string;
  product_name: string;
  brand: Brand;
  packaging_type: PackagingType;
  /** Must match a category listed in `src/data/taxonomy.ts`; the product group is derived from it. */
  category: string;
  flavor: string;
  net_weight: string;
  carton_size_cm: string | null;
  shelf_life: string | null;
  description: string | null;
  image: string;
  featured: boolean;
  /** Main ingredient share, e.g. "33.1% shrimp". */
  composition?: string;
  /** Carton configuration, e.g. "18 x 400 g / carton". */
  packing?: string;
  /** Cut or pack variants sold under this entry, e.g. ["GK", "KC", "Stik"]. */
  variants?: string[];
  /** Can also be supplied in one large bulk bag instead of standard cartons. */
  bulk_option?: boolean;
};

export type BrandInfo = {
  id: Brand;
  /** URL-safe key used in `?brand=` and translation keys. */
  slug: string;
  name: string;
  /** `badge` = round logo, `wordmark` = wide logo shown on a landscape plate. */
  logoStyle: "badge" | "wordmark";
  position: "Bulk/Wholesale" | "Retail";
  description: string;
  logo: string | null;
  colorHex: string;
};
