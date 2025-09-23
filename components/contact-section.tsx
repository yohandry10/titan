"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactSection() {
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfonos",
      details: ["+51 992 027 156", "+51 959 466 202"],
      color: "text-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["comercial@titansoluciones.com.pe"],
      color: "text-green-500",
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Av. Fernandini 142 - Sachaca", "Arequipa, Perú"],
      color: "text-red-500",
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 8:00 AM - 6:00 PM", "Sáb: 8:00 AM - 1:00 PM"],
      color: "text-purple-500",
    },
  ]

  return (
    <section ref={sectionRef} id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Agenda tu consulta <span className="text-primary">gratuita</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Estamos listos para evaluar tu proyecto y brindarte la mejor solución. Contáctanos y descubre cómo podemos
            ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Contact Form */}
          <Card className="scroll-reveal hover-lift">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Solicita tu Cotización</h3>
              <form className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1 sm:mb-2">Nombre *</label>
                    <Input placeholder="Tu nombre completo" name="nombre" autoComplete="name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1 sm:mb-2">Empresa</label>
                    <Input placeholder="Nombre de tu empresa" name="empresa" autoComplete="organization" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1 sm:mb-2">Email *</label>
                    <Input type="email" placeholder="tu@email.com" name="email" autoComplete="email" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1 sm:mb-2">Teléfono *</label>
                    <Input placeholder="+51 999 999 999" name="telefono" autoComplete="tel" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1 sm:mb-2">Tipo de Servicio</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="obras-civiles">Obras Civiles</SelectItem>
                      <SelectItem value="estructuras-metalicas">Estructuras Metálicas</SelectItem>
                      <SelectItem value="servicios-miscelaneos">Servicios Misceláneos</SelectItem>
                      <SelectItem value="consultoria">Consultoría</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1 sm:mb-2">Descripción del Proyecto *</label>
                  <Textarea
                    placeholder="Describe tu proyecto, ubicación, plazos y cualquier detalle relevante..."
                    rows={4}
                    name="descripcion"
                    required
                  />
                </div>
                <Button size="lg" className="w-full hover-glow">
                  <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 content-start self-start">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="scroll-reveal hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map - full width below grid to normalize heights */}
        <div className="mt-8 sm:mt-10 scroll-reveal">
          <Card className="hover-lift">
            <CardContent className="p-0">
              <div className="h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.293943180824!2d-71.56170572368367!3d-16.40989118432005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a888d617b17%3A0x3c2a9519598cdb59!2sAv.%20Fernandini%20142%2C%20Sachaca%2004013!5e0!3m2!1ses-419!2spe!4v1758405032386!5m2!1ses-419!2spe" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de TITAN Soluciones - Av. Fernandini 142, Sachaca, Arequipa"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 sm:mt-14 scroll-reveal">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">¿Tienes un proyecto urgente?</h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
              Contáctanos directamente para una respuesta inmediata. Nuestro equipo está disponible para atender tus
              necesidades.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Llamar Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent w-full sm:w-auto"
              >
                <Mail className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Enviar Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
