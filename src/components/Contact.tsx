import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      to_email: 'anjaliarekela29@gmail.com',
      phone_number: '6302086670'
    };

    try {
      // Initialize EmailJS (you'll need to set up your EmailJS account)
      await emailjs.send(
        'service_38c7fxi', // Replace with your EmailJS service ID
        'template_ss657c3', // Replace with your EmailJS template ID
        templateParams,
        '70OJqlp6GdAgmB1i3' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className={`contact-container ${isVisible ? 'fade-in-up' : ''}`}>
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to start a project together? Let&apos;s create something amazing.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>anjaliarekela29@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Linkedin size={24} />
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p>www.linkedin.com/in/anjaliarekela</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Github size={24} />
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <p>https://github.com/Anjali-projects</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" id="subject" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows={6} placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p style={{ color: '#10b981', marginTop: '1rem', textAlign: 'center' }}>
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center' }}>
                Failed to send message. Please try again or contact me directly at anjaliarekela29@gmail.com or 6302086670.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;