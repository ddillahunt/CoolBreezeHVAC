import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { FadeUp } from './AnimateIn'
import serviceAcImg from '../assets/images/service-ac.jpg'
import serviceHeatingImg from '../assets/images/service-heating.jpg'
import serviceDuctImg from '../assets/images/service-duct.jpg'
import generatorImg from '../assets/images/generator.jpg'
import maintenanceImg from '../assets/images/maintenance.jpg'
import commercialImg from '../assets/images/commercial.jpg'

const serviceImages: Record<string, string> = {
  'air-conditioning': serviceAcImg,
  'heating-systems': serviceHeatingImg,
  'ductwork': serviceDuctImg,
  'generac-generators': generatorImg,
  'preventative-maintenance': maintenanceImg,
  'commercial-hvac': commercialImg,
}

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cool-blue font-semibold text-sm uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-3 mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 text-lg">
              From emergency repairs to full system installations, we've got your
              comfort covered.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((s, i) => {
            const image = serviceImages[s.slug]
            return (
              <FadeUp key={s.slug} delay={i * 0.1}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group bg-light-gray hover:bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-navy/5 border border-transparent hover:border-medium-gray block h-full"
                >
                  {image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={image}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div
                      className={`w-14 h-14 rounded-xl ${s.color} flex items-center justify-center mb-6`}
                    >
                      <s.icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{s.shortDescription}</p>
                    <span className="inline-flex items-center text-cool-blue font-semibold text-sm mt-5 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More &rarr;
                    </span>
                  </div>
                </Link>
              </FadeUp>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(3).map((s, i) => {
            const image = serviceImages[s.slug]
            return (
              <FadeUp key={s.slug} delay={i * 0.1}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group bg-light-gray hover:bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-navy/5 border border-transparent hover:border-medium-gray block h-full"
                >
                  {image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={image}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div
                      className={`w-14 h-14 rounded-xl ${s.color} flex items-center justify-center mb-6`}
                    >
                      <s.icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{s.shortDescription}</p>
                    <span className="inline-flex items-center text-cool-blue font-semibold text-sm mt-5 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More &rarr;
                    </span>
                  </div>
                </Link>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
