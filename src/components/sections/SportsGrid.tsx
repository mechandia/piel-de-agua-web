import { sports } from "@/lib/brand-data";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Sport icons mapped by name
function SportIcon({ sport }: { sport: string }) {
  const base = {
    width: 32,
    height: 32,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#00c8e8",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  const icons: Record<string, React.ReactNode> = {
    Natación: (
      <svg {...base}>
        <path d="M2 12h20M2 6c1.5 0 3 1 4.5 1S9 6 10.5 6 13 7 14.5 7 17 6 18.5 6 21 7 22 7" />
        <path d="M2 18c1.5 0 3 1 4.5 1S9 18 10.5 18 13 19 14.5 19 17 18 18.5 18 21 19 22 19" />
      </svg>
    ),
    Buceo: (
      <svg {...base}>
        <circle cx="12" cy="8" r="4" />
        <path d="M12 12v4m-4 2h8" />
        <path d="M9 20s0 2 3 2 3-2 3-2" />
      </svg>
    ),
    Apnea: (
      <svg {...base}>
        <path d="M12 2v8m0 4v8" />
        <path d="M7 5c0 2.8 2.2 5 5 5s5-2.2 5-5" />
        <path d="M7 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      </svg>
    ),
    Surf: (
      <svg {...base}>
        <path d="M2 19s4-8 10-8 10 8 10 8" />
        <circle cx="12" cy="8" r="3" />
        <path d="M15 11l-3 8" />
      </svg>
    ),
    Snorkel: (
      <svg {...base}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
        <path d="M8 4.9C6 6 4.9 8 4.9 10" />
      </svg>
    ),
    "SUP / Paddleboard": (
      <svg {...base}>
        <rect x="3" y="14" width="18" height="4" rx="2" />
        <path d="M12 14V4l-4 4" />
        <path d="M12 4l4 4" />
      </svg>
    ),
    Kayak: (
      <svg {...base}>
        <ellipse cx="12" cy="16" rx="9" ry="3" />
        <path d="M3 16c0-3 9-12 9-12s9 9 9 12" />
        <path d="M7 10l10 0" />
      </svg>
    ),
    Remo: (
      <svg {...base}>
        <path d="M3 21l7-7" />
        <path d="M10 14l4-4" />
        <path d="M14 10l7-7" />
        <path d="M10 14l1.5 1.5" />
        <path d="M14 10l-1.5-1.5" />
      </svg>
    ),
    Vela: (
      <svg {...base}>
        <path d="M12 2L3 17h18L12 2z" />
        <path d="M3 17h18" />
        <path d="M12 17v5" />
      </svg>
    ),
    Kitesurf: (
      <svg {...base}>
        <path d="M6 20l12-16" />
        <circle cx="6" cy="6" r="3" />
        <path d="M18 4l-12 16" />
        <path d="M14 18l4 2-2-4" />
      </svg>
    ),
  };

  return (
    (icons[sport] as React.ReactElement) ?? (
      <svg {...base}>
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    )
  );
}

export default function SportsGrid() {
  return (
    <section
      id="deportes"
      style={{
        background: "#041527",
        padding: "var(--section-py) 0",
      }}
    >
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Para cada deporte
            </p>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#ffffff" }}
            >
              Un solo traje,{" "}
              <span style={{ color: "#00c8e8" }}>8+ disciplinas</span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "1.0625rem",
                maxWidth: "48ch",
                margin: "1.25rem auto 0",
                lineHeight: 1.7,
              }}
            >
              Nadar, surfear o bucear —Piel de Agua se adapta a ti sin
              importar cómo te muevas en el agua.
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 160px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {sports.map((sport, i) => (
            <ScrollReveal key={sport} delay={i * 0.06}>
              <div
                className="card-base"
                style={{
                  padding: "1.75rem 1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.875rem",
                  textAlign: "center",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(0,200,232,0.08)",
                    border: "1px solid rgba(0,200,232,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SportIcon sport={sport} />
                </div>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}
                >
                  {sport}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
