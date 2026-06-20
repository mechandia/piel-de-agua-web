import { products } from "@/lib/brand-data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const badgeStyles: Record<string, React.CSSProperties> = {
  cyan: {
    background: "rgba(0,200,232,0.12)",
    border: "1px solid rgba(0,200,232,0.3)",
    color: "#00c8e8",
  },
  green: {
    background: "rgba(0,176,122,0.12)",
    border: "1px solid rgba(0,176,122,0.3)",
    color: "#00B07A",
  },
  purple: {
    background: "rgba(167,139,250,0.12)",
    border: "1px solid rgba(167,139,250,0.3)",
    color: "#A78BFA",
  },
};

export default function Catalog() {
  return (
    <section
      id="tienda"
      style={{
        background: "#041527",
        padding: "var(--section-py) 0",
      }}
    >
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Tienda
            </p>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: "#ffffff" }}
            >
              Encuentra tu{" "}
              <span style={{ color: "#00c8e8" }}>segunda piel</span>
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
              Bodysuits técnicos con estampados únicos de fauna marina.
              Precios en dólares. Consulta disponibilidad de tallas por WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        {/* Product grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "2rem",
          }}
        >
          {products.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.1}>
              <article
                className="card-base"
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Product image */}
                <div style={{ padding: "1.25rem 1.25rem 0", position: "relative" }}>
                  <ImagePlaceholder
                    label={`${product.name} — ${product.type}`}
                    aspectRatio="3/4"
                    hint={`Estampado ${product.collection}`}
                  />

                  {/* Badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "2rem",
                      left: "2rem",
                      borderRadius: "9999px",
                      padding: "0.25rem 0.75rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      ...badgeStyles[product.badgeVariant],
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Info */}
                <div
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontWeight: 700,
                          fontSize: "1.25rem",
                          color: "#ffffff",
                          lineHeight: 1.2,
                          marginBottom: "0.25rem",
                        }}
                      >
                        {product.name}
                      </h3>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.45)",
                          fontSize: "0.8125rem",
                          fontWeight: 400,
                        }}
                      >
                        {product.type} · {product.collection}
                      </p>
                    </div>

                    {/* Price */}
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontWeight: 800,
                          fontSize: "1.625rem",
                          color: "#ffffff",
                          letterSpacing: "-0.02em",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        ${product.price}
                      </span>
                      <span
                        style={{
                          display: "block",
                          color: "rgba(255,255,255,0.35)",
                          fontSize: "0.75rem",
                          marginTop: "-2px",
                        }}
                      >
                        {product.currency}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                    <a
                      href={`https://wa.me/573133339162?text=Hola%2C%20quiero%20información%20sobre%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "0.9375rem",
                        padding: "0.875rem",
                        textDecoration: "none",
                      }}
                    >
                      Consultar
                      {/* WhatsApp icon */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        style={{ marginLeft: "2px" }}
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Also available note */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              marginTop: "3rem",
              textAlign: "center",
              padding: "1.5rem",
              background: "rgba(0,200,232,0.04)",
              border: "1px solid rgba(0,200,232,0.1)",
              borderRadius: "1rem",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem" }}>
              También disponible:{" "}
              <strong style={{ color: "#ffffff" }}>Rashguards</strong>,{" "}
              <strong style={{ color: "#ffffff" }}>vestidos de baño manga larga</strong>,{" "}
              <strong style={{ color: "#ffffff" }}>bikinis</strong> y accesorios.{" "}
              <a
                href={`https://wa.me/573133339162?text=Hola%2C%20quiero%20ver%20el%20catálogo%20completo`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00c8e8", fontWeight: 600 }}
              >
                Consulta el catálogo completo →
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
