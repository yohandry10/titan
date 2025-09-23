"use client"

import { useState, useEffect } from 'react'
import { ChevronRight, Play, Pause, ArrowRight, CheckCircle, Star, Award, Shield, Clock } from 'lucide-react'

export default function ServiciosPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const projects = [
    {
      id: 1,
      empresa: 'CONSORCIO PIRAMIDE',
      servicio: 'CONSTRUCCION DE INFRAESTRUCTURA VIAL EN LA ASOCIACION DE VIVIENDA LA PRADERA III Y IV ETAPA DISTRITO CORONEL GREGORIO ALBARRACIN LANCHIPA-TACNA',
      periodo: 'Marzo – Setiembre 2016',
      imagen: '/carretera-asfaltado.jpg'
    },
    {
      id: 2,
      empresa: 'CONSORCIO PUENTE ANTACCARA',
      servicio: 'CREACION DEL PUENTE CARROZABLE ANTACCARA EN EL SECTOR DE HUAYLLUMAYO DE LA COMUNIDAD CAMPESINA DE ALTO AYRACCOLLANA, DISTRITO DE COPORAQUE – ESPINAR, CUSCO',
      periodo: 'Setiembre 2015',
      imagen: '/Mejoramiento-de-carretera-obras-compressed.jpg.webp'
    },
    {
      id: 3,
      empresa: 'MUNICIPALIDAD DISTRITAL DE HUAMBO',
      servicio: 'SERVICIO DE REFORMULACION DE EXPEDIENTE TECNICO MEJORAMIENTO DEL SERVICIO DE TRANSITABILIDAD VEHICULAR EN EL CAMINO VECINAL KM 4+404 DE LA CARRETERA YANACOTO SAJARHUA - DISTRITO DE HUAMBO, PROVINCIA DE CAYLLOMA, AREQUIPA.',
      ubicacion: 'DISTRITO DE HUAMBO, PROVINCIA DE CAYLLOMA, AREQUIPA',
      imagen: '/civil-construction-projects.jpg'
    },
    {
      id: 4,
      empresa: 'GOBIERNO REGIONAL DE AREQUIPA',
      servicio: 'SERVICIO DE ELABORACION DEL EXPEDIENTE TECNICO "MEJORAMIENTO DEL SERVICIO DE TRANSITABILIDAD VEHICULAR EN EL TRAMO 2- 358 CALLE PRINCIPAL S/N DESDE EL ARCO HASTA EL INICIO DE TROCHA, DEL DISTRITO DE POCSI, PROVINCIA AREQUIPA, REGION AREQUIPA"',
      ubicacion: 'DISTRITO DE POCSI, AREQUIPA, REGION AREQUIPA',
      periodo: 'Octubre 2018',
      imagen: '/agua.jpg'
    },
    {
      id: 5,
      empresa: 'MUNICIPALIDAD DISTRITAL DE PAUCARPATA',
      servicio: 'SERVICIO DE SOLDADURA PARA REPARACION DE JUEGOS INFANTILES, CERCO Y PUERTAS METALICAS EN PARQUES CMT 8-10 P.J.ISRAEL, PARQUE ENTRE LA CALLE VIRGEN DE CHAPI MZ"N" CIUDAD BLANCA,PARQUE DEL NIÑO (LOS SENTIDOS)INCLUYE TODOS LOS MAT. METAL,SOLDAD.Y OTROS',
      ubicacion: 'AREQUIPA',
      periodo: 'Octubre 2018',
      imagen: '/metalica.png'
    },
    {
      id: 6,
      empresa: 'MUNICIPALIDAD DISTRITAL DE PAUCARPATA',
      servicio: 'SERVICIO MANTENIMIENTO PREVENTIVO Y CORRECTIVO DE JUEGOS INFANTILES EN FIBRA DE VIDRIO EN PARQUES Y JARDINES. SEGUN ORDEN DE SERVICIO 574.',
      ubicacion: 'AREQUIPA',
      periodo: 'Setiembre 2018',
      imagen: '/mantenimiento.png'
    },
    {
      id: 7,
      empresa: 'MUNICIPALIDAD DISTRITAL DE PAUCARPATA',
      servicio: 'SERVICIO DE PINTADO DE AMBIENTES, SERVICIO DE PINTADO DEL MANTENIMIENTO DENOMINADO MANTENIMIENTO DEL ESTADIO RECREACIONAL DEL NIÑO DEL DISTRITO DE PAUCARPATA, SEGUN ORDEN DE SERVICIO NRO 705.',
      ubicacion: 'AREQUIPA',
      periodo: 'Octubre 2024',
      imagen: '/arbañileria.png'
    },
    {
      id: 8,
      empresa: 'MUNICIPALIDAD DISTRITAL DE PAUCARPATA',
      servicio: 'SERVICIO DE MANTENIMIENTO DE CESPED NATURAL,SERVICIO DE ASENTADO DE BLOCK GRASS NATURAL DEL MANTENIMIENTO Y ACONDICIONAMIENTO DEL ESTADIO CIUDAD BLANCA DEL DISTRITO DE PAUCARPATA, SEGUN ORDEN DE SERVICIO NRO 703.',
      ubicacion: 'AREQUIPA',
      periodo: 'Octubre 2018',
      imagen: '/complejo.jpg'
    },
    {
      id: 9,
      empresa: 'COSAPI S.A.',
      servicio: 'SERVICIO DE ALQUILER DE GRUA HIDRAULICA ARTICULADA SOBRE CAMION 6X4 DE 14 TN. 16 HRM PRECIO UNIT S/172.',
      ubicacion: 'AREQUIPA',
      periodo: 'Setiembre 2018',
      imagen: '/estructura11.png'
    },
    {
      id: 10,
      empresa: 'COSAPI S.A.',
      servicio: 'SUMINISTRO E INSTALACION DE IMPERMEABILIZANTE',
      ubicacion: 'AREQUIPA',
      periodo: 'Abril 2018',
      imagen: '/geomembrana.png'
    },
    {
      id: 11,
      empresa: 'COSAPI S.A.',
      servicio: 'SERVICIO DE MOVIMIENTO DE TIERRA',
      ubicacion: 'AREQUIPA',
      periodo: 'Abril 2018',
      imagen: '/compactacion-de-terraplen-276316.webp'
    }
  ]


  const features = [
    { icon: Award, title: 'Calidad Certificada', description: 'Estándares internacionales ISO' },
    { icon: Shield, title: 'Seguridad Garantizada', description: 'Protocolos de seguridad rigurosos' },
    { icon: Clock, title: 'Entrega Puntual', description: 'Cumplimiento de plazos garantizado' },
    { icon: Star, title: 'Excelencia Técnica', description: 'Equipo de ingenieros especializados' }
  ]



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
            Nuestros Proyectos
            <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Especializados
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
              Explorar Proyectos
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


      {/* Projects Section */}
      <div id="servicios-detalle" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-black mb-6">
              Proyectos <span className="text-orange-500">Ejecutados</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Cada proyecto refleja nuestro compromiso con la excelencia, calidad y cumplimiento de plazos
            </p>
            
            {/* Featured Images */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/carretera-asfaltado.jpg"
                  alt="Infraestructura Vial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Infraestructura Vial</h3>
                  <p className="text-sm opacity-90">Construcción y mejoramiento</p>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/estructura11.png"
                  alt="Estructuras Metálicas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Estructuras Metálicas</h3>
                  <p className="text-sm opacity-90">Fabricación y montaje</p>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/mantenimiento.png"
                  alt="Servicios Especializados"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Servicios Especializados</h3>
                  <p className="text-sm opacity-90">Mantenimiento y reparación</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {/* Project Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.imagen}
                    alt={`Proyecto ${project.empresa}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Proyecto #{project.id}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-lg font-bold text-orange-600 uppercase tracking-wide">EMPRESA/ENTIDAD:</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 leading-tight">{project.empresa}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-lg font-bold text-orange-600 uppercase tracking-wide">SERVICIO:</span>
                    <p className="text-base text-gray-800 leading-relaxed mt-2">{project.servicio}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    {project.ubicacion && (
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-bold text-orange-600 uppercase tracking-wide">UBICACIÓN:</span>
                        <p className="text-base text-gray-700 mt-1">{project.ubicacion}</p>
                      </div>
                    )}
                    {project.periodo && (
                      <div className="flex-shrink-0">
                        <span className="text-sm font-bold text-orange-600 uppercase tracking-wide">PERÍODO:</span>
                        <p className="text-base font-semibold text-white mt-1 bg-orange-500 px-3 py-1 rounded-lg">{project.periodo}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
      <div 
        className="py-20 bg-fixed bg-cover bg-center relative"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Contenido con z-index para estar sobre el overlay */}
        <div className="relative z-10">
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
      <div className="relative py-20 overflow-hidden bg-gray-600">
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
              Ver Todos los Servicios
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
      </div>
    </div>
  )
}