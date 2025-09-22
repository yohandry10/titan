"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Calendar, Users, Wrench } from "lucide-react"
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
      title: "Naves Industriales",
      description: "Construcción y montaje de naves industriales de gran envergadura",
      image: "/nave.png",
      location: "Arequipa, Perú",
      duration: "10 meses",
      team: "30 especialistas",
      details: [
        "Ingeniería de detalle y planos de fabricación",
        "Fabricación de estructuras de acero",
        "Montaje y alineamiento especializado",
        "Instalación de sistemas de techado",
      ],
    },
    {
      title: "Estructuras de Acero",
      description: "Fabricación e instalación de estructuras metálicas complejas",
      image: "/metal.png",
      location: "Lima, Perú",
      duration: "8 meses",
      team: "25 especialistas",
      details: [
        "Cálculo y diseño de estructuras",
        "Fabricación de vigas y columnas",
        "Instalación de escaleras industriales",
        "Montaje de pórticos y techos",
      ],
    },
    {
      title: "Chutes y Coberturas",
      description: "Fabricación de chutes, guardas y coberturas industriales",
      image: "/2.jpg",
      location: "Cusco, Perú",
      duration: "6 meses",
      team: "20 especialistas",
      details: [
        "Diseño de chutes especializados",
        "Fabricación de guardas de seguridad",
        "Instalación de coberturas",
        "Sistemas de protección industrial",
      ],
    },
    {
      title: "Montaje Especializado",
      description: "Montaje y alineamiento de estructuras metálicas de precisión",
      image: "/Montaje.jpg",
      location: "Tacna, Perú",
      duration: "4 meses",
      team: "15 especialistas",
      details: [
        "Montaje de estructuras complejas",
        "Alineamiento de precisión",
        "Soldadura especializada",
        "Control de calidad riguroso",
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
              Volver a Proyectos
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

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Servicios de Metalmecánica</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos servicios integrales en estructuras metálicas, desde el diseño hasta la instalación final.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Ingeniería de detalle y planos de fabricación",
              "Cálculo y diseño de estructuras",
              "Montaje y alineamiento de estructuras",
              "Fabricación e instalación de escaleras industriales",
              "Fabricación de chutes, guardas y coberturas",
              "Construcción y montaje de naves industriales",
            ].map((service, index) => (
              <Card key={service} className="hover-lift">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Wrench className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              <Card key={project.title} className="hover-lift scroll-reveal overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-contain bg-gray-100 hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <MapPin className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">{project.location}</div>
                    </div>
                    <div className="text-center">
                      <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">{project.duration}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">{project.team}</div>
                    </div>
                  </div>

                  <div>
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
