import { MessageCircle, Phone } from "lucide-react";
import { telHref, whatsappHref } from "../lib/links";
import Button from "./Button";
import Reveal from "./Reveal";

export default function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden bg-gold py-24 text-ink sm:py-32">
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="78"
          y1="0"
          x2="62"
          y2="100"
          stroke="#080808"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-4xl font-display text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-[0.88]">
          Tu próximo corte empieza aquí.
        </h2>
        <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink/80">
          ¿Tienes claro el estilo que buscas? Ponte en contacto con nosotros y consulta la
          disponibilidad.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={telHref}
            className="inline-flex min-h-12 items-center justify-center gap-2.5 bg-ink px-6 py-3 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:bg-graphite"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Llamar ahora
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-ink px-6 py-3 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Solicitar cita por WhatsApp
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
        <p className="mt-6 text-sm text-ink/70">
          El mensaje no reserva la cita de forma automática: la disponibilidad se confirma con la
          barbería.
        </p>
      </Reveal>
    </section>
  );
}
