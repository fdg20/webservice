import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <Header />
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;


