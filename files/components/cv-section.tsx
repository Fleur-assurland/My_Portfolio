"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { type Language, translations } from "@/lib/translations"

interface CVSectionProps {
  language: Language
}

export function CVSection({ language }: CVSectionProps) {
  const t = translations[language]

  const handleDownload = () => {
    // Simulate CV download
    alert(language === "fr" ? "Téléchargement du CV..." : language === "en" ? "Downloading resume..." : "下载简历...")
  }

  return (
    <section id="cv" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.cv.title}</h2>
          <Card className="p-8 backdrop-blur-sm bg-card/50 border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {language === "fr" ? "Mon CV complet" : language === "en" ? "My complete resume" : "我的完整简历"}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === "fr"
                      ? "Téléchargez mon CV au format PDF"
                      : language === "en"
                        ? "Download my resume in PDF format"
                        : "下载PDF格式的简历"}
                  </p>
                </div>
              </div>
              <Button size="lg" onClick={handleDownload} className="group">
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                {t.cv.download}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
