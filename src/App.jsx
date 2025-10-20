import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
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
