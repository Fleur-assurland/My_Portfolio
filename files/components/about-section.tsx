"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type Language, translations } from "@/lib/translations"

interface AboutSectionProps {
  language: Language
}

export function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language]

  const skills = [
    "JavaScript",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Tailwind CSS",
    "Figma",
    "Git",
    "CI/CD",
    "Agile",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">{t.about.title}</h2>
          <Card className="p-8 backdrop-blur-sm bg-card/50 border-border/50">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.about.description}</p>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.about.skills}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
