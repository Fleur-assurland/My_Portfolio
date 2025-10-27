"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react"
import { type Language, translations } from "@/lib/translations"
import { toast } from "@/components/ui/use-toast"
import emailjs from "@emailjs/browser"

interface ContactSectionProps {
  language: Language
}

export function ContactSection({ language }: ContactSectionProps) {
  const t = translations[language]
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    // Récupération des variables d'environnement
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    // Vérification que toutes les variables sont définies
    if (!serviceId || !templateId || !publicKey) {
      console.error("Variables d'environnement EmailJS manquantes")
      toast({
        title: language === "fr" ? "Erreur de configuration" : language === "en" ? "Configuration error" : "配置错误",
        description: language === "fr"
          ? "Problème de configuration du formulaire. Veuillez réessayer plus tard."
          : language === "en"
          ? "Form configuration issue. Please try again later."
          : "表单配置问题。请稍后再试。",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey,
      )
console.log("EmailJS result:", result)
      if (result.text === "OK") {
        toast({
          title: language === "fr" ? "Message envoyé!" : language === "en" ? "Message sent!" : "消息已发送！",
          description: language === "fr" 
            ? "Merci pour votre message. Je vous répondrai dans les plus brefs délais." 
            : language === "en"
            ? "Thank you for your message. I will get back to you as soon as possible."
            : "感谢您的留言。我会尽快回复您。",
        })

        setFormData({
          user_name: "",
          user_email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Erreur lors de l'envoi du formulaire")
      }
    } catch (error) {
      toast({
        title: language === "fr" ? "Erreur" : language === "en" ? "Error" : "错误",
        description: language === "fr"
          ? "Un problème est survenu lors de l'envoi du message. Veuillez réessayer."
          : language === "en"
          ? "A problem occurred while sending the message. Please try again."
          : "发送消息时出现问题。请再试一次。",
        variant: "destructive",
      })
      console.error("Erreur EmailJS:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 p-8 backdrop-blur-sm bg-card/50 border-border/50">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="user_name">{t.contact.name}</Label>
                    <Input
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user_email">{t.contact.email}</Label>
                    <Input
                      id="user_email"
                      name="user_email"
                      type="email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t.contact.subject}</Label>
                  <Select
                    name="subject"
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t.contact.subject} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="freelance">{t.contact.freelance}</SelectItem>
                      <SelectItem value="training">{t.contact.training}</SelectItem>
                      <SelectItem value="coaching">{t.contact.coaching}</SelectItem>
                      <SelectItem value="other">{t.contact.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting 
                    ? (language === "fr" ? "Envoi en cours..." : language === "en" ? "Sending..." : "发送中...")
                    : t.contact.send
                  }
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 backdrop-blur-sm bg-card/50 border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">fleur.bogui@epitech.eu</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 backdrop-blur-sm bg-card/50 border-border/50">
                <h3 className="font-semibold mb-4">
                  {language === "fr" ? "Réseaux sociaux" : language === "en" ? "Social media" : "社交媒体"}
                </h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/DeveN1ght" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="www.linkedin.com/in/badjo-fleur-marie-francesca-bogui-0814812a9" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}