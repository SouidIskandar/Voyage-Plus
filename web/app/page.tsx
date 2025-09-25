import Hero from './components/Hero'
import Destinations from './components/sections/Destinations'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import Newsletter from './components/sections/Newsletter'
import Contact from './components/sections/Contact'
import Events from './components/sections/Events'
import About from './components/sections/About'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Events />
      <Destinations />
      <Testimonials />
      <Contact />
      <Newsletter />
      {/* Add other sections below */}
    </>
  )
}
