/**
 * CONFIGURACIÓN CENTRAL DE THE BARBER'S
 * ------------------------------------------------------------------
 * Todo lo que el propietario puede querer cambiar está en este archivo:
 * datos del negocio, servicios, horarios, opiniones, fotografías,
 * redes sociales y textos legales.
 *
 * Regla: solo se muestran datos confirmados. Los campos vacíos ("")
 * no se pintan en la web.
 */

export type ImageSlot = {
  /** Ruta dentro de /public. Ej.: "/images/hero.jpg" */
  src: string;
  /** Texto alternativo descriptivo (accesibilidad y SEO). */
  alt: string;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  /** Mientras no haya precios confirmados, dejar "Consultar precio". */
  priceLabel: string;
  image: ImageSlot;
};

export type ScheduleRow = { day: string; hours: string };

export type Review = { quote: string };

export type LegalKey = "privacy" | "legalNotice" | "cookies";

export const business = {
  name: "The Barber's",
  displayName: "THE BARBER'S",
  category: "Barbería",
  phone: {
    display: "630 73 64 71",
    e164: "+34630736471",
    /** Número para wa.me: prefijo de país sin "+" */
    whatsapp: "34630736471",
  },
  address: {
    street: "Avenida Dr. Norman Bethune",
    postalCode: "18600",
    city: "Motril",
    province: "Granada",
    country: "España",
    countryCode: "ES",
  },
  /** Dato auxiliar facilitado por el propietario. */
  plusCode: "PFRG+F6 Motril",
  /** Valoración indicada en la ficha de Google Maps facilitada por el propietario. */
  rating: { value: "4,9", outOf: "5", count: 327 },

  /**
   * URL VERIFICADA de la ficha del negocio en Google Maps.
   * Mientras esté vacía no se muestra el botón "Ver opiniones en Google".
   * Cómo obtenerla: abre la ficha en Google Maps → Compartir → Copiar enlace.
   */
  googleBusinessUrl: "",

  /**
   * URL de incrustación del mapa (src del iframe de Google Maps → Compartir →
   * Incorporar un mapa). Mientras esté vacía se muestra un panel con botón
   * "Abrir en Google Maps" en lugar del mapa.
   */
  mapEmbedUrl: "",

  /**
   * Sistema de reservas real (Booksy, Treatwell, Calendly, etc.).
   * Si se deja vacío, "Reservar cita" abre WhatsApp con un mensaje inicial.
   */
  bookingUrl: "",

  /** Solo se muestran las redes con URL real. */
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },
} as const;

export const whatsappMessage =
  "Hola, me gustaría consultar la disponibilidad para pedir cita en The Barber's.";

export const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "nosotros", label: "Nosotros" },
  { id: "opiniones", label: "Opiniones" },
  { id: "contacto", label: "Contacto" },
] as const;

/**
 * FOTOGRAFÍAS
 * Copia tus fotos en /public/images con estos nombres (o cambia las rutas).
 * Mientras no existan, la web muestra un panel oscuro con textura en su lugar.
 * Recomendado: JPG/WebP, hero ≥ 1920 px de ancho, resto ≥ 1200 px, < 300 KB cada una.
 */
export const images: Record<"hero" | "about", ImageSlot> = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Barbero realizando un degradado a un cliente en The Barber's, Motril",
  },
  about: {
    src: "/images/nosotros.jpg",
    alt: "Interior de la barbería The Barber's en Motril",
  },
};

/**
 * SERVICIOS (propuesta editable, NO confirmada).
 * Sustituye, añade o elimina elementos antes de publicar.
 * No se muestran precios hasta que el propietario los facilite.
 */
export const services: Service[] = [
  {
    id: "cortes",
    name: "Cortes de pelo",
    description:
      "Un corte pensado para tu cabello y tu forma de vestir, siempre a partir de lo que tú pides.",
    priceLabel: "Consultar precio",
    image: {
      src: "/images/servicio-cortes.jpg",
      alt: "Barbero cortando el pelo a un cliente con tijera y peine",
    },
  },
  {
    id: "degradados",
    name: "Degradados",
    description:
      "Transiciones limpias y bien definidas, trabajadas con máquina y a mano.",
    priceLabel: "Consultar precio",
    image: {
      src: "/images/servicio-degradados.jpg",
      alt: "Detalle de un degradado lateral recién terminado",
    },
  },
  {
    id: "barba",
    name: "Arreglo de barba",
    description:
      "Perfilado y cuidado de la barba para que encaje con tu rostro y se mantenga ordenada.",
    priceLabel: "Consultar precio",
    image: {
      src: "/images/servicio-barba.jpg",
      alt: "Barbero perfilando la barba de un cliente",
    },
  },
  {
    id: "corte-barba",
    name: "Corte y barba",
    description: "El conjunto completo en una sola visita, con un acabado coherente.",
    priceLabel: "Consultar precio",
    image: {
      src: "/images/servicio-corte-barba.jpg",
      alt: "Cliente con corte de pelo y barba arreglados",
    },
  },
];

/**
 * HORARIOS
 * Mientras esta lista esté vacía, la web muestra
 * "Consulta nuestro horario por teléfono".
 * Ejemplo de uso cuando el propietario lo confirme:
 *   { day: "Lunes a viernes", hours: "9:30 – 14:00 y 17:00 – 20:30" }
 */
export const schedule: ScheduleRow[] = [];

/** Extractos de opiniones facilitados. Sin nombres ni fechas. */
export const reviews: Review[] = [
  { quote: "Mi peluquería de confianza. Puntuales, rápidos, eficaces y limpios." },
  { quote: "Llevo tiempo viniendo a esta barbería y siempre salgo muy contento." },
  { quote: "Unos artistas, buena gente y calidad suprema. Recomendables 100x100." },
];

/**
 * TEXTOS LEGALES
 * Completa estos datos con la información real del titular ANTES de publicar.
 * No inventes razón social, NIF ni dirección fiscal.
 */
export const legal = {
  owner: {
    legalName: "",
    taxId: "",
    registeredAddress: "",
    email: "",
  },
  /** Párrafos de cada documento. Si están vacíos se muestra un aviso de texto pendiente. */
  documents: {
    privacy: { title: "Aviso de privacidad", paragraphs: [] as string[] },
    legalNotice: { title: "Aviso legal", paragraphs: [] as string[] },
    cookies: { title: "Información sobre cookies", paragraphs: [] as string[] },
  } satisfies Record<LegalKey, { title: string; paragraphs: string[] }>,
};

/** Dominio final (variable de entorno VITE_SITE_URL). */
export const siteUrl: string = (import.meta.env.VITE_SITE_URL ?? "")
  .toString()
  .trim()
  .replace(/\/+$/, "");
