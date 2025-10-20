import React, { useEffect, useRef } from 'react'
import './Services.css'

const Services = () => {
  const sectionRef = useRef(null)

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

  const services = [
    {
      icon: '🤖',
      title: 'Workflow Automation',
      description: 'Automate repetitive manual tasks like data entry, scheduling, and approvals with intelligent AI flows. Free up your team\'s time to focus on high-value work while reducing errors and delays.',
      features: ['Data Entry Automation', 'Smart Scheduling', 'Approval Workflows', 'Error Reduction']
    },
    {
      icon: '💬',
      title: 'Smart Chat Agents',
      description: 'Our AI chat agents work 24/7—delivering instant, human-like responses for everything from product recommendations to order tracking. Automate support, cut wait times, and elevate customer experience effortlessly.',
      features: ['24/7 Availability', 'Instant Responses', 'Multi-language Support', 'Lead Qualification']
    },
    {
      icon: '📞',
      title: 'Mass Voice Automation',
      description: 'Engage thousands with lifelike AI voice agents in 30+ languages. From scheduling to reminders, our AI handles calls seamlessly—preventing double bookings and scaling smooth conversations effortlessly.',
      features: ['30+ Languages', 'Lifelike Voice', 'Call Scheduling', 'No Double Bookings']
    },
    {
      icon: '⚡',
      title: 'Effortless Operations',
      description: 'Supercharge productivity with AI-powered workflows. Automate tasks, cut errors, and streamline everything from data to support—boosting efficiency and freeing your team to focus on growth.',
      features: ['Productivity Boost', 'Error Reduction', 'Streamlined Processes', 'Growth Focus']
    },
    {
      icon: '🎯',
      title: 'Tailored AI Solutions',
      description: 'Every business is unique—so are our AI solutions. Tailored to your goals, they deliver instant impact and scale effortlessly as you grow—optimizing operations and elevating customer experiences along the way.',
      features: ['Custom Solutions', 'Instant Impact', 'Scalable Growth', 'Optimized Operations']
    }
  ]

  return (
    <section id="solutions" className="services" ref={sectionRef}>
      <div className="container">
        <div className="services-header fade-in">
          <h2 className="section-title">
            Solutions Tailored for <span className="text-gradient">Modern Businesses</span>
          </h2>
          <p className="section-subtitle">
            From startups to enterprises, we simplify your workflows with AI-driven automation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card fade-in ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta fade-in">
          <button className="btn btn-primary">Book a Demo</button>
        </div>
      </div>
    </section>
  )
}

export default Services
