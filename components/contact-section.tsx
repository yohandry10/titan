"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Calendar,
  CheckCircle2,
  Star,
  Zap,
  Shield,
  Award,
  Users,
  MessageCircle,
  Video,
  FileText,
  ArrowRight,
  Sparkles
} from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedStep, setSelectedStep] = useState(0)
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    descripcion: '',
    presupuesto: '',
    urgencia: ''
  })

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

  const consultationSteps = [
    {
      id: 0,
      title: "Información Básica",
      description: "Cuéntanos sobre ti y tu proyecto",
      icon: Users,
      fields: ['nombre', 'empresa', 'email', 'telefono']
    },
    {
      id: 1,
      title: "Detalles del Proyecto",
      description: "Especifica qué necesitas",
      icon: FileText,
      fields: ['servicio', 'descripcion', 'presupuesto']
    },
    {
      id: 2,
      title: "Agenda tu Consulta",
      description: "Elige cuándo quieres hablar con nosotros",
      icon: Calendar,
      fields: ['urgencia']
    }
  ]



  const contactMethods = [
    {
      icon: Phone,
      title: "Llamada Directa",
      subtitle: "Habla con un experto ahora",
      action: "Llamar",
      details: ["+51 992 027 156", "+51 959 466 202"],
      color: "bg-[#2a313b]",
      hoverColor: "hover:bg-[#1f252a]"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      subtitle: "Chat directo y rápido",
      action: "Chatear",
      details: ["Respuesta inmediata"],
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      icon: Mail,
      title: "Email Profesional",
      subtitle: "Documentación detallada",
      action: "Escribir",
      details: ["comercial@titansoluciones.com.pe"],
      color: "bg-[#2a313b]",
      hoverColor: "hover:bg-[#1f252a]"
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isStepComplete = (stepId: number) => {
    const step = consultationSteps[stepId]
    return step.fields.every(field => formData[field as keyof typeof formData])
  }

  const canProceedToNext = () => {
    return isStepComplete(selectedStep)
  }

  return (
    <section 
      ref={sectionRef} 
      id="contacto" 
      className="py-20 bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/drywall.jpg)' }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Contenido con z-index para estar sobre el overlay */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-[#ff6b35]/10 text-[#ff6b35] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Consulta Gratuita Disponible
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Agenda una consulta personalizada con nuestros expertos. Te ayudamos a planificar, diseñar y ejecutar tu proyecto con la más alta calidad.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Interactive Step Form */}
          <div className="lg:col-span-2">
            <Card className="scroll-reveal hover-lift bg-white/80 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-8">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-8">
                  {consultationSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                          selectedStep === index 
                            ? 'bg-primary text-white shadow-lg scale-110' 
                            : isStepComplete(index)
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                        onClick={() => setSelectedStep(index)}
                      >
                        {isStepComplete(index) && selectedStep !== index ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <step.icon className="w-6 h-6" />
                        )}
                      </div>
                      {index < consultationSteps.length - 1 && (
                        <div className={`w-16 h-1 mx-4 transition-all duration-300 ${
                          isStepComplete(index) ? 'bg-green-500' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Current Step Content */}
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                    {consultationSteps[selectedStep].title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {consultationSteps[selectedStep].description}
                  </p>

                  {/* Step 0: Basic Information */}
                  {selectedStep === 0 && (
                    <div className="space-y-4 animate-in slide-in-from-right-5 duration-300">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Nombre Completo *</label>
                          <Input 
                            placeholder="Tu nombre completo" 
                            value={formData.nombre}
                            onChange={(e) => handleInputChange('nombre', e.target.value)}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Empresa</label>
                          <Input 
                            placeholder="Nombre de tu empresa" 
                            value={formData.empresa}
                            onChange={(e) => handleInputChange('empresa', e.target.value)}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                          <Input 
                            type="email" 
                            placeholder="tu@email.com" 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Teléfono *</label>
                          <Input 
                            placeholder="+51 999 999 999" 
                            value={formData.telefono}
                            onChange={(e) => handleInputChange('telefono', e.target.value)}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 1: Project Details */}
                  {selectedStep === 1 && (
                    <div className="space-y-4 animate-in slide-in-from-right-5 duration-300">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Tipo de Servicio *</label>
                          <Select value={formData.servicio} onValueChange={(value) => handleInputChange('servicio', value)}>
                            <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                              <SelectValue placeholder="Selecciona un servicio" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="obras-civiles">Obras Civiles</SelectItem>
                              <SelectItem value="estructuras-metalicas">Estructuras Metálicas</SelectItem>
                              <SelectItem value="servicios-miscelaneos">Servicios Misceláneos</SelectItem>
                              <SelectItem value="consultoria">Consultoría Especializada</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Presupuesto Estimado</label>
                          <Select value={formData.presupuesto} onValueChange={(value) => handleInputChange('presupuesto', value)}>
                            <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                              <SelectValue placeholder="Rango de inversión" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="menos-50k">Menos de S/50,000</SelectItem>
                              <SelectItem value="50k-200k">S/50,000 - S/200,000</SelectItem>
                              <SelectItem value="200k-500k">S/200,000 - S/500,000</SelectItem>
                              <SelectItem value="500k-mas">Más de S/500,000</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Descripción del Proyecto *</label>
                        <Textarea
                          placeholder="Describe tu proyecto: ubicación, objetivos, plazos, requisitos especiales..."
                          rows={4}
                          value={formData.descripcion}
                          onChange={(e) => handleInputChange('descripcion', e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Schedule Consultation */}
                  {selectedStep === 2 && (
                    <div className="space-y-6 animate-in slide-in-from-right-5 duration-300">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">¿Qué tan urgente es tu proyecto? *</label>
                        <Select value={formData.urgencia} onValueChange={(value) => handleInputChange('urgencia', value)}>
                          <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                            <SelectValue placeholder="Selecciona la urgencia" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inmediato">Inmediato (esta semana)</SelectItem>
                            <SelectItem value="1-2-semanas">1-2 semanas</SelectItem>
                            <SelectItem value="1-mes">Dentro de 1 mes</SelectItem>
                            <SelectItem value="planificando">Solo estoy planificando</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <Star className="w-5 h-5 text-primary" />
                          ¿Qué incluye tu consulta gratuita?
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Análisis técnico de tu proyecto
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Estimación preliminar de costos
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Cronograma tentativo de ejecución
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Recomendaciones de nuestros expertos
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedStep(Math.max(0, selectedStep - 1))}
                    disabled={selectedStep === 0}
                    className="transition-all duration-200"
                  >
                    Anterior
                  </Button>
                  
                  {selectedStep < consultationSteps.length - 1 ? (
                    <Button 
                      onClick={() => setSelectedStep(selectedStep + 1)}
                      disabled={!canProceedToNext()}
                      className="transition-all duration-200 hover-glow"
                    >
                      Siguiente
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  ) : (
                    <Button 
                      size="lg" 
                      disabled={!canProceedToNext()}
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-200 hover-glow"
                    >
                      <Calendar className="mr-2 w-5 h-5" />
                      Agendar Consulta Gratuita
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-medium text-foreground mb-4">¿Prefieres contacto directo?</h3>
            {contactMethods.map((method, index) => (
              <Card key={method.title} className={`scroll-reveal hover-lift cursor-pointer transition-all duration-300 hover:scale-105 ${method.color} text-white hover:shadow-xl`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{method.title}</h4>
                      <p className="text-sm opacity-90">{method.subtitle}</p>
                    </div>
                    <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
                      {method.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Map & Office Info */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="scroll-reveal hover-lift bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
              <CardContent className="p-0">
                <div className="h-80 rounded-xl overflow-hidden relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.293943180824!2d-71.56170572368367!3d-16.40989118432005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a888d617b17%3A0x3c2a9519598cdb59!2sAv.%20Fernandini%20142%2C%20Sachaca%2004013!5e0!3m2!1ses-419!2spe!4v1758405032386!5m2!1ses-419!2spe" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de TITAN Soluciones - Av. Fernandini 142, Sachaca, Arequipa"
                    className="transition-all duration-300 hover:saturate-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      Nuestra Oficina Principal
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <Card className="scroll-reveal hover-lift bg-white/80 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Dirección</h4>
                    <p className="text-sm text-muted-foreground">Av. Fernandini 142 - Sachaca</p>
                    <p className="text-sm text-muted-foreground">Arequipa, Perú</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="scroll-reveal hover-lift bg-white/80 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Horarios</h4>
                    <p className="text-sm text-muted-foreground">Lun - Vie: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sáb: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


        </div>
      </div>
    </section>
  )
}
