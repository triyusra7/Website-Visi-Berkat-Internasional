import type { Product } from "@/types/product";

const IMG = "/images/products";

const MORISCA_SPEC = {
  brand: "Morisca",
  packaging_type: "Retail",
  category: "Lapis Legit",
  shelf_life: "24 Months",
  packing: "1 x 10 / carton",
  featured: false,
} as const;

const MORISCA_270 = { ...MORISCA_SPEC, net_weight: "270 g", carton_size_cm: "33.5 x 14.7 x 10" } as const;
const MORISCA_365 = { ...MORISCA_SPEC, net_weight: "365 g", carton_size_cm: "37 x 20 x 14.5" } as const;

// Morisca: one entry per size and flavour, matching the catalog's 270gr / 365gr sections.
// Monica: Bolu Surabaya only (per catalog).
export const lapisLegitProducts: Product[] = [
  // ===== Morisca 270 g =====
  {
    ...MORISCA_270,
    sku_id: "morisca-lapis-legit-original-270g",
    slug: "morisca-lapis-legit-original-270g",
    product_name: "Morisca Lapis Legit Original 270 g",
    flavor: "Original",
    description: "Layered cake with original recipe.",
    image: `${IMG}/morisca-original-270.webp`,
  },
  {
    ...MORISCA_270,
    sku_id: "morisca-lapis-legit-coklat-270g",
    slug: "morisca-lapis-legit-coklat-270g",
    product_name: "Morisca Lapis Legit Coklat 270 g",
    flavor: "Chocolate",
    description: "Layered cake with chocolate flavor.",
    image: `${IMG}/morisca-coklat-270.webp`,
  },
  {
    ...MORISCA_270,
    sku_id: "morisca-lapis-legit-srikaya-270g",
    slug: "morisca-lapis-legit-srikaya-270g",
    product_name: "Morisca Lapis Legit Srikaya 270 g",
    flavor: "Kaya",
    description: "Layered cake with sweet kaya (coconut custard).",
    image: `${IMG}/morisca-srikaya-270.webp`,
  },
  {
    ...MORISCA_270,
    sku_id: "morisca-lapis-legit-durian-270g",
    slug: "morisca-lapis-legit-durian-270g",
    product_name: "Morisca Lapis Legit Durian 270 g",
    flavor: "Durian",
    description: "Layered cake with rich durian flavor.",
    image: `${IMG}/morisca-durian-270.webp`,
  },
  {
    ...MORISCA_270,
    sku_id: "morisca-lapis-legit-nangka-270g",
    slug: "morisca-lapis-legit-nangka-270g",
    product_name: "Morisca Lapis Legit Nangka 270 g",
    flavor: "Jackfruit",
    description: "Layered cake with sweet jackfruit flavor.",
    image: `${IMG}/morisca-nangka-270.webp`,
  },

  // ===== Morisca 365 g =====
  {
    ...MORISCA_365,
    sku_id: "morisca-lapis-legit-original-365g",
    slug: "morisca-lapis-legit-original-365g",
    product_name: "Morisca Lapis Legit Original 365 g",
    flavor: "Original",
    description: "Layered cake with original recipe.",
    image: `${IMG}/morisca-original.webp`,
  },
  {
    ...MORISCA_365,
    sku_id: "morisca-lapis-legit-coklat-kelapa-365g",
    slug: "morisca-lapis-legit-coklat-kelapa-365g",
    product_name: "Morisca Lapis Legit Coklat Kelapa 365 g",
    flavor: "Coconut Chocolate",
    description: "Layered cake with coconut and chocolate.",
    image: `${IMG}/morisca-coklat-kelapa.webp`,
  },
  {
    ...MORISCA_365,
    sku_id: "morisca-lapis-legit-srikaya-365g",
    slug: "morisca-lapis-legit-srikaya-365g",
    product_name: "Morisca Lapis Legit Srikaya 365 g",
    flavor: "Kaya",
    description: "Layered cake with sweet kaya (coconut custard).",
    image: `${IMG}/morisca-srikaya.webp`,
  },
  {
    ...MORISCA_365,
    sku_id: "morisca-lapis-legit-pandan-365g",
    slug: "morisca-lapis-legit-pandan-365g",
    product_name: "Morisca Lapis Legit Pandan 365 g",
    flavor: "Pandan",
    description: "Layered cake with fragrant pandan.",
    image: `${IMG}/morisca-pandan.webp`,
  },
  {
    ...MORISCA_365,
    sku_id: "morisca-lapis-legit-durian-365g",
    slug: "morisca-lapis-legit-durian-365g",
    product_name: "Morisca Lapis Legit Durian 365 g",
    flavor: "Durian",
    description: "Layered cake with rich durian flavor.",
    image: `${IMG}/morisca-durian.webp`,
  },

  // ===== Monica =====
  {
    sku_id: "monica-bolu-surabaya-330g",
    slug: "monica-bolu-surabaya-330g",
    product_name: "Monica Bolu Surabaya",
    brand: "Monica",
    packaging_type: "Retail",
    category: "Lapis Legit",
    flavor: "Bolu Surabaya",
    net_weight: "330 g",
    carton_size_cm: "37 x 20 x 14.5",
    shelf_life: "12 Months",
    packing: "1 x 10 / carton",
    description: "Traditional layered Surabaya cake.",
    image: `${IMG}/monica-bolu-surabaya.webp`,
    featured: true,
  },
];
