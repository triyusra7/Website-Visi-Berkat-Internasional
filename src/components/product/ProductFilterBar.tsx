"use client";

import { motion } from "motion/react";
import { useTranslation } from "@/context/LanguageContext";
import { toSlug } from "@/data/taxonomy";
import type { ProductFilters } from "@/lib/product-filters";
import { translateCategory } from "@/lib/translations";
import { cn } from "@/lib/utils";

export type FilterOption = { value: string; label: string };

/** Filter choices available within the currently selected product group. */
export type FilterOptions = {
  packaging: FilterOption[];
  /** Categories bucketed by product group; one bucket when a group is selected. */
  categoryGroups: { groupLabel: string | null; categories: string[] }[];
  brands: FilterOption[];
};

type Props = {
  filters: ProductFilters;
  options: FilterOptions;
  onChange: (filters: ProductFilters) => void;
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
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbi-red focus-visible:ring-offset-1",
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

function PillRow({
  label,
  allLabel,
  options,
  active,
  layoutId,
  onSelect,
}: {
  label: string;
  allLabel?: string;
  options: FilterOption[];
  active: string | null;
  layoutId: string;
  onSelect: (value: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
      {allLabel && (
        <Pill active={active === null} onClick={() => onSelect(null)} layoutId={layoutId}>
          {allLabel}
        </Pill>
      )}
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
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-vbi-navy/60">
      {children}
    </span>
  );
}

/**
 * Layers 2 and 3 of the Products filter (layer 1, the product group, is `ProductGroupTabs`).
 * Order is deliberate: packaging and category first, brand last and collapsed,
 * since most buyers search by product type before they know a brand.
 */
export function ProductFilterBar({ filters, options, onChange }: Props) {
  const { t, language } = useTranslation();
  const categoryLayoutId = "filter-pill-category";
  const categoryCount = options.categoryGroups.reduce((sum, g) => sum + g.categories.length, 0);

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-border bg-white p-5">
      {options.packaging.length > 1 && (
        <div>
          <SectionLabel>{t("filterPackaging")}</SectionLabel>
          <PillRow
            label={t("filterPackaging")}
            allLabel={t("filterAllPackaging")}
            options={options.packaging}
            active={filters.packaging}
            layoutId="filter-pill-packaging"
            onSelect={(packaging) => onChange({ ...filters, packaging })}
          />
        </div>
      )}

      {categoryCount > 1 && (
        <div>
          <SectionLabel>{t("filterCategory")}</SectionLabel>
          <div className="flex flex-col gap-3">
            <PillRow
              label={t("filterCategory")}
              allLabel={t("filterAllCategories")}
              options={[]}
              active={filters.category}
              layoutId={categoryLayoutId}
              onSelect={(category) => onChange({ ...filters, category })}
            />
            {options.categoryGroups.map((bucket) => (
              <div key={bucket.groupLabel ?? "categories"}>
                {bucket.groupLabel && (
                  <span className="mb-1.5 block text-[11px] font-medium text-muted-foreground">
                    {bucket.groupLabel}
                  </span>
                )}
                <PillRow
                  label={bucket.groupLabel ?? t("filterCategory")}
                  options={bucket.categories.map((c) => ({
                    value: toSlug(c),
                    label: translateCategory(c, language),
                  }))}
                  active={filters.category}
                  layoutId={categoryLayoutId}
                  onSelect={(category) => onChange({ ...filters, category })}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {options.brands.length > 1 && (
        <details
          // Remount when the brand filter toggles so an active brand is always visible.
          key={filters.brand ? "brand-open" : "brand-closed"}
          open={filters.brand !== null}
          className="group/brand border-t border-border pt-4"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-sm text-xs font-semibold uppercase tracking-wide text-vbi-navy/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbi-red [&::-webkit-details-marker]:hidden">
            <span>
              {t("filterBrand")}
              <span className="ml-2 font-normal normal-case tracking-normal text-muted-foreground">
                {t("filterBrandHint")}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="text-base leading-none transition-transform duration-200 group-open/brand:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3">
            <PillRow
              label={t("filterBrand")}
              allLabel={t("filterAllBrands")}
              options={options.brands}
              active={filters.brand}
              layoutId="filter-pill-brand"
              onSelect={(brand) => onChange({ ...filters, brand })}
            />
          </div>
        </details>
      )}
    </div>
  );
}
