import { Phone, Calendar } from 'lucide-react'

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex gap-3">
      <a
        href="tel:7042253659"
        className="flex-1 flex items-center justify-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold py-3 rounded-xl transition-colors text-sm"
      >
        <Phone size={16} />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center gap-2 bg-cool-blue hover:bg-cool-blue-light text-white font-bold py-3 rounded-xl transition-colors text-sm"
      >
        <Calendar size={16} />
        Book Online
      </a>
    </div>
  )
}
