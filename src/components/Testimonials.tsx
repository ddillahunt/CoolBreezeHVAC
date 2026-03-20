import { Star, Quote } from 'lucide-react'
import { FadeUp } from './AnimateIn'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Matthews, NC',
    text: "Cool Breeze came out the same day our AC went out in the middle of July. They diagnosed the problem quickly, gave us a fair price, and had us cool again within hours. Can't recommend them enough!",
    rating: 5,
    service: 'AC Repair',
  },
  {
    name: 'James R.',
    location: 'Harrisburg, NC',
    text: "We've used Cool Breeze for our annual maintenance for 8 years now. Always professional, always on time, and they genuinely care about doing the job right. Best HVAC company in the Charlotte area.",
    rating: 5,
    service: 'Maintenance Plan',
  },
  {
    name: 'Maria L.',
    location: 'Concord, NC',
    text: 'They installed a new Generac generator for us and the whole process was smooth from start to finish. Great communication, clean work, and a fair price. We feel so much safer during storm season now.',
    rating: 5,
    service: 'Generac Generator',
  },
  {
    name: 'David T.',
    location: 'Mint Hill, NC',
    text: "Honest company. They could have sold me a new unit but instead repaired mine for a fraction of the cost. That kind of integrity is rare these days. Cool Breeze has a customer for life.",
    rating: 5,
    service: 'Heating Repair',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="text-cool-blue font-semibold text-sm uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-3 mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-14">
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-warm-amber fill-warm-amber" />
              ))}
            </div>
            <span className="text-navy font-bold text-lg">4.9</span>
            <span className="text-gray-400 text-sm">from 300+ Google Reviews</span>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.08}>
              <div className="bg-light-gray rounded-2xl p-7 relative h-full flex flex-col">
                <Quote
                  size={32}
                  className="text-cool-blue/10 absolute top-5 right-5"
                />
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-warm-amber fill-warm-amber"
                    />
                  ))}
                </div>
                <span className="text-cool-blue text-xs font-semibold uppercase tracking-wider mb-3">
                  {t.service}
                </span>
                <p className="text-gray-600 leading-relaxed text-sm flex-1 mb-5">
                  "{t.text}"
                </p>
                <div className="border-t border-medium-gray pt-4">
                  <div className="font-bold text-navy text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="text-center mt-10">
            <a
              href="https://g.page/r/coolbreezehvac/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cool-blue hover:text-cool-blue-light font-semibold text-sm transition-colors"
            >
              Read More Reviews on Google &rarr;
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
