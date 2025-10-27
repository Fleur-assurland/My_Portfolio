"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ServicesSection } from "@/components/services-section"
import { CVSection } from "@/components/cv-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import type { Language } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("fr")

  return (
    <main className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ExperienceSection language={language} />
      <ServicesSection language={language} />
      <CVSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </main>
  )
}
