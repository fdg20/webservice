import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'

const Contact = () => {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const services = [
    'Workflow Automation',
    'Smart Chat Agents',
    'Mass Voice Automation',
    'Effortless Operations',
    'Tailored AI Solutions'
  ]

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-content">
          <div className="contact-info fade-in">
            <h2 className="section-title">
              Ready to <span className="text-gradient">Automate</span> Your Business?
            </h2>
            <p className="section-subtitle">
              Get in touch with our team to discuss how we can help streamline your workflows 
              and boost your productivity with AI-driven automation.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email Us</h4>
                  <p>contact@repeatless.in</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 9849884501</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Hyderabad, L.B. Nagar</p>
                </div>
              </div>
            </div>

            <div className="newsletter-signup">
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter for the latest automation insights and tips.</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="contact-form-container fade-in">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Get Your Free Consultation</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us about your automation needs..."
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
