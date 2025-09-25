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
      description: "Desarrollo de ingeniería especializada y documentación técnica para fabricación",
      image: "/plano.png",
      details: [
        "Planos de fabricación detallados",
        "Cálculos estructurales especializados",
        "Especificaciones técnicas precisas",
        "Documentación para control de calidad",
      ],
    },
    {
      title: "Cálculo y diseño de estructuras",
      description: "Análisis estructural y diseño de elementos metálicos complejos",
      image: "/INDUSTRIAL.png",
      details: [
        "Análisis de cargas y resistencia",
        "Diseño sismorresistente",
        "Optimización de materiales",
        "Cumplimiento de normas técnicas",
      ],
    },
    {
      title: "Montaje y alineamiento de estructuras",
      description: "Montaje preciso y alineamiento de estructuras metálicas industriales",
      image: "/Montaje.jpg",
      details: [
        "Montaje con equipos especializados",
        "Alineamiento de alta precisión",
        "Control topográfico continuo",
        "Procedimientos de seguridad",
      ],
    },
    {
      title: "Fabricación y montaje de estructuras",
      description: "Proceso integral desde fabricación hasta montaje final",
      image: "/fabricacion.png",
      details: [
        "Fabricación en taller especializado",
        "Control de calidad en fabricación",
        "Transporte y logística",
        "Montaje en sitio",
      ],
    },
    {
      title: "Fabricación e instalación de escaleras industriales",
      description: "Escaleras, vigas, techos y pórticos para instalaciones industriales",
      image: "/escalera.png",
      details: [
        "Escaleras industriales certificadas",
        "Vigas de acero estructural",
        "Sistemas de techado metálico",
        "Pórticos para naves industriales",
      ],
    },
    {
      title: "Fabricación de chutes, guardas y coberturas",
      description: "Elementos de protección y manejo de materiales industriales",
      image: "/2.jpg",
      details: [
        "Chutes para manejo de materiales",
        "Guardas de seguridad industrial",
        "Coberturas protectoras",
        "Sistemas de contención",
      ],
    },
    {
      title: "Construcción y montaje de naves industriales",
      description: "Construcción completa de naves industriales de gran envergadura",
      image: "/estructura.png",
      details: [
        "Naves industriales completas",
        "Sistemas de ventilación",
        "Estructuras de soporte",
        "Acabados industriales",
      ],
    },
    {
      title: "Soldadura especializada y certificada",
      description: "Servicios de soldadura con certificaciones internacionales",
      image: "/metal.png",
      details: [
        "Soldadores certificados AWS",
        "Procedimientos de soldadura calificados",
        "Ensayos no destructivos",
        "Control de calidad riguroso",
      ],
    },
    {
      title: "Reforzamiento de estructuras existentes",
      description: "Reforzamiento y rehabilitación de estructuras metálicas",
      image: "/estructura11.png",
      details: [
        "Evaluación estructural previa",
        "Diseño de reforzamientos",
        "Instalación sin interrumpir operaciones",
        "Certificación de reforzamientos",
      ],
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Proyectos Destacados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce algunos de nuestros proyectos más importantes en estructuras metálicas.
            </p>
          </div>

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
                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-3">Características del proyecto:</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
