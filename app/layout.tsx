import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Preloader from "@/components/preloader"
import "./globals.css"

export const metadata: Metadata = {
  title: "TITAN Soluciones - Ingeniería, Construcción e Industria",
  description:
    "Empresa dedicada a la prestación de servicios en los sectores de minería, construcción e industria en Arequipa, Perú.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favi.png", sizes: "16x16", type: "image/png" },
      { url: "/favi.png", sizes: "32x32", type: "image/png" },
      { url: "/favi.png", sizes: "48x48", type: "image/png" },
      { url: "/favi.png", sizes: "64x64", type: "image/png" },
      { url: "/favi.png", sizes: "128x128", type: "image/png" },
      { url: "/favi.png", sizes: "256x256", type: "image/png" }
    ],
    shortcut: "/favi.png",
    apple: [
      { url: "/favi.png", sizes: "180x180", type: "image/png" },
      { url: "/favi.png", sizes: "152x152", type: "image/png" },
      { url: "/favi.png", sizes: "144x144", type: "image/png" },
      { url: "/favi.png", sizes: "120x120", type: "image/png" }
    ],
    other: [
      { rel: "icon", url: "/favi.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favi.png", sizes: "512x512", type: "image/png" }
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favi.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favi.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favi.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Preloader />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
