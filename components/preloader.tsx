"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Cog } from "lucide-react"

export default function Preloader(): JSX.Element {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)

  // Hide after initial load (with a minimum duration)
  useEffect(() => {
    let timeoutId: number | undefined

    const hide = () => {
      // Small delay for smooth fade-out
      timeoutId = window.setTimeout(() => setVisible(false), 150)
    }

    if (document.readyState === "complete") {
      timeoutId = window.setTimeout(hide, 600)
    } else {
      window.addEventListener("load", hide, { once: true })
      // Fallback in case "load" never fires (SSR/hydration edge cases)
      timeoutId = window.setTimeout(hide, 1500)
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
      window.removeEventListener("load", hide as EventListener)
    }
  }, [])

  // Briefly show on route changes
  useEffect(() => {
    if (!pathname) return
    setVisible(true)
    const id = window.setTimeout(() => setVisible(false), 500)
    return () => window.clearTimeout(id)
  }, [pathname])

  return (
    <div
      aria-live="polite"
      aria-busy={visible}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Gears */}
        <div className="relative flex items-center justify-center">
          <Cog className="w-16 h-16 text-[#3f4e55] animate-spin" style={{ animationDuration: "2.2s" }} />
          <Cog className="w-10 h-10 text-primary absolute -right-8 -bottom-3 animate-spin" style={{ animationDuration: "1.4s" }} />
        </div>

        {/* Brand line */}
        <div className="mt-6 text-center">
          <div className="text-sm uppercase tracking-widest text-[#3f4e55]">TITAN Soluciones</div>
          <div className="text-xs text-gray-500">Ingeniería, Construcción e Industria</div>
        </div>

        {/* Construction tape progress */}
        <div
          className="mt-6 h-2 w-64 rounded-full overflow-hidden shadow-sm"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #facc15 0 12px, #111827 12px 24px)",
            backgroundSize: "48px 48px",
            animation: "titan-stripes 1s linear infinite",
          }}
        />

        {/* Helper text */}
        <div className="mt-4 text-xs text-gray-500">Preparando proyectos y estructuras…</div>

        {/* Keyframes for animated stripes */}
        <style jsx global>{`
          @keyframes titan-stripes {
            0% { background-position: 0 0; }
            100% { background-position: 48px 0; }
          }
        `}</style>
      </div>
    </div>
  )
}



