import { Phone, Calendar, Star, Shield, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import heroImg from '../assets/images/hero-home.jpg'

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-navy overflow-hidden min-h-[92vh] flex items-center"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Beautiful modern home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Trust badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-warm-amber fill-warm-amber" />
                ))}
              </div>
              <span className="text-white/70 text-sm font-medium">
                4.9 Rating &middot; 300+ Google Reviews
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Charlotte's Most Trusted{' '}
              <span className="text-cool-blue">HVAC Experts</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/60 max-w-xl mb-8 leading-relaxed">
              Licensed, insured, and BBB A+ accredited. Over 20 years keeping
              Charlotte-area homes and businesses comfortable year-round.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-lg shadow-warm-amber/20"
              >
                <Calendar size={20} />
                Schedule Service
              </a>
              <a
                href="tel:7042253659"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all border border-white/20 backdrop-blur-sm"
              >
                <Phone size={20} />
                (704) 225-3659
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { icon: Shield, text: 'Licensed & Insured' },
                { icon: Clock, text: '24/7 Emergency Service' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/50 text-sm">
                  <Icon size={14} className="text-cool-blue" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — promo card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="text-warm-amber font-bold text-sm uppercase tracking-widest mb-2">
                Limited Time Offer
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                $49 AC Tune-Up Special
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Get your system ready for summer. Includes full inspection,
                cleaning, and performance report. Reg. $129.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '21-point system inspection',
                  'Coil cleaning & filter check',
                  'Refrigerant level verification',
                  'Written performance report',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                    <div className="w-1.5 h-1.5 bg-cool-blue rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-cool-blue hover:bg-cool-blue-light text-white font-bold py-3 rounded-xl transition-colors"
              >
                Claim This Offer
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 30C360 65 720 0 1080 30C1260 45 1380 60 1440 60V80H0V30Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
