import { FadeIn } from './AnimateIn'

const brands = [
  'Carrier',
  'Trane',
  'Lennox',
  'Goodman',
  'Rheem',
  'Generac',
]

export function BrandLogos() {
  return (
    <section className="py-10 bg-light-gray border-b border-medium-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest font-semibold mb-6">
            Authorized Dealer &amp; Service Provider
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {brands.map((b) => (
              <span
                key={b}
                className="text-navy/30 font-extrabold text-xl lg:text-2xl tracking-tight"
              >
                {b}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
