import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">⟲</span>
            <h2>Repeatless</h2>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#solutions" onClick={() => scrollToSection('solutions')}>Solutions</a>
            <a href="#process" onClick={() => scrollToSection('process')}>Process</a>
            <a href="#case-studies" onClick={() => scrollToSection('case-studies')}>Case Studies</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About Us</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-secondary">Book a Demo</button>
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header