"use client";

import { motion } from "motion/react";
import { brands } from "@/data/brands";
import { categories } from "@/data/products";
import { useTranslation } from "@/context/LanguageContext";
import { translateCategory } from "@/lib/translations";
import { cn } from "@/lib/utils";

export type Filters = {
  brand: string | null;
  packaging: string | null;
  category: string | null;
};

type Props = {
  filters: Filters;
  onChange: (filters: Filters) => void;
};

function Pill({
  active,
  onClick,
  layoutId,
  children,
}: {
  active: boolean;
  onClick: () => void;
  layoutId: string;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      whileTap={{ scale: 0.92 }}
      className={cn(
        "relative rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
        active ? "border-vbi-navy text-white" : "border-border bg-white text-vbi-navy/80 hover:border-vbi-navy/40"
      )}
    >
      {active && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-0 rounded-full bg-vbi-navy"
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
        />
      )}
      <span className="relative">{children}</span>
    </motion.button>
  );
}

function FilterGroup({
  label,
  allLabel,
  options,
  active,
  onSelect,
}: {
  label: string;
  allLabel: string;
  options: { value: string; label: string }[];
  active: string | null;
  onSelect: (value: string | null) => void;
}) {
  const layoutId = `filter-pill-${label}`;

  return (
    <div>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-vbi-navy/60">
        {label}
      </span>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        <Pill active={active === null} onClick={() => onSelect(null)} layoutId={layoutId}>
          {allLabel}
        </Pill>
        {options.map((opt) => (
          <Pill
            key={opt.value}
            active={active === opt.value}
            onClick={() => onSelect(opt.value)}
            layoutId={layoutId}
          >
            {opt.label}
          </Pill>
        ))}
      </div>
    </div>
  );
}

export function ProductFilterBar({ filters, onChange }: Props) {
  const { t, language } = useTranslation();

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-border bg-white p-5">
      <FilterGroup
        label={t("filterBrand")}
        allLabel={t("filterAllBrands")}
        options={brands.map((b) => ({ value: b.id.toLowerCase(), label: b.name }))}
        active={filters.brand}
        onSelect={(brand) => onChange({ ...filters, brand })}
      />
      <FilterGroup
        label={t("filterPackaging")}
        allLabel={t("filterAllPackaging")}
        options={[
          { value: "bulk", label: t("packaging_bulk") },
          { value: "retail", label: t("packaging_retail") },
        ]}
        active={filters.packaging}
        onSelect={(packaging) => onChange({ ...filters, packaging })}
      />
      <FilterGroup
        label={t("filterCategory")}
        allLabel={t("filterAllCategories")}
        options={categories.map((c) => ({ value: c.toLowerCase(), label: translateCategory(c, language) }))}
        active={filters.category}
        onSelect={(category) => onChange({ ...filters, category })}
      />
    </div>
  );
}

