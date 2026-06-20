import { brand, returnPolicy } from "@/lib/brand-data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  return (
    <>
      {/* Contact + Policy */}
      <section
        id="contacto"
        style={{
          background: "#020b18",
          padding: "var(--section-py) 0",
        }}
      >
        <div className="section-container">
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>
                Contacto
              </p>
              <h2
                className="section-title"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#ffffff" }}
              >
                Hablemos del{" "}
                <span style={{ color: "#00c8e8" }}>océano</span>
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            {/* Contact info */}
            <ScrollReveal direction="left">
              <div
                className="card-base"
                style={{ padding: "2.5rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                    color: "#ffffff",
                    marginBottom: "2rem",
                  }}
                >
                  Información de contacto
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Phone */}
                  <a
                    href={`tel:+57${brand.phone.replace(/\s/g, "")}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      textDecoration: "none",
                      color: "#ffffff",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "0.625rem",
                        background: "rgba(0,200,232,0.08)",
                        border: "1px solid rgba(0,200,232,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00c8e8"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16v.92z" />
                      </svg>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.45)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontWeight: 500,
                          marginBottom: "2px",
                        }}
                      >
                        Teléfono / WhatsApp
                      </p>
                      <p style={{ fontSize: "1.0625rem", fontWeight: 600 }}>
                        {brand.phone}
                      </p>
                    </div>
                  </a>

                  {/* Email — placeholder */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "0.625rem",
                        background: "rgba(0,200,232,0.08)",
                        border: "1.5px dashed rgba(0,200,232,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(0,200,232,0.5)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.45)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontWeight: 500,
                          marginBottom: "2px",
                        }}
                      >
                        Email
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "rgba(255,255,255,0.35)",
                          fontStyle: "italic",
                        }}
                      >
                        Pendiente · placeholder editable
                      </p>
                    </div>
                  </div>

                  {/* Address — placeholder */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "0.625rem",
                        background: "rgba(0,200,232,0.08)",
                        border: "1.5px dashed rgba(0,200,232,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(0,200,232,0.5)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.45)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontWeight: 500,
                          marginBottom: "2px",
                        }}
                      >
                        Dirección
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "rgba(255,255,255,0.35)",
                          fontStyle: "italic",
                        }}
                      >
                        Pendiente · placeholder editable
                      </p>
                    </div>
                  </div>

                  {/* Social */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "0.625rem",
                        background: "rgba(0,200,232,0.08)",
                        border: "1px solid rgba(0,200,232,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00c8e8"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.45)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontWeight: 500,
                          marginBottom: "2px",
                        }}
                      >
                        Instagram
                      </p>
                      <p style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#ffffff" }}>
                        {brand.social}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/573133339162?text=Hola%2C%20quiero%20saber%20más%20sobre%20Piel%20de%20Agua`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    marginTop: "2rem",
                    width: "100%",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  Escribir por WhatsApp
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

            {/* Return policy */}
            <ScrollReveal direction="right" delay={0.1}>
              <div
                className="card-base"
                style={{ padding: "2.5rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                    color: "#ffffff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Política de cambios
                </h3>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(0,200,232,0.08)",
                    border: "1px solid rgba(0,200,232,0.2)",
                    borderRadius: "9999px",
                    padding: "0.375rem 1rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00c8e8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span
                    style={{
                      color: "#00c8e8",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {returnPolicy.term} {returnPolicy.termNote}
                  </span>
                </div>

                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Se reemplaza el artículo cuando el defecto es por:
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {returnPolicy.conditions.map((c, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00c8e8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span
                        style={{
                          color: "rgba(255,255,255,0.75)",
                          fontSize: "0.9375rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {returnPolicy.note}
                </p>

                {/* Shipping placeholder */}
                <div
                  style={{
                    background: "rgba(0,200,232,0.04)",
                    border: "1.5px dashed rgba(0,200,232,0.2)",
                    borderRadius: "0.75rem",
                    padding: "1rem 1.25rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#00c8e8",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.375rem",
                    }}
                  >
                    Dirección de envío · Pendiente
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontSize: "0.875rem",
                      fontStyle: "italic",
                    }}
                  >
                    Agregar aquí la dirección para enviar cambios
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#020b18",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "2.5rem 0",
        }}
      >
        <div
          className="section-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "1.375rem",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              Piel de Agua
            </p>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#00c8e8",
                marginTop: "2px",
              }}
            >
              Watta Skin
            </p>
          </div>

          {/* Tagline */}
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.9375rem",
              fontStyle: "italic",
            }}
          >
            "Sentirse uno con el océano"
          </p>

          {/* Nav */}
          <nav
            aria-label="Pie de página"
            style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}
          >
            {[
              { label: "Colecciones", href: "#colecciones" },
              { label: "Tecnología", href: "#tecnologia" },
              { label: "Conservación", href: "#conservacion" },
              { label: "El Club", href: "#club" },
              { label: "Tienda", href: "#tienda" },
              { label: "Contacto", href: "#contacto" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social & copyright */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <p
              style={{
                color: "#00c8e8",
                fontSize: "0.9375rem",
                fontWeight: 500,
              }}
            >
              {brand.social}
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: "0.8125rem",
              }}
            >
              © {new Date().getFullYear()} Piel de Agua — {brand.englishName}.
              Marca colombiana. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
