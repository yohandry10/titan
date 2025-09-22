"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProyectosPage() {
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

  const projectCategories = [
    {
      title: "Proyectos de Obras Civiles",
      description: "Construcción de infraestructura civil con los más altos estándares de calidad",
      href: "/proyectos/obras-civiles",
      image: "/obra.png",
      projects: ["Reservorios", "Vías de acceso", "Alcantarillado", "Terraplenes y plataformas"],
    },
    {
      title: "Estructuras Metálicas",
      description: "Diseño, fabricación y montaje de estructuras metálicas industriales",
      href: "/proyectos/estructuras-metalicas",
      image: "/metalica.png",
      projects: ["Naves industriales", "Estructuras de acero", "Montaje especializado"],
    },
    {
      title: "Servicios Misceláneos",
      description: "Servicios complementarios de construcción y mantenimiento",
      href: "/proyectos/servicios-miscelaneos",
      image: "/estructura.png",
      projects: ["Construcción de veredas", "Complejos deportivos", "Mantenimiento"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/site.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nuestros <span className="text-primary">Proyectos</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Descubre la excelencia en cada uno de nuestros proyectos de construcción, estructuras metálicas y
              servicios especializados.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Categories */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => (
              <Card key={category.title} className="hover-lift scroll-reveal group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-contain bg-gray-100 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Proyectos destacados:</h4>
                    <ul className="space-y-1">
                      {category.projects.map((project) => (
                        <li key={project} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={category.href}>
                    <Button className="w-full group">
                      Ver Detalles
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
