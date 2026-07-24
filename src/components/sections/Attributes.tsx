import ScrollReveal from "@/components/ui/ScrollReveal";

const attributes = [
  {
    id: "estampado",
    iconKey: "palette",
    title: "Diseño y estampado",
    description:
      "Técnica de sublimación que garantiza alta durabilidad del estampado, inspirado en la ilustración digital fotorrealista de la fauna marina. El diseño se integra al tejido, no se desprende ni pierde color con el uso.",
    tags: ["Sublimación", "Alta durabilidad", "Fotorrealista"],
    accentColor: "#00c8e8",
  },
  {
    id: "confeccion",
    iconKey: "scissors",
    title: "Confección",
    description:
      "Desarrollada por manos expertas colombianas, con estándares de alta calidad y acabados estéticos precisos que garantizan la flexibilidad de la prenda con total comodidad en cada movimiento.",
    tags: ["Hecha en Colombia", "Alta calidad", "Acabados precisos"],
    accentColor: "#00B07A",
  },
  {
    id: "cremallera",
    iconKey: "zap",
    title: "Cremallera de alta ingeniería",
    description:
      "Sintética en poliéster con dientes de monofilamento. Deslizador semiautomático en plástico y acero inoxidable. Topes en cobre-zinc-níquel: inoxidables, anticorrosivos y resistentes al agua de mar.",
    tags: ["Anticorrosiva", "Acero inoxidable", "Resistente al mar", "Semiautomática"],
    accentColor: "#A78BFA",
  },
];

function AttrIcon({ iconKey, color }: { iconKey: string; color: string }) {
  const base = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (iconKey) {
    case "palette":
      return (
        <svg {...base}>
          <circle cx="13.5" cy="6.5" r=".5" fill={color} />
          <circle cx="17.5" cy="10.5" r=".5" fill={color} />
          <circle cx="8.5" cy="7.5" r=".5" fill={color} />
          <circle cx="6.5" cy="12.5" r=".5" fill={color} />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      );
    case "scissors":
      return (
        <svg {...base}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "zap":
      return (
        <svg {...base}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Attributes() {
  return (
    <section
      id="atributos"
      style={{
        background: "#020b18",
        padding: "var(--section-py) 0",
      }}
    >
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Otros atributos
            </p>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#ffffff" }}
            >
              Cada detalle,{" "}
              <span style={{ color: "#00c8e8" }}>pensado para el agua</span>
            </h2>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.75rem",
          }}
        >
          {attributes.map((attr, i) => (
            <ScrollReveal key={attr.id} delay={i * 0.12}>
              <div
                className="card-base"
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  height: "100%",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "0.875rem",
                    background: `${attr.accentColor}14`,
                    border: `1px solid ${attr.accentColor}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <AttrIcon iconKey={attr.iconKey} color={attr.accentColor} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "1.1875rem",
                    color: "#ffffff",
                    lineHeight: 1.2,
                  }}
                >
                  {attr.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "rgba(255,255,255,0.60)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    flex: 1,
                  }}
                >
                  {attr.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
                  {attr.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: `${attr.accentColor}12`,
                        border: `1px solid ${attr.accentColor}30`,
                        borderRadius: "9999px",
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.75rem",
                        color: attr.accentColor,
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
