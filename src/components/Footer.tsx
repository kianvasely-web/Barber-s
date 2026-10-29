import { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { business, navLinks, legal, type LegalKey } from "../config/site";
import { fullAddress, mapsSearchHref, telHref } from "../lib/links";
import LegalDialog from "./LegalDialog";
import RazorMark from "./RazorMark";

const socials = [
  { label: "Instagram", href: business.social.instagram },
  { label: "Facebook", href: business.social.facebook },
  { label: "TikTok", href: business.social.tiktok },
].filter((s) => s.href);

const legalKeys = Object.keys(legal.documents) as LegalKey[];

export default function Footer() {
  const [openDoc, setOpenDoc] = useState<LegalKey | null>(null);

  return (
    <footer className="border-t border-gold/25 bg-ink pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#inicio" className="inline-flex items-center gap-3 text-gold" aria-label="Ir al inicio">
              <RazorMark className="h-8 w-8" />
              <span className="font-display text-3xl font-extrabold tracking-[0.06em] text-bone">
                THE BARBER'S
              </span>
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-ash">
              Precisión en cada corte y trato cercano en Motril. Tu estilo importa, y los detalles
              también.
            </p>

            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-bone hover:text-gold"
                    >
                      {s.label}
                      <span className="sr-only"> (se abre en una pestaña nueva)</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Enlaces del pie de página" className="md:col-span-3">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-gold">
              Navegación
            </h2>
            <ul className="mt-4 space-y-1">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="inline-flex min-h-9 items-center text-ash hover:text-bone"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-gold">
              Contacto
            </h2>
            <address className="mt-4 space-y-3 not-italic text-ash">
              <p className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{fullAddress}</span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={telHref} className="hover:text-bone">
                  {business.phone.display}
                </a>
              </p>
              <p>
                <a
                  href={mapsSearchHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-bone underline-offset-4 hover:text-gold hover:underline"
                >
                  Abrir en Google Maps
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-ash sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. Motril, Granada.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {legalKeys.map((key) => (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => setOpenDoc(key)}
                  className="inline-flex min-h-9 items-center hover:text-bone"
                >
                  {legal.documents[key].title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <LegalDialog docKey={openDoc} onClose={() => setOpenDoc(null)} />
    </footer>
  );
}
