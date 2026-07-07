"use client";

import { motion } from "motion/react";
import { waLink } from "@/lib/config";
import { cn } from "@/lib/utils";

type Props = {
  message?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
};

export function WhatsAppButton({ message, children, className, variant = "solid" }: Props) {
  return (
    <motion.a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-event="whatsapp_cta_click"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide shadow-sm transition-colors",
        variant === "solid"
          ? "bg-[#25D366] text-white hover:bg-[#1ebe5a] hover:shadow-md"
          : "border-2 border-[#25D366] text-[#1ebe5a] hover:bg-[#25D366]/10",
        className
      )}
    >
      <motion.svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="size-5"
        aria-hidden="true"
        whileHover={{ rotate: [0, -12, 12, -6, 0] }}
        transition={{ duration: 0.5 }}
      >
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.23.6 4.32 1.65 6.12L4 29l8.06-1.6a12 12 0 0 0 3.96.68c6.63 0 12.02-5.4 12.02-12.02C28.04 8.4 22.65 3 16.02 3zm0 21.8c-1.98 0-3.83-.55-5.4-1.5l-.39-.23-4.79.95.99-4.62-.25-.4a9.7 9.7 0 0 1-1.55-5.28c0-5.4 4.4-9.8 9.8-9.8 5.39 0 9.79 4.4 9.79 9.8 0 5.4-4.4 9.08-9.2 9.08zm5.36-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.75.95-.92 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.17-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.34z" />
      </motion.svg>
      {children}
    </motion.a>
  );
}
