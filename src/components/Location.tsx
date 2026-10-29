import { MapPin, Navigation, Phone } from "lucide-react";
import { business } from "../config/site";
import { fullAddress, mapsSearchHref, telHref } from "../lib/links";
import Button from "./Button";
import Hours from "./Hours";
import Reveal from "./Reveal";

export default function Location() {
  const { address } = business;

  return (
    <section id="contacto" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-black uppercase leading-[0.9] text-bone">
            Nos vemos en <span className="text-gold">Motril</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="h-full border border-gold/40 bg-coal p-7 sm:p-10">
              <p className="font-display text-4xl font-black uppercase leading-none text-bone">
                {business.displayName}
              </p>
              <p className="mt-1 text-sm text-ash">{business.category}</p>

              <address className="mt-8 space-y-5 not-italic">
                <p className="flex gap-3 text-bone/90">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    {address.street}
                    <br />
                    {address.postalCode} {address.city}, {address.province}
                  </span>
                </p>
                <p className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <a
                    href={telHref}
                    className="text-lg font-semibold text-bone underline-offset-4 hover:text-gold hover:underline"
                  >
                    {business.phone.display}
                  </a>
                </p>
              </address>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button
                  href={telHref}
                  icon={<Phone className="h-4 w-4" aria-hidden="true" />}
                >
                  Llamar
                </Button>
                <Button
                  href={mapsSearchHref}
                  variant="outline"
                  icon={<Navigation className="h-4 w-4" aria-hidden="true" />}
                >
                  Abrir en Google Maps
                </Button>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <Hours />
              </div>

              <p className="mt-8 text-xs text-ash/80">Plus Code: {business.plusCode}</p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            {business.mapEmbedUrl ? (
              <iframe
                title={`Mapa de ${business.name} en ${address.city}`}
                src={business.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[26rem] w-full border border-white/10 lg:h-full lg:min-h-[32rem]"
              />
            ) : (
              <div className="photo-placeholder flex h-[22rem] flex-col items-start justify-end border border-white/10 p-7 sm:p-10 lg:h-full lg:min-h-[32rem]">
                <MapPin className="h-9 w-9 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <p className="mt-4 font-display text-4xl font-extrabold uppercase leading-none text-bone">
                  {address.street}
                </p>
                <p className="mt-2 text-ash">{fullAddress}</p>
                <div className="mt-6">
                  <Button href={mapsSearchHref} variant="ghost">
                    Ver cómo llegar
                  </Button>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
