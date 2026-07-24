import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piel de Agua — Watta Skin | Trajes Técnicos para Deportes Acuáticos",
  description:
    "Trajes técnicos colombianos para deportes acuáticos, inspirados en la fauna marina. UPF 50+, tecnología Creora® Highclo™, diseñados por buzos para los amantes del océano.",
  keywords:
    "trajes acuáticos, wetsuit, surf, buceo, apnea, SUP, Colombia, UPF 50+, segunda piel, fauna marina, piel de agua",
  openGraph: {
    title: "Piel de Agua — Sentirse uno con el océano",
    description:
      "Trajes técnicos colombianos para deportes acuáticos inspirados en la fauna marina.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piel de Agua — Sentirse uno con el océano",
    description: "Trajes técnicos para deportes acuáticos. UPF 50+. Hecho en Colombia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
