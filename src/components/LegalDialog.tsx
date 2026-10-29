import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { legal, type LegalKey } from "../config/site";

type Props = {
  docKey: LegalKey | null;
  onClose: () => void;
};

/** Ventana modal accesible (elemento <dialog> nativo) para los textos legales. */
export default function LegalDialog({ docKey, onClose }: Props) {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (docKey && !dialog.open) dialog.showModal();
    if (!docKey && dialog.open) dialog.close();
  }, [docKey]);

  const doc = docKey ? legal.documents[docKey] : null;
  const owner = legal.owner;
  const ownerRows = [
    ["Titular", owner.legalName],
    ["NIF/CIF", owner.taxId],
    ["Domicilio", owner.registeredAddress],
    ["Correo electrónico", owner.email],
  ].filter(([, value]) => value);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="legal-title"
      className="m-auto w-[min(92vw,40rem)] max-h-[85vh] border border-gold/40 bg-coal p-0 text-bone backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
    >
      {doc && (
        <div className="flex max-h-[85vh] flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6">
            <h2 id="legal-title" className="font-display text-3xl font-extrabold uppercase">
              {doc.title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-ash hover:text-gold"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4 overflow-y-auto p-6 text-[0.95rem] leading-relaxed text-bone/85">
            {ownerRows.length > 0 && (
              <dl className="space-y-1 border-b border-white/10 pb-4">
                {ownerRows.map(([label, value]) => (
                  <div key={label} className="flex flex-wrap gap-x-2">
                    <dt className="text-ash">{label}:</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {doc.paragraphs.length > 0 ? (
              doc.paragraphs.map((p) => <p key={p}>{p}</p>)
            ) : (
              <p>
                Este texto está pendiente de completar con la información legal del titular de la
                web.
              </p>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
