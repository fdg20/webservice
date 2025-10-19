import React from 'react';
import { motion } from 'framer-motion';
import './CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Instagram DM & Comments Automation',
      description: 'AI agent + n8n turned Instagram comments & DMs into 24/7 sales chats—62% more replies and 41% more qualified leads.',
      results: ['62% more replies', '41% more qualified leads', '24/7 automation']
    },
    {
      title: 'LinkedIn Post Generator & Daily Auto-Posting',
      description: 'AI discovers proven LinkedIn ideas, rewrites them in your voice, posts daily—driving inbound leads and new client acquisition without manual work.',
      results: ['Daily automated posting', 'Proven content ideas', 'Inbound lead generation']
    },
    {
      title: 'Newsletter Spam Monitoring & Lead Generation',
      description: 'We turned newsletter subscriptions into a lead engine by detecting senders landing in spam and triggering tailored outreach—fueling a marketing agency\'s pipeline.',
      results: ['Automated lead detection', 'Spam monitoring', 'Pipeline optimization']
    }
  ];

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
            Proven Results. Real Impact.
          </h2>
          <p className="section-subtitle">
            Discover how we have helped businesses across industries automate their operations, 
            improve efficiency, and drive growth through innovative AI solutions.
          </p>
        </motion.div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className="case-study-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h3 className="study-title">{study.title}</h3>
              <p className="study-description">{study.description}</p>
              <div className="study-results">
                {study.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="result-badge">
                    {result}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;


