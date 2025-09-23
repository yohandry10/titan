"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Construction, Factory, Wrench, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
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
              }, index * 150)
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

  const services = [
    {
      icon: Construction,
      title: "Proyectos de Obras Civiles",
      description: "Construcción integral de infraestructura civil con los más altos estándares.",
      items: [
        "Excavaciones y movimiento de tierras",
        "Construcción de vías de acceso",
        "Sistemas de evacuación de aguas pluviales",
        "Construcción de terraplenes y plataformas",
        "Lozas y veredas de concreto",
        "Alcantarillado y saneamiento",
        "Reservorios y mini represas",
        "Complejos deportivos y recreativos",
      ],
      color: "bg-blue-500",
      href: "/proyectos/obras-civiles",
    },
    {
      icon: Factory,
      title: "Estructuras Metálicas",
      description: "Diseño, fabricación e instalación de estructuras metálicas industriales.",
      items: [
        "Ingeniería de detalle y planos de fabricación",
        "Cálculo y diseño de estructuras",
        "Montaje y alineamiento de estructuras",
        "Fabricación de escaleras industriales",
        "Vigas, techos y pórticos",
        "Chutes, guardas y coberturas",
        "Construcción de naves industriales",
      ],
      color: "bg-orange-500",
      href: "/proyectos/estructuras-metalicas",
    },
    {
      icon: Wrench,
      title: "Servicios Misceláneos",
      description: "Servicios complementarios para el mantenimiento y mejora de instalaciones.",
      items: [
        "Trabajos de albañilería y carpintería",
        "Instalación de pisos y techos",
        "Mantenimiento de infraestructuras",
        "Obras eléctricas especializadas",
        "Instalación de coberturas",
        "Sistemas de drywall",
        "Trabajos en geomembrana",
      ],
      color: "bg-gray-500",
      href: "/proyectos/servicios-miscelaneos",
    },
  ]

  return (
    <section 
      ref={sectionRef} 
      id="servicios" 
      className="py-20 bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/fondo.jpg)' }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Contenido con z-index para estar sobre el overlay */}
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ofrecemos soluciones integrales en ingeniería, construcción y mantenimiento para los sectores de minería,
            construcción e industria.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="hover-lift scroll-reveal group overflow-hidden bg-white"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-3 sm:mb-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${service.color} rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.items.slice(0, 4).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                  {service.items.length > 4 && (
                    <li className="text-xs sm:text-sm text-muted-foreground">
                      <span className="text-primary font-medium">+{service.items.length - 4} servicios más</span>
                    </li>
                  )}
                </ul>
                <Link href="/servicios">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors bg-transparent text-sm sm:text-base"
                  >
                    Ver Detalles
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center scroll-reveal">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">¿Necesitas una cotización personalizada?</h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
              Nuestro equipo de expertos está listo para evaluar tu proyecto y brindarte la mejor solución adaptada a
              tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/servicios" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                  Ver Todos los Servicios
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/proyectos" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent w-full sm:w-auto"
                >
                  Ver Proyectos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
