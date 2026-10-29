import { Handshake, Scissors, ShieldCheck } from "lucide-react";

const items = [
  { icon: Scissors, label: "Precisión en cada detalle" },
  { icon: Handshake, label: "Trato cercano" },
  { icon: ShieldCheck, label: "Profesionalidad y limpieza" },
] as const;

export default function TrustBar() {
  return (
    <section aria-label="Atributos de la barbería" className="border-y border-gold/25 bg-coal">
      <ul className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gold/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center justify-center gap-4 px-6 py-6 sm:py-8"
          >
            <Icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
            <span className="font-display text-xl font-bold uppercase tracking-[0.08em] text-bone sm:text-2xl">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
