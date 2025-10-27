"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, GraduationCap, Users, Lightbulb, ArrowRight } from "lucide-react"
import { type Language, translations } from "@/lib/translations"

interface ServicesSectionProps {
  language: Language
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const t = translations[language]

  const services = [
    {
      icon: Code,
      title: t.services.freelance.title,
      description: t.services.freelance.description,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: GraduationCap,
      title: t.services.training.title,
      description: t.services.training.description,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Users,
      title: t.services.coaching.title,
      description: t.services.coaching.description,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Lightbulb,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-card/50 border-border/50 group"
              >
                <div className={`inline-flex p-3 rounded-xl ${service.bgColor} mb-4`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <Button
                  variant="ghost"
                  className="group-hover:translate-x-1 transition-transform p-0"
                  onClick={scrollToContact}
                >
                  {language === "fr" ? "En savoir plus" : language === "en" ? "Learn more" : "了解更多"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
