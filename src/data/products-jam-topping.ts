import type { Product } from "@/types/product";

const IMG = "/images/products";

const MARIZA_SPEC = {
  brand: "Mariza",
  packaging_type: "Retail",
  carton_size_cm: "37 x 20 x 14.5",
  shelf_life: "24 Months",
  featured: false,
} as const;

const TOPPING_200 = { ...MARIZA_SPEC, category: "Topping", net_weight: "200 g", packing: "1 x 10 / carton" } as const;
const TOPPING_350 = { ...MARIZA_SPEC, category: "Topping", net_weight: "350 g", packing: "1 x 10 / carton" } as const;
const PORTION_PACK = { ...MARIZA_SPEC, category: "Jam", net_weight: "10 x 14 g", packing: "1 x 20 / carton" } as const;

// Mariza (Marizafoods family): squeeze-bottle toppings in 200 g and 350 g, plus portion-pack jams.
export const jamToppingProducts: Product[] = [
  // ===== 200 g bottle =====
  {
    ...TOPPING_200,
    sku_id: "mariza-blueberry-topping-200g",
    slug: "mariza-blueberry-topping-200g",
    product_name: "Mariza Blueberry Topping 200 g",
    flavor: "Blueberry",
    description: "Blueberry topping for bread, pancakes and desserts.",
    image: `${IMG}/mariza-blueberry-topping-200.webp`,
  },
  {
    ...TOPPING_200,
    sku_id: "mariza-chocolate-topping-200g",
    slug: "mariza-chocolate-topping-200g",
    product_name: "Mariza Chocolate Topping 200 g",
    flavor: "Chocolate",
    description: "Chocolate topping for bread, pancakes and desserts.",
    image: `${IMG}/mariza-chocolate-topping-200.webp`,
  },
  {
    ...TOPPING_200,
    sku_id: "mariza-strawberry-topping-200g",
    slug: "mariza-strawberry-topping-200g",
    product_name: "Mariza Strawberry Topping 200 g",
    flavor: "Strawberry",
    description: "Strawberry topping for bread, pancakes and desserts.",
    image: `${IMG}/mariza-strawberry-topping-200.webp`,
  },

  // ===== 350 g bottle =====
  {
    ...TOPPING_350,
    sku_id: "mariza-blueberry-topping-350g",
    slug: "mariza-blueberry-topping-350g",
    product_name: "Mariza Blueberry Topping 350 g",
    flavor: "Blueberry",
    description: "Blueberry topping for bread, pancakes and desserts.",
    image: `${IMG}/mariza-blueberry-topping-350.webp`,
  },
  {
    ...TOPPING_350,
    sku_id: "mariza-caramel-topping-350g",
    slug: "mariza-caramel-topping-350g",
    product_name: "Mariza Caramel Topping 350 g",
    flavor: "Caramel",
    description: "Caramel topping for bread, pancakes and desserts.",
    image: `${IMG}/mariza-caramel-topping-350.webp`,
  },
  {
    ...TOPPING_350,
    sku_id: "mariza-chocolate-topping-350g",
    slug: "mariza-chocolate-topping-350g",
    product_name: "Mariza Chocolate Topping 350 g",
    flavor: "Chocolate",
    description: "Chocolate topping for bread, pancakes and desserts.",
    image: `${IMG}/mariza-chocolate-topping-350.webp`,
  },
  {
    ...TOPPING_350,
    sku_id: "mariza-strawberry-topping-350g",
    slug: "mariza-strawberry-topping-350g",
    product_name: "Mariza Strawberry Topping 350 g",
    flavor: "Strawberry",
    description: "Strawberry topping for bread, pancakes and desserts.",
    image: `${IMG}/mariza-strawberry-topping-350.webp`,
  },

  // ===== Portion pack =====
  {
    ...PORTION_PACK,
    sku_id: "mariza-pineapple-jam-portion",
    slug: "mariza-pineapple-jam-portion",
    product_name: "Mariza Pineapple Jam Portion Pack",
    flavor: "Pineapple",
    description: "Single-serve pineapple jam, 10 pcs x 14 g per bag.",
    image: `${IMG}/mariza-pineapple-jam-portion.webp`,
  },
  {
    ...PORTION_PACK,
    sku_id: "mariza-strawberry-jam-portion",
    slug: "mariza-strawberry-jam-portion",
    product_name: "Mariza Strawberry Jam Portion Pack",
    flavor: "Strawberry",
    description: "Single-serve strawberry jam, 10 pcs x 14 g per bag.",
    image: `${IMG}/mariza-strawberry-jam-portion.webp`,
  },
];
