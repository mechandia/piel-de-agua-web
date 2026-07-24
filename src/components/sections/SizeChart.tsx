import ScrollReveal from "@/components/ui/ScrollReveal";

const sizes = [
  {
    label: "S",
    chest:  { natural: "74–77 cm", stretch: "77–84 cm" },
    waist:  { natural: "64–67 cm", stretch: "67–72 cm" },
    hip:    { natural: "81–84 cm", stretch: "84–91 cm" },
    sleeve: "63 cm",
    total:  "134 cm",
  },
  {
    label: "M",
    chest:  { natural: "78–81 cm", stretch: "85–92 cm" },
    waist:  { natural: "68–71 cm", stretch: "73–78 cm" },
    hip:    { natural: "85–88 cm", stretch: "92–99 cm" },
    sleeve: "64 cm",
    total:  "139 cm",
  },
  {
    label: "L",
    chest:  { natural: "82–85 cm", stretch: "93–100 cm" },
    waist:  { natural: "72–75 cm", stretch: "79–84 cm" },
    hip:    { natural: "89–92 cm", stretch: "100–107 cm" },
    sleeve: "65 cm",
    total:  "144 cm",
  },
];

const headerStyle: React.CSSProperties = {
  padding: "1rem 1.25rem",
  textAlign: "center",
  fontFamily: "var(--font-syne)",
  fontWeight: 700,
  fontSize: "0.75rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.55)",
  background: "rgba(0,200,232,0.06)",
  borderBottom: "1px solid rgba(0,200,232,0.15)",
  whiteSpace: "nowrap",
};

const cellStyle: React.CSSProperties = {
  padding: "1.25rem 1.25rem",
  textAlign: "center",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
  verticalAlign: "middle",
};

function MeasureCell({ natural, stretch }: { natural: string; stretch: string }) {
  return (
    <td style={cellStyle}>
      <span
        style={{
          display: "block",
          color: "#ffffff",
          fontWeight: 600,
          fontSize: "0.9375rem",
          lineHeight: 1.3,
        }}
      >
        {natural}
      </span>
      <span
        style={{
          display: "block",
          color: "rgba(0,200,232,0.65)",
          fontSize: "0.8rem",
          marginTop: "0.25rem",
          lineHeight: 1.3,
        }}
      >
        se adapta a {stretch}
      </span>
    </td>
  );
}

export default function SizeChart() {
  return (
    <section
      id="tallas"
      style={{
        background: "#020b18",
        padding: "var(--section-py) 0",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 4.5rem)" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Guía de tallas
            </p>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#ffffff" }}
            >
              Encuentra tu{" "}
              <span style={{ color: "#00c8e8" }}>talla perfecta</span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "1rem",
                maxWidth: "52ch",
                margin: "1.25rem auto 0",
                lineHeight: 1.7,
              }}
            >
              Medidas del cuerpo en reposo. El tejido de alta elongación se adapta
              para un ajuste anatómico perfecto.
            </p>
          </div>
        </ScrollReveal>

        {/* Table */}
        <ScrollReveal delay={0.08}>
          <div
            style={{
              background: "#041527",
              border: "1px solid rgba(0,200,232,0.12)",
              borderRadius: "1.25rem",
              overflow: "hidden",
            }}
          >
            {/* Scrollable on mobile */}
            <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "620px",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        ...headerStyle,
                        width: "64px",
                        textAlign: "center",
                        color: "#00c8e8",
                      }}
                    >
                      Talla
                    </th>
                    <th style={headerStyle}>
                      Pecho / Busto
                      <span
                        style={{
                          display: "block",
                          fontWeight: 400,
                          fontSize: "0.6875rem",
                          color: "rgba(255,255,255,0.35)",
                          marginTop: "0.2rem",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Sin estirar · Se adapta a
                      </span>
                    </th>
                    <th style={headerStyle}>
                      Cintura
                      <span
                        style={{
                          display: "block",
                          fontWeight: 400,
                          fontSize: "0.6875rem",
                          color: "rgba(255,255,255,0.35)",
                          marginTop: "0.2rem",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Sin estirar · Se adapta a
                      </span>
                    </th>
                    <th style={headerStyle}>
                      Cadera
                      <span
                        style={{
                          display: "block",
                          fontWeight: 400,
                          fontSize: "0.6875rem",
                          color: "rgba(255,255,255,0.35)",
                          marginTop: "0.2rem",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Sin estirar · Se adapta a
                      </span>
                    </th>
                    <th style={{ ...headerStyle, width: "90px" }}>
                      Largo
                      <span style={{ display: "block" }}>manga</span>
                    </th>
                    <th style={{ ...headerStyle, width: "90px" }}>
                      Largo
                      <span style={{ display: "block" }}>total</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {sizes.map((s, i) => (
                    <tr
                      key={s.label}
                      style={{
                        background:
                          i % 2 === 0
                            ? "transparent"
                            : "rgba(0,200,232,0.025)",
                      }}
                    >
                      {/* Size label */}
                      <td
                        style={{
                          ...cellStyle,
                          textAlign: "center",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "40px",
                            height: "40px",
                            borderRadius: "0.625rem",
                            background: "rgba(0,200,232,0.1)",
                            border: "1px solid rgba(0,200,232,0.25)",
                            fontFamily: "var(--font-syne)",
                            fontWeight: 800,
                            fontSize: "1rem",
                            color: "#00c8e8",
                          }}
                        >
                          {s.label}
                        </span>
                      </td>

                      <MeasureCell natural={s.chest.natural} stretch={s.chest.stretch} />
                      <MeasureCell natural={s.waist.natural} stretch={s.waist.stretch} />
                      <MeasureCell natural={s.hip.natural}   stretch={s.hip.stretch} />

                      {/* Sleeve */}
                      <td style={{ ...cellStyle }}>
                        <span
                          style={{
                            color: "#ffffff",
                            fontWeight: 600,
                            fontSize: "0.9375rem",
                          }}
                        >
                          {s.sleeve}
                        </span>
                      </td>

                      {/* Total */}
                      <td style={{ ...cellStyle }}>
                        <span
                          style={{
                            color: "#ffffff",
                            fontWeight: 600,
                            fontSize: "0.9375rem",
                          }}
                        >
                          {s.total}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Elongation note */}
            <div
              style={{
                padding: "1rem 1.5rem",
                background: "rgba(0,200,232,0.06)",
                borderTop: "1px solid rgba(0,200,232,0.12)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00c8e8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                <span style={{ color: "#00c8e8", fontWeight: 600 }}>
                  Elongación ± 30%
                </span>
                {" "}— el tejido se estira en todas las direcciones para adaptarse a tu cuerpo.
                Los valores "se adapta a" indican el rango real de uso.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Measurement guide */}
        <ScrollReveal delay={0.15}>
          <div
            style={{
              marginTop: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { label: "Pecho / Busto", desc: "Mide la parte más ancha del pecho, bajo las axilas." },
              { label: "Cintura", desc: "Mide la parte más estrecha del tronco." },
              { label: "Cadera", desc: "Mide la parte más ancha de las caderas." },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#041527",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "0.875rem",
                  padding: "1.125rem 1.25rem",
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#00c8e8",
                    marginTop: "0.45rem",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <div>
                  <p
                    style={{
                      color: "#ffffff",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.8125rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* WhatsApp sizing help */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              marginTop: "2rem",
              textAlign: "center",
              padding: "1.5rem",
              background: "rgba(37,211,102,0.05)",
              border: "1px solid rgba(37,211,102,0.15)",
              borderRadius: "1rem",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem" }}>
              ¿Tienes dudas con tu talla?{" "}
              <a
                href="https://wa.me/573133339162?text=Hola%2C%20necesito%20ayuda%20para%20elegir%20mi%20talla%20en%20Piel%20de%20Agua"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#25D366", fontWeight: 600 }}
              >
                Escríbenos por WhatsApp →
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
