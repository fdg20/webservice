import React from 'react'
import './Process.css'

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We discuss your vision, goals, and requirements for your perfect website.",
      icon: "💬"
    },
    {
      number: "02", 
      title: "Design",
      description: "We create stunning mockups and wireframes tailored to your brand and audience.",
      icon: "🎨"
    },
    {
      number: "03",
      title: "Development",
      description: "Our team builds your website with clean code and modern technologies.",
      icon: "💻"
    },
    {
      number: "04",
      title: "Launch",
      description: "We deploy your website and provide ongoing maintenance and support.",
      icon: "🚀"
    }
  ]

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Process</h2>
          <p className="section-description">
            A proven methodology to deliver successful automation solutions
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process