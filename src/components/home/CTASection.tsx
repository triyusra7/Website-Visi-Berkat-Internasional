"use client";

import { Reveal } from "@/components/shared/Reveal";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { CONTACT_EMAIL, mailtoLink } from "@/lib/config";
import { useTranslation } from "@/context/LanguageContext";

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="bg-vbi-navy py-16 md:py-24">
      <Reveal className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          {t("ctaTitle")}
        </h2>
        <p className="mt-4 text-base text-white/80">
          {t("ctaDesc")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <WhatsAppButton message={t("waInquiryCTA")}>
            {t("btnChatWa")}
          </WhatsAppButton>
          <a
            href={mailtoLink("Inquiry from VBI Website")}
            data-analytics-event="email_cta_click"
            className="tap-scale inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-vbi-navy"
          >
            {t("btnEmailUs")}
          </a>
        </div>
        <a
          href="/catalog/VBI-Product-Catalog.pdf"
          download
          data-analytics-event="catalog_download_click"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 underline underline-offset-4 transition-colors hover:text-white"
        >
          {t("btnDownloadCatalog")}
        </a>
        <p className="mt-2 text-xs text-white/50">{CONTACT_EMAIL}</p>
      </Reveal>
    </section>
  );
}

