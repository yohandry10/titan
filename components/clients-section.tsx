"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Responsive visible items (2 on mobile, 4 on md+)
  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth < 768 ? 2 : 4)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const extendedClients = [...clients, ...clients.slice(0, visibleCount)]

  const nextSlide = () => setCurrentIndex((prev) => prev + 1)
  const prevSlide = () => {
    if (currentIndex === 0) {
      // jump to the last possible start instantly, then move one step back visually
      setIsTransitioning(false)
      setCurrentIndex(clients.length)
      requestAnimationFrame(() => {
        setIsTransitioning(true)
        setCurrentIndex(clients.length - 1)
      })
    } else {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  // Auto play
  useEffect(() => {
    const id = setInterval(nextSlide, 3000)
    return () => clearInterval(id)
  }, [visibleCount, clients.length])

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: '#2a313b' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Confían en <span className="text-primary">Nosotros</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Algunos de nuestros clientes que depositan su confianza en nosotros son empresas corporativas e
            instituciones gubernamentales de prestigio.
          </p>
        </div>

        {/* Clients Carousel - continuous slide */}
        <div className="relative scroll-reveal">
          <div className="overflow-hidden">
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${(currentIndex * 100) / visibleCount}%)` }}
              onTransitionEnd={() => {
                // Loop seamlessly when we reach the cloned tail
                if (currentIndex >= clients.length) {
                  setIsTransitioning(false)
                  setCurrentIndex(0)
                  requestAnimationFrame(() => setIsTransitioning(true))
                }
              }}
            >
              {extendedClients.map((client, idx) => (
                <div key={`${client.name}-${idx}`} className="w-1/2 md:w-1/4 flex-shrink-0">
                  <div className="flex items-center justify-center p-2 sm:p-4 hover-lift group">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="max-h-16 sm:max-h-20 md:max-h-24 w-auto opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-1.5 sm:p-2 rounded-full"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-1.5 sm:p-2 rounded-full"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Indicators */}
          {/* Indicators: show how many groups of 4 exist */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {Array.from({ length: Math.ceil(clients.length / visibleCount) }).map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
                  Math.floor(currentIndex / visibleCount) === index ? "bg-primary" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 sm:mt-16 text-center scroll-reveal">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
            <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground font-medium mb-4 sm:mb-6 leading-relaxed">
              "TITAN Soluciones ha demostrado ser un socio estratégico confiable, entregando proyectos de alta calidad
              dentro de los plazos establecidos y cumpliendo con todos los estándares de seguridad requeridos."
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <img
                  src="/arequiopa.png"
                  alt="Gobierno Regional de Arequipa"
                  className="max-h-16 sm:max-h-20 w-auto object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-foreground text-sm sm:text-base">Gobierno Regional</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Arequipa, Perú</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
