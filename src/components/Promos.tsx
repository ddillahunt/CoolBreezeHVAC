import { Percent, Snowflake, Wrench } from 'lucide-react'
import { FadeUp } from './AnimateIn'
import { SectionTitle } from './SectionTitle'

const promos = [
  {
    icon: Snowflake,
    title: '$49 AC Tune-Up',
    description: 'Complete 21-point inspection, cleaning & performance report.',
    note: 'Reg. $129 — Save $80',
    color: 'bg-cool-blue',
  },
  {
    icon: Percent,
    title: '10% Off Repairs',
    description: 'First-time customers receive 10% off any repair service.',
    note: 'New customers only',
    color: 'bg-warm-amber',
  },
  {
    icon: Wrench,
    title: 'Free Estimate',
    description: 'Free in-home estimate on any new system installation.',
    note: 'No obligation',
    color: 'bg-green-500',
  },
]

export function Promos() {
  return (
    <section className="py-16 lg:py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cool-blue rounded-full blur-[150px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Special Offers"
          title="Current Promotions"
          light
        />

        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
                <div className={`w-14 h-14 ${p.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <p.icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-white/50 mb-4 leading-relaxed">{p.description}</p>
                <span className="inline-block text-cool-blue text-sm font-semibold bg-cool-blue/10 px-4 py-1.5 rounded-full">
                  {p.note}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="text-center text-white/30 text-sm mt-8">
            Offers cannot be combined. Call for details. Expires end of season.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
