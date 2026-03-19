import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { About } from '../components/About'
import { Testimonials } from '../components/Testimonials'
import { ServiceArea } from '../components/ServiceArea'
import { Contact } from '../components/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ServiceArea />
      <Contact />
    </>
  )
}
