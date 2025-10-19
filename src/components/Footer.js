import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Process', href: '#process' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'AI Automation',
    'Process Optimization',
    'Data Intelligence',
    'Smart Integration',
    'Security Solutions',
    'Cloud Infrastructure'
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaGithub, href: '#', label: 'GitHub' }
  ];

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
    hidden: { opacity: 0, y: 30 },
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
    <footer id="contact" className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="footer-main">
            <motion.div className="footer-section company-info" variants={itemVariants}>
              <div className="footer-logo">
                <span className="logo-text">TechFlow</span>
                <span className="logo-suffix">Solutions</span>
              </div>
              <p className="company-description">
                Transforming businesses through intelligent AI automation solutions. 
                We help companies streamline operations, boost productivity, and scale 
                with cutting-edge technology.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>hello@techflow.com</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="footer-section" variants={itemVariants}>
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="footer-section" variants={itemVariants}>
              <h3 className="footer-title">Services</h3>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="footer-link">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="footer-section" variants={itemVariants}>
              <h3 className="footer-title">Connect With Us</h3>
              <p className="social-description">
                Follow us for the latest updates on AI automation and business transformation.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div 
            className="newsletter-section"
            variants={itemVariants}
          >
            <div className="newsletter-content">
              <h3 className="newsletter-title">Stay Updated</h3>
              <p className="newsletter-description">
                Get the latest insights on AI automation and business transformation.
              </p>
              <form className="newsletter-form">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="newsletter-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 TechFlow Solutions. All rights reserved.</p>
            </div>
            
            <div className="footer-bottom-links">
              <a href="#privacy" className="bottom-link">Privacy Policy</a>
              <a href="#terms" className="bottom-link">Terms of Service</a>
              <a href="#cookies" className="bottom-link">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        className="back-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;


