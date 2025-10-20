import React, { useEffect, useRef, useState } from 'react'
import './Process.css'

const Process = () => {
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

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

  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We analyze your current workflows and pain points.',
      icon: '🔍',
      details: [
        'Comprehensive workflow audit',
        'Identify automation opportunities',
        'Assess current pain points',
        'Define success metrics'
      ]
    },
    {
      number: '02',
      title: 'Design',
      description: 'Build a tailored AI automation blueprint for your business.',
      icon: '🎨',
      details: [
        'Custom automation strategy',
        'AI workflow design',
        'Integration planning',
        'Timeline and milestones'
      ]
    },
    {
      number: '03',
      title: 'Deploy',
      description: 'Implement and integrate solutions with minimal disruption.',
      icon: '🚀',
      details: [
        'Seamless implementation',
        'Team training and support',
        'Quality assurance testing',
        'Go-live monitoring'
      ]
    },
    {
      number: '04',
      title: 'Scale',
      description: 'Monitor, optimize, and expand automation as you grow.',
      icon: '📈',
      details: [
        'Performance monitoring',
        'Continuous optimization',
        'Scalable expansion',
        'Ongoing support'
      ]
    }
  ]

  return (
    <section id="process" className="process" ref={sectionRef}>
      <div className="container">
        <div className="process-header fade-in">
          <h2 className="section-title">
            Automation, <span className="text-gradient">Made Simple</span>
          </h2>
        </div>

        <div className="process-content">
          <div className="process-steps">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`process-step fade-in ${activeStep === index ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <div className="step-details">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="detail-item">
                        <span className="detail-check">✓</span>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="process-visual">
            <div className="process-diagram">
              <div className="diagram-line"></div>
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`diagram-step ${activeStep === index ? 'active' : ''}`}
                  style={{ '--step-delay': `${index * 0.2}s` }}
                >
                  <div className="diagram-circle">
                    <span>{step.number}</span>
                  </div>
                  <div className="diagram-label">{step.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="process-cta fade-in">
          <button className="btn btn-primary">Get Free Consultation</button>
        </div>
      </div>
    </section>
  )
}

export default Process
