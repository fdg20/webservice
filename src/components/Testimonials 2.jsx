import React, { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const sectionRef = useRef(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: 'Ali',
      role: 'Social Media Manager, Tyga',
      content: 'Repeatless completely transformed how we handle client engagement on Instagram. The DM and comments automation not only saved hours every day but helped us close more deals through genuine, real-time interactions.',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      name: 'David Sai',
      role: 'Founder, ScaleUp Agency',
      content: 'Our LinkedIn presence skyrocketed. The AI auto-posting system analyzes high-performing posts, rewrites them in our brand voice, and publishes daily. We now get qualified leads directly from our content.',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      name: 'Mark Zen',
      role: 'Marketing Director, BrandHile',
      content: 'The social media automation built by Repeatless keeps our brand consistent across Instagram, TikTok, and LinkedIn. It\'s like having a 24/7 content team—hands-free and always on time.',
      avatar: '👨‍🎨',
      rating: 5
    },
    {
      name: 'Aravind Sami',
      role: 'Head of Marketing, Masaai',
      content: 'The newsletter automation helped us find new clients we didn\'t even know existed. It monitors spam-routed newsletters, identifies potential businesses, and reaches out automatically. Game-changing for our email marketing team.',
      avatar: '👨‍📊',
      rating: 5
    },
    {
      name: 'Maria',
      role: 'Founder, Vijai Public',
      content: 'With Repeatless\' WhatsApp automation, every new book release now reaches thousands instantly. We went from manual broadcasts to automated, personalized messaging—and our launch-day sales have doubled.',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      name: 'Ryan Patel',
      role: 'Operations Lead, StartEdge Consultancy',
      content: 'Our consultancy teams save hours every week. The consolidation automation auto-creates all documents, names them perfectly, and stores them in the right Drive folders. Zero manual errors, 100% organized.',
      avatar: '👨‍🔧',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="testimonials-header fade-in">
          <h2 className="section-title">
            Real Results from Our <span className="text-gradient">AI Automation Solutions</span>
          </h2>
        </div>

        <div className="testimonials-content">
          <div className="testimonial-card fade-in">
            <div className="testimonial-content">
              <div className="testimonial-quote">
                <span className="quote-mark">"</span>
                <p className="testimonial-text">
                  {testimonials[currentTestimonial].content}
                </p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>{testimonials[currentTestimonial].avatar}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                  <p className="author-role">{testimonials[currentTestimonial].role}</p>
                  <div className="testimonial-rating">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${currentTestimonial === index ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-cta fade-in">
          <h3>Ready to Repeat Less & Grow More?</h3>
          <p>Let's map your automation journey together. Book your personalized demo today.</p>
          <button className="btn btn-primary">Book a Demo</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
