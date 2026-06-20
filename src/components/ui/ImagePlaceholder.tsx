interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
  hint?: string;
}

export default function ImagePlaceholder({
  label = "Foto del producto",
  aspectRatio = "3/4",
  className = "",
  hint,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`placeholder-img ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={`Imagen pendiente: ${label}`}
    >
      {/* Camera icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ opacity: 0.5 }}
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <span style={{ fontSize: "0.75rem", opacity: 0.6, textAlign: "center", padding: "0 1rem" }}>
        {label}
      </span>
      {hint && (
        <span
          style={{
            fontSize: "0.6875rem",
            opacity: 0.4,
            textAlign: "center",
            padding: "0 1.25rem",
            lineHeight: 1.4,
            fontStyle: "italic",
          }}
        >
          {hint}
        </span>
      )}
      <span
        style={{
          fontSize: "0.625rem",
          opacity: 0.3,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginTop: "0.25rem",
        }}
      >
        Reemplazar imagen aquí
      </span>
    </div>
  );
}
