import Link from "next/link";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/config";

const QUICK_LINKS = [
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-vbi-navy-dark text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <span className="font-heading text-xl font-bold uppercase tracking-wide text-white">
            Visi Berkat Internasional
          </span>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            Sharing Indonesia&apos;s culture with the world, one authentic snack at a time.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((link) => (
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
            Get In Touch
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
        © {new Date().getFullYear()} PT. Visi Berkat Internasional. All rights reserved.
      </div>
    </footer>
  );
}
