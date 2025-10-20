import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Create stunning, responsive websites that captivate your audience and drive conversions.",
      icon: "🎨"
    },
    {
      title: "E-commerce Solutions",
      description: "Build powerful online stores with seamless shopping experiences and secure payments.",
      icon: "🛒"
    },
    {
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic to your website.",
      icon: "📈"
    },
    {
      title: "Maintenance & Support",
      description: "Keep your website running smoothly with ongoing maintenance and technical support.",
      icon: "🔧"
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