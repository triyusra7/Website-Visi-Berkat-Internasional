import type { BrandInfo } from "@/types/product";

export const brands: BrandInfo[] = [
  {
    id: "Sarikaya",
    slug: "sarikaya",
    name: "Sarikaya",
    logoStyle: "badge",
    position: "Bulk/Wholesale",
    description:
      "Full range of traditional Indonesian snacks — spring rolls, samosas, nuts, dry snacks, and potato products — in bulk/carton packaging built for B2B and export.",
    logo: "/images/logos/sarikaya-logo.png",
    colorHex: "#e02020",
  },
  {
    id: "Springlee",
    slug: "springlee",
    name: "Springlee",
    logoStyle: "badge",
    position: "Retail",
    description:
      "Retail-ready packaging across Standard and Premium lines — spring rolls, samosas, ekado, nuts, and chips, made for shelf-ready distribution.",
    logo: "/images/logos/springlee-logo.png",
    colorHex: "#7a4a2b",
  },
  {
    id: "Ryori",
    slug: "ryori",
    name: "Ryori",
    logoStyle: "wordmark",
    position: "Retail",
    description: "Crunchy cone-shaped potato snacks in small 35g retail packs.",
    logo: "/images/logos/ryori-logo.png",
    colorHex: "#a13a1f",
  },
  {
    id: "Sweetfulli",
    slug: "sweetfulli",
    name: "Sweetfulli",
    logoStyle: "badge",
    position: "Retail",
    description: "Sweet snack collection built around mini choux pastry (soes) treats.",
    logo: "/images/logos/sweetfulli-logo.png",
    colorHex: "#f2a900",
  },
  {
    id: "Komodo",
    slug: "komodo",
    name: "Komodo",
    logoStyle: "wordmark",
    position: "Bulk/Wholesale",
    description:
      "Sidoarjo shrimp crackers from Komodo Foods in three grades — Super 777, Merah and Hijau — with GK, KC, stick and mini pack options.",
    logo: "/images/logos/komodo-logo.webp",
    colorHex: "#1d3c8f",
  },
  {
    id: "Aloha",
    slug: "aloha",
    name: "Aloha",
    logoStyle: "wordmark",
    position: "Bulk/Wholesale",
    description:
      "Aloha Sidoarjo shrimp crackers in three grades (Super, Baru, Export), packed 20 Kg per carton with a bulk-bag option on every variant.",
    logo: "/images/logos/aloha-logo.png",
    colorHex: "#c0262d",
  },
  {
    id: "Amigo",
    slug: "amigo",
    name: "Amigo",
    logoStyle: "wordmark",
    position: "Bulk/Wholesale",
    description: "Amigo Original shrimp crackers in white plastic packs, supplied by the carton or in bulk.",
    logo: "/images/logos/amigo-logo.png",
    colorHex: "#b3121b",
  },
  {
    id: "Ny. Sioe",
    slug: "ny-sioe",
    name: "Ny. Sioe",
    logoStyle: "wordmark",
    position: "Bulk/Wholesale",
    description: "Ny. Sioe Istimewa shrimp crackers with 35% shrimp content, in GK and stick cut, with a bulk option.",
    logo: "/images/logos/ny-sioe-logo.png",
    colorHex: "#a8420d",
  },
  {
    id: "Finna",
    slug: "finna",
    name: "Finna",
    logoStyle: "wordmark",
    position: "Bulk/Wholesale",
    description:
      "The widest kerupuk range we carry: shrimp, fish, garlic and vegetable crackers from one of Sidoarjo's established producers.",
    logo: "/images/logos/finna-logo.webp",
    colorHex: "#d4461a",
  },
  {
    id: "Monica",
    slug: "monica",
    name: "Monica",
    logoStyle: "wordmark",
    position: "Retail",
    description:
      "Lapis legit layer cake from the Marizafoods family, an Indonesian food brand since 1973, in a 330 g Bolu Surabaya box.",
    logo: "/images/logos/monica-logo.webp",
    colorHex: "#c8102e",
  },
  {
    id: "Morisca",
    slug: "morisca",
    name: "Morisca",
    logoStyle: "wordmark",
    position: "Retail",
    description:
      "Lapis legit in 365 g and 270 g packs, six flavours from original to durian, with a 24-month shelf life.",
    logo: "/images/logos/morisca-logo.webp",
    colorHex: "#8f1d21",
  },
];

export function getBrand(idOrSlug: string): BrandInfo | undefined {
  const key = idOrSlug.toLowerCase();
  return brands.find((b) => b.slug === key || b.id.toLowerCase() === key);
}
