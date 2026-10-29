import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "../lib/links";

/** Botón flotante de WhatsApp: aparece al salir del hero para no tapar el titular. */
export default function FloatingWhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp para consultar disponibilidad (se abre en una pestaña nueva)"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-ink text-gold shadow-lg shadow-black/50 transition-all duration-300 hover:bg-gold hover:text-ink sm:bottom-6 sm:right-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
