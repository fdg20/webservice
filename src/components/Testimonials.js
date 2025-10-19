import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'TechFlow Industries',
      image: '👩‍💼',
      rating: 5,
      text: 'TechFlow Solutions completely transformed our operations. The AI automation reduced our processing time by 80% and increased customer satisfaction significantly. Their team is professional, innovative, and delivers exceptional results.',
      results: ['80% faster processing', '95% customer satisfaction', '$500K annual savings']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'DataSync Corp',
      image: '👨‍💻',
      rating: 5,
      text: 'The AI integration was seamless and exceeded our expectations. We now have intelligent data processing that scales with our business. The ROI was evident within the first quarter.',
      results: ['Seamless integration', 'Scalable solutions', 'Immediate ROI']
    },
    {
      name: 'Emily Watson',
      role: 'Operations Director',
      company: 'Global Logistics',
      image: '👩‍🔧',
      rating: 5,
      text: 'Working with TechFlow was a game-changer. Their AI solutions optimized our supply chain and reduced operational costs by 60%. The team understood our challenges and delivered beyond our requirements.',
      results: ['60% cost reduction', 'Optimized supply chain', 'Exceeded expectations']
    },
    {
      name: 'David Park',
      role: 'Founder',
      company: 'InnovateTech',
      image: '👨‍🚀',
      rating: 5,
      text: 'The automation solutions provided by TechFlow have been instrumental in our rapid growth. We can now handle 5x more clients with the same team size. Their support and expertise are unmatched.',
      results: ['5x client capacity', 'Rapid growth enabled', 'Unmatched expertise']
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Operations',
      company: 'HealthTech Solutions',
      image: '👩‍⚕️',
      rating: 5,
      text: 'TechFlow\'s AI solutions revolutionized our patient data management. The accuracy and efficiency improvements have been remarkable. We highly recommend their services to any healthcare organization.',
      results: ['Revolutionary data management', 'Remarkable accuracy', 'Healthcare expertise']
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
            What Our Clients Say
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from the businesses that have 
            transformed their operations with our AI solutions.
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  
                  <blockquote className="testimonial-text">
                    {testimonials[currentTestimonial].text}
                  </blockquote>
                  
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonials[currentTestimonial].image}
                    </div>
                    <div className="author-info">
                      <div className="author-name">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="author-role">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="author-company">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="testimonial-rating">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                      <FaStar key={index} className="star" />
                    ))}
                  </div>
                  
                  <div className="testimonial-results">
                    {testimonials[currentTestimonial].results.map((result, index) => (
                      <div key={index} className="result-badge">
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="carousel-controls">
              <button 
                className="control-btn prev"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              
              <div className="carousel-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                className="control-btn next"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="testimonials-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Join Our Success Stories</h3>
            <p>Ready to transform your business with AI automation?</p>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;


