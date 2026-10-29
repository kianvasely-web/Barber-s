import type { CSSProperties } from "react";
import { Star } from "lucide-react";
import { business, images } from "../config/site";
import { bookingHref } from "../lib/links";
import Button from "./Button";
import SmartImage from "./SmartImage";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-14 pt-28 sm:pb-20 lg:items-center lg:pb-16"
    >
      {/* Fotografía: a pantalla completa en móvil, cortada en diagonal en escritorio */}
      <div className="absolute inset-0 -z-10 lg:left-[34%]">
        <div
          className="absolute inset-0 lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]"
        >
          <SmartImage
            image={images.hero}
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="h-full w-full"
            imgClassName="object-[60%_center]"
          />
          <div className="absolute inset-0 bg-ink/65 lg:bg-gradient-to-r lg:from-ink/60 lg:via-ink/25 lg:to-ink/10" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent lg:hidden" />
        </div>

        {/* Línea dorada: el "corte" de la navaja */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="16"
            y1="0"
            x2="0"
            y2="100"
            pathLength={1}
            stroke="#C6A15B"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            className="hero-blade"
          />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p
            className="hero-rise text-[0.75rem] font-semibold uppercase tracking-[0.28em] text-gold"
            style={delay(100)}
          >
            Barbería en Motril · Granada
          </p>

          <h1 className="mt-5 font-display text-[clamp(3.6rem,13vw,9rem)] font-black uppercase leading-[0.86] tracking-[0.005em] text-bone">
            <span className="hero-rise block" style={delay(250)}>
              Tu <span className="text-gold">estilo.</span>
            </span>
            <span className="hero-rise block" style={delay(420)}>
              Nuestra <span className="text-gold">firma.</span>
            </span>
          </h1>

          <p
            className="hero-rise mt-7 max-w-xl text-base leading-relaxed text-bone/85 sm:text-lg"
            style={delay(600)}
          >
            Precisión en cada corte, atención en cada detalle y un trato cercano para que salgas
            exactamente como quieres.
          </p>

          <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row" style={delay(760)}>
            <Button href={bookingHref}>Reservar cita</Button>
            <Button href="#servicios" variant="outline">
              Descubrir servicios
            </Button>
          </div>

          <p
            className="hero-rise mt-9 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ash"
            style={delay(920)}
          >
            <span className="flex gap-0.5 text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span>
              {business.rating.value}/{business.rating.outOf} en Google · {business.rating.count}{" "}
              reseñas
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
