"use client"

export default function ServiciosPage() {
  const handleWhatsAppClick = () => {
    const message = "Hola! Me interesa conocer más sobre los servicios de TITAN Soluciones. ¿Podrían brindarme información detallada?"
    const phoneNumber = "51992027156"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <a href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
              ← Volver al inicio
            </a>
            <h1 className="text-5xl font-bold mb-6">
              Nuestros <span className="text-orange-500">Servicios</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Especialistas en ingeniería, construcción y mantenimiento para los sectores de minería, construcción e industria en Arequipa, Perú.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">¿Qué Hacemos?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              En TITAN Soluciones nos especializamos en brindar servicios integrales de ingeniería, construcción y mantenimiento. 
              Nuestro enfoque se centra en tres áreas principales que cubren las necesidades más importantes de la industria moderna.
            </p>
          </div>

          {/* Service Areas */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Obras Civiles</h3>
              <p className="text-gray-600 leading-relaxed">
                Desarrollamos infraestructura civil completa, desde excavaciones hasta complejos deportivos. 
                Nuestro equipo maneja proyectos de gran envergadura con los más altos estándares de calidad y seguridad.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Estructuras Metálicas</h3>
              <p className="text-gray-600 leading-relaxed">
                Diseñamos, fabricamos y montamos estructuras metálicas industriales. 
                Desde ingeniería de detalle hasta soldadura especializada, ofrecemos soluciones técnicas avanzadas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Servicios Especializados</h3>
              <p className="text-gray-600 leading-relaxed">
                Brindamos servicios complementarios de construcción y mantenimiento. 
                Desde albañilería hasta sistemas eléctricos, cubrimos todas las necesidades de tu proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Services */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Nuestras Especialidades</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Cada área de servicio cuenta con un equipo especializado y procesos optimizados para garantizar 
              la excelencia en cada proyecto que desarrollamos.
            </p>
          </div>

          {/* Obras Civiles */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">Proyectos de Obras Civiles</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Nuestra experiencia en obras civiles abarca desde proyectos de infraestructura básica hasta 
                  desarrollos complejos de gran escala. Trabajamos con las mejores prácticas de la industria 
                  y cumplimos con todos los estándares de calidad y seguridad requeridos.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Excavaciones y movimiento de tierras con maquinaria especializada</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Construcción de vías de acceso vehiculares y peatonales</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Sistemas de drenaje y evacuación de aguas pluviales</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Construcción de terraplenes, plataformas y estructuras de concreto</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Desarrollo de complejos deportivos y recreativos</span>
                  </div>
                </div>
              </div>
              <div className="h-96 rounded-2xl overflow-hidden">
                <img 
                  src="/hero.jpg" 
                  alt="Obras Civiles - TITAN Soluciones" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Estructuras Metálicas */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="h-96 rounded-2xl overflow-hidden">
                  <img 
                    src="/hero2.jpg" 
                    alt="Estructuras Metálicas - TITAN Soluciones" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-black mb-6">Estructuras Metálicas</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Contamos con un equipo de ingenieros especializados en el diseño y cálculo de estructuras metálicas. 
                  Nuestro taller de fabricación está equipado con tecnología de punta para garantizar la precisión 
                  y calidad en cada elemento que producimos.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Ingeniería de detalle y planos de fabricación especializados</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Cálculo y diseño de estructuras con software avanzado</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Montaje y alineamiento de estructuras con precisión milimétrica</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Soldadura especializada con certificaciones internacionales</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Construcción de naves industriales completas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicios Misceláneos */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">Servicios Especializados</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Ofrecemos una amplia gama de servicios complementarios que cubren todas las necesidades 
                  de construcción y mantenimiento. Nuestro equipo multidisciplinario está capacitado para 
                  manejar proyectos diversos con la misma calidad y profesionalismo.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Trabajos de albañilería, carpintería y gasfitería especializada</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Instalación de pisos, techos y sistemas de drywall</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Mantenimiento preventivo y correctivo de infraestructuras</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Obras eléctricas especializadas para proyectos industriales</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span className="text-gray-600">Trabajos en geomembrana y sistemas de impermeabilización</span>
                  </div>
                </div>
              </div>
              <div className="h-96 rounded-2xl overflow-hidden">
                <img 
                  src="/civil-construction-projects.jpg" 
                  alt="Servicios Especializados - TITAN Soluciones" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">¿Por qué elegirnos?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Nuestra experiencia y compromiso con la excelencia nos distinguen en el mercado peruano.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Cumplimos con los más altos estándares de calidad y certificaciones internacionales.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Entrega Puntual</h3>
              <p className="text-gray-600">
                Respetamos los plazos acordados y entregamos proyectos en tiempo y forma.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Seguridad Primero</h3>
              <p className="text-gray-600">
                Implementamos protocolos de seguridad rigurosos en todos nuestros proyectos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Equipo Experto</h3>
              <p className="text-gray-600">
                Contamos con profesionales altamente capacitados y con amplia experiencia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Necesitas nuestros servicios?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contáctanos para conocer más sobre nuestros servicios y cómo podemos ayudarte con tu próximo proyecto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-lg font-semibold"
            >
              Solicitar por WhatsApp
            </button>
            <a href="#contacto" className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 text-lg rounded-lg font-semibold">
              Contactar Ahora
            </a>
            <a href="/proyectos" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg font-semibold">
              Ver Nuestros Proyectos
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}