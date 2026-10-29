import { Clock } from "lucide-react";
import { business, schedule } from "../config/site";
import { telHref } from "../lib/links";

/**
 * Muestra el horario solo si está configurado en src/config/site.ts.
 * No calcula "abierto ahora": no hay datos suficientes para hacerlo con fiabilidad.
 */
export default function Hours() {
  return (
    <div>
      <h3 className="flex items-center gap-2 font-display text-2xl font-bold uppercase tracking-wide text-bone">
        <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
        Horario
      </h3>

      {schedule.length > 0 ? (
        <dl className="mt-4 divide-y divide-white/10 border-y border-white/10">
          {schedule.map((row) => (
            <div key={row.day} className="flex justify-between gap-6 py-3 text-sm">
              <dt className="text-ash">{row.day}</dt>
              <dd className="text-right font-medium text-bone">{row.hours}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="mt-4 text-ash">
          Consulta nuestro horario por teléfono:{" "}
          <a
            href={telHref}
            className="font-semibold text-gold underline-offset-4 hover:underline"
          >
            {business.phone.display}
          </a>
        </p>
      )}
    </div>
  );
}
