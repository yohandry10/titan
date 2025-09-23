import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ProjectsGallery from "@/components/projects-gallery"
import SocialResponsibility from "@/components/social-responsibility"
import ClientsSection from "@/components/clients-section"
import NewsSection from "@/components/news-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsGallery />
      <SocialResponsibility />
      <ClientsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
