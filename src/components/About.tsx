import { Award, Clock, Users, ThumbsUp } from 'lucide-react'
import { FadeUp, ScaleIn } from './AnimateIn'
import hvacTechImg from '../assets/images/hvac-tech.jpg'

const stats = [
  { icon: Clock, value: '20+', label: 'Years Experience' },
  { icon: Users, value: '5,000+', label: 'Homes Served' },
  { icon: ThumbsUp, value: '4.9', label: 'Google Rating' },
  { icon: Award, value: 'BBB', label: 'A+ Accredited' },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div>
              <span className="text-cool-blue font-semibold text-sm uppercase tracking-widest">
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-3 mb-6">
                Your Trusted Local{' '}
                <span className="text-cool-blue">HVAC Experts</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Cool Breeze HVAC has been providing superior heating and air
                conditioning services to the greater Charlotte area for over 20
                years. Our team of licensed, certified technicians is dedicated to
                keeping your home comfortable year-round.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We proudly serve Harrisburg, Concord, Matthews, Mint Hill, and
                surrounding communities with honest, reliable service backed by
                our BBB A+ accreditation and NC License #27118.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                <img
                  src={hvacTechImg}
                  alt="HVAC technician servicing equipment"
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-navy/5 text-navy font-medium px-4 py-2 rounded-lg text-sm">
                  Licensed &amp; Insured
                </span>
                <span className="bg-navy/5 text-navy font-medium px-4 py-2 rounded-lg text-sm">
                  NC License #27118
                </span>
                <span className="bg-navy/5 text-navy font-medium px-4 py-2 rounded-lg text-sm">
                  Free Estimates
                </span>
                <span className="bg-navy/5 text-navy font-medium px-4 py-2 rounded-lg text-sm">
                  Financing Available
                </span>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <ScaleIn key={s.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-medium-gray">
                  <div className="w-12 h-12 rounded-xl bg-cool-blue/10 flex items-center justify-center mx-auto mb-4">
                    <s.icon size={24} className="text-cool-blue" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-navy mb-1">
                    {s.value}
                  </div>
                  <div className="text-gray-500 text-sm font-medium">
                    {s.label}
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
