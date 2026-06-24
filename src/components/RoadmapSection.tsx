import React, { useRef } from 'react';

interface RoadmapStep {
  number: number;
  title: string;
  subtext: string;
  icon: React.ReactNode;
}

export const RoadmapSection: React.FC = () => {
  const dsScrollRef = useRef<HTMLDivElement>(null);
  const cyberScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement | null>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      ref.current?.scrollBy({ left: 240, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      ref.current?.scrollBy({ left: -240, behavior: 'smooth' });
    }
  };

  const dataScientistSteps: RoadmapStep[] = [
    {
      number: 1,
      title: 'Foundations',
      subtext: 'Python, Statistics, SQL, Excel',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0284c7" strokeWidth="2" />
          <rect x="22" y="24" width="36" height="24" rx="2" fill="none" stroke="#0284c7" strokeWidth="2" />
          <path d="M30 48h20M40 48v8M34 56h12" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 32l-4 4 4 4M48 32l4 4-4 4" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="38" y1="42" x2="42" y2="30" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      number: 2,
      title: 'Data Analysis',
      subtext: 'EDA, Data Wrangling, Visualization',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0284c7" strokeWidth="2" />
          <ellipse cx="40" cy="26" rx="14" ry="4.5" fill="none" stroke="#0284c7" strokeWidth="2" />
          <path d="M26 26v8c0 2.5 6.3 4.5 14 4.5s14-2 14-4.5v-8" fill="none" stroke="#0284c7" strokeWidth="2" />
          <path d="M26 34v8c0 2.5 6.3 4.5 14 4.5s14-2 14-4.5v-8" fill="none" stroke="#0284c7" strokeWidth="2" />
          <path d="M26 42v8c0 2.5 6.3 4.5 14 4.5s14-2 14-4.5v-8" fill="none" stroke="#0284c7" strokeWidth="2" />
        </svg>
      )
    },
    {
      number: 3,
      title: 'Machine Learning',
      subtext: 'Supervised & Unsupervised ML',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0284c7" strokeWidth="2" />
          <path d="M38 30a6 6 0 0 0-4-3.5a5 5 0 0 0-5 3a5.5 5.5 0 0 0-1 6.5a6 6 0 0 0 1 7.5a5 5 0 0 0 4 3a6 6 0 0 0 5-2.5" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          <path d="M42 30a6 6 0 0 1 4-3.5a5 5 0 0 1 5 3a5.5 5.5 0 0 1 1 6.5a6 6 0 0 1-1 7.5a5 5 0 0 1-4 3a6 6 0 0 1-5-2.5" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="24" x2="40" y2="56" stroke="rgba(2, 132, 199, 0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="34" cy="34" r="2.5" fill="#0284c7" />
          <circle cx="46" cy="34" r="2.5" fill="#0284c7" />
          <circle cx="36" cy="44" r="2.5" fill="#0284c7" />
          <circle cx="44" cy="44" r="2.5" fill="#0284c7" />
          <line x1="34" y1="34" x2="36" y2="44" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="46" y1="34" x2="44" y2="44" stroke="#0284c7" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      number: 4,
      title: 'Advanced Topics',
      subtext: 'Deep Learning, NLP, Computer Vision',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0284c7" strokeWidth="2" />
          <circle cx="40" cy="40" r="5" fill="none" stroke="#0284c7" strokeWidth="2" />
          <circle cx="26" cy="30" r="4" fill="none" stroke="#0284c7" strokeWidth="2" />
          <circle cx="26" cy="50" r="4" fill="none" stroke="#0284c7" strokeWidth="2" />
          <circle cx="54" cy="30" r="4" fill="none" stroke="#0284c7" strokeWidth="2" />
          <circle cx="54" cy="50" r="4" fill="none" stroke="#0284c7" strokeWidth="2" />
          <line x1="30" y1="32" x2="35" y2="37" stroke="rgba(2, 132, 199, 0.5)" strokeWidth="1.5" />
          <line x1="30" y1="48" x2="35" y2="43" stroke="rgba(2, 132, 199, 0.5)" strokeWidth="1.5" />
          <line x1="50" y1="32" x2="45" y2="37" stroke="rgba(2, 132, 199, 0.5)" strokeWidth="1.5" />
          <line x1="50" y1="48" x2="45" y2="43" stroke="rgba(2, 132, 199, 0.5)" strokeWidth="1.5" />
          <line x1="26" y1="34" x2="26" y2="46" stroke="rgba(2, 132, 199, 0.5)" strokeWidth="1.5" />
          <line x1="54" y1="34" x2="54" y2="46" stroke="rgba(2, 132, 199, 0.5)" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      number: 5,
      title: 'Tools & Frameworks',
      subtext: 'Scikit-learn, TensorFlow, Power BI, Tableau',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0284c7" strokeWidth="2" />
          <rect x="23" y="25" width="34" height="26" rx="2" fill="none" stroke="#0284c7" strokeWidth="2" />
          <line x1="23" y1="32" x2="57" y2="32" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="28" cy="28.5" r="1.2" fill="#0284c7" />
          <circle cx="32" cy="28.5" r="1.2" fill="#0284c7" />
          <path d="M32 39h16M32 44h10" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      number: 6,
      title: 'Projects',
      subtext: 'End-to-end Industry Projects',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0284c7" strokeWidth="2" />
          <rect x="24" y="28" width="32" height="24" rx="3" fill="none" stroke="#0284c7" strokeWidth="2" />
          <path d="M34 28v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" fill="none" stroke="#0284c7" strokeWidth="2" />
          <path d="M24 37h32" stroke="#0284c7" strokeWidth="2" />
          <rect x="37" y="34" width="6" height="6" rx="1" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
        </svg>
      )
    },
    {
      number: 7,
      title: 'Career Ready',
      subtext: 'Resume, Interviews, Job Placement',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0284c7" strokeWidth="2" />
          <circle cx="40" cy="40" r="18" fill="none" stroke="#0284c7" strokeWidth="2.2" />
          <circle cx="40" cy="40" r="10" fill="none" stroke="#0284c7" strokeWidth="1.8" />
          <circle cx="40" cy="40" r="3" fill="#0284c7" />
          <line x1="40" y1="16" x2="40" y2="22" stroke="rgba(2, 132, 199, 0.4)" strokeWidth="1.5" />
          <line x1="40" y1="58" x2="40" y2="64" stroke="rgba(2, 132, 199, 0.4)" strokeWidth="1.5" />
          <line x1="16" y1="40" x2="22" y2="40" stroke="rgba(2, 132, 199, 0.4)" strokeWidth="1.5" />
          <line x1="58" y1="40" x2="64" y2="40" stroke="rgba(2, 132, 199, 0.4)" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  const cyberSpecialistSteps: RoadmapStep[] = [
    {
      number: 1,
      title: 'IT Fundamentals',
      subtext: 'Networking, OS, TCP/IP',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg cyber">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0d9488" strokeWidth="2" />
          <rect x="23" y="26" width="34" height="22" rx="2" fill="none" stroke="#0d9488" strokeWidth="2" />
          <line x1="18" y1="48" x2="62" y2="48" stroke="#0d9488" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="36" y1="48" x2="44" y2="48" stroke="#334155" strokeWidth="4" />
          <path d="M29 33l3 3-3 3M35 37h5" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      number: 2,
      title: 'Security Basics',
      subtext: 'CIA Triad, Threats, Security Controls',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg cyber">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0d9488" strokeWidth="2" />
          <path d="M40 22c6.5 0 15 2.5 15 2.5v16.5c0 8.5-7.5 14.5-15 17-7.5-2.5-15-8.5-15-17V24.5s8.5-2.5 15-2.5z" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="40,29 42,33 46,33 43,35 44,39 40,37 36,39 37,35 34,33 38,33" fill="#0d9488" />
        </svg>
      )
    },
    {
      number: 3,
      title: 'Network Security',
      subtext: 'Firewalls, IDS/IPS, VPN, Wireshark',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg cyber">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0d9488" strokeWidth="2" />
          <circle cx="40" cy="40" r="12" fill="none" stroke="#0d9488" strokeWidth="2" />
          <circle cx="40" cy="22" r="3" fill="#0d9488" />
          <circle cx="23" cy="49" r="3" fill="#0d9488" />
          <circle cx="57" cy="49" r="3" fill="#0d9488" />
          <line x1="40" y1="25" x2="40" y2="28" stroke="#0d9488" strokeWidth="1.5" />
          <line x1="26" y1="47" x2="31" y2="44" stroke="#0d9488" strokeWidth="1.5" />
          <line x1="54" y1="47" x2="49" y2="44" stroke="#0d9488" strokeWidth="1.5" />
          <circle cx="40" cy="38" r="2.5" fill="#0d9488" />
          <path d="M39 39h2l1 5h-4z" fill="#0d9488" />
        </svg>
      )
    },
    {
      number: 4,
      title: 'Ethical Hacking',
      subtext: 'Recon, Scanning, Exploitation',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg cyber">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0d9488" strokeWidth="2" />
          <path d="M40 22c-7 0-11 5-11 11c0 3 .5 5 1.5 6.5L34 49h12l3.5-9.5c1-1.5 1.5-3.5 1.5-6.5c0-6-4-11-11-11z" fill="none" stroke="#0d9488" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M25 56c0-6 6-8 15-8s15 2 15 8" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
          <rect x="33" y="32" width="14" height="4" rx="1" fill="#0d9488" />
        </svg>
      )
    },
    {
      number: 5,
      title: 'Security Operations',
      subtext: 'SOC, SIEM, Log Analysis',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg cyber">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0d9488" strokeWidth="2" />
          <rect x="23" y="25" width="34" height="24" rx="2" fill="none" stroke="#0d9488" strokeWidth="2" />
          <line x1="33" y1="49" x2="30" y2="56" stroke="#0d9488" strokeWidth="2" />
          <line x1="47" y1="49" x2="50" y2="56" stroke="#0d9488" strokeWidth="2" />
          <line x1="28" y1="56" x2="52" y2="56" stroke="#0d9488" strokeWidth="2.5" />
          <text x="40" y="41" fill="#0d9488" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">AAA</text>
        </svg>
      )
    },
    {
      number: 6,
      title: 'Advanced Security',
      subtext: 'Malware Analysis, Incident Response',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg cyber">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0d9488" strokeWidth="2" />
          <circle cx="40" cy="42" r="10" fill="none" stroke="#0d9488" strokeWidth="2" />
          <circle cx="40" cy="29" r="4.5" fill="none" stroke="#0d9488" strokeWidth="2" />
          <path d="M37 25c-1-2.5-3-3.5-3-3.5M43 25c1-2.5 3-3.5 3-3.5" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M28 36c2 1 4 2 4 2M26 44c3 0 4-1 4-1M28 52c2-1 4-2 4-2" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M52 36c-2 1-4 2-4 2M54 44c-3 0-4-1-4-1M52 52c-2-1-4-2-4-2" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      number: 7,
      title: 'Career Ready',
      subtext: 'Certifications, Interviews, Jobs',
      icon: (
        <svg viewBox="0 0 80 80" className="roadmap-icon-svg cyber">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#0d9488" strokeWidth="2" />
          <rect x="25" y="24" width="30" height="38" rx="3" fill="none" stroke="#0d9488" strokeWidth="2" />
          <path d="M35 24v-2h10v2" fill="none" stroke="#0d9488" strokeWidth="2" />
          <polyline points="31,34 33,36 37,32" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="41" y1="34" x2="49" y2="34" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="2" />
          <polyline points="31,44 33,46 37,42" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="41" y1="44" x2="49" y2="44" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="2" />
          <polyline points="31,54 33,56 37,52" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="41" y1="54" x2="47" y2="54" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <section className="roadmap-section reveal-on-scroll" id="roadmap">
      <div className="roadmap-container">
        
        {/* Title Header */}
        <div className="roadmap-header">
          <h2 className="roadmap-title">
            <span className="title-circle-dot"></span>
            A COMPLETE ROAD MAP FOR DATA SCIENTISTS AND CYBER SPECIALIST
            <span className="title-circle-dot"></span>
          </h2>
          <div className="roadmap-header-line"></div>
        </div>

        {/* DATA SCIENTIST ROADMAP */}
        <div className="roadmap-track-container">
          <div className="roadmap-track-header ds">
            <span className="roadmap-track-pill">DATA SCIENTIST ROADMAP</span>
            
            {/* Slider control arrows */}
            <div className="roadmap-slider-controls ds">
              <button 
                className="roadmap-arrow prev" 
                onClick={() => scroll(dsScrollRef, 'left')} 
                aria-label="Previous Data Scientist steps"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="roadmap-arrow next" 
                onClick={() => scroll(dsScrollRef, 'right')} 
                aria-label="Next Data Scientist steps"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div 
            className="roadmap-steps-wrapper" 
            ref={dsScrollRef}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, dsScrollRef)}
            aria-label="Data Scientist Roadmap steps. Use Left/Right arrow keys to scroll."
          >
            {dataScientistSteps.map((step, idx) => (
              <React.Fragment key={`ds-${step.number}`}>
                <div className="roadmap-step-card ds">
                  <div className="roadmap-icon-container">
                    {step.icon}
                  </div>
                  <h3 className="roadmap-step-title">{step.title}</h3>
                  <p className="roadmap-step-subtext">{step.subtext}</p>
                </div>
                {idx < dataScientistSteps.length - 1 && (
                  <div className="roadmap-arrow-container ds">
                    <svg viewBox="0 0 24 24" className="roadmap-arrow-svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CYBER SPECIALIST ROADMAP */}
        <div className="roadmap-track-container">
          <div className="roadmap-track-header cyber">
            <span className="roadmap-track-pill">CYBER SPECIALIST ROADMAP</span>
            
            {/* Slider control arrows */}
            <div className="roadmap-slider-controls cyber">
              <button 
                className="roadmap-arrow prev" 
                onClick={() => scroll(cyberScrollRef, 'left')} 
                aria-label="Previous Cyber Specialist steps"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="roadmap-arrow next" 
                onClick={() => scroll(cyberScrollRef, 'right')} 
                aria-label="Next Cyber Specialist steps"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div 
            className="roadmap-steps-wrapper" 
            ref={cyberScrollRef}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, cyberScrollRef)}
            aria-label="Cyber Specialist Roadmap steps. Use Left/Right arrow keys to scroll."
          >
            {cyberSpecialistSteps.map((step, idx) => (
              <React.Fragment key={`cyber-${step.number}`}>
                <div className="roadmap-step-card cyber">
                  <div className="roadmap-icon-container">
                    {step.icon}
                  </div>
                  <h3 className="roadmap-step-title">{step.title}</h3>
                  <p className="roadmap-step-subtext">{step.subtext}</p>
                </div>
                {idx < cyberSpecialistSteps.length - 1 && (
                  <div className="roadmap-arrow-container cyber">
                    <svg viewBox="0 0 24 24" className="roadmap-arrow-svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
