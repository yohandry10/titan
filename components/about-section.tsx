"use client"

import { useEffect, useRef } from "react"
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
    <section ref={sectionRef} id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Por qué elegir <span className="text-primary">TITAN</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La sinergia de nuestro talento humano es la fórmula de éxito que nos encamina a posicionarnos como la mejor
            alternativa para cada proyecto.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover-lift scroll-reveal glass">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Misión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Crear soluciones objetivas con calidad y eficiencia mediante la reingeniería, priorizando el bienestar
                de los colaboradores y el desarrollo sostenible, generando compromiso con el medio ambiente y las
                comunidades.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift scroll-reveal glass" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Visión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser el mejor referente en el sector de minería, industria y construcción, reconocidos por nuestros
                clientes como la mejor opción, utilizando tecnología de vanguardia optimizando costos y procesos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Policies section */}
        <div className="mb-16">
          <Card className="hover-lift scroll-reveal glass">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Políticas</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Política de calidad
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Política de seguridad y salud en el trabajo
                  </li>
                </ul>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Política ambiental
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Política de ética y antisoborno
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="hover-lift scroll-reveal text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Description */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Contamos con un equipo multidisciplinario de profesionales y especialistas técnicos calificados, lo cual
              respalda nuestros procesos y el cumplimiento de las normas técnicas y legales. Nuestro compromiso es
              brindar soluciones integrales que generen valor agregado a cada proyecto.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Proyectos Exitosos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Satisfacción del Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
