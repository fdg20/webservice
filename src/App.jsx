import React, { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
