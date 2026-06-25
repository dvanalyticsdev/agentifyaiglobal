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
        <section className="content-section">
          <div className="hero-split">
            <div className="hero-left">
              <span className="hero-heading-become">BECOME AN</span>
              <h1 className="hero-heading-pro">IT PROFESSIONAL</h1>
              <h2 className="hero-heading-accent">
                WITH DATA SCIENCE,<br />
                AI & CYBERSECURITY
              </h2>
              
              <p className="hero-desc">
                Get your employment with industry ready skills today.
              </p>
            </div>

            <div className="hero-right">
              <div className="hero-image-container">
                <AnimatedHeroGraphic />
              </div>
            </div>
          </div>

          <div className="hero-badges-grid">
            <div className="hero-badge-card badge-experts">
              <img 
                src="/hero-section-logo/card-experts.jpeg" 
                alt="Trained by Industry Experts" 
                loading="lazy"
              />
            </div>

            <div className="hero-badge-card badge-projects">
              <img 
                src="/hero-section-logo/card-projects.jpeg" 
                alt="Industry Project Hands-On" 
                loading="lazy"
              />
            </div>

            <div className="hero-badge-card badge-lms">
              <img 
                src="/hero-section-logo/card-lms.jpeg" 
                alt="LMS Access 24/7" 
                loading="lazy"
              />
            </div>

            <div className="hero-badge-card badge-placement">
              <img 
                src="/hero-section-logo/card-placement.jpeg" 
                alt="Placement Support" 
                loading="lazy"
              />
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
