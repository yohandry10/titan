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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Preloader />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
