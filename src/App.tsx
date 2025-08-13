import React from 'react';
import Hero from './components/Hero';
import ParticleNetwork from './components/ParticleNetwork';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ParticleNetwork />
      <Navbar />
      
      <section id="home" className="hero-section">
        <Hero />
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;