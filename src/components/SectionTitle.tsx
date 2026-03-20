import { FadeUp } from './AnimateIn'

interface Props {
  tag: string
  title: string
  subtitle?: string
  light?: boolean
  center?: boolean
}

export function SectionTitle({ tag, title, subtitle, light = false, center = true }: Props) {
  return (
    <FadeUp>
      <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-14`}>
        <span className="text-cool-blue font-semibold text-sm uppercase tracking-widest">
          {tag}
        </span>
        <h2 className={`text-3xl lg:text-4xl font-bold mt-3 mb-2 ${light ? 'text-white' : 'text-navy'}`}>
          {title}
        </h2>
        <div className={`w-12 h-1 rounded-full bg-warm-amber ${center ? 'mx-auto' : ''} mb-4`} />
        {subtitle && (
          <p className={`text-lg ${light ? 'text-white/50' : 'text-gray-500'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </FadeUp>
  )
}
