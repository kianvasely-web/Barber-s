import { Quote, Star } from "lucide-react";
import { business, reviews } from "../config/site";
import Button from "./Button";
import Reveal from "./Reveal";

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </span>
  );
}

export default function Reviews() {
  const [featured, ...rest] = reviews;

  return (
    <section id="opiniones" className="bg-coal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-[clamp(2.75rem,6.5vw,5.25rem)] font-black uppercase leading-[0.9] text-bone">
              La confianza se gana <span className="text-gold">corte a corte</span>
            </h2>
            <p className="mt-6 text-lg text-ash">Lo que destacan quienes ya nos conocen.</p>

            <div className="mt-10 flex items-end gap-5 border-t border-gold/30 pt-8">
              <p
                className="font-display text-8xl font-black leading-none text-gold sm:text-9xl"
                aria-label={`Valoración ${business.rating.value} sobre ${business.rating.outOf}`}
              >
                {business.rating.value}
                <span className="text-4xl text-bone/60 sm:text-5xl">/{business.rating.outOf}</span>
              </p>
              <div className="pb-2">
                <Stars className="h-5 w-5" />
                <p className="mt-2 text-sm text-ash">
                  {business.rating.count} reseñas
                  <br />
                  según la ficha de Google Maps
                </p>
              </div>
            </div>

            {business.googleBusinessUrl && (
              <div className="mt-8">
                <Button href={business.googleBusinessUrl} variant="outline">
                  Ver opiniones en Google
                </Button>
              </div>
            )}
          </Reveal>

          <div className="lg:col-span-7">
            {featured && (
              <Reveal delay={100}>
                <figure className="border border-gold/40 bg-ink p-8 sm:p-12">
                  <Quote className="h-9 w-9 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <blockquote className="mt-5 font-display text-3xl font-bold uppercase leading-[1.08] text-bone sm:text-5xl">
                    {featured.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 text-sm text-ash">
                    <Stars />
                    <span>Extracto de una opinión de cliente en Google</span>
                  </figcaption>
                </figure>
              </Reveal>
            )}

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {rest.map((review, i) => (
                <Reveal key={review.quote} delay={200 + i * 90}>
                  <figure className="h-full border border-white/10 bg-graphite/60 p-7">
                    <Quote className="h-6 w-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
                    <blockquote className="mt-4 text-lg leading-relaxed text-bone/90">
                      {review.quote}
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 text-xs text-ash">
                      <Stars className="h-3.5 w-3.5" />
                      <span>Extracto de opinión</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
