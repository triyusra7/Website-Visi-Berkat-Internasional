import { CONTACT_ADDRESS } from "@/lib/config";

export function MapEmbed() {
  const query = encodeURIComponent(CONTACT_ADDRESS);
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <iframe
        title="VBI location on Google Maps"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full border-0 md:h-96"
        allowFullScreen
      />
    </div>
  );
}
