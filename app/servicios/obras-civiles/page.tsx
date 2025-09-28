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
      title: "CONSORCIO PIRAMIDE",
      description: "CONSTRUCCION DE INFRAESTRUCTURA VIAL EN LA ASOCIACION DE VIVIENDA LA PRADERA III Y IV ETAPA DISTRITO CORONEL GREGORIO ALBARRACIN LANCHIPA-TACNA",
      image: "/obra.jpeg",
      location: "Distrito Coronel Gregorio Albarracín Lanchipa - Tacna",
      date: "Marzo – Setiembre 2016",
      details: [
        "Construcción de infraestructura vial completa",
        "Habilitación de vías de acceso vehicular",
        "Sistemas de drenaje y alcantarillado",
        "Pavimentación y señalización vial",
        "Cumplimiento de plazos garantizado"
      ]
    },
    {
      title: "CONSORCIO PUENTE ANTACCARA",
      description: "CREACION DEL PUENTE CARROZABLE ANTACCARA EN EL SECTOR DE HUAYLLUMAYO DE LA COMUNIDAD CAMPESINA DE ALTO AYRACCOLLANA, DISTRITO DE COPORAQUE – ESPINAR, CUSCO",
      image: "/puente.jpeg",
      location: "Distrito de Coporaque - Espinar, Cusco",
      date: "Setiembre 2015",
      details: [
        "Puente carrozable de gran envergadura",
        "Estructura metálica especializada",
        "Cimentación profunda y fundaciones",
        "Sistemas de drenaje y protección",
        "Cumplimiento de estándares de seguridad"
      ]
    },
    {
      title: "MUNICIPALIDAD DISTRITAL DE HUAMBO",
      description: "SERVICIO DE REFORMULACION DE EXPEDIENTE TECNICO MEJORAMIENTO DEL SERVICIO DE TRANSITABILIDAD VEHICULAR EN EL CAMINO VECINAL KM 4+404 DE LA CARRETERA YANACOTO SAJARHUA",
      image: "/civil-construction-projects.jpg",
      location: "Distrito de Huambo, Provincia de Caylloma, Arequipa",
      date: "Noviembre 2018",
      details: [
        "Reformulación de expediente técnico especializado",
        "Mejoramiento de transitabilidad vehicular",
        "Análisis de viabilidad técnica",
        "Especificaciones técnicas detalladas",
        "Cálculos estructurales y de pavimentación"
      ]
    },
    {
      title: "GOBIERNO REGIONAL DE AREQUIPA",
      description: "SERVICIO DE ELABORACION DEL EXPEDIENTE TECNICO MEJORAMIENTO DEL SERVICIO DE TRANSITABILIDAD VEHICULAR EN EL TRAMO 2-358 CALLE PRINCIPAL S/N DESDE EL ARCO HASTA EL INICIO DE TROCHA",
      image: "/titan.jpeg",
      location: "Distrito de Pocsi, Arequipa",
      date: "Octubre 2018",
      details: [
        "Elaboración de expediente técnico completo",
        "Mejoramiento de transitabilidad vehicular",
        "Diseño de pavimentación",
        "Sistemas de drenaje y alcantarillado",
        "Especificaciones técnicas y presupuesto"
      ]
    },
    {
      title: "MUNICIPALIDAD DISTRITAL DE PAUCARPATA",
      description: "SERVICIO DE SOLDADURA PARA REPARACION DE JUEGOS INFANTILES, CERCO Y PUERTAS METALICAS EN PARQUES CMT 8-10 P.J.ISRAEL, PARQUE ENTRE LA CALLE VIRGEN DE CHAPI",
      image: "/calle1.jpeg",
      location: "Arequipa",
      date: "Octubre 2018",
      details: [
        "Reparación y mantenimiento de infraestructura recreativa",
        "Soldadura especializada en estructuras metálicas",
        "Reparación de juegos infantiles",
        "Mantenimiento de cercos y puertas metálicas",
        "Trabajos de carpintería metálica"
      ]
    },
    {
      title: "MUNICIPALIDAD DISTRITAL DE PAUCARPATA",
      description: "SERVICIO MANTENIMIENTO PREVENTIVO Y CORRECTIVO DE JUEGOS INFANTILES EN FIBRA DE VIDRIO EN PARQUES Y JARDINES. SEGUN ORDEN DE SERVICIO 574.",
      image: "/parque2.jpeg",
      location: "Arequipa",
      date: "Setiembre 2018",
      details: [
        "Mantenimiento especializado de juegos infantiles",
        "Trabajos en fibra de vidrio",
        "Mantenimiento preventivo y correctivo",
        "Restauración de superficies",
        "Aplicación de recubrimientos protectores"
      ]
    }
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
              href="/servicios"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Servicios
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Proyectos Ejecutados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada proyecto refleja nuestro compromiso con la excelencia, calidad y cumplimiento de plazos.
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
                  
                  {/* Location and Date */}
                  <div className="mb-4 flex flex-col space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground mr-2">📍 Ubicación:</span>
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground mr-2">📅 Fecha:</span>
                      {project.date}
                    </div>
                  </div>

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
