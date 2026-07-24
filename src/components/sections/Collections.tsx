import Image from "next/image";
import { collections } from "@/lib/brand-data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Collections() {
  return (
    <section
      id="colecciones"
      style={{
        background: "#041527",
        padding: "var(--section-py) 0",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Nuestras colecciones
            </p>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                color: "#ffffff",
                marginBottom: "1.25rem",
              }}
            >
              La piel de la fauna marina,<br />
              <span style={{ color: "#00c8e8" }}>tu segunda piel</span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.60)",
                fontSize: "1.0625rem",
                maxWidth: "52ch",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Cada estampado es fotorrealista e inspirado en la piel de una especie
              marina amenazada. Llevar uno es una declaración de tu conexión con el océano.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "1.75rem",
          }}
        >
          {collections.map((col, i) => (
            <ScrollReveal key={col.id} delay={i * 0.08}>
              <article
                className="card-base"
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Product image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4/5",
                    overflow: "hidden",
                    borderRadius: "0.75rem 0.75rem 0 0",
                  }}
                >
                  <Image
                    src={col.image}
                    alt={`Traje Piel de Agua — colección ${col.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority={i < 2}
                  />
                  {/* Subtle gradient overlay at bottom for text legibility */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "40%",
                      background:
                        "linear-gradient(to top, rgba(4,21,39,0.7), transparent)",
                    }}
                  />
                </div>

                {/* Accent line */}
                <div
                  style={{
                    height: "2px",
                    background: `linear-gradient(90deg, ${col.accentColor}, transparent)`,
                    opacity: 0.75,
                  }}
                  aria-hidden="true"
                />

                {/* Content */}
                <div
                  style={{
                    padding: "1.25rem 1.5rem 1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      fontSize: "1.375rem",
                      color: "#ffffff",
                      lineHeight: 1.15,
                    }}
                  >
                    {col.name}
                  </h3>

                  <p
                    style={{
                      color: col.accentColor,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {col.headline}
                  </p>

                  <p
                    style={{
                      color: "rgba(255,255,255,0.60)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {col.description}
                  </p>

                  {/* Conservation note */}
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "0.875rem",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={col.accentColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "0.8125rem",
                        lineHeight: 1.55,
                      }}
                    >
                      {col.conservation}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
