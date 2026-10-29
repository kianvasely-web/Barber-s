import { business, whatsappMessage } from "../config/site";

export const telHref = `tel:${business.phone.e164}`;

export function whatsappHref(message: string = whatsappMessage): string {
  return `https://wa.me/${business.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Dirección completa en una línea. */
export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city}, ${business.address.province}`;

/**
 * Búsqueda por dirección en Google Maps (esquema oficial de URLs).
 * Es una búsqueda de dirección, no una ficha verificada del negocio.
 */
export const mapsSearchHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.name} ${business.address.street} ${business.address.city}`,
)}`;

/** Destino del botón "Reservar cita": proveedor de reservas si existe; si no, WhatsApp. */
export const bookingHref: string = business.bookingUrl || whatsappHref();

export const bookingIsExternalProvider = Boolean(business.bookingUrl);

export function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
