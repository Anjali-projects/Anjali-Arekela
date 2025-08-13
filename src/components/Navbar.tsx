import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Show navbar after scrolling past hero section
      setIsVisible(scrollY > heroHeight * 0.8);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-content">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
      
        </div>
        <div className="navbar-links">
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </div>
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;