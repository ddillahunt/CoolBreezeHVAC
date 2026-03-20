import { Shield, Clock, Award, DollarSign, Wrench, HeartHandshake } from 'lucide-react'
import { FadeUp } from './AnimateIn'
import { SectionTitle } from './SectionTitle'

const reasons = [
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Emergency? We respond fast. Most calls are scheduled the same day.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'NC License #27118. Fully bonded and insured for your protection.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'No surprises. You approve the price before we start any work.',
  },
  {
    icon: Award,
    title: 'NATE Certified',
    description: 'Our technicians hold the highest industry certifications.',
  },
  {
    icon: Wrench,
    title: 'All Brands Serviced',
    description: 'Carrier, Trane, Lennox, Goodman, Rheem, and more.',
  },
  {
    icon: HeartHandshake,
    title: '100% Satisfaction',
    description: "If you're not happy, we'll make it right. Guaranteed.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-medium-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Why Cool Breeze"
          title="The Cool Breeze Difference"
          subtitle="Here's why thousands of Charlotte homeowners trust us with their comfort."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {reasons.map((r, i) => (
            <FadeUp key={r.title} delay={i * 0.07}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-cool-blue/10 flex items-center justify-center shrink-0">
                  <r.icon size={22} className="text-cool-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
