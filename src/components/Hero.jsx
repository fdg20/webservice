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
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Create Amazing <span className="underline">Websites</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="gradient-text">Digital</span> and <span className="gradient-text">Growth.</span>
            </h2>
            <p className="hero-description">
              Transform your business with stunning websites and digital solutions. 
              Build your online presence, attract customers, and grow your business.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">
                Get Started
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">Websites</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero