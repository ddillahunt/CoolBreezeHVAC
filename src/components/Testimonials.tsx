import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Matthews, NC',
    text: "Cool Breeze came out the same day our AC went out in the middle of July. They diagnosed the problem quickly, gave us a fair price, and had us cool again within hours. Can't recommend them enough!",
    rating: 5,
  },
  {
    name: 'James R.',
    location: 'Harrisburg, NC',
    text: 'We\'ve used Cool Breeze for our annual maintenance for 8 years now. Always professional, always on time, and they genuinely care about doing the job right. Best HVAC company in the Charlotte area.',
    rating: 5,
  },
  {
    name: 'Maria L.',
    location: 'Concord, NC',
    text: 'They installed a new Generac generator for us and the whole process was smooth from start to finish. Great communication, clean work, and a fair price. We feel so much safer during storm season now.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cool-blue font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-lg">
            Don't just take our word for it &mdash; hear from homeowners across
            the Charlotte area.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-light-gray rounded-2xl p-8 relative"
            >
              <Quote
                size={40}
                className="text-cool-blue/15 absolute top-6 right-6"
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-warm-amber fill-warm-amber"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <div className="font-bold text-navy">{t.name}</div>
                <div className="text-gray-400 text-sm">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
