import { testimonials, socialProof } from "@/lib/brand-data";
import ScrollReveal from "@/components/ui/ScrollReveal";

function Stars({ count }: { count: number }) {
  return (
    <div
      style={{ display: "flex", gap: "2px" }}
      aria-label={`${count} de 5 estrellas`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#00c8e8"
          stroke="#00c8e8"
          strokeWidth="1"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
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
              Testimonios
            </p>

            {/* Big rating */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(4rem, 10vw, 7rem)",
                  lineHeight: 1,
                  color: "#00c8e8",
                  letterSpacing: "-0.03em",
                }}
                aria-hidden="true"
              >
                {socialProof.rating}
              </div>
              <Stars count={5} />
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.9375rem",
                fontWeight: 500,
              }}
            >
              {socialProof.reviews} reseñas verificadas
            </p>

            <h2
              className="section-title"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: "#ffffff",
                marginTop: "1.5rem",
              }}
            >
              Lo que dicen quienes<br />
              <span style={{ color: "#00c8e8" }}>viven el agua</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <figure
                className="card-base"
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  margin: 0,
                }}
              >
                <Stars count={t.rating} />

                <blockquote
                  style={{
                    margin: 0,
                    color: "#ffffff",
                    fontSize: "1.0625rem",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    borderLeft: "2px solid rgba(0,200,232,0.35)",
                    paddingLeft: "1rem",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    paddingTop: "0.5rem",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Avatar circle */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(0,200,232,0.12)",
                      border: "1px solid rgba(0,200,232,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#00c8e8",
                      fontFamily: "var(--font-syne)",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: "0.9375rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {t.author}
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "0.8125rem",
                        marginTop: "0.125rem",
                      }}
                    >
                      {t.location}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
