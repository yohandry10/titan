"use client"

import { useState, useEffect } from 'react'
import { ChevronRight, Play, Pause, ArrowRight, CheckCircle, Star, Award, Shield, Clock } from 'lucide-react'

export default function ServiciosPage() {
  const [activeService, setActiveService] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const services = [
    {
      id: 'obras-civiles',
      title: 'Proyectos de Obras Civiles',
      subtitle: 'Construcción de infraestructura civil con los más altos estándares de calidad',
      description: 'Desarrollamos infraestructura civil completa con tecnología de vanguardia y procesos optimizados que garantizan resultados excepcionales en cada proyecto.',
      icon: '🏗️',
      color: 'from-blue-600 to-blue-800',
      images: [
        '/carretera-asfaltado.jpg',
        '/compactacion-de-terraplen-276316.webp',
        '/Mejoramiento-de-carretera-obras-compressed.jpg.webp',
        '/reservorio.jpg',
        '/complejo.jpg',
        '/agua.jpg',
        '/alcantarillado.jpg',
        '/civil-construction-projects.jpg'
      ],
      services: [
        'Excavaciones y movimiento de tierras',
        'Habilitación y mantenimiento de vías de acceso',
        'Construcción de vías de acceso (vehiculares, vías carrozables y peatonales)',
        'Construcción de sistemas de evacuación de aguas pluviales a canal abierto',
        'Construcción de terraplenes y plataformas',
        'Construcción de lozas y veredas de concreto',
        'Alcantarillado y saneamiento',
        'Construcción de reservorios y mini represas',
        'Construcción de complejos deportivos y recreativos'
      ]
    },
    {
      id: 'estructuras-metalicas',
      title: 'Estructuras Metálicas',
      subtitle: 'Diseño, fabricación y montaje de estructuras metálicas industriales',
      description: 'Especialistas en ingeniería de precisión con soldadura certificada y montaje de estructuras industriales de gran envergadura.',
      icon: '⚙️',
      color: 'from-orange-600 to-red-600',
      images: [
        '/estructura.png',
        '/estructura11.png',
        '/metalica.png',
        '/fabricacion.png',
        '/Montaje.jpg',
        '/escalera.png',
        '/nave.png',
        '/INDUSTRIAL.png',
        '/metal.png'
      ],
      services: [
        'Ingeniería de detalle y planos de fabricación',
        'Cálculo y diseño de estructuras',
        'Montaje y alineamiento de estructuras',
        'Fabricación y montaje de estructuras',
        'Fabricación e instalación de escaleras industriales, vigas, techos y pórticos',
        'Fabricación de chutes, guardas y coberturas',
        'Construcción y montaje de naves industriales',
        'Soldadura especializada y certificada',
        'Reforzamiento de estructuras existentes'
      ]
    },
    {
      id: 'servicios-miscelaneos',
      title: 'Servicios Misceláneos',
      subtitle: 'Servicios complementarios de construcción y mantenimiento',
      description: 'Soluciones integrales que cubren todas las necesidades complementarias de tu proyecto con la misma calidad y profesionalismo.',
      icon: '🔧',
      color: 'from-gray-600 to-gray-800',
      images: [
        '/drywall.jpg',
        '/arbañileria.png',
        '/electrica.png',
        '/anaqueles.png',
        '/lona.png',
        '/geomembrana.png',
        '/mantenimiento.png',
        '/elec.png'
      ],
      services: [
        'Trabajos misceláneos de obras civiles y obras eléctricas',
        'Trabajos de albañilería, carpintería y gasfitería',
        'Trabajos de instalación de pisos y montaje de techos',
        'Mantenimiento de viviendas, campamentos, oficinas y almacenes',
        'Mantenimiento preventivo, correctivo y renovación de infraestructuras (interiores y exteriores)',
        'Obras eléctricas para proyectos de sostenimiento',
        'Instalación de coberturas de lona',
        'Sistemas de drywall y tabiquería',
        'Armado e instalación de anaqueles',
        'Trabajos en geomembrana'
      ]
    }
  ]


  const features = [
    { icon: Award, title: 'Calidad Certificada', description: 'Estándares internacionales ISO' },
    { icon: Shield, title: 'Seguridad Garantizada', description: 'Protocolos de seguridad rigurosos' },
    { icon: Clock, title: 'Entrega Puntual', description: 'Cumplimiento de plazos garantizado' },
    { icon: Star, title: 'Excelencia Técnica', description: 'Equipo de ingenieros especializados' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        (prev + 1) % services[activeService].images.length
      )
    }, 4000)
    return () => clearInterval(interval)
  }, [activeService, services])

  const handleWhatsAppClick = (service?: string) => {
    const message = service 
      ? `Hola! Me interesa conocer más sobre ${service} de TITAN Soluciones. ¿Podrían brindarme información detallada?`
      : "Hola! Me interesa conocer más sobre los servicios de TITAN Soluciones. ¿Podrían brindarme información detallada?"
    const phoneNumber = "51992027156"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/copia6.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-8">
          <div className="mb-8">
            <a href="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors group">
              <ArrowRight className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Volver al inicio
            </a>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            Servicios de
            <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Clase Mundial
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transformamos ideas en realidad con ingeniería de precisión, 
            construcción de vanguardia y mantenimiento especializado
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => handleWhatsAppClick()}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-5 text-xl rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
            >
              <span className="mr-3">💬</span>
              Consulta Gratuita
            </button>
            <button 
              onClick={() => document.getElementById('servicios-detalle')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-5 text-xl rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center"
            >
              Explorar Servicios
              <ChevronRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <ChevronRight className="w-8 h-8 text-white rotate-90" />
          </div>
        </div>
      </div>


      {/* Interactive Services Section */}
      <div id="servicios-detalle" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">
              Nuestras <span className="text-orange-500">Especialidades</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cada servicio está respaldado por años de experiencia, tecnología de vanguardia 
              y un equipo de profesionales comprometidos con la excelencia
            </p>
          </div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveService(index)
                  setCurrentImageIndex(0)
                }}
                className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeService === index
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-lg'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:h-[500px]">
              {/* Image Gallery */}
              <div className="lg:w-1/2 relative h-[400px] lg:h-full service-image-container">
                <img 
                  src={services[activeService].images[currentImageIndex]}
                  alt={services[activeService].title}
                  className="service-image"
                  onError={(e) => {
                    console.log('Error loading image:', services[activeService].images[currentImageIndex]);
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${services[activeService].color} opacity-20`}></div>
                
                {/* Image Navigation Dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {services[activeService].images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 lg:h-full p-6 lg:p-8 flex flex-col justify-center overflow-hidden">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-black mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-lg text-orange-600 font-semibold mb-3">
                    {services[activeService].subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {services[activeService].description}
                  </p>
                </div>

                {/* Services List */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-lg font-bold text-black mb-2">Servicios Incluidos:</h4>
                  <div className="grid gap-1 max-h-32 overflow-y-auto pr-2">
                    {services[activeService].services.slice(0, 5).map((service, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-xs leading-tight">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => handleWhatsAppClick(services[activeService].title)}
                  className={`w-full bg-gradient-to-r ${services[activeService].color} text-white py-3 px-6 rounded-xl text-sm font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mt-auto`}
                >
                  <span className="mr-2">💬</span>
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">
              Nuestro <span className="text-orange-500">Proceso</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Un enfoque sistemático que garantiza resultados excepcionales en cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consulta Inicial', description: 'Análisis detallado de requerimientos y evaluación técnica', icon: '🔍' },
              { step: '02', title: 'Diseño & Planificación', description: 'Desarrollo de planos técnicos y cronograma de ejecución', icon: '📐' },
              { step: '03', title: 'Ejecución', description: 'Implementación con supervisión continua y control de calidad', icon: '⚡' },
              { step: '04', title: 'Entrega & Soporte', description: 'Entrega certificada con garantía y soporte post-proyecto', icon: '✅' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{process.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20" style={{backgroundColor: '#2a313b'}}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              ¿Por qué <span className="text-orange-500">TITAN Soluciones</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Nuestra experiencia, tecnología y compromiso nos posicionan como líderes en el sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { title: 'Tecnología Avanzada', description: 'Equipos de última generación y software especializado', icon: '🚀' },
              { title: 'Equipo Multidisciplinario', description: 'Ingenieros, arquitectos y técnicos especializados', icon: '👥' },
              { title: 'Sostenibilidad', description: 'Prácticas ambientalmente responsables en todos nuestros proyectos', icon: '🌱' }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">
              Lo que dicen nuestros <span className="text-orange-500">clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ing. Carlos Mendoza',
                company: 'Proyecto Minero Arequipa',
                testimonial: 'TITAN Soluciones superó nuestras expectativas. Su profesionalismo y calidad técnica son excepcionales.',
                rating: 5
              },
              {
                name: 'María González',
                company: 'Constructora del Sur',
                testimonial: 'Trabajar con TITAN ha sido una experiencia extraordinaria. Cumplen plazos y mantienen los más altos estándares.',
                rating: 5
              },
              {
                name: 'Roberto Silva',
                company: 'Industrias Peruanas SAC',
                testimonial: 'Su expertise en estructuras metálicas es incomparable. Recomiendo TITAN sin dudarlo.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
                <div>
                  <div className="font-bold text-black">{testimonial.name}</div>
                  <div className="text-orange-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-20 overflow-hidden" style={{backgroundColor: '#2a313b'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            ¿Listo para tu próximo
            <span className="block text-yellow-300">Proyecto?</span>
          </h2>
          
          <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transformemos tus ideas en realidad con la experiencia y calidad que solo TITAN Soluciones puede ofrecer
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button 
              onClick={() => handleWhatsAppClick()}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
            >
              <span className="mr-3">💬</span>
              Consulta Gratuita por WhatsApp
            </button>
            
            <a 
              href="/proyectos" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-12 py-6 text-xl rounded-full font-bold hover:bg-white/20 transition-all duration-300 flex items-center"
            >
              Ver Nuestros Proyectos
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-white/90">
            <div className="flex items-center justify-center">
              <span className="mr-3">📞</span>
              <span>+51 992 027 156</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-3">📧</span>
              <span>info@titansoluciones.pe</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-3">📍</span>
              <span>Arequipa, Perú</span>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  )
}