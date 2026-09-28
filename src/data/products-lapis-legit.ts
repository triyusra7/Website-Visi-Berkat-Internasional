import type { Product } from "@/types/product";

const IMG = "/images/products";

const MONICA_SPEC = {
  brand: "Monica",
  packaging_type: "Retail",
  category: "Lapis Legit",
  carton_size_cm: null,
  shelf_life: "12 Months",
  packing: "1 x 10 / carton",
  description: "Lapis legit layer cake from the Marizafoods family, an Indonesian food brand since 1973.",
  image: `${IMG}/monica-lapis-legit.webp`,
} as const;

const MORISCA_CARTON_365 = "37 x 20 x 14.5";
const MORISCA_CARTON_270 = "33.5 x 14.7 x 10";

const MORISCA_SPEC = {
  brand: "Morisca",
  packaging_type: "Retail",
  category: "Lapis Legit",
  shelf_life: "24 Months",
  packing: "1 x 10 / carton",
  description: null,
  featured: false,
} as const;

// Monica: one entry per box size (flavours listed per size).
// Morisca: one entry per flavour, matching the catalog photos.
export const lapisLegitProducts: Product[] = [
  {
    ...MONICA_SPEC,
    sku_id: "monica-lapis-legit-1200g",
    slug: "monica-lapis-legit-1200g",
    product_name: "Monica Lapis Legit 1200 g",
    flavor: "Special, Original, Chocolate, Moscovis, Bolu Surabaya",
    net_weight: "1200 g",
    featured: true,
  },
  {
    ...MONICA_SPEC,
    sku_id: "monica-lapis-legit-600g",
    slug: "monica-lapis-legit-600g",
    product_name: "Monica Lapis Legit 600 g",
    flavor: "Special, Original, Chocolate, Moscovis, Bolu Surabaya",
    net_weight: "600 g",
    featured: false,
  },
  {
    ...MONICA_SPEC,
    sku_id: "monica-lapis-legit-410g",
    slug: "monica-lapis-legit-410g",
    product_name: "Monica Lapis Legit 410 g",
    flavor: "Special, Moscovis Special, Original, Moscovis, Surabaya, Chocolate, Bolu Surabaya, Pandan",
    net_weight: "410 g",
    featured: false,
  },

  {
    ...MORISCA_SPEC,
    sku_id: "morisca-lapis-legit-original",
    slug: "morisca-lapis-legit-original",
    product_name: "Morisca Lapis Legit Original",
    flavor: "Original",
    net_weight: "365 g",
    carton_size_cm: MORISCA_CARTON_365,
    image: `${IMG}/morisca-original.webp`,
  },
  {
    ...MORISCA_SPEC,
    sku_id: "morisca-lapis-legit-coklat-kelapa",
    slug: "morisca-lapis-legit-coklat-kelapa",
    product_name: "Morisca Lapis Legit Coklat Kelapa",
    flavor: "Coconut Chocolate",
    net_weight: "365 g · 270 g",
    carton_size_cm: `${MORISCA_CARTON_365} (365 g) · ${MORISCA_CARTON_270} (270 g)`,
    image: `${IMG}/morisca-coklat-kelapa.webp`,
  },
  {
    ...MORISCA_SPEC,
    sku_id: "morisca-lapis-legit-srikaya",
    slug: "morisca-lapis-legit-srikaya",
    product_name: "Morisca Lapis Legit Srikaya",
    flavor: "Kaya",
    net_weight: "365 g",
    carton_size_cm: MORISCA_CARTON_365,
    image: `${IMG}/morisca-srikaya.webp`,
  },
  {
    ...MORISCA_SPEC,
    sku_id: "morisca-lapis-legit-pandan",
    slug: "morisca-lapis-legit-pandan",
    product_name: "Morisca Lapis Legit Pandan",
    flavor: "Pandan",
    net_weight: "365 g",
    carton_size_cm: MORISCA_CARTON_365,
    image: `${IMG}/morisca-pandan.webp`,
  },
  {
    ...MORISCA_SPEC,
    sku_id: "morisca-lapis-legit-durian",
    slug: "morisca-lapis-legit-durian",
    product_name: "Morisca Lapis Legit Durian",
    flavor: "Durian",
    net_weight: "365 g",
    carton_size_cm: MORISCA_CARTON_365,
    image: `${IMG}/morisca-durian.webp`,
  },
  {
    ...MORISCA_SPEC,
    sku_id: "morisca-lapis-legit-nangka",
    slug: "morisca-lapis-legit-nangka",
    product_name: "Morisca Lapis Legit Nangka",
    flavor: "Jackfruit",
    net_weight: "270 g",
    carton_size_cm: MORISCA_CARTON_270,
    image: `${IMG}/morisca-nangka.webp`,
  },
];
