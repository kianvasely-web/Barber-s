type Props = { className?: string };

/** Pequeño detalle gráfico inspirado en la hoja de una navaja. */
export default function RazorMark({ className = "h-6 w-6" }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 21.5 21 4.5l6.5 6.5L10.5 28H4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M10 22 21.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8.2" cy="23.8" r="1.1" fill="currentColor" />
    </svg>
  );
}
