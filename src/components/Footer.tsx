import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-stars"></div>
        <div className="footer-twinkling"></div>
      </div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-brand">
            <h3 className="footer-logo">Anjali</h3>
            <p className="footer-description">
              Engineer. Developer. Marketer.<br />
              Crafting digital experiences that leave a mark.
            </p>
            <div className="footer-social">
              <a href="mailto:anjaliarekela29@gmail.com" className="footer-social-link" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/anjaliarekela" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Anjali-projects" className="footer-social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => scrollToSection('home')} className="footer-link">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="footer-link">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="footer-link">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="footer-link">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="footer-link">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-contact-title">Get In Touch</h4>
            <div className="footer-contact-info">
              <p className="footer-contact-item">
                <Mail size={16} />
                anjaliarekela29@gmail.com
              </p>
              <p className="footer-contact-item">
                <Linkedin size={16} />
                linkedin.com/in/anjaliarekela
              </p>
              <p className="footer-contact-item">
                <Github size={16} />
                github.com/Anjali-projects
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Anjali Arekela. All rights reserved.
            </p>
            <p className="footer-made-with">
              Made with <Heart size={14} className="footer-heart" /> using React & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;