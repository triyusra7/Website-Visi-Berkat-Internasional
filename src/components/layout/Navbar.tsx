"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/brands", label: "Our Brands" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-heading text-xl font-bold uppercase tracking-wide text-vbi-navy">
            Visi Berkat
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-vbi-red sm:inline">
            Internasional
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-1 text-sm font-medium uppercase tracking-wide text-vbi-navy/80 transition-colors hover:text-vbi-navy"
              >
                {link.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-vbi-red"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                ) : (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-vbi-navy/30 transition-transform duration-200 group-hover:scale-x-100" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton message="Hi, I'm interested in learning more about VBI's products." className="px-4 py-2.5 text-xs">
            Contact Us
          </WhatsAppButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center text-vbi-navy md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
            <motion.path
              d="M3 6h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={open ? { d: "M6 6l12 12", rotate: 0 } : { d: "M3 6h18" }}
              transition={{ duration: 0.2 }}
            />
            <motion.path
              d="M3 12h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.path
              d="M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={open ? { d: "M18 6L6 18" } : { d: "M3 18h18" }}
              transition={{ duration: 0.2 }}
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <ul className="flex flex-col px-4 py-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  className="border-b border-border last:border-none"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-3 text-sm font-medium uppercase tracking-wide text-vbi-navy/80 transition-colors active:text-vbi-red",
                      pathname === link.href && "text-vbi-red"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <WhatsAppButton
                message="Hi, I'm interested in learning more about VBI's products."
                className="w-full"
              >
                Contact Us
              </WhatsAppButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
