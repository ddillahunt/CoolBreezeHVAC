import { Award, Clock, Users, ThumbsUp } from 'lucide-react'
import { FadeUp, ScaleIn } from './AnimateIn'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import hvacTechImg from '../assets/images/hvac-tech.jpg'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1500
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setDisplay(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, value])

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>
}

const stats = [
  { icon: Clock, value: 20, suffix: '+', label: 'Years Experience' },
  { icon: Users, value: 5000, suffix: '+', label: 'Homes Served' },
  { icon: ThumbsUp, value: 4.9, suffix: '', label: 'Google Rating' },
  { icon: Award, value: 0, suffix: 'A+', label: 'BBB Accredited' },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <ScaleIn key={s.label} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-sm border border-medium-gray">
                <div className="w-11 h-11 rounded-xl bg-cool-blue/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon size={22} className="text-cool-blue" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-navy mb-1">
                  {s.value > 0 ? (
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  ) : (
                    s.suffix
                  )}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {s.label}
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div>
              <span className="text-cool-blue font-semibold text-sm uppercase tracking-widest">
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-3 mb-2">
                Family-Owned.{' '}
                <span className="text-cool-blue">Community-Driven.</span>
              </h2>
              <div className="w-12 h-1 rounded-full bg-warm-amber mb-6" />
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Cool Breeze HVAC was founded on a simple promise: honest work at a
                fair price. For over two decades, we've been the company Charlotte
                homeowners call when comfort matters most.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Our NATE-certified technicians treat every home like their own.
                We don't upsell, we don't cut corners, and we always clean up
                after ourselves. That's the Cool Breeze way.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Licensed & Insured',
                  'NC License #27118',
                  'NATE Certified Techs',
                  'EPA Certified',
                  'Free Estimates',
                  'Financing Available',
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cool-blue rounded-full" />
                    <span className="text-navy font-medium text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={hvacTechImg}
                  alt="Cool Breeze HVAC technician"
                  loading="lazy"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-navy text-white rounded-2xl p-5 shadow-xl"
              >
                <div className="text-3xl font-extrabold text-cool-blue">20+</div>
                <div className="text-white/60 text-sm font-medium">Years Serving<br />Charlotte</div>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
