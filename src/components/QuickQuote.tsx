import { useState, useEffect } from 'react'
import { X, Send, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function QuickQuote() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '' })

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('https://formspree.io/f/xpwdqgvk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'Quick Quote' }),
      })
    } catch { /* fallback */ }
    setSubmitted(true)
    setSubmitting(false)
    setTimeout(() => { setOpen(false); setSubmitted(false); setForm({ name: '', phone: '', service: '' }) }, 3000)
  }

  return (
    <>
      {/* Floating trigger button — hidden on mobile (MobileCTA handles it) */}
      <AnimatePresence>
        {visible && !open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-24 lg:bottom-8 right-6 z-40 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold pl-4 pr-5 py-3 rounded-full shadow-lg shadow-warm-amber/30 flex items-center gap-2 transition-colors"
          >
            <MessageSquare size={18} />
            <span className="hidden sm:inline text-sm">Get a Quote</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Quote panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-96 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="bg-navy px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">Get a Quote</h3>
                  <p className="text-white/50 text-xs">Response in under 60 minutes</p>
                </div>
                <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white">
                  <X size={20} />
                </button>
              </div>

              {submitted ? (
                <div className="p-8 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Send size={24} className="text-green-600" />
                  </div>
                  <h4 className="font-bold text-navy text-lg mb-1">Quote Requested!</h4>
                  <p className="text-gray-500 text-sm">We'll call you back shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-medium-gray focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-medium-gray focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-medium-gray focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition text-sm bg-white"
                    >
                      <option value="">What do you need?</option>
                      <option value="ac-repair">AC Repair</option>
                      <option value="ac-install">AC Installation</option>
                      <option value="heating-repair">Heating Repair</option>
                      <option value="heating-install">Heating Installation</option>
                      <option value="maintenance">Maintenance Plan</option>
                      <option value="ductwork">Ductwork</option>
                      <option value="generator">Generac Generator</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-warm-amber hover:bg-warm-amber-light text-navy font-bold py-3 rounded-xl transition-colors disabled:opacity-60 text-sm"
                  >
                    {submitting ? 'Sending...' : 'Get My Free Quote'}
                  </button>
                  <p className="text-center text-gray-400 text-xs">
                    No obligation. No spam. Just a quick quote.
                  </p>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
