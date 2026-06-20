import { conservation } from "@/lib/brand-data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Conservation() {
  return (
    <section
      id="conservacion"
      style={{
        background: "#020b18",
        padding: "var(--section-py) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          maxWidth: "800px",
          maxHeight: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,176,122,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <p
              className="eyebrow"
              style={{ marginBottom: "1rem", color: "#00B07A" }}
            >
              Compromiso ambiental
            </p>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#ffffff" }}
            >
              {conservation.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* Main pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.5rem",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {/* Anti-sunscreen */}
          <ScrollReveal delay={0}>
            <div
              className="card-base"
              style={{ padding: "2rem", borderColor: "rgba(0,176,122,0.2)" }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "0.75rem",
                  background: "rgba(0,176,122,0.1)",
                  border: "1px solid rgba(0,176,122,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00B07A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22C6.5 11 2 8.2 2 5a10 10 0 0 1 20 0c0 3.2-4.5 6-10 17z" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "1.1875rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                }}
              >
                Sin oxibenzona
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.60)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                }}
              >
                {conservation.antiSunscreen}
              </p>
            </div>
          </ScrollReveal>

          {/* Donation */}
          <ScrollReveal delay={0.1}>
            <div
              className="card-base"
              style={{ padding: "2rem", borderColor: "rgba(0,176,122,0.2)" }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "0.75rem",
                  background: "rgba(0,176,122,0.1)",
                  border: "1px solid rgba(0,176,122,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00B07A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "1.1875rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                }}
              >
                Donamos parte de las ganancias
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.60)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {conservation.donation}
              </p>

              {/* Partner placeholder */}
              <div
                style={{
                  background: "rgba(0,176,122,0.06)",
                  border: "1.5px dashed rgba(0,176,122,0.3)",
                  borderRadius: "0.75rem",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6875rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#00B07A",
                    fontWeight: 600,
                  }}
                >
                  Organizaciones aliadas · Pendiente
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "0.875rem",
                    fontStyle: "italic",
                  }}
                >
                  Agregar aquí los nombres de las organizaciones de conservación marina
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* NEWS block */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              background: "#041527",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "1.25rem",
              padding: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            <p className="eyebrow" style={{ marginBottom: "1rem", color: "#00B07A" }}>
              NEWS · Cambio climático marino
            </p>
            <h3
              className="section-title"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#ffffff",
                marginBottom: "2rem",
              }}
            >
              {conservation.news.headline}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                gap: "1.25rem",
              }}
            >
              {conservation.news.facts.map((fact, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#00B07A",
                      marginTop: "0.5rem",
                    }}
                    aria-hidden="true"
                  />
                  <p
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {fact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
