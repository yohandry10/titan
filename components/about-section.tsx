"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Shield, Users, Lightbulb, Award } from "lucide-react"

export default function AboutSection() {
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
              }, index * 200)
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

  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: "mision",
      title: "Misión",
      icon: Target,
      content: "Crear soluciones objetivas con calidad y eficiencia mediante la reingeniería, priorizando el bienestar de los colaboradores y el desarrollo sostenible, generando compromiso con el medio ambiente y las comunidades.",
      color: "from-[#2a313b]/5 to-[#2a313b]/10",
      iconColor: "text-primary"
    },
    {
      id: "vision", 
      title: "Visión",
      icon: Eye,
      content: "Ser el mejor referente en el sector de minería, industria y construcción, reconocidos por nuestros clientes como la mejor opción, utilizando tecnología de vanguardia optimizando costos y procesos.",
      color: "from-[#2a313b]/5 to-[#2a313b]/10",
      iconColor: "text-primary"
    },
    {
      id: "politicas",
      title: "Políticas",
      icon: Award,
      content: "Nuestros lineamientos garantizan calidad mediante mejora continua, seguridad a través de prevención y capacitación, sostenibilidad ambiental con gestión responsable, y ética con transparencia absoluta.",
      color: "from-[#2a313b]/5 to-[#2a313b]/10", 
      iconColor: "text-primary"
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Seguridad",
      description: "Priorizamos la seguridad en cada proyecto, cumpliendo con los más altos estándares.",
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Garantizamos la excelencia en todos nuestros servicios y entregas.",
    },
    {
      icon: Users,
      title: "Compromiso",
      description: "Trabajamos con dedicación para superar las expectativas de nuestros clientes.",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Implementamos tecnología de vanguardia en nuestros procesos.",
    },
  ]

  return (
    <section ref={sectionRef} id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            ¿Por qué elegir <span className="text-primary">TITAN</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            La sinergia de nuestro talento humano es la fórmula de éxito que nos encamina a posicionarnos como la mejor
            alternativa para cada proyecto.
          </p>
        </div>

        {/* Interactive Tab Section - Misión, Visión, Políticas */}
        <div className="mb-16 sm:mb-20 scroll-reveal">
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              {/* Tab Navigation */}
              <div className="flex flex-col sm:flex-row border-b border-gray-100">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 text-left transition-all duration-300 ${
                      activeTab === index
                        ? "bg-gray-50 border-b-2 border-primary"
                        : "hover:bg-gray-50/50"
                    }`}
                  >
                    <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                      <tab.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${activeTab === index ? tab.iconColor : "text-gray-400"}`} />
                      <span className={`font-semibold text-sm sm:text-base ${activeTab === index ? "text-primary" : "text-gray-600"}`}>
                        {tab.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <div className={`bg-gradient-to-br ${tabs[activeTab].color} rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-100`}>
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0`}>
                      {(() => {
                        const IconComponent = tabs[activeTab].icon
                        return <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${tabs[activeTab].iconColor}`} />
                      })()}
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{tabs[activeTab].title}</h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{tabs[activeTab].content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="hover-lift scroll-reveal text-center group bg-white shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Description */}
        <div className="mt-12 sm:mt-16 text-center scroll-reveal">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-base sm:text-lg text-foreground leading-relaxed font-medium">
              Contamos con un equipo multidisciplinario de profesionales y especialistas técnicos calificados, lo cual
              respalda nuestros procesos y el cumplimiento de las normas técnicas y legales. Nuestro compromiso es
              brindar soluciones integrales que generen valor agregado a cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
