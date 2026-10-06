"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import { productGroups, type ProductGroupId } from "@/data/taxonomy";
import { cn } from "@/lib/utils";

type Props = {
  active: ProductGroupId | null;
  counts: Record<ProductGroupId | "all", number>;
  onSelect: (group: ProductGroupId | null) => void;
};

type Tab = {
  id: ProductGroupId | null;
  label: string;
  desc: string;
  count: number;
  /** One photo per group; the "All" card shows every group's photo side by side. */
  images: string[];
};

const IMAGE_SIZES = "(min-width: 768px) 20vw, 50vw";

function CheckBadge() {
  return (
    <motion.span
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 600, damping: 28 }}
      className="flex size-6 items-center justify-center rounded-full bg-vbi-red text-white shadow-md"
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
        <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.span>
  );
}

function TabMedia({ images, isActive }: { images: string[]; isActive: boolean }) {
  return (
    <span
      className={cn(
        "absolute inset-0 flex transition-[filter,transform] duration-500 ease-out",
        "group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
        isActive ? "saturate-100" : "saturate-[.65] group-hover:saturate-100"
      )}
    >
      {images.map((src) => (
        <span key={src} className="relative h-full flex-1">
          <Image src={src} alt="" fill sizes={IMAGE_SIZES} loading="eager" className="object-cover" />
        </span>
      ))}
    </span>
  );
}

/** Layer 1 of the Products filter: the product group is the primary way to browse. */
export function ProductGroupTabs({ active, counts, onSelect }: Props) {
  const { t } = useTranslation();

  const tabs: Tab[] = [
    {
      id: null,
      label: t("filterAllGroups"),
      desc: t("group_all_desc"),
      count: counts.all,
      images: productGroups.map((g) => g.image),
    },
    ...productGroups.map((g) => ({
      id: g.id,
      label: t(g.labelKey),
      desc: t(`${g.labelKey}_desc`),
      count: counts[g.id],
      images: [g.image],
    })),
  ];

  return (
    <div role="group" aria-label={t("filterGroup")} className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <motion.button
            key={tab.id ?? "all"}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(tab.id)}
            whileTap={{ scale: 0.97 }}
            className={cn(
              // Five cards: "All" spans the full row on mobile so the four groups pair up below it.
              tab.id === null && "col-span-2 md:col-span-1",
              "group relative isolate flex h-32 flex-col justify-between overflow-hidden rounded-2xl p-3 text-left sm:h-36 md:p-4 lg:h-44",
              "shadow-sm transition-shadow duration-300 hover:shadow-xl",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbi-red focus-visible:ring-offset-2",
              isActive && "shadow-xl ring-2 ring-vbi-red ring-offset-2"
            )}
          >
            <TabMedia images={tab.images} isActive={isActive} />

            {/* Scrim keeps the white label readable on any photo. */}
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-0 bg-gradient-to-t transition-opacity duration-300",
                isActive
                  ? "from-vbi-navy/95 via-vbi-navy/35 to-transparent"
                  : "from-vbi-navy-dark/95 via-vbi-navy-dark/60 to-vbi-navy-dark/20 group-hover:opacity-90"
              )}
            />

            <span className="relative flex items-start justify-between gap-2">
              <span className="flex size-6 items-center">
                <AnimatePresence>{isActive && <CheckBadge key="check" />}</AnimatePresence>
              </span>
              <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold tabular-nums text-vbi-navy shadow-sm backdrop-blur-sm">
                {t("groupCount").replace("{count}", String(tab.count))}
              </span>
            </span>

            <span className="relative flex flex-col gap-0.5">
              <span className="font-heading text-lg font-bold uppercase leading-tight tracking-wide text-white md:text-xl lg:text-2xl">
                {tab.label}
              </span>
              <span className="hidden text-xs leading-snug text-white/80 sm:line-clamp-1">{tab.desc}</span>
            </span>

            {isActive && (
              <motion.span
                layoutId="product-group-active-bar"
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 bg-vbi-red"
                transition={{ type: "spring", stiffness: 500, damping: 36 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
