import { useState } from "react";
import type { ImageSlot } from "../config/site";
import RazorMark from "./RazorMark";

type Props = {
  image: ImageSlot;
  className?: string;
  imgClassName?: string;
  /** true solo para la imagen principal visible al cargar. */
  priority?: boolean;
  sizes?: string;
};

/**
 * Muestra la fotografía configurada. Si el archivo todavía no existe en
 * /public/images, enseña un panel oscuro con textura (sin imágenes de stock
 * que puedan confundirse con fotos reales del local).
 */
export default function SmartImage({
  image,
  className = "",
  imgClassName = "",
  priority = false,
  sizes,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`photo-placeholder flex items-center justify-center text-gold/40 ${className}`}
        role="img"
        aria-label={image.alt}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <RazorMark className="h-10 w-10" />
          {import.meta.env.DEV && (
            <p className="px-4 text-xs text-ash/70">
              Foto pendiente: <code>{image.src}</code>
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
