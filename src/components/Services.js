import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaComments, FaChartLine, FaCogs, FaShieldAlt, FaRocket } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: FaRobot,
      title: 'Intelligent Process Automation',
      description: 'Transform repetitive tasks into automated workflows using advanced AI algorithms. Reduce manual work by up to 80% while maintaining accuracy and consistency.',
      features: ['Workflow Design', 'Data Processing', 'Error Reduction', '24/7 Operation']
    },
    {
      icon: FaComments,
      title: 'AI-Powered Customer Support',
      description: 'Deploy intelligent chatbots and virtual assistants that provide instant, personalized responses. Enhance customer satisfaction while reducing support costs.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management']
    },
    {
      icon: FaChartLine,
      title: 'Predictive Analytics & Insights',
      description: 'Leverage machine learning to predict trends, optimize operations, and make data-driven decisions that drive business growth.',
      features: ['Trend Analysis', 'Forecasting', 'Performance Optimization', 'Risk Assessment']
    },
    {
      icon: FaCogs,
      title: 'Smart Integration Solutions',
      description: 'Seamlessly connect your existing systems with AI-powered integrations. Streamline data flow and eliminate silos across your organization.',
      features: ['API Integration', 'Data Synchronization', 'Real-time Updates', 'Custom Connectors']
    },
    {
      icon: FaShieldAlt,
      title: 'Security & Compliance Automation',
      description: 'Automate security monitoring, compliance reporting, and threat detection. Protect your business with intelligent security protocols.',
      features: ['Threat Detection', 'Compliance Monitoring', 'Access Control', 'Audit Trails']
    },
    {
      icon: FaRocket,
      title: 'Scalable AI Infrastructure',
      description: 'Build and deploy AI solutions that grow with your business. From cloud deployment to edge computing, we ensure optimal performance.',
      features: ['Cloud Deployment', 'Edge Computing', 'Auto-scaling', 'Performance Monitoring']
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
    <section id="solutions" className="services section">
      <div className="container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Comprehensive AI Solutions
          </h2>
          <p className="section-subtitle">
            From automation to intelligence, we provide end-to-end AI solutions 
            that transform how your business operates and scales.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon">
                <service.icon />
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              
              <p className="service-description">
                {service.description}
              </p>
              
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <span className="feature-bullet">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                className="service-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Transform Your Business?</h3>
          <p>Let's discuss how our AI solutions can accelerate your growth</p>
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


