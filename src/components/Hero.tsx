import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hello, I&apos;m Anjali</h1>
        <p className="hero-subtitle">Engineer. Web Designer. Digital Marketer.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('about')}>
            View My Work ↓
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;