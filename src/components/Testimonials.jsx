import React, { useState } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Repeatless transformed our operations. We've seen a 300% increase in efficiency since implementing their automation solutions.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Director, InnovateLab",
      content: "The team at Repeatless understood our complex requirements and delivered exactly what we needed. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, DataFlow Inc",
      content: "Outstanding service and results. Our manual processes are now fully automated, saving us countless hours every week.",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                {testimonials[currentTestimonial].content}
              </p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                <p className="author-role">{testimonials[currentTestimonial].role}</p>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="control-btn" onClick={prevTestimonial}>
              ←
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            <button className="control-btn" onClick={nextTestimonial}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials