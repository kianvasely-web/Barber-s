import { images } from "../config/site";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

export default function About() {
  return (
    <section id="nosotros" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              className="absolute -bottom-4 -right-4 hidden h-full w-full border border-gold/50 sm:block"
              aria-hidden="true"
            />
            <SmartImage
              image={images.about}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="relative aspect-[4/5] w-full bg-coal"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
          <h2 className="font-display text-[clamp(2.75rem,6.5vw,5.25rem)] font-black uppercase leading-[0.9] text-bone">
            Más que un corte. <span className="text-gold">Una experiencia.</span>
          </h2>

          <div className="mt-8 max-w-prose space-y-5 text-lg leading-[1.75] text-bone/80">
            <p>
              En The Barber's creemos que un buen resultado empieza por escuchar. Queremos que cada
              cliente se sienta cómodo, reciba una atención cercana y encuentre un estilo que encaje
              con lo que busca.
            </p>
            <p>
              La puntualidad, la profesionalidad y el cuidado de cada detalle son aspectos que
              destacan nuestros clientes en sus opiniones.
            </p>
          </div>

          <p className="mt-10 border-l-2 border-gold pl-5 font-display text-3xl font-bold uppercase leading-tight text-gold sm:text-4xl">
            Tu estilo importa. Y los detalles también.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
