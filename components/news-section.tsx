"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Eye, 
  Share2, 
  Bookmark,
  TrendingUp,
  Award,
  Users,
  Building2,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import Link from "next/link"

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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

  const featuredNews = [
    {
      id: 1,
      title: "Compromiso con la Excelencia en Construcción",
      excerpt: "TITAN Soluciones continúa desarrollando proyectos de construcción civil e industrial con los más altos estándares de calidad y seguridad.",
      image: "/estructura11.png",
      category: "Servicios",
      date: "2024-03-15",
      readTime: "3 min",
      views: 1250,
      featured: true,
      icon: Building2
    },
    {
      id: 2,
      title: "Especialistas en Infraestructura Vial",
      excerpt: "Nuestro equipo especializado en construcción vial trabaja con tecnología de punta para garantizar proyectos duraderos y sostenibles.",
      image: "/carretera-asfaltado.jpg",
      category: "Especialización",
      date: "2024-03-10",
      readTime: "4 min",
      views: 890,
      featured: true,
      icon: Award
    },
    {
      id: 3,
      title: "Formación Continua de Nuestro Equipo",
      excerpt: "Invertimos constantemente en la capacitación de nuestros profesionales para mantenernos a la vanguardia de la industria.",
      image: "/complejo.jpg",
      category: "Capacitación",
      date: "2024-03-05",
      readTime: "2 min",
      views: 650,
      featured: true,
      icon: Users
    }
  ]

  const recentNews = [
    {
      id: 4,
      title: "Tecnología Avanzada en Construcción",
      excerpt: "Utilizamos las últimas tecnologías y metodologías para garantizar la eficiencia y calidad en todos nuestros proyectos.",
      category: "Tecnología",
      date: "2024-02-28",
      readTime: "5 min",
      views: 420,
      icon: Zap
    },
    {
      id: 5,
      title: "Compromiso con la Seguridad Laboral",
      excerpt: "La seguridad de nuestros trabajadores es nuestra prioridad número uno en cada proyecto que desarrollamos.",
      category: "Seguridad",
      date: "2024-02-20",
      readTime: "3 min",
      views: 380,
      icon: Award
    },
    {
      id: 6,
      title: "Responsabilidad Ambiental",
      excerpt: "Desarrollamos nuestros proyectos con conciencia ambiental, implementando prácticas sostenibles y responsables.",
      category: "Medio Ambiente",
      date: "2024-02-15",
      readTime: "4 min",
      views: 520,
      icon: TrendingUp
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length)
  }

  // Auto-slide para noticias destacadas
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const getCategoryColor = (category: string) => {
    const colors = {
      "Servicios": "bg-blue-500",
      "Especialización": "bg-yellow-500", 
      "Capacitación": "bg-green-500",
      "Tecnología": "bg-purple-500",
      "Seguridad": "bg-orange-500",
      "Medio Ambiente": "bg-emerald-500"
    }
    return colors[category as keyof typeof colors] || "bg-primary"
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Últimas Actualizaciones
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Noticias y <span className="text-primary">Novedades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mantente al día con los últimos desarrollos, logros y proyectos innovadores de TITAN Soluciones
          </p>
        </div>

        {/* Noticias Destacadas - Carrusel */}
        <div className="mb-16 scroll-reveal">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredNews.map((news, index) => (
                  <div key={news.id} className="w-full flex-shrink-0">
                    <Card className="border-0 shadow-2xl overflow-hidden bg-white">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Imagen */}
                        <div className="relative h-64 lg:h-96 overflow-hidden">
                          <img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          <Badge className={`absolute top-4 left-4 ${getCategoryColor(news.category)} text-white border-0`}>
                            <news.icon className="w-3 h-3 mr-1" />
                            {news.category}
                          </Badge>
                          <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(news.date).toLocaleDateString('es-ES', { 
                                day: 'numeric', 
                                month: 'long', 
                                year: 'numeric' 
                              })}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {news.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {news.views}
                            </div>
                          </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-tight">
                            {news.title}
                          </h3>
                          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            {news.excerpt}
                          </p>
                          <div className="flex items-center gap-4">
                            <Button className="hover-glow group">
                              Leer Más
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                                <Share2 className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                                <Bookmark className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles del carrusel */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 gap-2">
              {featuredNews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Noticias Recientes - Grid */}
        <div className="scroll-reveal">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-foreground">Información Adicional</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentNews.map((news, index) => (
              <Card
                key={news.id}
                className="group hover-lift cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setHoveredCard(news.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${getCategoryColor(news.category)} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      <news.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {news.category}
                      </Badge>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                        {news.title}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(news.date).toLocaleDateString('es-ES', { 
                          day: 'numeric', 
                          month: 'short' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {news.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {news.views}
                    </div>
                  </div>
                  
                  <div className={`mt-4 flex items-center text-primary text-sm font-medium transition-all duration-300 ${
                    hoveredCard === news.id ? 'translate-x-2' : ''
                  }`}>
                    Leer más
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 scroll-reveal">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Mantente Informado
                </h3>
                <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8">
                  Suscríbete a nuestro boletín y recibe las últimas noticias, proyectos y oportunidades directamente en tu correo
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-4 py-3 rounded-lg text-foreground border-0 focus:ring-2 focus:ring-white/50 outline-none"
                  />
                  <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8">
                    Suscribirse
                  </Button>
                </div>
                <p className="text-sm opacity-75 mt-4">
                  No spam. Puedes cancelar tu suscripción en cualquier momento.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}