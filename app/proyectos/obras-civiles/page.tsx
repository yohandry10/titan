"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ObrasCivilesPage() {
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
      title: "Excavaciones y movimiento de tierras",
      description: "Movimiento masivo de tierras con maquinaria especializada y técnicas avanzadas",
      image: "/movi.jpeg",
      details: [
        "Excavación con maquinaria pesada especializada",
        "Movimiento de grandes volúmenes de tierra",
        "Nivelación y perfilado de terrenos",
        "Control de compactación y densidad",
      ],
    },
    {
      title: "Habilitación y mantenimiento de vías de acceso",
      description: "Construcción y mantenimiento de vías de acceso para proyectos industriales y mineros",
      image: "/i11.jpg",
      details: [
        "Habilitación de nuevas vías de acceso",
        "Mantenimiento preventivo y correctivo",
        "Mejoramiento de vías existentes",
        "Sistemas de drenaje y señalización",
      ],
    },
    {
      title: "Construcción de vías de acceso",
      description: "Construcción integral de vías vehiculares, carrozables y peatonales",
      image: "/i1.jpg",
      details: [
        "Vías vehiculares para tráfico pesado",
        "Vías carrozables para acceso industrial",
        "Senderos peatonales seguros",
        "Pavimentación y acabados especializados",
      ],
    },
    {
      title: "Sistemas de evacuación de aguas pluviales",
      description: "Construcción de sistemas de drenaje a canal abierto para manejo de aguas",
      image: "/agua.jpg",
      details: [
        "Diseño hidráulico especializado",
        "Excavación de canales de drenaje",
        "Construcción de obras de arte",
        "Sistemas de captación y conducción",
      ],
    },
    {
      title: "Construcción de terraplenes y plataformas",
      description: "Construcción de terraplenes y plataformas para infraestructura industrial",
      image: "/movi.jpeg",
      details: [
        "Terraplenes para carreteras y accesos",
        "Plataformas industriales niveladas",
        "Muros de contención y estabilización",
        "Compactación controlada por capas",
      ],
    },
    {
      title: "Construcción de lozas y veredas de concreto",
      description: "Construcción de estructuras de concreto para pavimentos y veredas",
      image: "/3.jpg",
      details: [
        "Lozas de concreto armado",
        "Veredas peatonales durables",
        "Acabados texturizados y lisos",
        "Juntas de dilatación técnicas",
      ],
    },
    {
      title: "Alcantarillado y saneamiento",
      description: "Sistemas completos de alcantarillado y saneamiento para proyectos urbanos",
      image: "/alcantarillado.jpg",
      details: [
        "Redes de alcantarillado sanitario",
        "Sistemas de tratamiento de aguas",
        "Cámaras de inspección y registro",
        "Conexiones domiciliarias",
      ],
    },
    {
      title: "Construcción de reservorios y mini represas",
      description: "Construcción de estructuras para almacenamiento y control de agua",
      image: "/reservorio.jpg",
      details: [
        "Reservorios de agua potable",
        "Mini represas para control hídrico",
        "Sistemas de impermeabilización",
        "Estructuras de control y válvulas",
      ],
    },
    {
      title: "Construcción de complejos deportivos y recreativos",
      description: "Desarrollo de infraestructura deportiva y recreativa para comunidades",
      image: "/complejo.jpg",
      details: [
        "Canchas deportivas multiuso",
        "Áreas recreativas familiares",
        "Gradería y espacios de espectadores",
        "Iluminación y equipamiento deportivo",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/civil-construction-projects.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/40"></div>
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
              Proyectos de <span className="text-primary">Obras Civiles</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Especialistas en construcción de infraestructura civil con los más altos estándares de calidad y
              seguridad.
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
              Conoce algunos de nuestros proyectos más importantes en obras civiles.
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
