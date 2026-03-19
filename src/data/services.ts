import { Snowflake, Flame, Wind, Zap, Wrench, ShieldCheck, type LucideIcon } from 'lucide-react'

export interface ServiceData {
  slug: string
  icon: LucideIcon
  title: string
  shortDescription: string
  heroDescription: string
  color: string
  features: string[]
  details: string[]
}

export const services: ServiceData[] = [
  {
    slug: 'air-conditioning',
    icon: Snowflake,
    title: 'Air Conditioning',
    shortDescription:
      'Expert AC repair, installation, and maintenance to keep your home cool and comfortable all summer long.',
    heroDescription:
      'From emergency repairs to full system replacements, our certified technicians deliver fast, reliable air conditioning services that keep your Charlotte-area home cool when it matters most.',
    color: 'bg-cool-blue/10 text-cool-blue',
    features: [
      'Same-day emergency AC repair',
      'High-efficiency system installation',
      'Seasonal tune-ups & maintenance',
      'Refrigerant recharge & leak detection',
      'Thermostat installation & programming',
      'Indoor air quality assessments',
    ],
    details: [
      "When your air conditioning fails in the middle of a North Carolina summer, you need a team that responds fast and gets the job done right. Cool Breeze HVAC has been the Charlotte area's trusted AC experts for over 20 years.",
      'We service all major brands including Carrier, Trane, Lennox, Goodman, Rheem, and more. Whether you need a quick repair or a complete system upgrade, our NATE-certified technicians will diagnose the issue accurately and provide upfront, honest pricing.',
      'Our maintenance plans help prevent costly breakdowns and extend the life of your system. Regular tune-ups can improve efficiency by up to 15%, saving you money on energy bills all season long.',
    ],
  },
  {
    slug: 'heating-systems',
    icon: Flame,
    title: 'Heating Systems',
    shortDescription:
      'Furnace and heat pump repair, replacement, and seasonal tune-ups for reliable warmth when you need it.',
    heroDescription:
      "Don't let a cold snap catch you off guard. Our heating experts ensure your furnace, heat pump, or boiler runs efficiently and reliably all winter long.",
    color: 'bg-warm-amber/10 text-warm-amber',
    features: [
      'Furnace repair & replacement',
      'Heat pump installation & service',
      'Boiler maintenance & repair',
      'Emergency heating service',
      'Energy efficiency upgrades',
      'Carbon monoxide safety checks',
    ],
    details: [
      "A reliable heating system isn't just about comfort — it's about safety. Cool Breeze HVAC provides comprehensive heating services to keep your family warm and safe through every Charlotte winter.",
      'Our technicians are trained to work on all types of heating systems, from traditional gas furnaces to modern heat pumps and ductless mini-splits. We help you choose the right solution for your home and budget.',
      'Every heating service includes a thorough safety inspection, including carbon monoxide testing. We believe in doing the job right the first time, with no shortcuts and no surprises on your bill.',
    ],
  },
  {
    slug: 'ductwork',
    icon: Wind,
    title: 'Ductwork',
    shortDescription:
      "Professional duct installation, sealing, and cleaning to maximize your system's efficiency and air quality.",
    heroDescription:
      'Your ductwork is the hidden backbone of your HVAC system. Leaky or dirty ducts can waste up to 30% of your conditioned air. We make sure every bit of comfort reaches your living spaces.',
    color: 'bg-navy/10 text-navy',
    features: [
      'Duct design & installation',
      'Duct sealing & insulation',
      'Professional duct cleaning',
      'Air balancing & zoning',
      'Duct leak testing',
      'Mold & allergen remediation',
    ],
    details: [
      'Most homeowners never think about their ductwork, but it plays a critical role in your comfort, energy bills, and indoor air quality. Studies show that the average home loses 20-30% of conditioned air through leaks and poor connections.',
      'Cool Breeze HVAC offers complete ductwork services, from new installations in construction projects to retrofitting and sealing existing systems. Our team uses advanced diagnostic tools to pinpoint leaks and inefficiencies.',
      'We also provide professional duct cleaning to remove dust, allergens, mold, and debris that accumulate over time. Clean ducts mean cleaner air for your family and better performance from your HVAC system.',
    ],
  },
  {
    slug: 'generac-generators',
    icon: Zap,
    title: 'Generac Generators',
    shortDescription:
      'Authorized Generac dealer offering whole-home standby generator installation and service.',
    heroDescription:
      'Never lose power again. As an authorized Generac dealer, we install and service whole-home standby generators that kick in automatically when the grid goes down.',
    color: 'bg-green-500/10 text-green-600',
    features: [
      'Whole-home standby generators',
      'Automatic transfer switches',
      'Load management systems',
      'Annual maintenance & testing',
      'Warranty service & support',
      'Free in-home assessments',
    ],
    details: [
      'Charlotte-area storms can knock out power for hours or even days. A Generac whole-home standby generator ensures your family stays comfortable, your food stays fresh, and your sump pump keeps running — no matter what.',
      'As an authorized Generac dealer, Cool Breeze HVAC handles everything from sizing and permitting to installation and ongoing maintenance. Our generators run on natural gas or propane and start automatically within seconds of a power outage.',
      "We'll help you choose the right generator size for your home and budget, and our technicians handle the complete installation including the automatic transfer switch. Annual maintenance plans keep your generator ready for when you need it most.",
    ],
  },
  {
    slug: 'preventative-maintenance',
    icon: Wrench,
    title: 'Preventative Maintenance',
    shortDescription:
      'Service agreements and scheduled maintenance to extend the life of your HVAC system and prevent costly breakdowns.',
    heroDescription:
      'An ounce of prevention is worth a pound of cure. Our maintenance plans catch small problems before they become expensive emergencies, keeping your system running at peak efficiency.',
    color: 'bg-purple-500/10 text-purple-600',
    features: [
      'Bi-annual system tune-ups',
      'Priority emergency service',
      'Discounted repair rates',
      'Extended equipment life',
      'Improved energy efficiency',
      'Transferable agreements',
    ],
    details: [
      "Regular maintenance is the single best investment you can make in your HVAC system. Just like your car needs oil changes, your heating and cooling equipment needs professional attention to run efficiently and last longer.",
      "Cool Breeze HVAC offers flexible maintenance plans that include two comprehensive tune-ups per year — one for your cooling system in spring and one for your heating system in fall. Each visit includes a thorough inspection, cleaning, and calibration.",
      'Our maintenance plan members enjoy priority scheduling for emergency calls, discounted repair rates, and peace of mind knowing their system is always in top condition. Most plans pay for themselves in energy savings alone.',
    ],
  },
  {
    slug: 'commercial-hvac',
    icon: ShieldCheck,
    title: 'Commercial HVAC',
    shortDescription:
      'Full-service commercial heating and cooling solutions for businesses of all sizes in the Charlotte area.',
    heroDescription:
      "Your business can't afford HVAC downtime. We provide fast, reliable commercial heating and cooling services to keep your employees comfortable and your operations running smoothly.",
    color: 'bg-red-500/10 text-red-600',
    features: [
      'Commercial system installation',
      'Rooftop unit service & repair',
      'Building automation systems',
      'Commercial maintenance contracts',
      'Energy management consulting',
      '24/7 emergency commercial service',
    ],
    details: [
      "From small retail shops to large office buildings, Cool Breeze HVAC has the expertise and equipment to handle commercial HVAC projects of any size. We understand that your business depends on a comfortable environment for employees and customers alike.",
      'Our commercial team is experienced with rooftop units, split systems, VRF systems, and building automation controls. We work around your schedule to minimize disruption to your operations.',
      'Commercial maintenance contracts provide regular inspections and tune-ups, priority emergency response, and detailed documentation for compliance purposes. We help you budget for HVAC expenses and avoid costly surprises.',
    ],
  },
]
