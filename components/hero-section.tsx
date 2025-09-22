"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Award, Users } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 animate-parallax-bg"
        style={{
          backgroundImage: `url('/hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating Elements */}
      <div
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{
          left: `${mousePosition.x * 0.02}px`,
          top: `${mousePosition.y * 0.02}px`,
        }}
      />
      <div
        className="absolute w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-float"
        style={{
          right: `${mousePosition.x * 0.01}px`,
          bottom: `${mousePosition.y * 0.01}px`,
          animationDelay: "2s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-white text-sm">Más de 10 años de experiencia</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Construimos el
            <span className="text-primary block">Futuro</span>
            de la Industria
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Somos una empresa dedicada a la prestación de servicios en los sectores de
            <span className="text-primary font-semibold"> minería, construcción e industria</span>, cumpliendo con los
            más altos estándares de calidad y seguridad.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href="#servicios">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg hover-glow group"
              >
                Nuestros Servicios
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/proyectos">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg group bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Proyectos
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-white">100+</span>
              </div>
              <p className="text-gray-300">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <p className="text-gray-300">Profesionales</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-white">10+</span>
              </div>
              <p className="text-gray-300">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
