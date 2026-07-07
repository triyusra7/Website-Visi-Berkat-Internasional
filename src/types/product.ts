export type Brand = "Sarikaya" | "Springlee" | "Ryori" | "Sweetfulli";
export type PackagingType = "Bulk" | "Retail";

export type Product = {
  sku_id: string;
  slug: string;
  product_name: string;
  brand: Brand;
  packaging_type: PackagingType;
  category: string;
  flavor: string;
  net_weight: string;
  carton_size_cm: string | null;
  shelf_life: string | null;
  description: string | null;
  image: string;
  featured: boolean;
};

export type BrandInfo = {
  id: Brand;
  name: string;
  tagline: string;
  position: "Bulk/Wholesale" | "Retail";
  description: string;
  logo: string | null;
  colorHex: string;
};
