"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Vías de Acceso Mineras",
      category: "Obras Civiles",
      image: "/carretera-asfaltado.jpg",
      description: "Construcción de vías de acceso vehiculares para operaciones mineras.",
    },
    {
      title: "Estructuras Industriales",
      category: "Estructuras Metálicas",
      image: "/INDUSTRIAL.png",
      description: "Fabricación e instalación de estructuras metálicas para naves industriales.",
    },
    {
      title: "Montaje y alineamiento de estructuras",
      category: "Estructuras Metálicas",
      image: "/Montaje.jpg",
      description: "Servicios de soldadura certificada con estándares internacionales.",
    },
    {
      title: "Sistemas de Drenaje",
      category: "Obras Civiles",
      image: "/agua.jpg",
      description: "Construcción de sistemas de evacuación de aguas pluviales.",
    },
    {
      title: "Servicios Eléctricos",
      category: "Servicios Misceláneos",
      image: "/electrica.png",
      description: "Instalaciones eléctricas industriales y sistemas de potencia.",
    },
    {
      title: "Naves Industriales",
      category: "Estructuras Metálicas",
      image: "/nave.png",
      description: "Construcción y montaje de naves industriales con estructuras metálicas.",
    },
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
      title: "Sistemas Drywall",
      category: "Servicios Misceláneos",
      image: "/drywall.jpg",
      description: "Instalación de sistemas de drywall y tabiquería moderna.",
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(projects.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3))
  }

  return (
    <section ref={sectionRef} id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 sm:mb-6">
            Nuestros <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Descubre algunos de nuestros proyectos más destacados que demuestran nuestra experiencia y compromiso con la
            excelencia.
          </p>
        </div>

        {/* Gallery */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6 sm:mb-8 scroll-reveal">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={prevSlide} className="hover-lift">
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={nextSlide} className="hover-lift">
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              {currentIndex + 1} de {Math.ceil(projects.length / 3)}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {projects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project, index) => (
                      <Card
                        key={project.title}
                        className="hover-lift scroll-reveal group overflow-hidden bg-white h-full flex flex-col"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 project-image-container">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              console.log('Error loading project image:', project.image);
                              e.currentTarget.src = '/placeholder.svg';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                              <Button size="sm" variant="secondary" className="w-full text-xs sm:text-sm">
                                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                Ver Proyecto
                              </Button>
                            </div>
                          </div>
                          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                            <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                              {project.category}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                          <h3 className="text-lg sm:text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3">{project.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8 scroll-reveal">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 scroll-reveal">
          <Link href="/servicios">
            <Button size="lg" className="hover-glow">
              Ver Todos los Proyectos
              <ExternalLink className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>

        {/* Bloque retirado por solicitud del cliente */}
      </div>
    </section>
  )
}
