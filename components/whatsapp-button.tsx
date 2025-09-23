"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const phoneNumber = "51992027156"
  const message = "Hola, me interesa conocer más sobre los servicios de TITAN Soluciones."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {isExpanded && (
        <div className="mb-3 sm:mb-4 bg-white rounded-lg shadow-lg p-3 sm:p-4 max-w-xs animate-fade-in-up">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm">TITAN Soluciones</div>
                <div className="text-xs text-green-500">En línea</div>
              </div>
            </div>
            <button onClick={() => setIsExpanded(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">¡Hola! ¿En qué podemos ayudarte hoy?</p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 text-white text-xs sm:text-sm py-2 px-3 rounded hover:bg-green-600 transition-colors"
          >
            Iniciar conversación
          </button>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-float"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  )
}
