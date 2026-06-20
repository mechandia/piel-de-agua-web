import { technology } from "@/lib/brand-data";
import ScrollReveal from "@/components/ui/ScrollReveal";

// SVG icons keyed by iconKey
function TechIcon({ iconKey }: { iconKey: string }) {
  const props = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#00c8e8",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (iconKey) {
    case "sun":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      );
    case "droplets":
      return (
        <svg {...props}>
          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.09 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
          <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
        </svg>
      );
    case "wind":
      return (
        <svg {...props}>
          <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
          <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
          <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
        </svg>
      );
    case "move":
      return (
        <svg {...props}>
          <polyline points="5 9 2 12 5 15" />
          <polyline points="9 5 12 2 15 5" />
          <polyline points="15 19 12 22 9 19" />
          <polyline points="19 9 22 12 19 15" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="12" y1="2" x2="12" y2="22" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Technology() {
  return (
    <section
      id="tecnologia"
      style={{
        background: "#020b18",
        padding: "var(--section-py) 0",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Tecnología de la tela
            </p>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#ffffff" }}
            >
              Ingeniería al servicio<br />
              <span style={{ color: "#00c8e8" }}>del océano</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Composition badge */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              background: "rgba(0,200,232,0.07)",
              border: "1px solid rgba(0,200,232,0.2)",
              borderRadius: "1rem",
              padding: "1.25rem 2rem",
              textAlign: "center",
              marginBottom: "3.5rem",
              display: "inline-block",
              width: "100%",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.375rem",
              }}
            >
              Composición
            </p>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                color: "#ffffff",
              }}
            >
              85% Poliéster{" "}
              <span style={{ color: "rgba(255,255,255,0.35)" }}>·</span>{" "}
              15% Elastano
              <span
                style={{
                  display: "inline-block",
                  marginLeft: "1rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#00c8e8",
                }}
              >
                Fabricado en Brasil · Confeccionado en Colombia
              </span>
            </p>
          </div>
        </ScrollReveal>

        {/* Feature grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {technology.map((feature, i) => (
            <ScrollReveal key={feature.id} delay={i * 0.08}>
              <div
                className="card-base"
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    flexShrink: 0,
                    width: "52px",
                    height: "52px",
                    borderRadius: "0.75rem",
                    background: "rgba(0,200,232,0.08)",
                    border: "1px solid rgba(0,200,232,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TechIcon iconKey={feature.iconKey} />
                </div>

                {/* Text */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: "#ffffff",
                      marginBottom: "0.5rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Zipper detail */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              marginTop: "3rem",
              background: "#041527",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "1.25rem",
              padding: "clamp(1.75rem, 4vw, 2.5rem)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.875rem" }}>
                Cremallera de alta ingeniería
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                }}
              >
                Sintética en poliéster con dientes de monofilamento. Deslizador
                semiautomático en plástico y acero inoxidable. Topes en cobre-zinc-níquel:
                inoxidables, anticorrosión y resistentes al agua de mar.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                "Anti-corrosión",
                "Acero inoxidable",
                "Resistente al mar",
                "Semiautomática",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(0,200,232,0.08)",
                    border: "1px solid rgba(0,200,232,0.2)",
                    borderRadius: "9999px",
                    padding: "0.375rem 1rem",
                    fontSize: "0.8125rem",
                    color: "#00c8e8",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
