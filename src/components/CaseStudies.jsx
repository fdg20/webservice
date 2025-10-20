import React from 'react'
import './CaseStudies.css'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Automation",
      description: "Reduced order processing time by 80% for a leading online retailer.",
      metrics: "80% faster processing",
      icon: "📈"
    },
    {
      title: "Customer Support",
      description: "Automated 90% of customer inquiries with AI-powered responses.",
      metrics: "90% automation rate",
      icon: "💬"
    },
    {
      title: "Data Management",
      description: "Streamlined data entry and validation across multiple systems.",
      metrics: "95% accuracy",
      icon: "📊"
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