"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out animate-navbar-slide-in ${
        isScrolled 
          ? "navbar-glass-scrolled" 
          : "navbar-glass"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <a href="#inicio" className="flex items-center group">
            <div className="relative w-48 h-16 sm:w-56 sm:h-20 md:w-64 md:h-24 lg:w-72 lg:h-28 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Titan Soluciones" 
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                className="object-contain transition-all duration-300 group-hover:brightness-110"
                priority 
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`${isScrolled ? 'text-[#3f4e55]' : 'text-[#3f4e55]'} hover:text-primary transition-all duration-300 relative group font-medium text-lg xl:text-xl transform hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 text-base xl:text-lg ${isScrolled ? 'text-[#3f4e55]' : 'text-[#3f4e55]'}`}>
              <Phone className="w-4 h-4 xl:w-5 xl:h-5" />
              <span className="hidden 2xl:inline">+51 992 027 156</span>
              <span className="2xl:hidden">+51 992 027 156</span>
            </div>
            <Button className="hover-glow px-4 py-2 xl:px-6 xl:py-3 text-sm xl:text-lg relative overflow-hidden group">
              <span className="relative z-10">Cotizar</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-[#3f4e55] relative group transition-all duration-300 hover:bg-primary/10 rounded-lg" 
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

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 sm:top-20 md:top-24 left-0 right-0 mobile-menu-glass z-[9999] animate-menu-slide-in">
            {/* Additional solid background layer */}
            <div className="absolute inset-0 bg-white/95"></div>
            <div className="relative px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-all duration-300 text-lg transform hover:translate-x-2 hover:scale-105 animate-menu-item-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border animate-menu-item-slide-in" style={{ animationDelay: '0.5s' }}>
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
