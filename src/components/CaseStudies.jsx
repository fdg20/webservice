import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaUsers, FaClock } from 'react-icons/fa';
import './CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-commerce Automation Revolution',
      industry: 'Retail & E-commerce',
      challenge: 'Manual order processing and customer support bottlenecks',
      solution: 'Implemented AI-powered order management and chatbot system',
      results: [
        { metric: '85%', label: 'Reduction in Processing Time' },
        { metric: '60%', label: 'Increase in Customer Satisfaction' },
        { metric: '$2.5M', label: 'Annual Cost Savings' }
      ],
      description: 'Transformed a struggling e-commerce platform into a streamlined operation with intelligent automation.',
      image: '🛒'
    },
    {
      title: 'Healthcare Data Intelligence',
      industry: 'Healthcare',
      challenge: 'Complex patient data management and appointment scheduling',
      solution: 'Deployed AI-driven patient management and predictive analytics',
      results: [
        { metric: '70%', label: 'Faster Patient Processing' },
        { metric: '45%', label: 'Reduction in Wait Times' },
        { metric: '90%', label: 'Accuracy Improvement' }
      ],
      description: 'Revolutionized patient care through intelligent data processing and predictive healthcare analytics.',
      image: '🏥'
    },
    {
      title: 'Financial Services Optimization',
      industry: 'FinTech',
      challenge: 'Manual loan processing and risk assessment delays',
      solution: 'Built AI-powered loan approval and risk analysis system',
      results: [
        { metric: '80%', label: 'Faster Loan Approvals' },
        { metric: '95%', label: 'Risk Assessment Accuracy' },
        { metric: '50%', label: 'Reduction in Processing Costs' }
      ],
      description: 'Streamlined financial operations with intelligent automation and advanced risk modeling.',
      image: '💳'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="case-studies" className="case-studies section">
      <div className="container">
        <motion.div 
          className="case-studies-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Success Stories
          </h2>
          <p className="section-subtitle">
            Real results from real businesses. See how our AI solutions have 
            transformed operations and driven measurable growth across industries.
          </p>
        </motion.div>

        <motion.div 
          className="case-studies-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className="case-study-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="case-study-header">
                <div className="study-image">{study.image}</div>
                <div className="study-info">
                  <span className="study-industry">{study.industry}</span>
                  <h3 className="study-title">{study.title}</h3>
                </div>
              </div>

              <div className="case-study-content">
                <div className="challenge-section">
                  <h4 className="section-label">Challenge</h4>
                  <p className="challenge-text">{study.challenge}</p>
                </div>

                <div className="solution-section">
                  <h4 className="section-label">Solution</h4>
                  <p className="solution-text">{study.solution}</p>
                </div>

                <div className="results-section">
                  <h4 className="section-label">Results</h4>
                  <div className="results-grid">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="result-item">
                        <div className="result-metric">{result.metric}</div>
                        <div className="result-label">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="study-description">{study.description}</p>

                <motion.button
                  className="study-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Full Case Study
                  <FaArrowRight className="btn-icon" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="case-studies-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Ready to Write Your Success Story?</h3>
            <p>Join hundreds of businesses already transforming with AI automation</p>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Transformation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;


