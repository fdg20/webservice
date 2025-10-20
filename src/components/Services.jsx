import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce human error.",
      icon: "⚡"
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect and sync data across all your business applications and platforms.",
      icon: "🔗"
    },
    {
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and insights to optimize your business processes.",
      icon: "🧠"
    },
    {
      title: "Custom Solutions",
      description: "Tailored automation solutions designed specifically for your business needs.",
      icon: "🛠️"
    }
  ]

  return (
    <section id="solutions" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive automation solutions to transform your business operations
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services