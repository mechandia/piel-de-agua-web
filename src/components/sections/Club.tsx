import { club } from "@/lib/brand-data";
import ScrollReveal from "@/components/ui/ScrollReveal";

function ClubIcon({ iconKey }: { iconKey: string }) {
  const base = {
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
    case "calendar":
      return (
        <svg {...base}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "book-open":
      return (
        <svg {...base}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...base}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Club() {
  return (
    <section
      id="club"
      style={{
        background: "#041527",
        padding: "var(--section-py) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle wave top */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", top: -2, left: 0, right: 0, lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "60px" }}
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill="#020b18"
          />
        </svg>
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Comunidad
            </p>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#ffffff" }}
            >
              El Club
            </h2>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontStyle: "italic",
                color: "#00c8e8",
                fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                marginTop: "0.75rem",
                fontWeight: 500,
              }}
            >
              "Más que una prenda, una marea"
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.5rem",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {club.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.12}>
              <div
                className="card-base"
                style={{
                  padding: "2rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(0,200,232,0.08)",
                    border: "1px solid rgba(0,200,232,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ClubIcon iconKey={item.iconKey} />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#ffffff",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.60)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div style={{ textAlign: "center" }}>
            <a
              href="#contacto"
              className="btn-primary"
              style={{ fontSize: "1.0625rem", padding: "1rem 2.5rem" }}
            >
              Unirse al Club
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
