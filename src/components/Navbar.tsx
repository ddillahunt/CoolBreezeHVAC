import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { services } from '../data/services'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: isHome ? '#about' : '/#about' },
    { label: 'Testimonials', to: isHome ? '#testimonials' : '/#testimonials' },
    { label: 'Service Area', to: isHome ? '#service-area' : '/#service-area' },
    { label: 'Contact', to: isHome ? '#contact' : '/#contact' },
  ]

  return (
    <>
      {/* Emergency banner */}
      <div className="bg-warm-amber text-navy text-center py-2 text-sm font-semibold tracking-wide">
        24/7 Emergency Service Available &mdash;{' '}
        <a href="tel:7042253659" className="underline hover:no-underline">
          Call 704-225-3659
        </a>
      </div>

      {/* Sticky nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-navy'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2">
              <span className="text-cool-blue font-bold text-xl lg:text-2xl tracking-tight">
                Cool Breeze
              </span>
              <span className="text-white/70 font-light text-lg lg:text-xl">
                HVAC
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Home */}
              <Link
                to="/"
                className="text-white/80 hover:text-cool-blue transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Home
              </Link>

              {/* Services dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 text-white/80 hover:text-cool-blue transition-colors text-sm font-medium tracking-wide uppercase"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                    {/* View all services */}
                    {isHome ? (
                      <a
                        href="#services"
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-3 text-sm font-bold text-navy hover:bg-light-gray transition-colors border-b border-gray-100"
                      >
                        All Services Overview
                      </a>
                    ) : (
                      <Link
                        to="/#services"
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-3 text-sm font-bold text-navy hover:bg-light-gray transition-colors border-b border-gray-100"
                      >
                        All Services Overview
                      </Link>
                    )}

                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-5 py-3 hover:bg-light-gray transition-colors"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg ${s.color} flex items-center justify-center shrink-0`}
                        >
                          <s.icon size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-navy">
                            {s.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other links */}
              {navLinks.slice(1).map((l) =>
                l.to.startsWith('#') ? (
                  <a
                    key={l.label}
                    href={l.to}
                    className="text-white/80 hover:text-cool-blue transition-colors text-sm font-medium tracking-wide uppercase"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="text-white/80 hover:text-cool-blue transition-colors text-sm font-medium tracking-wide uppercase"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:7042253659"
                className="flex items-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold px-5 py-2.5 rounded-lg transition-colors"
              >
                <Phone size={16} />
                704-225-3659
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy-light border-t border-white/10">
            <div className="px-4 py-4 space-y-1">
              <Link
                to="/"
                className="block text-white/80 hover:text-cool-blue transition-colors text-sm font-medium tracking-wide uppercase py-2"
              >
                Home
              </Link>

              {/* Mobile services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-white/80 hover:text-cool-blue transition-colors text-sm font-medium tracking-wide uppercase py-2"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-1 pb-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 text-white/60 hover:text-cool-blue transition-colors text-sm py-2"
                    >
                      <s.icon size={14} />
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.slice(1).map((l) =>
                l.to.startsWith('#') ? (
                  <a
                    key={l.label}
                    href={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white/80 hover:text-cool-blue transition-colors text-sm font-medium tracking-wide uppercase py-2"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="block text-white/80 hover:text-cool-blue transition-colors text-sm font-medium tracking-wide uppercase py-2"
                  >
                    {l.label}
                  </Link>
                )
              )}

              <a
                href="tel:7042253659"
                className="flex items-center justify-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold px-5 py-3 rounded-lg transition-colors mt-4"
              >
                <Phone size={16} />
                704-225-3659
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
