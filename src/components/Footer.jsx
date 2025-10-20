import React from 'react'
import './Footer.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Repeatless</h3>
            <p className="footer-description">
              Transforming businesses through intelligent AI automation solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <span>📺</span>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a href="#solutions" onClick={() => scrollToSection('solutions')}>Solutions</a></li>
                <li><a href="#process" onClick={() => scrollToSection('process')}>Process</a></li>
                <li><a href="#case-studies" onClick={() => scrollToSection('case-studies')}>Case Studies</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
                <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-list">
                <li><a href="#">Workflow Automation</a></li>
                <li><a href="#">Smart Chat Agents</a></li>
                <li><a href="#">Voice Automation</a></li>
                <li><a href="#">AI Solutions</a></li>
                <li><a href="#">Consultation</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Contact Us</h4>
              <div className="contact-info">
                <p>📧 contact@repeatless.in</p>
                <p>📍 Hyderabad, L.B. Nagar</p>
                <p>📞 +91 9849884501</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Repeatless. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
