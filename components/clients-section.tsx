"use client"

import { useEffect, useRef } from "react"

export default function ClientsSection() {
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

  const clients = [
    {
      name: "Gobierno Regional de Arequipa",
      logo: "/arequiopa.png",
    },
    {
      name: "Municipalidad Provincial de Espinar",
      logo: "/espinar.png",
    },
    {
      name: "Municipalidad Distrital de Socabaya",
      logo: "/socabaya.png",
    },
    {
      name: "Municipalidad Distrital de Huambo",
      logo: "/huambo.jpg",
    },
    {
      name: "COSAPI",
      logo: "/cosapi.jpg",
    },
    {
      name: "Gregorio Albarracín Lanchipa - Tacna",
      logo: "/lanchipa.png",
    },
    {
      name: "Distrito de Paucarpata",
      logo: "/paucarpata.png",
    },
    {
      name: "Distrito de Islay Matarani",
      logo: "/matarani.png",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Confían en <span className="text-primary">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Algunos de nuestros clientes que depositan su confianza en nosotros son empresas corporativas e
            instituciones gubernamentales de prestigio.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="scroll-reveal flex items-center justify-center p-4 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-h-24 w-auto opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
              "TITAN Soluciones ha demostrado ser un socio estratégico confiable, entregando proyectos de alta calidad
              dentro de los plazos establecidos y cumpliendo con todos los estándares de seguridad requeridos."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src="/arequiopa.png"
                  alt="Gobierno Regional de Arequipa"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Gobierno Regional</div>
                <div className="text-muted-foreground text-sm">Arequipa, Perú</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
