import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Ali',
      role: 'Social Media Manager',
      company: 'Tyga',
      text: 'Repeatless completely transformed how we handle client engagement on Instagram. The DM and comments automation not only saved hours every day but helped us close more deals through genuine, real-time interactions.'
    },
    {
      name: 'David sai',
      role: 'Founder',
      company: 'ScaleUp Agency',
      text: 'Our LinkedIn presence skyrocketed. The AI auto-posting system analyzes high-performing posts, rewrites them in our brand voice, and publishes daily. We now get qualified leads directly from our content.'
    },
    {
      name: 'Mark zen',
      role: 'Marketing Director',
      company: 'BrandHile',
      text: 'The social media automation built by Repeatless keeps our brand consistent across Instagram, TikTok, and LinkedIn. It\'s like having a 24/7 content team—hands-free and always on time.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Real Results from Our AI Automation Solutions
          </h2>
        </motion.div>

        <div className="testimonial-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              
              <blockquote className="testimonial-text">
                {testimonials[currentTestimonial].text}
              </blockquote>
              
              <div className="testimonial-author">
                <div className="author-name">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="author-role">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="star" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="carousel-controls">
            <button 
              className="control-btn prev"
              onClick={prevTestimonial}
            >
              <FaChevronLeft />
            </button>
            
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            
            <button 
              className="control-btn next"
              onClick={nextTestimonial}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


