import { ArrowUpRight } from "lucide-react";
import { services } from "../config/site";
import { whatsappHref } from "../lib/links";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

// Composición asimétrica: las filas alternan una tarjeta ancha y una estrecha.
const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
] as const;

export default function Services() {
  return (
    <section id="servicios" className="bg-coal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-black uppercase leading-[0.9] text-bone">
            El corte que <span className="text-gold">va contigo</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ash">
            Cada detalle importa. Encuentra tu estilo y deja que el resultado hable por sí solo.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service, i) => (
            <li key={service.id} className={`${spans[i % spans.length]} md:col-span-1`}>
              <Reveal delay={(i % 2) * 90} className="h-full">
                <article className="group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden border border-white/10 bg-graphite transition-colors duration-500 hover:border-gold/60">
                  <SmartImage
                    image={service.image}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="absolute inset-0"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />

                  <div className="relative p-6 sm:p-8">
                    <h3 className="font-display text-4xl font-extrabold uppercase leading-none text-bone sm:text-5xl">
                      {service.name}
                    </h3>
                    <span className="mt-4 block h-px w-12 bg-gold transition-all duration-500 group-hover:w-24" />
                    <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-bone/80">
                      {service.description}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
                      <span className="text-sm font-semibold text-gold">{service.priceLabel}</span>
                      <a
                        href={whatsappHref(
                          `Hola, me gustaría consultar disponibilidad y precio de: ${service.name}, en The Barber's.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 border-b border-gold/60 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:border-gold hover:text-gold"
                      >
                        Consultar disponibilidad
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">
                          de {service.name} por WhatsApp (se abre en una pestaña nueva)
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-xl text-sm leading-relaxed text-ash">
          Consulta disponibilidad y precios directamente con nosotros por teléfono o WhatsApp.
        </p>
      </div>
    </section>
  );
}
