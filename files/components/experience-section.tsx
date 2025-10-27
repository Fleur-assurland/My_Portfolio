"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { type Language, translations } from "@/lib/translations"

interface ExperienceSectionProps {
  language: Language
}

export function ExperienceSection({ language }: ExperienceSectionProps) {
  const t = translations[language]

  const experiences = [
    {
      title:
        language === "fr"
          ? "Lead Développeuse Full-Stack"
          : language === "en"
            ? "Lead Full-Stack Developer"
            : "全栈开发主管",
      company: "TechCorp",
      period: "2022 - " + t.experience.current,
      description:
        language === "fr"
          ? "Direction technique d'une équipe de 5 développeurs. Architecture et développement d'applications web et mobiles complexes."
          : language === "en"
            ? "Technical leadership of a team of 5 developers. Architecture and development of complex web and mobile applications."
            : "领导5名开发人员的技术团队。复杂网页和移动应用程序的架构和开发。",
      technologies: ["React", "React Native", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title:
        language === "fr" ? "Développeuse Full-Stack" : language === "en" ? "Full-Stack Developer" : "全栈开发工程师",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        language === "fr"
          ? "Développement de fonctionnalités clés pour une plateforme SaaS. Optimisation des performances et amélioration de l'expérience utilisateur."
          : language === "en"
            ? "Development of key features for a SaaS platform. Performance optimization and user experience improvement."
            : "为SaaS平台开发关键功能。性能优化和用户体验改进。",
      technologies: ["Next.js", "TypeScript", "GraphQL", "MongoDB"],
    },
    {
      title: language === "fr" ? "Développeuse Frontend" : language === "en" ? "Frontend Developer" : "前端开发工程师",
      company: "Digital Agency",
      period: "2018 - 2020",
      description:
        language === "fr"
          ? "Création d'interfaces utilisateur modernes et responsives pour divers clients. Collaboration étroite avec les designers."
          : language === "en"
            ? "Creation of modern and responsive user interfaces for various clients. Close collaboration with designers."
            : "为各种客户创建现代响应式用户界面。与设计师密切合作。",
      technologies: ["React", "Vue.js", "Sass", "Figma"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.experience.title}</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm bg-card/50 border-border/50"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-3 mb-2 md:mb-0">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
