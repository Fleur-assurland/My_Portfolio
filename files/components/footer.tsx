"use client"

import { type Language, translations } from "@/lib/translations"

interface FooterProps {
  language: Language
}

export function Footer({ language }: FooterProps) {
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Fleur BOGUI. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  )
}
