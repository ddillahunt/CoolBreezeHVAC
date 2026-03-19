import { MapPin } from 'lucide-react'
import familyHomeImg from '../assets/images/family-home.jpg'

const areas = [
  'Charlotte',
  'Harrisburg',
  'Concord',
  'Matthews',
  'Mint Hill',
  'Indian Trail',
  'Stallings',
  'Monroe',
  'Weddington',
  'Huntersville',
  'Cornelius',
  'Davidson',
]

export function ServiceArea() {
  return (
    <section
      id="service-area"
      className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden"
    >
      {/* Decorative blurs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cool-blue rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-warm-amber rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-cool-blue font-semibold text-sm uppercase tracking-widest">
              Service Area
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">
              Proudly Serving the{' '}
              <span className="text-cool-blue">Greater Charlotte Area</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              From Charlotte to the surrounding suburbs, our technicians are
              just a call away. We provide fast, reliable HVAC service to
              residential and commercial customers across the region.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-warm-amber hover:bg-warm-amber-light text-navy font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Check If We Serve Your Area
            </a>
          </div>

          {/* Right - area tags + image */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                src={familyHomeImg}
                alt="Charlotte area home"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-5 py-3"
                >
                  <MapPin size={16} className="text-cool-blue" />
                  <span className="font-medium text-white/90">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
