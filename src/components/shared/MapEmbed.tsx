import { CONTACT_ADDRESS } from "@/lib/config";

export function MapEmbed() {
  // Menggunakan alamat dari config → otomatis ikut berubah jika alamat diubah
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_ADDRESS)}&z=17&output=embed`;

  return (
    <div className="relative overflow-hidden rounded-xl border border-border shadow-sm">
      {/* Map iframe */}
      <iframe
        title="Lokasi PT. Visi Berkat Internasional di Google Maps"
        src={mapSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full border-0 md:h-96"
        allowFullScreen
      />

      {/* Pin label overlay */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
        <div className="flex flex-col items-center">
          <div className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-vbi-navy shadow-lg ring-1 ring-black/10 whitespace-nowrap">
            PT. Visi Berkat Internasional
          </div>
          <div className="h-2 w-0.5 bg-vbi-red" />
          <div className="size-2 rounded-full bg-vbi-red" />
        </div>
      </div>
    </div>
  );
}
