import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, business } from "../config/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { bookingHref, isExternal } from "../lib/links";
import RazorMark from "./RazorMark";

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const bookingExternal = isExternal(bookingHref);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-gold/20 bg-ink/80 backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          className="flex items-center gap-2.5 text-gold"
          aria-label={`${business.name}, ir al inicio`}
        >
          <RazorMark className="h-7 w-7" />
          <span className="font-display text-2xl font-extrabold leading-none tracking-[0.06em] text-bone">
            THE BARBER'S
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isActive ? "text-gold" : "text-ash hover:text-bone"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-px bg-gold transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={bookingHref}
            {...(bookingExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex min-h-11 items-center bg-gold px-4 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-bone sm:px-5"
          >
            Reservar cita
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-bone lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-gold/15 bg-ink/95 backdrop-blur-md lg:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.id} className="border-b border-white/5 last:border-0">
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? "true" : undefined}
                className={`flex min-h-12 items-center font-display text-3xl font-bold uppercase tracking-wide ${
                  active === link.id ? "text-gold" : "text-bone"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
