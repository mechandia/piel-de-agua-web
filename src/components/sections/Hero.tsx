"use client";

import { useEffect, useRef } from "react";
import { brand } from "@/lib/brand-data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Only run if reduced motion is NOT preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      [eyebrowRef, titleRef, subtitleRef, ctaRef].forEach((r) => {
        if (r.current) r.current.style.opacity = "1";
      });
      return;
    }

    // Dynamic import GSAP only on client
    import("gsap").then(({ gsap }) => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const words = titleRef.current?.querySelectorAll(".word") ?? [];

      // fromTo ensures correct start AND end state regardless of inline styles
      tl.fromTo(
        eyebrowRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          words,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, stagger: 0.08 },
          "-=0.4"
        )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        );
    });
  }, []);

  const titleWords = brand.tagline.split(" ");

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="hero-bg"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Glow orbs — purely decorative */}
      <div aria-hidden="true">
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "8%",
            width: "clamp(200px, 30vw, 480px)",
            height: "clamp(200px, 30vw, 480px)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,200,232,0.12) 0%, transparent 70%)",
            animation: "glow-pulse 7s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "6%",
            width: "clamp(150px, 25vw, 380px)",
            height: "clamp(150px, 25vw, 380px)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,200,232,0.08) 0%, transparent 70%)",
            animation: "glow-pulse 9s ease-in-out infinite 2s",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(300px, 60vw, 800px)",
            height: "clamp(300px, 60vw, 800px)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,34,55,0.6) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Floating particles */}
        {[
          { top: "25%", left: "20%", size: 4, delay: "0s", duration: "8s" },
          { top: "60%", left: "15%", size: 3, delay: "2s", duration: "11s" },
          { top: "40%", right: "18%", size: 5, delay: "1s", duration: "9s" },
          { top: "70%", right: "25%", size: 3, delay: "3s", duration: "12s" },
          { top: "80%", left: "40%", size: 4, delay: "0.5s", duration: "10s" },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: p.top,
              left: (p as { left?: string }).left,
              right: (p as { right?: string }).right,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: "#00c8e8",
              animation: `particle-float ${p.duration} ease-in-out infinite ${p.delay}`,
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="section-container"
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(1.5rem, 3vw, 2.5rem)",
          padding: "clamp(2rem, 5vw, 4rem) var(--section-px)",
        }}
      >
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          className="eyebrow"
          style={{ opacity: 0 }}
          aria-label="Marca colombiana"
        >
          Marca Colombiana · {brand.englishName}
        </p>

        {/* Main headline */}
        <h1
          ref={titleRef}
          className="section-title"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "#ffffff",
            maxWidth: "14ch",
          }}
        >
          {titleWords.map((word, i) => (
            <span
              key={i}
              className="word"
              style={{
                display: "inline-block",
                marginRight: "0.25em",
                opacity: 0,
              }}
            >
              {word === "océano" ? (
                <span style={{ color: "#00c8e8" }}>{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        {/* Sub-headline */}
        <p
          ref={subtitleRef}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(255,255,255,0.70)",
            maxWidth: "48ch",
            lineHeight: 1.65,
            opacity: 0,
          }}
        >
          {brand.secondSkin}
          <br />
          <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9em" }}>
            {brand.differentiator}
          </span>
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            opacity: 0,
            marginTop: "0.5rem",
          }}
        >
          <a href="#tienda" className="btn-primary">
            {brand.ctaPrimary}
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
          <a href="#colecciones" className="btn-secondary">
            {brand.ctaSecondary}
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "2rem",
            opacity: 0.45,
          }}
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Desliza
          </span>
          <div
            style={{
              width: "1.5px",
              height: "40px",
              background:
                "linear-gradient(to bottom, rgba(0,200,232,0.8), transparent)",
              animation: "particle-float 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Wave bottom divider */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -2,
          left: 0,
          right: 0,
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "80px" }}
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#020b18"
          />
        </svg>
      </div>
    </section>
  );
}
