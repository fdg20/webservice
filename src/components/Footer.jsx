import React from 'react'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <h3>Webpage Services</h3>
            </div>
            <p className="footer-description">
              Creating stunning websites and digital solutions to drive your business growth and success.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#solutions">Process Automation</a></li>
              <li><a href="#solutions">Data Integration</a></li>
              <li><a href="#solutions">AI Insights</a></li>
              <li><a href="#solutions">Custom Solutions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-info">
              <p>📧 hello@webpageservices.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Web Design St, Digital City</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Webpage Services. All rights reserved.</p>
          <button className="scroll-to-top" onClick={scrollToTop}>
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer