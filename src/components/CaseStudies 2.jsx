import React, { useEffect, useRef } from 'react'
import './CaseStudies.css'

const CaseStudies = () => {
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

  const caseStudies = [
    {
      title: 'Instagram DM & Comments Automation',
      subtitle: 'AI Agent + n8n',
      description: 'AI agent + n8n turned Instagram comments & DMs into 24/7 sales chats—62% more replies and 41% more qualified leads.',
      metrics: [
        { label: 'More Replies', value: '+62%' },
        { label: 'Qualified Leads', value: '+41%' },
        { label: 'Response Time', value: '24/7' }
      ],
      image: '📱',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'LinkedIn Post Generator & Daily Auto-Posting',
      subtitle: 'B2B Marketing',
      description: 'AI discovers proven LinkedIn ideas, rewrites them in your voice, posts daily—driving inbound leads and new client acquisition without manual work.',
      metrics: [
        { label: 'Daily Posts', value: '100%' },
        { label: 'Lead Generation', value: 'Automated' },
        { label: 'Content Quality', value: 'AI-Optimized' }
      ],
      image: '💼',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Newsletter Spam Monitoring & Lead Generation',
      subtitle: 'Email Marketing Automation',
      description: 'We turned newsletter subscriptions into a lead engine by detecting senders landing in spam and triggering tailored outreach—fueling a marketing agency\'s pipeline.',
      metrics: [
        { label: 'Spam Detection', value: 'Automated' },
        { label: 'Lead Pipeline', value: 'Enhanced' },
        { label: 'Outreach', value: 'Tailored' }
      ],
      image: '📧',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ]

  return (
    <section id="case-studies" className="case-studies" ref={sectionRef}>
      <div className="container">
        <div className="case-studies-header fade-in">
          <h2 className="section-title">
            Proven Results. <span className="text-gradient">Real Impact.</span>
          </h2>
          <p className="section-subtitle">
            Discover how we have helped businesses across industries automate their operations, 
            improve efficiency, and drive growth through innovative AI solutions.
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={`case-study-card fade-in ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="case-study-header">
                <div className="case-study-image" style={{ background: study.color }}>
                  <span>{study.image}</span>
                </div>
                <div className="case-study-title-section">
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-subtitle">{study.subtitle}</p>
                </div>
              </div>
              
              <div className="case-study-content">
                <p className="case-study-description">{study.description}</p>
                
                <div className="case-study-metrics">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="metric-item">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="case-studies-cta fade-in">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
