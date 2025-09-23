"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, GraduationCap, Briefcase, Leaf } from "lucide-react"

export default function SocialResponsibility() {
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

  const initiatives = [
    {
      icon: Heart,
      title: "Salud Comunitaria",
      description: "Programas de salud preventiva y atención médica para comunidades locales.",
    },
    {
      icon: GraduationCap,
      title: "Educación",
      description: "Apoyo educativo y becas para estudiantes de zonas rurales.",
    },
    {
      icon: Briefcase,
      title: "Desarrollo Productivo",
      description: "Capacitación técnica y emprendimiento para el desarrollo económico local.",
    },
    {
      icon: Leaf,
      title: "Medio Ambiente",
      description: "Proyectos de conservación y protección del medio ambiente.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="scroll-reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Responsabilidad <span className="text-primary">Social</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Dentro de los valores de nuestra empresa, encontramos la contribución del bienestar y desarrollo de las
              poblaciones colindantes donde estamos presentes, brindando apoyo a las comunidades cercanas en salud,
              educación, desarrollo productivo y fortalecimiento de capacidades.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Generamos ingresos para los pobladores de las zonas cercanas a nuestras operaciones mediante la
              contratación de mano de obra local, promoviendo el desarrollo económico sostenible de las comunidades.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">500+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Familias Beneficiadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">80%</div>
                <div className="text-sm sm:text-base text-muted-foreground">Mano de Obra Local</div>
              </div>
            </div>
          </div>

          {/* Initiatives */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {initiatives.map((initiative, index) => (
              <Card
                key={initiative.title}
                className="hover-lift scroll-reveal text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <initiative.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">{initiative.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 sm:mt-16 scroll-reveal">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/social.jpg"
              alt="Responsabilidad Social"
              className="w-full h-48 sm:h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Compromiso con la Comunidad</h3>
                <p className="text-sm sm:text-lg opacity-90">Construyendo un futuro mejor juntos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
