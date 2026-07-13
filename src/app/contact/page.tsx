import type { Metadata } from "next";
import { cookies } from "next/headers";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { Reveal } from "@/components/shared/Reveal";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { CONTACT_ADDRESS, CONTACT_EMAIL, mailtoLink, WHATSAPP_NUMBER } from "@/lib/config";
import { getTranslations, Locale } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as Locale;
  const dict = getTranslations(lang);

  return {
    title: dict.navContact,
    description: dict.contactTitle,
  };
}

export default async function ContactPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as Locale;
  const dict = getTranslations(lang);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-vbi-red">
          {dict.navContact}
        </p>
        <h1 className="font-heading text-3xl font-bold text-vbi-navy md:text-5xl">
          {dict.contactTitle}
        </h1>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Reveal direction="left" className="flex flex-col gap-6">
          <div className="rounded-xl border border-border bg-white p-6">
            <ul className="space-y-5 text-sm">
              <li className="group flex items-start gap-4 rounded-md p-2 -m-2 transition-colors hover:bg-secondary">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#1ebe5a] transition-transform duration-200 group-hover:scale-110">
                  <svg viewBox="0 0 32 32" fill="currentColor" className="size-5" aria-hidden="true">
                    <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.23.6 4.32 1.65 6.12L4 29l8.06-1.6a12 12 0 0 0 3.96.68c6.63 0 12.02-5.4 12.02-12.02C28.04 8.4 22.65 3 16.02 3zm0 21.8c-1.98 0-3.83-.55-5.4-1.5l-.39-.23-4.79.95.99-4.62-.25-.4a9.7 9.7 0 0 1-1.55-5.28c0-5.4 4.4-9.8 9.8-9.8 5.39 0 9.79 4.4 9.79 9.8 0 5.4-4.4 9.08-9.2 9.08zm5.36-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.75.95-.92 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.17-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.34z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-vbi-navy">{dict.contactWa}</p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-muted-foreground hover:text-vbi-navy">
                    +62 818-0604-6098
                  </a>
                </div>
              </li>
              <li className="group flex items-start gap-4 rounded-md p-2 -m-2 transition-colors hover:bg-secondary">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-vbi-navy/10 text-vbi-navy transition-transform duration-200 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
                    <path
                      d="M4 6h16v12H4zM4 6l8 7 8-7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-vbi-navy">{dict.contactEmail}</p>
                  <a href={mailtoLink()} className="text-muted-foreground hover:text-vbi-navy">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </li>
              <li className="group flex items-start gap-4 rounded-md p-2 -m-2 transition-colors hover:bg-secondary">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-vbi-red/10 text-vbi-red transition-transform duration-200 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
                    <path
                      d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-vbi-navy">{dict.contactAddress}</p>
                  <p className="text-muted-foreground">{CONTACT_ADDRESS}</p>
                </div>
              </li>
            </ul>
          </div>

          <WhatsAppButton message={dict.waInquiryContact} className="w-full py-4 text-base">
            {dict.btnChatWaContact}
          </WhatsAppButton>
        </Reveal>


        <Reveal direction="right" delay={0.1}>
          <MapEmbed />
        </Reveal>
      </div>
    </section>
  );
}

