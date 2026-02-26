import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crezca - Invierte inteligente en la bolsa colombiana",
  description:
    "Analiza empresas de la Bolsa de Valores de Colombia con inteligencia artificial. Metricas financieras explicadas en terminos simples para inversionistas retail.",
  metadataBase: new URL("https://crezca.co"),
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Crezca - Invierte inteligente en la bolsa colombiana",
    description:
      "Analiza 40+ empresas colombianas con IA. Metricas financieras explicadas de forma simple.",
    url: "https://crezca.co",
    siteName: "Crezca",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/og-image.JPG", width: 1200, height: 630, alt: "Crezca - Analisis financiero con IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crezca - Invierte inteligente en la bolsa colombiana",
    description: "Analiza empresas de la bolsa colombiana con IA",
    images: ["/og-image.JPG"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://crezca.co" },
  keywords: [
    "analisis acciones Colombia",
    "ratios financieros empresas colombianas",
    "invertir bolsa Colombia",
    "BVC analisis",
    "acciones colombianas",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Crezca",
              description:
                "Plataforma de analisis financiero para la bolsa colombiana con inteligencia artificial",
              url: "https://crezca.co",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              inLanguage: "es",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "COP",
              },
            }),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
