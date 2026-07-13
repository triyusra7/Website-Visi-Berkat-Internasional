"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/config";

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { href: "/about", label: t("navAbout") },
    { href: "/brands", label: t("navBrands") },
    { href: "/products", label: t("navProducts") },
    { href: "/contact", label: t("navContact") },
  ];

  return (
    <footer className="bg-vbi-navy-dark text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <span className="font-heading text-xl font-bold uppercase tracking-wide text-white">
            Visi Berkat Internasional
          </span>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            {t("footerDesc")}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            {t("footerQuickLinks")}
          </h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            {t("footerGetInTouch")}
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white">
                WhatsApp: +62 818-0604-6098
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60 md:px-8">
        © {new Date().getFullYear()} PT. Visi Berkat Internasional. {t("footerRights")}
      </div>
    </footer>
  );
}

