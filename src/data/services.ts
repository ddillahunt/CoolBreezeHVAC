import { Snowflake, Flame, Wind, Zap, Wrench, ShieldCheck, type LucideIcon } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: string
}

export interface ServiceData {
  slug: string
  icon: LucideIcon
  title: string
  shortDescription: string
  heroDescription: string
  color: string
  features: string[]
  details: string[]
  faqs: FAQItem[]
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
    faqs: [
      { question: 'How often should I service my AC?', answer: 'We recommend a professional tune-up at least once a year, ideally in the spring before the cooling season begins. Regular maintenance can prevent up to 95% of all AC repairs.' },
      { question: 'How long does an AC unit typically last?', answer: 'A well-maintained central air conditioning system typically lasts 15-20 years. If your unit is over 10 years old and needs frequent repairs, it may be more cost-effective to replace it.' },
      { question: 'Why is my AC blowing warm air?', answer: 'Common causes include low refrigerant, a dirty air filter, a faulty thermostat, or a frozen evaporator coil. Our technicians can diagnose the exact issue and provide a fix.' },
      { question: 'Do you offer financing for new AC installations?', answer: 'Yes! We offer flexible financing options to help make a new high-efficiency system affordable. Ask us about our current promotions and payment plans.' },
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
    faqs: [
      { question: 'What are signs my furnace needs repair?', answer: 'Warning signs include unusual noises (banging, squealing), uneven heating, frequent cycling, yellow pilot light instead of blue, rising energy bills, or a system that is over 15 years old.' },
      { question: 'Heat pump vs. furnace — which is better?', answer: 'In the Charlotte climate, heat pumps are very efficient for most of the year. For extreme cold snaps, a dual-fuel system (heat pump + gas furnace backup) offers the best of both worlds.' },
      { question: 'How often should I change my furnace filter?', answer: 'Standard 1-inch filters should be changed every 1-3 months. Thicker 4-inch filters can last up to 6 months. A clogged filter reduces efficiency and can damage your system.' },
      { question: 'Is a carbon monoxide detector enough?', answer: 'Detectors are essential, but they are a last line of defense. Annual furnace inspections include CO testing at the source to catch leaks before they become dangerous.' },
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
    faqs: [
      { question: 'How do I know if my ducts are leaking?', answer: 'Signs include rooms that are hard to heat or cool, excessive dust, higher-than-expected energy bills, and visible gaps or disconnections at duct joints. We offer professional duct leak testing to pinpoint issues.' },
      { question: 'How often should ducts be cleaned?', answer: 'The EPA recommends duct cleaning every 3-5 years, or sooner if you notice mold, pest infestations, excessive dust, or after home renovations.' },
      { question: 'Can duct sealing really save money?', answer: 'Absolutely. The Department of Energy estimates that sealing leaky ducts can improve efficiency by 20-30%, which can translate to hundreds of dollars in annual savings.' },
      { question: 'Do you offer duct cleaning for allergies?', answer: 'Yes. Our duct cleaning service removes dust, pollen, pet dander, mold spores, and other allergens. Many customers with allergies or asthma notice a significant improvement after cleaning.' },
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
    faqs: [
      { question: 'How much does a whole-home generator cost?', answer: 'Whole-home Generac generators typically range from $5,000 to $15,000 installed, depending on the size of your home and power needs. We offer free in-home assessments and financing options.' },
      { question: 'How quickly does a standby generator turn on?', answer: 'Generac standby generators detect a power outage and start automatically within 10 seconds. You may not even notice the power went out.' },
      { question: 'What fuel does a Generac generator use?', answer: 'Generac standby generators run on natural gas or liquid propane, connecting directly to your existing fuel supply. No need to refuel like portable generators.' },
      { question: 'Do generators need maintenance?', answer: 'Yes. We recommend annual professional maintenance including oil and filter changes, spark plug inspection, battery testing, and a full load test to ensure reliability.' },
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
    faqs: [
      { question: 'What does a maintenance visit include?', answer: 'Each visit includes a thorough inspection, cleaning of coils and components, refrigerant level check, electrical connection tightening, thermostat calibration, filter replacement, and a full system performance test.' },
      { question: 'How much does a maintenance plan cost?', answer: 'Our plans start at an affordable annual rate that includes two tune-ups per year. Most plans pay for themselves through energy savings and discounted repair rates. Contact us for current pricing.' },
      { question: 'Can I transfer my maintenance plan if I sell my home?', answer: 'Yes! Our maintenance agreements are fully transferable, which can be a selling point when listing your home.' },
      { question: 'Will maintenance really prevent breakdowns?', answer: 'While no guarantee can prevent every issue, regular maintenance catches 95% of potential problems before they become costly emergencies. Most major breakdowns are caused by neglected maintenance.' },
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
    faqs: [
      { question: 'Do you work on rooftop units?', answer: 'Yes. Our commercial team is fully trained and equipped to service, repair, and replace rooftop HVAC units of all sizes and brands.' },
      { question: 'Can you work after business hours?', answer: 'Absolutely. We understand that HVAC work can disrupt your business. We offer evening, weekend, and overnight service to minimize impact on your operations.' },
      { question: 'Do you offer commercial maintenance contracts?', answer: 'Yes. Our commercial contracts include scheduled inspections, priority emergency response, detailed service reports, and preferred pricing on parts and labor.' },
      { question: 'What size commercial projects can you handle?', answer: 'We serve everything from small retail shops and restaurants to large office buildings and warehouses. Our team has the expertise and equipment for projects of any scale.' },
    ],
  },
]
