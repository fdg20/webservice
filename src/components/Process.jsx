import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaDraftingCompass, FaRocket, FaChartLine } from 'react-icons/fa';
import './Process.css';

const Process = () => {
  const steps = [
    {
      icon: FaSearch,
      title: 'Discovery & Analysis',
      description: 'We conduct a comprehensive analysis of your current workflows, identify pain points, and map out optimization opportunities.',
      details: [
        'Business Process Audit',
        'Stakeholder Interviews',
        'Technology Assessment',
        'ROI Analysis'
      ]
    },
    {
      icon: FaDraftingCompass,
      title: 'Strategy & Design',
      description: 'Our experts design a customized AI automation strategy tailored to your specific needs and business objectives.',
      details: [
        'Solution Architecture',
        'Integration Planning',
        'Timeline Development',
        'Resource Allocation'
      ]
    },
    {
      icon: FaRocket,
      title: 'Implementation & Deployment',
      description: 'We build and deploy your AI solutions with minimal disruption to your existing operations.',
      details: [
        'Custom Development',
        'System Integration',
        'Testing & Quality Assurance',
        'Go-Live Support'
      ]
    },
    {
      icon: FaChartLine,
      title: 'Optimization & Growth',
      description: 'Continuous monitoring, optimization, and scaling to ensure your AI solutions evolve with your business.',
      details: [
        'Performance Monitoring',
        'Continuous Improvement',
        'Scaling Solutions',
        'Ongoing Support'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="process" className="process section">
      <div className="container">
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Our Proven Process
          </h2>
          <p className="section-subtitle">
            From initial consultation to full deployment, we follow a systematic approach 
            that ensures successful AI implementation and maximum ROI.
          </p>
        </motion.div>

        <motion.div 
          className="process-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className={`process-step ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="step-content">
                <div className="step-icon">
                  <step.icon />
                </div>
                
                <div className="step-info">
                  <div className="step-number">{index + 1}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  
                  <ul className="step-details">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="detail-item">
                        <span className="detail-bullet">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="process-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Ready to Start Your AI Journey?</h3>
            <p>Let's discuss your automation goals and create a custom roadmap</p>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;


