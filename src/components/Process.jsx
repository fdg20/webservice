import React from 'react'
import './Process.css'

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We analyze your current processes and identify automation opportunities.",
      icon: "🔍"
    },
    {
      number: "02", 
      title: "Design",
      description: "We create a custom automation strategy tailored to your business needs.",
      icon: "📋"
    },
    {
      number: "03",
      title: "Develop",
      description: "Our team builds and tests your automation solutions with precision.",
      icon: "⚙️"
    },
    {
      number: "04",
      title: "Deploy",
      description: "We launch your automation and provide ongoing support and optimization.",
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