export const SITE_NAME = "PT. Visi Berkat Internasional";
export const SITE_URL = "https://visiberkatinternasional.com";

export const WHATSAPP_NUMBER = "6281806046098";
export const CONTACT_EMAIL = "ptvisiberkatinternasional@gmail.com";
export const CONTACT_ADDRESS =
  "Gunung Batu No 203, Apartment Gateway Pasteur Blok Diamond BS 10, Kelurahan Sukaraja, Kecamatan Cicendo, Kota Bandung, Jawa Barat";

export function waLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink(subject?: string): string {
  const base = `mailto:${CONTACT_EMAIL}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
