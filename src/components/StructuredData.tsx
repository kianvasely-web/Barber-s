import { useEffect } from "react";
import { business, siteUrl } from "../config/site";

/**
 * Datos estructurados Schema.org (Barbershop) y URL canónica.
 * Se incluyen únicamente datos confirmados: nombre, dirección y teléfono.
 * No se añaden valoraciones (aggregateRating) ni horarios sin verificar.
 */
export default function StructuredData() {
  useEffect(() => {
    if (!siteUrl) return;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${siteUrl}/`;
  }, []);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    name: business.name,
    telephone: business.phone.e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      addressCountry: business.address.countryCode,
    },
    areaServed: business.address.city,
  };
  if (siteUrl) data.url = `${siteUrl}/`;
  if (business.googleBusinessUrl) data.hasMap = business.googleBusinessUrl;

  const sameAs = Object.values(business.social).filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
