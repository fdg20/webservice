import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaDraftingCompass, FaRocket, FaChartLine } from 'react-icons/fa';
import './Process.css';

const Process = () => {
  const steps = [
    {
      icon: FaSearch,
      title: 'Discover',
      description: 'We analyze your current workflows and pain points.'
    },
    {
      icon: FaDraftingCompass,
      title: 'Design',
      description: 'Build a tailored AI automation blueprint for your business.'
    },
    {
      icon: FaRocket,
      title: 'Deploy',
      description: 'Implement and integrate solutions with minimal disruption.'
    },
    {
      icon: FaChartLine,
      title: 'Scale',
      description: 'Monitor, optimize, and expand automation as you grow.'
    }
  ];

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
            Automation, Made Simple
          </h2>
        </motion.div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="process-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-content">
                <div className="step-icon">
                  <step.icon />
                </div>
                <div className="step-info">
                  <div className="step-number">{index + 1}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;


