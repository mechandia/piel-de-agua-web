import { stats } from "@/lib/brand-data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Opportunity() {
  return (
    <section
      id="oportunidad"
      style={{
        background: "#020b18",
        padding: "var(--section-py) 0",
      }}
    >
      <div className="section-container">
        {/* Two-column: problem / solution */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(3rem, 6vw, 5rem)",
            marginBottom: "clamp(4rem, 8vw, 7rem)",
            alignItems: "center",
          }}
        >
          {/* Context */}
          <ScrollReveal direction="left">
            <div>
              <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
                Hecho para el Caribe
              </p>
              <h2
                className="section-title"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#ffffff",
                  marginBottom: "1.5rem",
                }}
              >
                El neopreno es ideal para aguas frías. El Caribe no lo es.
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.75,
                  fontSize: "1.0625rem",
                  maxWidth: "42ch",
                }}
              >
                El neopreno funciona perfectamente en aguas de baja temperatura —
                para eso fue diseñado. Pero en el Caribe y aguas cálidas, resulta
                pesado, caluroso y menos cómodo de lo que mereces. Aquí es donde
                entra Piel de Agua.
              </p>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal direction="right" delay={0.15}>
            <div
              style={{
                background: "#041527",
                border: "1px solid rgba(0,200,232,0.15)",
                borderRadius: "1.25rem",
                padding: "clamp(1.75rem, 4vw, 2.5rem)",
              }}
            >
              <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
                La solución
              </p>
              <h3
                className="section-title"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                }}
              >
                Una segunda piel
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.75,
                  fontSize: "1.0625rem",
                  marginBottom: "1.5rem",
                }}
              >
                Ligera, con protección real y estilo. Funciona además como capa
                higiénica extra bajo el neopreno y facilita ponérselo y quitárselo.
              </p>

              {/* Feature pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                {["Ligera", "UPF 50+", "Anti-sal", "Anti-cloro", "Hecha en Colombia"].map(
                  (f) => (
                    <span
                      key={f}
                      style={{
                        background: "rgba(0,200,232,0.1)",
                        border: "1px solid rgba(0,200,232,0.25)",
                        borderRadius: "9999px",
                        padding: "0.25rem 0.875rem",
                        fontSize: "0.8125rem",
                        color: "#00c8e8",
                        fontWeight: 500,
                      }}
                    >
                      {f}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div
                className="card-base"
                style={{
                  padding: "clamp(2rem, 4vw, 2.75rem)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                    lineHeight: 1,
                    color: "#00c8e8",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "center",
                    gap: "0.125em",
                  }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2200}
                  />
                </div>
                <p
                  style={{
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "1.0625rem",
                    marginBottom: "0.375rem",
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.875rem",
                    fontWeight: 400,
                  }}
                >
                  {stat.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
