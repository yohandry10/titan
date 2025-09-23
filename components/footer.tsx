"use client"

import { Phone, Mail, MapPin, Globe, Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Company Info - Full Width */}
        <div className="text-center mb-6">
          <div className="relative w-48 h-16 sm:w-56 sm:h-20 md:w-64 md:h-24 lg:w-72 lg:h-28 xl:w-80 xl:h-32 mx-auto mb-3">
            <Image 
              src="/logo.png" 
              alt="Titan Soluciones" 
              fill
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
              className="object-contain"
            />
          </div>
          <p className="text-gray-300 leading-relaxed mb-3 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Empresa dedicada a la prestación de servicios en los sectores de minería, construcción e industria con más
            de 8 años de experiencia.
          </p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Services and Links - 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/proyectos/obras-civiles" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  Obras Civiles
                </a>
              </li>
              <li>
                <a href="/proyectos/estructuras-metalicas" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  Estructuras Metálicas
                </a>
              </li>
              <li>
                <a href="/proyectos/servicios-miscelaneos" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  Servicios Misceláneos
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/proyectos" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contacto</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 text-sm sm:text-base">+51 992 027 156</div>
                  <div className="text-gray-300 text-sm sm:text-base">+51 959 466 202</div>
                </div>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">comercial@titansoluciones.com.pe</div>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  Av. Fernandini 142 - Sachaca
                  <br />
                  Arequipa, Perú
                </div>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">www.titansoluciones.com.pe</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-0 text-center sm:text-left">
            © 2025 TITAN Soluciones. Todos los derechos reservados.
          </div>
          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
