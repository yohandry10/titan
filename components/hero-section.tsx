"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentSlide, setCurrentSlide] = useState(0)

  const videos = [
    { src: "/copia.mp4", title: "Proyecto 1" },
    { src: "/copia1.mp4", title: "Proyecto 2" },
    { src: "/copia2.mp4", title: "Proyecto 3" },
    { src: "/copia3.mp4", title: "Proyecto 4" },
    { src: "/copia5.mp4", title: "Proyecto 5" },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length)
    }, 6000) // Cambia cada 6 segundos
    return () => clearInterval(interval)
  }, [videos.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length)
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Slider */}
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <video
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div
        className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{
          left: `${mousePosition.x * 0.02}px`,
          top: `${mousePosition.y * 0.02}px`,
        }}
      />
      <div
        className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-2xl animate-float"
        style={{
          right: `${mousePosition.x * 0.01}px`,
          bottom: `${mousePosition.y * 0.01}px`,
          animationDelay: "2s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Construimos el
            <span className="text-primary block">Futuro</span>
            de la Industria
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-2"
            style={{ animationDelay: "0.4s" }}
          >
            Somos una empresa dedicada a la prestación de servicios en los sectores de
            <span className="text-primary font-semibold"> minería, construcción e industria</span>, cumpliendo con los
            más altos estándares de calidad y seguridad.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-8 sm:mb-12 animate-fade-in-up px-4"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href="#servicios" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover-glow group w-full sm:w-auto"
              >
                Nuestros Servicios
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/proyectos" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group bg-transparent w-full sm:w-auto"
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Ver Proyectos
              </Button>
            </Link>
          </div>

        </div>
      </div>

    </section>
  )
}
