import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInViewport = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInViewport) {
      setIsVisible(true);
    }
  }, [isInViewport]);

  const projects = [
    {
      id: 1,
      title: { first: "E-commerce website", second: "Tile Galaxy" },
      description: "Tile Galaxy is a WordPress-based eCommerce website built with Elementor and WooCommerce, designed to showcase and sell a premium range of ceramic, porcelain, vitrified, marble, and granite tiles. It features custom product categories, responsive design, SEO optimization, and an engaging blog to boost online visibility and customer engagement.",
      image: "/assets/tilegalaxy.jpeg",
      learnMore: "https://tilegalaxy.in/"
    },
    {
      id: 2,
      title: { first: "Makeup Artist Studio", second: "Pixel Perfect Nikhitha" },
      description: "Pixel Perfect Nikhitha is a professional beauty & makeup studio based in Hyderabad, led by certified artist Nikhitha. They offer bridal makeup, party looks, hairstyles and saree draping — all with a focus on enhancing confidence and using high-quality products. The site features portfolio galleries, detailed service offerings, client testimonials, and contact/book appointment options.",
      image: "/assets/makeup.jpeg",
      learnMore: "https://pixelperfectnikhitha.in/"
    },
    {
      id: 3,
      title: { first: "Photography Portfolio", second: "Photographer Alex Rivers" },
      description: "A professional photography portfolio website designed to showcase work, services, and achievements. Built with Bolt, it features a modern responsive layout, engaging image galleries, service details, and a contact section. The site highlights creativity, client success, and professional milestones while providing an elegant platform for booking and portfolio display.",
      image: "/assets/photo.jpeg",

      learnMore: "https://professional-photogr-x9yc.bolt.host/"
    },
    {
      id: 4,
      title: { first: "Disney+ clone", second: "Pixify" },
      description: "Pixify is a Disney+ clone built with ReactJS and NodeJS that offers a seamless streaming experience with a user-friendly interface. It features content browsing, video playback, and user authentication, replicating core functionalities of popular OTT platforms.",
      image: "/assets/pixify.jpeg",

      learnMore: "https://pixify-react-uslo.vercel.app/"
    },
    {
      id: 6,
      title: { first: "Cafe website", second: "Cafe Haven" },
      description: "A modern café website built with Bolt to showcase signature coffee, artisan pastries, and the story behind the brand. Featuring a clean responsive layout, menu highlights, customer favorites, and an engaging 'Our Story' section, the site captures the warmth and community spirit of the café. It provides visitors with easy access to the menu, operating hours, and team details, creating a welcoming digital presence.",
      image: "/assets/cafe.jpeg",

      learnMore: "https://cafe-haven-modern-ca-j1gk.bolt.host/"
    },
    
    {
      id: 5,
      title: { first: "Flutter App", second: "SheRaksha" },
      description: "SheRaksha is a women’s safety mobile application built using Flutter, integrated with GPS, GSM, and IoT features for real-time location tracking and emergency alerts. It enables quick communication with emergency contacts, location sharing, and safety monitoring through a user-friendly interface.",
      image: "/assets/app.jpg",
      learnMore: "https://github.com/Anjali-projects"
    },
    {
      id: 7,
      title: { first: "Computer Vision + Machine Learning", second: "Ai Virtual Mouse" },
      description: "AI Virtual Mouse is a hand-gesture-based mouse controller built using OpenCV and Machine Learning that enables touch-free computer interaction. It replaces traditional input devices by recognizing real-time hand gestures for precise cursor control and clicks.",
      image: "/assets/mouse.jpg",
      learnMore: "https://github.com/Anjali-projects/AI_Virtual_Mouse"
    },
    {
      id: 8,
      title: { first: "Power BI", second: "Wave Provisioning Dashboard" },
      description: "Wave Provisioning Dashboard is an interactive data visualization tool developed with Power BI to monitor and analyze provisioning workflows. It provides real-time insights using real-time datasets and key performance metrics, helping streamline operations and improve decision-making efficiency.",
      image: "/assets/powerbi.png",
      learnMore: "https://github.com/Anjali-projects"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1]
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: 50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
        delay: 0.2
      }
    }
  };

  return (
    <section id="projects" className="projects-galaxy-section" ref={sectionRef}>
      <div className="galaxy-background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      <motion.div 
        className="projects-galaxy-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div 
          className="projects-galaxy-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <h2 className="skills-title">
            Projects
          </h2>
          <p className="skills-subtitle">
            Transforming visions into functional, beautiful realities
          </p>
        </motion.div>

        <div className="projects-galaxy-list">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={project.id}
                className={`project-galaxy-card ${isEven ? 'layout-normal' : 'layout-reverse'}`}
                variants={projectVariants}
              >
                <motion.div 
                  className="project-galaxy-image"
                  variants={imageVariants}
                >
                  <div className="image-container">
                    {project.id === 5 ? (
                      // Mobile frame for SheRaksha app
                      <div className="mobile-frame">
                        <div className="mobile-notch"></div>
                        <div className="mobile-screen">
                          <img src={project.image} alt={`${project.title.first} ${project.title.second}`} />
                        </div>
                        <div className="mobile-home-indicator"></div>
                      </div>
                    ) : (
                      // Laptop frame for other projects
                      <div className="laptop-frame">
                        <div className="laptop-screen">
                          <img src={project.image} alt={`${project.title.first} ${project.title.second}`} />
                        </div>
                        <div className="laptop-base"></div>
                      </div>
                    )}
                  </div>
                </motion.div>

                <motion.div 
                  className="project-galaxy-content"
                  variants={contentVariants}
                >
                  <div className="content-inner">
                    <h3 className="project-galaxy-title">
                      <span className="title-first">{project.title.first}</span>
                      <span className="title-second">{project.title.second}</span>
                    </h3>
                    
                    <p className="project-galaxy-description">
                      {project.description}
                    </p>

                    <div className="project-galaxy-buttons">
            
                      <a href={project.learnMore} className="btn-learn-more">
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;