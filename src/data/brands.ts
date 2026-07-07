import type { BrandInfo } from "@/types/product";

export const brands: BrandInfo[] = [
  {
    id: "Sarikaya",
    name: "Sarikaya",
    tagline: "Snack for Everyone",
    position: "Bulk/Wholesale",
    description:
      "Full range of traditional Indonesian snacks — spring rolls, samosas, nuts, dry snacks, and potato products — in bulk/carton packaging built for B2B and export.",
    logo: "/images/logos/sarikaya-logo.png",
    colorHex: "#e02020",
  },
  {
    id: "Springlee",
    name: "Springlee",
    tagline: "Snacks for Everyone",
    position: "Retail",
    description:
      "Retail-ready packaging across Standard and Premium lines — spring rolls, samosas, ekado, nuts, and chips, made for shelf-ready distribution.",
    logo: "/images/logos/springlee-logo.png",
    colorHex: "#7a4a2b",
  },
  {
    id: "Ryori",
    name: "Ryori",
    tagline: "Potato Cone Snacks",
    position: "Retail",
    description: "Crunchy cone-shaped potato snacks in small 35g retail packs.",
    logo: null,
    colorHex: "#a13a1f",
  },
  {
    id: "Sweetfulli",
    name: "Sweetfulli",
    tagline: "Sweet Snack Collection",
    position: "Retail",
    description: "Sweet snack collection built around mini choux pastry (soes) treats.",
    logo: "/images/logos/sweetfulli-logo.png",
    colorHex: "#f2a900",
  },
];

export function getBrand(id: string): BrandInfo | undefined {
  return brands.find((b) => b.id.toLowerCase() === id.toLowerCase());
}
