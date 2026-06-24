import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AnimatedHeroGraphic } from './components/AnimatedHeroGraphic';
import { ProgramsSection } from './components/ProgramsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { SuccessStories } from './components/SuccessStories';
import { Footer } from './components/Footer';
import { CourseDetailPage } from './components/CourseDetailPage';
import { ServicesPage } from './components/ServicesPage';
import { FaqsPage } from './components/FaqsPage';
import { EnrollmentPage } from './components/EnrollmentPage';
import { AboutPage } from './components/AboutPage';
import { ChatbotWidget } from './components/ChatbotWidget';
import { useScrollReveal } from './hooks/useScrollReveal';
import { CompaniesSection } from './components/CompaniesSection';

function App() {
  const [activePage, setActivePage] = useState('home');
  const scrollRevealRef = useScrollReveal(activePage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
  };

  const renderContent = () => {
    if (activePage.startsWith('course-')) {
      const courseId = activePage.replace('course-', '');
      return (
        <CourseDetailPage 
          courseId={courseId} 
          onBackHome={() => setActivePage('home')} 
          onEnroll={() => setActivePage(`enroll-${courseId}`)} 
        />
      );
    }

    if (activePage.startsWith('enroll')) {
      const courseId = activePage.replace('enroll-', '');
      const defaultCourseId = courseId !== 'enroll' ? courseId : undefined;
      return (
        <EnrollmentPage 
          onBackHome={() => setActivePage('home')} 
          defaultCourseId={defaultCourseId} 
        />
      );
    }

    if (activePage === 'about') {
      return <AboutPage />;
    }

    if (activePage === 'services') {
      return <ServicesPage />;
    }

    if (activePage === 'faqs') {
      return (
        <FaqsPage 
          onEnroll={() => setActivePage('enroll')} 
        />
      );
    }

    if (activePage === 'blogs') {
      return (
        <div className="page-wrapper container">
          <section className="content-section" style={{ padding: '5rem 2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem', color: '#0f172a', fontWeight: '800', letterSpacing: '-0.75px' }}>
              BLOGS
            </h2>
            <div style={{ height: '4px', width: '60px', backgroundColor: '#0284c7', margin: '0 auto 2.5rem auto' }}></div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '3rem', fontWeight: '500' }}>
              Coming Soon
            </p>
            <button className="btn btn-primary" onClick={() => setActivePage('home')}>
              ← Back to Homepage
            </button>
          </section>
        </div>
      );
    }

    if (activePage !== 'home') {
      return (
        <div className="page-wrapper container">
          <section className="content-section" style={{ padding: '3.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: '#000000', fontWeight: '800' }}>
              {activePage.toUpperCase()}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '2.5rem', fontWeight: '300' }}>
              This section is currently under development.
            </p>
            <button className="btn btn-primary" onClick={() => setActivePage('home')}>
              ← Back to Homepage
            </button>
          </section>
        </div>
      );
    }

    return (
      <div className="page-wrapper container">
        <section className="content-section hero-split">
          <div className="hero-left">
            <span className="hero-heading-become">BECOME AN</span>
            <h1 className="hero-heading-pro">IT PROFESSIONAL</h1>
            <h2 className="hero-heading-accent">
              WITH DATA SCIENCE,<br />
              AI & CYBERSECURITY
            </h2>
            
            <p className="hero-desc">
              Future-ready skills. Industry-driven programs. Real-world projects. 100% Placement Support.
            </p>

            <div className="hero-badges-row">
              <div className="hero-badge-column badge-experts">
                <div className="hero-badge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polygon points="19 2 20 5 23 5 20.5 7 21.5 10 19 8 16.5 10 17.5 7 15 5 18 5" />
                  </svg>
                </div>
                <div className="hero-badge-text">
                  <span>Trained by</span>
                  <span>industry experts</span>
                </div>
              </div>

              <div className="hero-badge-column badge-projects">
                <div className="hero-badge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                  </svg>
                </div>
                <div className="hero-badge-text">
                  <span>Industry real time</span>
                  <span>projects & certifications</span>
                </div>
              </div>

              <div className="hero-badge-column badge-lms">
                <div className="hero-badge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    <circle cx="12" cy="10" r="4" />
                    <polyline points="12 8 12 10 13.5 11" />
                  </svg>
                </div>
                <div className="hero-badge-text">
                  <span>24x7 LMS</span>
                  <span>access</span>
                </div>
              </div>

              <div className="hero-badge-column badge-placement">
                <div className="hero-badge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <path d="M9 14l2 2 4-4" />
                  </svg>
                </div>
                <div className="hero-badge-text">
                  <span>100% Placement</span>
                  <span>support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-container">
              <AnimatedHeroGraphic />
            </div>
          </div>
        </section>

        <div id="programs-section">
          <ProgramsSection onViewDetails={(courseId) => setActivePage(`course-${courseId}`)} />
        </div>
        <BenefitsSection />
        <div id="roadmap-section">
          <RoadmapSection />
        </div>
        <CompaniesSection />
        <SuccessStories />
      </div>
    );
  };

  return (
    <div ref={scrollRevealRef}>
      <div className="page-progress-bar" key={activePage}></div>
      <Header onNavClick={handleNavClick} activePage={activePage} />
      <main style={{ flexGrow: 1 }}>
        <div className="page-transition-wrapper" key={activePage}>
          {renderContent()}
        </div>
      </main>
      <Footer />
      <ChatbotWidget activePage={activePage} />
    </div>
  );
}

export default App;
