import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="about" className="about-section-new" ref={sectionRef}>
      <div className={`about-container-new ${isVisible ? 'fade-in-up' : ''}`}>
        <div className="about-content-new">
          <h2 className="about-title-new">Arekela Anjali</h2>
        
        <div className="about-description-new">
  <p>
    Some people build bridges I build connections, both in the digital space and in stories.
From creating visually stunning, user-friendly websites to crafting digital marketing strategies that deliver results, I thrive where creativity meets strategy. With a sharp eye for aesthetics, I bring ideas to life whether it’s a website, an app, or a brand campaign in a way that’s both captivating and purposeful. I believe in clean, simple, timeless designs that speak louder than clutter ever could.
  </p>
  
  <p>
    My digital expertise doesn’t stop there. I also develop mobile apps and have worked on 
    innovative machine learning projects, combining creativity with cutting-edge technology 
    to bring unique ideas to life.
  </p>
  
  <p>
    And when I’m not turning ideas into code, I’m telling stories through the centuries-old art 
    of Kuchipudi dance a journey that earned me a Guinness World Record. For me, whether 
    it’s a stage or a screen, it’s all about crafting experiences that leave a mark.
  </p>
</div>

        </div>
        <div className="about-image-new">
          <div className="profile-image-container">
            <img 
              src="/assets/about.png" 
              alt="Anjali - Professional Portrait" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;