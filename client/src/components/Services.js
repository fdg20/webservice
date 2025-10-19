import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaComments, FaChartLine, FaCogs, FaShieldAlt, FaRocket } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: FaRobot,
      title: 'Workflow Automation',
      description: 'Automate repetitive manual tasks like data entry, scheduling, and approvals with intelligent AI flows. Free up your team\'s time to focus on high-value work while reducing errors and delays.'
    },
    {
      icon: FaComments,
      title: 'Smart Chat Agents',
      description: 'Our AI chat agents work 24/7—delivering instant, human-like responses for everything from product recommendations to order tracking. Automate support, cut wait times, and elevate customer experience effortlessly.'
    },
    {
      icon: FaRocket,
      title: 'Mass Voice Automation',
      description: 'Engage thousands with lifelike AI voice agents in 30+ languages. From scheduling to reminders, our AI handles calls seamlessly—preventing double bookings and scaling smooth conversations effortlessly.'
    },
    {
      icon: FaCogs,
      title: 'Effortless Operations',
      description: 'Supercharge productivity with AI-powered workflows. Automate tasks, cut errors, and streamline everything from data to support—boosting efficiency and freeing your team to focus on growth.'
    },
    {
      icon: FaChartLine,
      title: 'Tailored AI Solutions',
      description: 'Every business is unique—so are our AI solutions. Tailored to your goals, they deliver instant impact and scale effortlessly as you grow—optimizing operations and elevating customer experiences along the way.'
    }
  ];

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
            Solutions Tailored for Modern Businesses
          </h2>
          <p className="section-subtitle">
            From startups to enterprises, we simplify your workflows with AI-driven automation.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                <service.icon />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


