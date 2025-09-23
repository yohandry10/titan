"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Eye, 
  Share2, 
  Bookmark,
  Search,
  Filter,
  TrendingUp,
  Award,
  Users,
  Building2,
  Zap,
  ArrowLeft,
  Tag
} from "lucide-react"
import Link from "next/link"

export default function NoticiasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const allNews = [
    {
      id: 1,
      title: "Compromiso con la Excelencia en Construcción",
      excerpt: "TITAN Soluciones continúa desarrollando proyectos de construcción civil e industrial con los más altos estándares de calidad y seguridad.",
      content: "Nuestro compromiso con la excelencia se refleja en cada proyecto que desarrollamos, aplicando las mejores prácticas de la industria...",
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
      content: "La infraestructura vial es fundamental para el desarrollo económico y social de cualquier región...",
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
      content: "La capacitación continua de nuestro equipo es una inversión en la calidad de nuestros servicios...",
      image: "/complejo.jpg",
      category: "Capacitación",
      date: "2024-03-05",
      readTime: "2 min",
      views: 650,
      featured: true,
      icon: Users
    },
    {
      id: 4,
      title: "Tecnología Avanzada en Construcción",
      excerpt: "Utilizamos las últimas tecnologías y metodologías para garantizar la eficiencia y calidad en todos nuestros proyectos.",
      content: "La implementación de tecnología avanzada nos permite optimizar procesos y mejorar resultados...",
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
      content: "Implementamos protocolos rigurosos de seguridad para garantizar el bienestar de todo nuestro equipo...",
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
      content: "Nuestro compromiso ambiental se refleja en cada decisión que tomamos durante el desarrollo de proyectos...",
      category: "Medio Ambiente",
      date: "2024-02-15",
      readTime: "4 min",
      views: 520,
      icon: TrendingUp
    }  ]

 
 const categories = ["Todas", "Servicios", "Especialización", "Capacitación", "Tecnología", "Seguridad", "Medio Ambiente"]

  const filteredNews = allNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todas" || news.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Información y Novedades
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Mantente informado sobre nuestros servicios, capacidades y compromiso con la excelencia
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Buscar información..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredNews.length} {filteredNews.length === 1 ? 'resultado' : 'resultados'} encontrados
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news, index) => (
              <Card
                key={news.id}
                className="group hover-lift cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setHoveredCard(news.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {news.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <Badge className={`absolute top-4 left-4 ${getCategoryColor(news.category)} text-white border-0`}>
                      <Tag className="w-3 h-3 mr-1" />
                      {news.category}
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {news.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(news.date).toLocaleDateString('es-ES', { 
                          day: 'numeric', 
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                      {news.readTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {news.readTime}
                        </div>
                      )}
                    </div>
                    {news.views && (
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {news.views}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center text-primary text-sm font-medium transition-all duration-300 ${
                      hoveredCard === news.id ? 'translate-x-2' : ''
                    }`}>
                      Leer más
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="hover:bg-primary/10 p-1">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-primary/10 p-1">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-muted-foreground mb-6">
                Intenta con otros términos de búsqueda o selecciona una categoría diferente
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("Todas")
                }}
                variant="outline"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}