import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/Hero'
import { BrandLogos } from '../components/BrandLogos'
import { Services } from '../components/Services'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { About } from '../components/About'
import { Promos } from '../components/Promos'
import { Testimonials } from '../components/Testimonials'
import { ServiceArea } from '../components/ServiceArea'
import { Contact } from '../components/Contact'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Cool Breeze HVAC | Charlotte Area Heating & Air Conditioning</title>
        <meta
          name="description"
          content="Cool Breeze HVAC provides expert heating, air conditioning, ductwork, and Generac generator services to the greater Charlotte, NC area. Licensed, insured, BBB A+ accredited. Call 704-225-3659."
        />
        <meta property="og:title" content="Cool Breeze HVAC | Charlotte Area Heating & Air Conditioning" />
        <meta property="og:description" content="Superior HVAC repair, replacement, and installation services for the greater Charlotte area. 20+ years experience. Call 704-225-3659." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <BrandLogos />
      <Services />
      <WhyChooseUs />
      <About />
      <Promos />
      <Testimonials />
      <ServiceArea />
      <Contact />
    </>
  )
}
