export const SITE_NAME = "PT. Visi Berkat Internasional";
export const SITE_URL = "https://www.visiberkatinternasional.net";


export const WHATSAPP_NUMBER = "6281806046098";
export const CONTACT_EMAIL = "office@visiberkatinternasional.net";
export const CONTACT_ADDRESS =
  "Jl. Trunojoyo No.11, RT03/RW03, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115";
/** Map search query — RT/RW omitted because Google Maps geocodes better without it. */
export const CONTACT_MAP_QUERY = "Jl. Trunojoyo No.11, Citarum, Bandung Wetan, Kota Bandung, Jawa Barat 40115";

export const CATALOG_PDF_PATH = "/catalog/VBI-Product-Catalog.pdf";

export function waLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink(subject?: string): string {
  const base = `mailto:${CONTACT_EMAIL}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
