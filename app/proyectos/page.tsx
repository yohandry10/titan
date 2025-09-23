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
      projects: [
        "Excavaciones y movimiento de tierras",
        "Habilitación y mantenimiento de vías de acceso",
        "Construcción de vías de acceso (vehiculares, vías carrozables y peatonales)",
        "Construcción de sistemas de evacuación de aguas pluviales a canal abierto",
        "Construcción de terraplenes y plataformas",
        "Construcción de lozas y veredas de concreto",
        "Alcantarillado y saneamiento",
        "Construcción de reservorios y mini represas",
        "Construcción de complejos deportivos y recreativos",
      ],
    },
    {
      title: "Estructuras Metálicas",
      description: "Diseño, fabricación y montaje de estructuras metálicas industriales",
      href: "/proyectos/estructuras-metalicas",
      image: "/metalica.png",
      projects: [
        "Ingeniería de detalle y planos de fabricación",
        "Cálculo y diseño de estructuras",
        "Montaje y alineamiento de estructuras",
        "Fabricación y montaje de estructuras",
        "Fabricación e instalación de escaleras industriales, vigas, techos y pórticos",
        "Fabricación de chutes, guardas y coberturas",
        "Construcción y montaje de naves industriales",
        "Soldadura especializada y certificada",
        "Reforzamiento de estructuras existentes",
      ],
    },
    {
      title: "Servicios Misceláneos",
      description: "Servicios complementarios de construcción y mantenimiento",
      href: "/proyectos/servicios-miscelaneos",
      image: "/estructura.png",
      projects: [
        "Trabajos misceláneos de obras civiles y obras eléctricas",
        "Trabajos de albañilería, carpintería y gasfitería",
        "Trabajos de instalación de pisos y montaje de techos",
        "Mantenimiento de viviendas, campamentos, oficinas y almacenes",
        "Mantenimiento preventivo, correctivo y renovación de infraestructuras (interiores y exteriores)",
        "Obras eléctricas para proyectos de sostenimiento",
        "Instalación de coberturas de lona",
        "Sistemas de drywall y tabiquería",
        "Armado e instalación de anaqueles",
        "Trabajos en geomembrana",
      ],
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
              <Card key={category.title} className="hover-lift scroll-reveal group overflow-hidden flex flex-col h-full">
                <div className="relative h-64 overflow-hidden bg-gray-100 project-image-container">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-foreground mb-2">Proyectos destacados:</h4>
                    <ul className="space-y-1">
                      {category.projects.map((project) => (
                        <li key={project} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={category.href} className="mt-auto">
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
