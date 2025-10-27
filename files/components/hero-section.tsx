"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { type Language, translations } from "@/lib/translations"

interface HeroSectionProps {
  language: Language
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4 animate-fade-in">{t.hero.greeting}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] ">
              {t.hero.name}
            </span>
          </h1>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.title}
          </h2>
          <p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {t.hero.subtitle}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button size="lg" onClick={() => scrollToSection("services")} className="group">
              {t.hero.cta}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              <Mail className="mr-2 h-4 w-4" />
              {t.hero.contact}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
