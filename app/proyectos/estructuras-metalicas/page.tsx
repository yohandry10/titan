"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EstructurasMetalicasPage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".scroll-reveal")
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("revealed")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Ingeniería de detalle y planos de fabricación",
      image: "/titan1.jpeg",
    },
    {
      title: "Cálculo y diseño de estructuras",
      image: "/estructura.jpeg",
    },
    {
      title: "Montaje y alineamiento de estructuras",
      image: "/escalera1.jpeg",
    },
    {
      title: "Fabricación y montaje de estructuras",
      image: "/escalera.jpeg",
    },
    {
      title: "Fabricación e instalación de escaleras industriales",
      image: "/escalera.png",
    },
    {
      title: "Fabricación de chutes, guardas y coberturas",
      image: "/nave.jpeg",
    },
    {
      title: "Construcción y montaje de naves industriales",
      image: "/Montaje.jpg",
    },
    {
      title: "Soldadura especializada y certificada",
      image: "/metal.png",
    },
    {
      title: "Reforzamiento de estructuras existentes",
      image: "/estructura11.png",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/metallic-structures-industrial.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Link
              href="/proyectos"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Servicios
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Estructuras <span className="text-primary">Metálicas</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Especialistas en diseño, fabricación y montaje de estructuras metálicas industriales con tecnología de
              vanguardia.
            </p>
          </div>
        </div>
      </section>


      {/* Projects Gallery */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-4">


          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="hover-lift scroll-reveal overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 project-image-container">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 line-clamp-2">{project.title}</h3>
                  </div>
                </div>

              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
