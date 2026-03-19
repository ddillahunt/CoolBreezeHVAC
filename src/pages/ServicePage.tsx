import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Phone, Calendar } from 'lucide-react'
import { services } from '../data/services'

import acServiceImg from '../assets/images/ac-service.jpg'
import heatingImg from '../assets/images/heating-system.jpg'
import ductworkImg from '../assets/images/ductwork.jpg'
import generatorImg from '../assets/images/generator.jpg'
import generatorDetailImg from '../assets/images/generator-detail.jpg'
import maintenanceImg from '../assets/images/maintenance.jpg'
import commercialImg from '../assets/images/commercial.jpg'
import acUnitImg from '../assets/images/ac-unit.jpg'
import comfortableHomeImg from '../assets/images/comfortable-home.jpg'

const serviceImages: Record<string, { hero: string; detail: string }> = {
  'air-conditioning': { hero: acServiceImg, detail: acUnitImg },
  'heating-systems': { hero: heatingImg, detail: comfortableHomeImg },
  'ductwork': { hero: ductworkImg, detail: acUnitImg },
  'generac-generators': { hero: generatorImg, detail: generatorDetailImg },
  'preventative-maintenance': { hero: maintenanceImg, detail: acUnitImg },
  'commercial-hvac': { hero: commercialImg, detail: comfortableHomeImg },
}

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Service Not Found</h2>
          <Link to="/" className="text-cool-blue hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const Icon = service.icon
  const otherServices = services.filter((s) => s.slug !== slug)
  const images = serviceImages[service.slug]

  return (
    <>
      {/* Hero with background image */}
      <section className="bg-navy relative overflow-hidden min-h-[50vh] flex items-end">
        {images && (
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
          </div>
        )}
        {!images && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-72 h-72 bg-cool-blue rounded-full blur-[120px]" />
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-warm-amber rounded-full blur-[150px]" />
            </div>
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center backdrop-blur-sm`}>
              <Icon size={32} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
              {service.title}
            </h1>
          </div>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl leading-relaxed">
            {service.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="tel:7042253659"
              className="flex items-center justify-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              <Phone size={20} />
              Call Now
            </a>
            <Link
              to="/#contact"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors border border-white/20 backdrop-blur-sm"
            >
              <Calendar size={20} />
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Features + Details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Features sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-8">What We Offer</h2>
              <div className="space-y-4">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cool-blue mt-0.5 shrink-0" />
                    <span className="text-gray-600 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              {/* Detail image */}
              {images && (
                <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={images.detail}
                    alt={`${service.title} service`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}

              {/* CTA card */}
              <div className="mt-8 bg-navy rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Need This Service?</h3>
                <p className="text-white/60 mb-6">
                  Call us now or schedule online for a free estimate.
                </p>
                <a
                  href="tel:7042253659"
                  className="flex items-center justify-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold px-6 py-3 rounded-xl transition-colors w-full"
                >
                  <Phone size={16} />
                  704-225-3659
                </a>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-navy mb-8">
                Why Choose Cool Breeze for {service.title}
              </h2>
              <div className="space-y-6">
                {service.details.map((d, i) => (
                  <p key={i} className="text-gray-500 text-lg leading-relaxed">
                    {d}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            Explore Our Other Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-medium-gray hover:border-cool-blue hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center shrink-0`}>
                  <s.icon size={18} />
                </div>
                <span className="font-semibold text-navy text-sm">{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
