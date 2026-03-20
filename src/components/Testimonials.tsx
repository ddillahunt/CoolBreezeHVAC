import { useState, useCallback, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeUp } from './AnimateIn'
import { SectionTitle } from './SectionTitle'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

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
  {
    name: 'Angela P.',
    location: 'Indian Trail, NC',
    text: "Our ductwork was a mess — rooms upstairs were always 10 degrees hotter. Cool Breeze redesigned and sealed everything. Night and day difference. Should have called them years ago.",
    rating: 5,
    service: 'Ductwork',
  },
  {
    name: 'Robert K.',
    location: 'Stallings, NC',
    text: "Needed a full system replacement and got three quotes. Cool Breeze wasn't the cheapest, but they were the most transparent and thorough. Zero regrets — the new system is incredible.",
    rating: 5,
    service: 'AC Installation',
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Testimonials"
          title="What Our Customers Say"
        />
        <FadeUp>
          <div className="flex items-center justify-center gap-2 -mt-8 mb-14">
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-warm-amber fill-warm-amber" />
              ))}
            </div>
            <span className="text-navy font-bold text-lg">4.9</span>
            <span className="text-gray-400 text-sm">from 300+ Google Reviews</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative">
            {/* Carousel */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex -ml-4">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                  >
                    <div className="bg-light-gray rounded-2xl p-7 relative h-full flex flex-col">
                      <Quote size={32} className="text-cool-blue/10 absolute top-5 right-5" />
                      <div className="flex gap-0.5 mb-1">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} size={14} className="text-warm-amber fill-warm-amber" />
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
                  </div>
                ))}
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 -translate-y-1/2 -left-3 lg:-left-5 w-10 h-10 bg-white rounded-full shadow-lg border border-medium-gray flex items-center justify-center hover:bg-light-gray transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="text-navy" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 -translate-y-1/2 -right-3 lg:-right-5 w-10 h-10 bg-white rounded-full shadow-lg border border-medium-gray flex items-center justify-center hover:bg-light-gray transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="text-navy" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? 'bg-cool-blue w-7'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
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
