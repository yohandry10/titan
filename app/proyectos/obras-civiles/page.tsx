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
      image: "/tierras.jpg",
    },
    {
      title: "Habilitación y mantenimiento de vías de acceso",
      image: "/carretera-asfaltado.jpg",
    },
    {
      title: "Construcción de vías de acceso",
      image: "/mejoramiento.webp",
    },
    {
      title: "Sistemas de evacuación de aguas pluviales",
      image: "/3.jpg",
    },
    {
      title: "Construcción de terraplenes y plataformas",
      image: "/conasarc.jpg",
    },
    {
      title: "Construcción de lozas y veredas de concreto",
      image: "/call3.jpeg",
    },
    {
      title: "Alcantarillado y saneamiento",
      image: "/agua.jpg",
    },
    {
      title: "Construcción de reservorios y mini represas",
      image: "/reservorio.jpg",
    },
    {
      title: "Construcción de complejos deportivos y recreativos",
      image: "/complejo.jpg",
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
              Volver a Servicios
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Obras <span className="text-primary">Civiles</span>
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

              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
