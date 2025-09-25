"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react"
import Link from "next/link"

export default function ProjectsGallery() {
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Reservorios de Agua",
      category: "Obras Civiles",
      image: "/reservorio.jpg",
      description: "Construcción de reservorios y sistemas de almacenamiento de agua.",
    },
    {
      title: "Trabajos de Albañilería",
      category: "Servicios Misceláneos",
      image: "/arbañileria.png",
      description: "Servicios especializados de albañilería y construcción civil.",
    },
    {
      title: "Naves Industriales",
      category: "Estructuras Metálicas",
      image: "/nave.png",
      description: "Construcción y montaje de naves industriales con estructuras metálicas.",
    },
  ]

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

  const getCategoryColor = (category: string) => {
    const colors = {
      "Obras Civiles": "bg-blue-500",
      "Estructuras Metálicas": "bg-orange-500",
      "Servicios Misceláneos": "bg-green-500"
    }
    return colors[category as keyof typeof colors] || "bg-gray-500"
  }

  return (
    <section ref={sectionRef} id="proyectos" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Proyectos Destacados
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Nuestros <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Descubre algunos de nuestros proyectos más destacados que demuestran nuestra experiencia y compromiso con la excelencia.
          </p>
        </div>

        {/* GRID DE PROYECTOS - IGUAL QUE LAS OTRAS SECCIONES */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto scroll-reveal">
          {projects.map((project, index) => (
            <div
              key={index}
              className="hover-lift overflow-hidden h-full flex flex-col bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Imagen EXACTAMENTE igual que en las otras páginas */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
                </div>
              </div>

              {/* Información del proyecto */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <Link href="/proyectos">
            <Button size="lg" className="hover-glow">
              Ver Todos los Proyectos
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}