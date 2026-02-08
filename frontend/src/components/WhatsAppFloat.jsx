import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/1234567890"

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-moss text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 ring-offset-sand"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
