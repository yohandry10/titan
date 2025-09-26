"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen(v => !v)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out animate-navbar-slide-in ${isScrolled ? "navbar-glass-scrolled" : "navbar-glass"
        }`}
    >
      {/* Ancho completo sin padding lateral para poder colgar el logo */}
      <div className="w-full max-w-none px-0">
        {/* Contenedor relativo para centrar el bloque de enlaces por viewport */}
        <div className="relative flex items-center h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24">
          {/* LOGO: pegado a la IZQUIERDA con margen negativo responsivo */}
          <a
            href="#inicio"
            className="flex items-center group ml-[-48px] sm:ml-[-64px] md:ml-[-80px] lg:ml-[-96px] xl:ml-[-112px]"
          >
            <div className="relative w-[28rem] h-32 sm:w-[36rem] sm:h-36 md:w-[44rem] md:h-40 lg:w-[52rem] lg:h-44 xl:w-[60rem] xl:h-48 transition-transform duration-300 group-hover:scale-105 z-10">
              <Image
                src="/logo.png"
                alt="Titan Soluciones"
                fill
                sizes="(max-width: 640px) 512px, (max-width: 768px) 640px, (max-width: 1024px) 768px, (max-width: 1280px) 896px, 1024px"
                className="object-contain transition-all duration-300 group-hover:brightness-110"
                priority
              />
            </div>
          </a>

          {/* ENLACES (ESCRITORIO): movidos mucho más a la derecha para evitar superposición */}
          <div className="hidden lg:block absolute left-[70%] xl:left-[60%] 2xl:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[11]">
            <div className="flex items-center justify-center space-x-4 lg:space-x-5 xl:space-x-6 2xl:space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${isScrolled ? "text-[#3f4e55]" : "text-[#3f4e55]"
                    } hover:text-primary transition-all duration-300 relative group font-medium text-xs lg:text-sm xl:text-base 2xl:text-lg whitespace-nowrap`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </a>
              ))}
            </div>
          </div>

          {/* CONTACTO: anclado a la DERECHA, muy compacto */}
          <div className="hidden lg:flex items-center space-x-2 ml-auto pr-2 lg:pr-3 xl:pr-4">
            <div
              className={`flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm xl:text-base ${isScrolled ? "text-[#3f4e55]" : "text-[#3f4e55]"
                } whitespace-nowrap`}
            >
              <Phone className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
              <span className="hidden 2xl:inline">+51 992 027 156</span>
              <span className="hidden xl:inline 2xl:hidden">992 027 156</span>
              <span className="lg:inline xl:hidden">992</span>
            </div>
            <Button className="hover-glow px-2 py-1 lg:px-3 lg:py-2 xl:px-4 xl:py-2 2xl:px-6 2xl:py-3 text-xs lg:text-sm xl:text-base relative overflow-hidden group whitespace-nowrap">
              <span className="relative z-10">Cotizar</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            className="lg:hidden p-2 text-[#3f4e55] relative group transition-all duration-300 hover:bg-primary/10 rounded-lg ml-auto mr-2"
            onClick={toggleMobileMenu}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 rotate-180" />
              ) : (
                <Menu className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 group-hover:scale-110" />
              )}
            </div>
          </button>
        </div>

        {/* OVERLAY MOBILE */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
            onClick={closeMobileMenu}
          />
        )}

        {/* MENÚ MOBILE */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 sm:top-18 md:top-20 lg:top-22 xl:top-24 left-0 right-0 mobile-menu-glass z-[9999] animate-menu-slide-in">
            <div className="absolute inset-0 bg-white/95"></div>
            <div className="relative px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-all duration-300 text-base sm:text-lg transform hover:translate-x-2 hover:scale-105 animate-menu-item-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border animate-menu-item-slide-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center space-x-2 text-sm text-[#3f4e55] mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+51 992 027 156</span>
                </div>
                <Button size="sm" className="w-full hover-glow group relative overflow-hidden">
                  <span className="relative z-10">Cotizar</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
