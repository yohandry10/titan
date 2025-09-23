"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ServiciosMiscelaneos() {
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
      title: "Trabajos misceláneos de obras civiles y obras eléctricas",
      description: "Servicios integrales de obras civiles y eléctricas para proyectos diversos",
      image: "/electrica.png",
      details: [
        "Obras civiles complementarias",
        "Instalaciones eléctricas industriales",
        "Trabajos de conexión y cableado",
        "Mantenimiento de sistemas eléctricos",
      ],
    },
    {
      title: "Trabajos de albañilería, carpintería y gasfitería",
      description: "Servicios especializados en acabados y instalaciones domiciliarias",
      image: "/arbañileria.png",
      details: [
        "Albañilería y acabados",
        "Trabajos de carpintería especializada",
        "Instalaciones de gasfitería",
        "Reparaciones y mantenimiento",
      ],
    },
    {
      title: "Trabajos de instalación de pisos y montaje de techos",
      description: "Instalación profesional de pisos y sistemas de techado",
      image: "/drywall.jpg",
      details: [
        "Instalación de pisos industriales",
        "Montaje de techos metálicos",
        "Acabados en pisos y techos",
        "Aislamiento térmico y acústico",
      ],
    },
    {
      title: "Mantenimiento de viviendas, campamentos, oficinas y almacenes",
      description: "Mantenimiento integral de instalaciones residenciales e industriales",
      image: "/mantenimiento.png",
      details: [
        "Mantenimiento de viviendas",
        "Mantenimiento de campamentos mineros",
        "Mantenimiento de oficinas",
        "Mantenimiento de almacenes",
      ],
    },
    {
      title: "Mantenimiento preventivo, correctivo y renovación de infraestructuras",
      description: "Servicios completos de mantenimiento y renovación de infraestructuras",
      image: "/estructura.png",
      details: [
        "Mantenimiento preventivo programado",
        "Mantenimiento correctivo de emergencia",
        "Renovación de infraestructuras interiores",
        "Renovación de infraestructuras exteriores",
      ],
    },
    {
      title: "Obras eléctricas para proyectos de sostenimiento",
      description: "Instalaciones eléctricas especializadas para proyectos de minería",
      image: "/elec.png",
      details: [
        "Instalaciones eléctricas subterráneas",
        "Sistemas de iluminación industrial",
        "Instalaciones de fuerza y control",
        "Sistemas de seguridad eléctrica",
      ],
    },
    {
      title: "Instalación de coberturas de lona",
      description: "Instalación de sistemas de cobertura temporal y permanente",
      image: "/lona.png",
      details: [
        "Coberturas temporales de protección",
        "Lonas industriales resistentes",
        "Sistemas de anclaje seguros",
        "Mantenimiento de coberturas",
      ],
    },
    {
      title: "Sistemas de drywall y tabiquería",
      description: "Construcción de divisiones interiores con sistemas modernos",
      image: "/dry.jpg",
      details: [
        "Tabiques de drywall",
        "Cielos rasos suspendidos",
        "Aislamientos acústicos",
        "Acabados y pintura",
      ],
    },
    {
      title: "Armado e instalación de anaqueles",
      description: "Instalación de sistemas de almacenamiento industrial",
      image: "/anaqueles.png",
      details: [
        "Anaqueles industriales pesados",
        "Sistemas de almacenamiento vertical",
        "Instalación y configuración",
        "Mantenimiento de anaqueles",
      ],
    },
    {
      title: "Trabajos en geomembrana",
      description: "Instalación y mantenimiento de sistemas de impermeabilización",
      image: "/geomembrana.png",
      details: [
        "Instalación de geomembranas",
        "Soldadura de juntas especializadas",
        "Control de calidad en instalación",
        "Reparación y mantenimiento",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/miscellaneous-construction-services.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Proyectos
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Servicios <span className="text-primary">Misceláneos</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Servicios complementarios de construcción y mantenimiento con atención al detalle y calidad garantizada.
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
              Conoce algunos de nuestros proyectos más importantes en servicios misceláneos.
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
