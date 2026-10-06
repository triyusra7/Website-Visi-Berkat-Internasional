import type { Product } from "@/types/product";

const IMG = "/images/products";

const KOMODO_SPEC = {
  brand: "Komodo",
  packaging_type: "Bulk",
  category: "Kerupuk Udang",
  flavor: "Shrimp",
  net_weight: "10 – 15 Kg",
  carton_size_cm: "38.1 x 27.1 x 26.6",
  shelf_life: "2 Years",
  description: "GK = Gondang (large round), KC = Kancing (small round), Stik = stick cut.",
} as const;

const ALOHA_SPEC = {
  brand: "Aloha",
  packaging_type: "Bulk",
  category: "Kerupuk Udang",
  flavor: "Shrimp",
  net_weight: "20 Kg",
  carton_size_cm: "33 x 30.4 x 30.3",
  shelf_life: "2 Years",
  bulk_option: true,
  featured: false,
} as const;

const FINNA_CARTON = "43.3 x 26.7 x 28.5";

const FINNA_SHRIMP_SPEC = {
  brand: "Finna",
  packaging_type: "Bulk",
  category: "Kerupuk Udang",
  flavor: "Shrimp",
  net_weight: "12 Kg",
  carton_size_cm: FINNA_CARTON,
  shelf_life: "2 Years",
  description: null,
  featured: false,
} as const;

const FINNA_OTHER_SPEC = {
  brand: "Finna",
  packaging_type: "Bulk",
  net_weight: "12 Kg",
  packing: "30 x 380 g / carton",
  carton_size_cm: FINNA_CARTON,
  shelf_life: null,
  description: null,
  featured: false,
} as const;

// Raw kerupuk (crackers) sourced from producers in Sidoarjo, East Java.
export const kerupukProducts: Product[] = [
  // ===== Komodo — one entry per grade; pack variants listed in `variants` =====
  {
    ...KOMODO_SPEC,
    sku_id: "komodo-super-777",
    slug: "komodo-super-777",
    product_name: "Komodo Super 777",
    composition: "33.1% shrimp",
    variants: ["KC", "Stik"],
    image: `${IMG}/komodo-super-777.webp`,
    featured: true,
  },
  {
    ...KOMODO_SPEC,
    sku_id: "komodo-merah",
    slug: "komodo-merah",
    product_name: "Komodo Merah",
    composition: "23.5% shrimp",
    variants: ["GK Box 500 g", "GK", "KC", "Stik", "Mini 400 g"],
    image: `${IMG}/komodo-merah.webp`,
    featured: false,
  },
  {
    ...KOMODO_SPEC,
    sku_id: "komodo-hijau",
    slug: "komodo-hijau",
    product_name: "Komodo Hijau",
    composition: "20% shrimp",
    variants: ["GK Box 500 g", "GK", "KC 250 g", "Mini 400 g"],
    image: `${IMG}/komodo-hijau.webp`,
    featured: false,
  },

  // ===== Aloha — bulk option on all variants =====
  {
    ...ALOHA_SPEC,
    sku_id: "aloha-super",
    slug: "aloha-super",
    product_name: "Aloha Super",
    composition: "30% shrimp",
    description: "Orange pack.",
    image: `${IMG}/aloha-super.webp`,
  },
  {
    ...ALOHA_SPEC,
    sku_id: "aloha-baru",
    slug: "aloha-baru",
    product_name: "Aloha Baru",
    composition: "28% shrimp",
    description: "Blue pack.",
    image: `${IMG}/aloha-baru.webp`,
  },
  {
    ...ALOHA_SPEC,
    sku_id: "aloha-export",
    slug: "aloha-export",
    product_name: "Aloha Export",
    composition: "25% shrimp",
    description: "Red pack.",
    image: `${IMG}/aloha-export.webp`,
  },

  // ===== Amigo =====
  {
    sku_id: "amigo-original",
    slug: "amigo-original",
    product_name: "Amigo Original",
    brand: "Amigo",
    packaging_type: "Bulk",
    category: "Kerupuk Udang",
    flavor: "Shrimp",
    composition: "22% shrimp",
    net_weight: "12 – 14 Kg",
    carton_size_cm: "31.5 x 31 x 28.8",
    shelf_life: "2 Years",
    bulk_option: true,
    description: "White plastic pack.",
    image: `${IMG}/amigo-original.webp`,
    featured: false,
  },

  // ===== Ny. Sioe =====
  {
    sku_id: "ny-sioe-istimewa",
    slug: "ny-sioe-istimewa",
    product_name: "Ny. Sioe Istimewa",
    brand: "Ny. Sioe",
    packaging_type: "Bulk",
    category: "Kerupuk Udang",
    flavor: "Shrimp",
    composition: "35% shrimp",
    net_weight: "GK 16 Kg · Stick 12 Kg",
    carton_size_cm: "36.5 x 33 x 31.2",
    shelf_life: "2 Years",
    variants: ["GK", "Stick"],
    bulk_option: true,
    description: null,
    image: `${IMG}/ny-sioe-istimewa.webp`,
    featured: false,
  },

  // ===== Finna — Kerupuk Udang =====
  {
    ...FINNA_SHRIMP_SPEC,
    sku_id: "finna-classic-stick",
    slug: "finna-classic-stick",
    product_name: "Finna Classic Stick",
    composition: "60% shrimp",
    packing: "18 x 400 g / carton",
    image: `${IMG}/finna-classic-stick.webp`,
  },
  {
    ...FINNA_SHRIMP_SPEC,
    sku_id: "finna-classic",
    slug: "finna-classic",
    product_name: "Finna Classic",
    composition: "60% shrimp",
    packing: "18 x 400 g / carton",
    image: `${IMG}/finna-classic.webp`,
  },
  {
    ...FINNA_SHRIMP_SPEC,
    sku_id: "finna-oei-udang",
    slug: "finna-oei-udang",
    product_name: "Finna Oei Udang",
    composition: "60% shrimp",
    packing: "16 x 500 g / carton",
    image: `${IMG}/finna-oei-udang.webp`,
  },
  {
    ...FINNA_SHRIMP_SPEC,
    sku_id: "finna-intan",
    slug: "finna-intan",
    product_name: "Finna Intan",
    composition: "46% shrimp",
    packing: "24 x 400 g / carton",
    image: `${IMG}/finna-intan.webp`,
  },
  {
    ...FINNA_SHRIMP_SPEC,
    sku_id: "finna-nasional",
    slug: "finna-nasional",
    product_name: "Finna Nasional",
    composition: "46% shrimp",
    packing: "30 x 380 g / carton",
    image: `${IMG}/finna-nasional.webp`,
  },
  {
    ...FINNA_SHRIMP_SPEC,
    sku_id: "finna-nusantara",
    slug: "finna-nusantara",
    product_name: "Finna Nusantara",
    composition: "15% shrimp",
    packing: "30 x 380 g / carton",
    image: `${IMG}/finna-nusantara.webp`,
  },
  {
    ...FINNA_SHRIMP_SPEC,
    sku_id: "finna-nusantara-mini",
    slug: "finna-nusantara-mini",
    product_name: "Finna Nusantara Mini",
    composition: "15% shrimp",
    packing: "40 x 250 g / carton",
    image: `${IMG}/finna-nusantara-mini.webp`,
  },

  // ===== Finna — Kerupuk Ikan, Bawang & Sayur =====
  {
    ...FINNA_OTHER_SPEC,
    sku_id: "finna-bawal-putih",
    slug: "finna-bawal-putih",
    product_name: "Finna Bawal Putih",
    category: "Kerupuk Ikan",
    flavor: "Fish",
    composition: "33% fish",
    image: `${IMG}/finna-bawal-putih.webp`,
  },
  {
    ...FINNA_OTHER_SPEC,
    sku_id: "finna-bawang",
    slug: "finna-bawang",
    product_name: "Finna Bawang",
    category: "Kerupuk Bawang",
    flavor: "Garlic",
    composition: "14% garlic",
    image: `${IMG}/finna-bawang.webp`,
  },
  {
    ...FINNA_OTHER_SPEC,
    sku_id: "finna-salada",
    slug: "finna-salada",
    product_name: "Finna Salada",
    category: "Kerupuk Sayur",
    flavor: "Vegetable & Cassava",
    image: `${IMG}/finna-salada.webp`,
  },
];
