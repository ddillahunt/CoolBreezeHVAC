import { Phone, Calendar, Snowflake, Flame, Wind } from 'lucide-react'
import heroImg from '../assets/images/hero-home.jpg'

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-navy overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Beautiful modern home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      </div>

      {/* Decorative blurs */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cool-blue rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-amber rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">
              Serving Charlotte &amp; Surrounding Areas
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Relax...{' '}
            <span className="text-cool-blue">We'll Take</span>
            <br />
            Care of It
          </h1>

          <p className="text-lg lg:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            Superior heating and air conditioning repair, replacement, and
            installation services for the greater Charlotte area. Licensed,
            insured, and BBB accredited.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-warm-amber/25"
            >
              <Calendar size={20} />
              Schedule Service
            </a>
            <a
              href="tel:7042253659"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all border border-white/20 backdrop-blur-sm"
            >
              <Phone size={20} />
              Get a Free Estimate
            </a>
          </div>

          {/* Service icons */}
          <div className="flex gap-8">
            {[
              { icon: Snowflake, label: 'Cooling', color: 'text-cool-blue' },
              { icon: Flame, label: 'Heating', color: 'text-warm-amber' },
              { icon: Wind, label: 'Ductwork', color: 'text-white/70' },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Icon size={22} className={color} />
                </div>
                <span className="text-white/60 text-sm font-medium hidden sm:block">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 80 1440 80V100H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
