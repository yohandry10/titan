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
      title: "TITAN Soluciones Inaugura Nueva Planta de Estructuras Metálicas",
      excerpt: "Con una inversión de S/2.5 millones, la nueva planta incrementará nuestra capacidad de producción en un 300% y generará 150 nuevos empleos directos en la región de Arequipa.",
      content: "La nueva planta de estructuras metálicas de TITAN Soluciones representa un hito importante en nuestra expansión...",
      image: "/estructura11.png",
      category: "Expansión",
      date: "2024