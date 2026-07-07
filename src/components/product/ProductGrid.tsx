"use client";

import { motion, type Variants } from "motion/react";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/types/product";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.02, staggerDirection: 1, delayChildren: 0 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
};

export function ProductGrid({
  products,
  preserveQuery,
}: {
  products: Product[];
  preserveQuery?: string;
}) {
  return (
    <motion.div
      key={products.map((p) => p.sku_id).join(",")}
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {products.map((product) => (
        <motion.div key={product.sku_id} variants={item}>
          <ProductCard product={product} preserveQuery={preserveQuery} />
        </motion.div>
      ))}
    </motion.div>
  );
}
