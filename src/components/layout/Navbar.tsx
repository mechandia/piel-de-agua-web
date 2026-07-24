"use client";

import { useEffect, useState } from "react";
import { brand } from "@/lib/brand-data";

const navLinks = [
  { label: "Colecciones", href: "#colecciones" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Conservación", href: "#conservacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
          background: scrolled ? "rgba(4, 21, 39, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div
          className="section-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          {/* Logo */}
          <a
            href="#inicio"
            aria-label="Piel de Agua — inicio"
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "1.25rem",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              Piel de Agua
            </span>
            <span
              style={{
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00c8e8",
                marginTop: "1px",
              }}
            >
              Watta Skin
            </span>
          </a>

          {/* Desktop nav — NOTE: no display in inline style, Tailwind controls it */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex"
            style={{ gap: "2rem", alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-hover"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop — wrapper controls visibility, avoids .btn-primary overriding Tailwind hidden */}
          <div className="hidden md:block">
            <a
              href="#tienda"
              className="btn-primary"
              style={{ fontSize: "0.875rem", padding: "0.625rem 1.5rem" }}
            >
              Tienda
            </a>
          </div>

          {/* Hamburger mobile — NOTE: no display in inline style */}
          <button
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "#ffffff",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#ffffff",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#ffffff",
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#ffffff",
                transition: "transform 0.3s ease",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(2,11,24,0.97)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              letterSpacing: "-0.02em",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00c8e8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#tienda"
          onClick={handleLinkClick}
          className="btn-primary"
          style={{ marginTop: "1rem", textDecoration: "none" }}
        >
          {brand.ctaPrimary}
        </a>
      </div>
    </>
  );
}
