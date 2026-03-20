import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={`${import.meta.env.BASE_URL}logo-icon.svg`} alt="Cool Breeze HVAC" className="w-10 h-10" />
              <div className="flex items-baseline gap-1.5">
                <span className="text-white font-extrabold text-lg">COOL BREEZE</span>
                <span className="text-cool-blue font-medium text-sm tracking-wider">HVAC</span>
              </div>
            </div>
            <p className="text-white/50 leading-relaxed mb-6">
              Superior heating and air conditioning services for the greater
              Charlotte area. Licensed, insured, and BBB A+ accredited.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              NC License #27118
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'About Us', href: '#about' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Service Area', href: '#service-area' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/50 hover:text-cool-blue transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-cool-blue" />
                <a
                  href="tel:7042253659"
                  className="text-white/50 hover:text-cool-blue transition-colors"
                >
                  704-225-3659
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-cool-blue" />
                <a
                  href="mailto:info@coolbreezehvac.com"
                  className="text-white/50 hover:text-cool-blue transition-colors"
                >
                  info@coolbreezehvac.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-cool-blue mt-0.5" />
                <span className="text-white/50">
                  8920 Lawyers Rd., Box 690236
                  <br />
                  Mint Hill, NC 28227
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {year} Cool Breeze HVAC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/30 hover:text-white/50 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-white/50 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
