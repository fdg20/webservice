import React from 'react'
import './CaseStudies.css'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Website",
      description: "Increased online sales by 150% for a local boutique with a modern e-commerce platform.",
      metrics: "150% sales increase",
      icon: "🛍️"
    },
    {
      title: "Restaurant Website",
      description: "Boosted online orders by 200% with an intuitive ordering system and mobile optimization.",
      metrics: "200% more orders",
      icon: "🍽️"
    },
    {
      title: "Portfolio Website",
      description: "Helped a photographer showcase work professionally, leading to 300% more bookings.",
      metrics: "300% more bookings",
      icon: "📸"
    }
  ]

  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-description">
            Real results from our automation implementations
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="case-study-icon">{study.icon}</div>
              <h3 className="case-study-title">{study.title}</h3>
              <p className="case-study-description">{study.description}</p>
              <div className="case-study-metrics">{study.metrics}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies