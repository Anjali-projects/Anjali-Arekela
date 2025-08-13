import React, { useEffect, useRef, useState, useMemo } from 'react';

const Skills = () => {
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

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'Express', icon: '🚀' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Computer Vision', icon: '👁️' },
    { name: 'Flutter', icon: '💙' },
    { name: 'Power BI', icon: '📊' },
    { name: 'WordPress', icon: '📝' }
  ];

  const generatePositions = (count: number) => {
    const positions: { x: number; y: number }[] = [];
    const minDistance = 140; // distance in percentage points
    const maxAttempts = 500;

    for (let i = 0; i < count; i++) {
      let attempts = 0;
      let newPos: { x: number; y: number };
      let overlapping: boolean;

      do {
        overlapping = false;
        newPos = {
          x: 10 + Math.random() * 80, // horizontally spread more
          y: 5 + Math.random() * 50   // shifted up by starting lower max
        };

        for (const pos of positions) {
          const dx = pos.x - newPos.x;
          const dy = pos.y - newPos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < minDistance) {
            overlapping = true;
            break;
          }
        }
        attempts++;
      } while (overlapping && attempts < maxAttempts);

      positions.push(newPos);
    }

    return positions;
  };

  // memoize so positions don't change on re-render
  const positions = useMemo(() => generatePositions(skills.length), [skills.length]);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className={`skills-container ${isVisible ? 'fade-in-up' : ''}`}>
        <div className="skills-header">
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        <div className="skills-galaxy">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-star ${isVisible ? 'floating' : ''}`}
              style={{
                '--random-x': `${positions[index].x}%`,
                '--random-y': `${positions[index].y}%`,
                '--float-duration': `${3 + Math.random() * 6}s`,
                '--float-distance': `${20 + Math.random() * 50}px`
              } as React.CSSProperties}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



