import React, { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const statsRef = useRef(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '1+', label: 'Years Of Experience' },
    { number: '200+', label: 'Client Rating' },
    { number: '1K+', label: 'Customer Interactions' },
    { number: '100+', label: 'Automation Build' }
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content" ref={heroRef}>
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="fade-in">Automate Your</span>
              <span className="fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="text-gradient"> Workflows</span>
              </span>
            </h1>
            <h2 className="hero-subtitle fade-in" style={{ animationDelay: '0.4s' }}>
              Accelerate Your Growth.
            </h2>
            <p className="hero-description fade-in" style={{ animationDelay: '0.6s' }}>
              We help businesses eliminate repetitive tasks with AI-driven automation— 
              boosting efficiency, saving costs, and scaling faster.
            </p>
            <div className="hero-actions fade-in" style={{ animationDelay: '0.8s' }}>
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="floating-cards">
              <div className="card card-1">
                <div className="card-icon">🤖</div>
                <h3>AI Automation</h3>
                <p>Smart workflows</p>
              </div>
              <div className="card card-2">
                <div className="card-icon">⚡</div>
                <h3>Lightning Fast</h3>
                <p>Instant results</p>
              </div>
              <div className="card card-3">
                <div className="card-icon">📈</div>
                <h3>Scale Up</h3>
                <p>Grow effortlessly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-item fade-in" style={{ animationDelay: `${1 + index * 0.1}s` }}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
