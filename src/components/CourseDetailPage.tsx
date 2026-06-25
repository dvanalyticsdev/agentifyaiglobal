import React, { useState } from 'react';
import { coursesData } from '../data/coursesData';
import { useMagneticEffect } from '../hooks/useMagneticEffect';
import { AnimatedHeroGraphic } from './AnimatedHeroGraphic';
import { SuccessStories } from './SuccessStories';

const posterImages: Record<string, string> = {
  apids: '/courses-poster/APIDS.jpeg',
  apida: '/courses-poster/APIDA.jpeg',
  aiml: '/courses-poster/AIML - GAA.jpeg',
  genai: '/courses-poster/MPGAA.jpeg',
  specialist: '/courses-poster/DAS.jpeg',
  apcs: '/courses-poster/APCF.jpeg',
};

interface CourseDetailPageProps {
  courseId: string;
  onBackHome: () => void;
  onEnroll: () => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ courseId, onBackHome, onEnroll }) => {
  const course = coursesData[courseId.toUpperCase()];
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const hasPlacementSupport = ['apids', 'apida', 'aiml'].includes(courseId.toLowerCase());

  const heroEnrollRef = useMagneticEffect(0.25);
  const bottomEnrollRef = useMagneticEffect(0.25);

  if (!course) {
    return (
      <div className="page-wrapper container">
        <section className="content-section" style={{ padding: '3.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: '#ef4444', fontWeight: '800' }}>
            COURSE NOT FOUND
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '2.5rem' }}>
            The requested course page for <strong>{courseId}</strong> does not exist.
          </p>
          <button className="btn btn-primary" onClick={onBackHome}>
            ← Return to Homepage
          </button>
        </section>
      </div>
    );
  }

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className={`course-detail-container theme-${course.theme}`}>
      
      {/* 1. Hero Banner Section */}
      <section className="course-hero">
        <div className="course-hero-overlay"></div>
        <div className="course-hero-content container hero-split">
          <div className="hero-left">
            <h1 className="course-hero-title">
              {course.title.includes(' & ') ? (
                <>
                  {course.title.substring(0, course.title.indexOf(' & '))}
                  <br />
                  & {course.title.substring(course.title.indexOf(' & ') + 3)}
                </>
              ) : (
                course.title
              )}
            </h1>
            <p className="course-hero-tagline">{course.tagline}</p>

            <div className="hero-cta-group">
              <button ref={heroEnrollRef} className="btn btn-enroll-main" onClick={onEnroll}>Enroll Now</button>
              <a href={`/brochures/${course.id}-syllabus.pdf`} download className="btn btn-download-syllabus" onClick={(e) => {
                e.preventDefault();
                alert(`Downloading complete syllabus brochure for ${course.title}...`);
              }}>
                <svg viewBox="0 0 24 24" className="download-icon">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Brochure
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-container course-hero-poster-container">
              <img 
                src={posterImages[course.id.toLowerCase()]} 
                alt={`${course.title} Poster`} 
                className="course-hero-poster-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Stats Grid - 3 cards only */}
      <section className="course-stats-section container reveal-on-scroll">
        <div className="stats-cards-grid">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="stat-card-content">
              <h4>Duration</h4>
              <p>{course.duration}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <div className="stat-card-content">
              <h4>Delivery</h4>
              <p>Live Instructor-Led Online</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div className="stat-card-content">
              <h4>Career Support</h4>
              <p>{hasPlacementSupport ? '100% Placement Support' : 'Career Mentorship & Guidance'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Course Overview & Practical Exposure */}
      <section className="course-overview-section container reveal-on-scroll">
        <div className="overview-split">
          <div className="overview-left">
            <h2 className="section-title">PROGRAM OVERVIEW</h2>
            <div className="title-underline"></div>
            <p className="overview-text">{course.overview}</p>
            
            <div className="who-should-join-box">
              <h3>Who Should Join?</h3>
              <ul className="checklist-grid">
                {course.whoShouldJoin.map((item, idx) => (
                  <li key={idx} className="checklist-item">
                    <span className="check-icon">✓</span>
                    <span className="check-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overview-right">
            <div className="deliverables-panel">
              <h3>Practical Exposure</h3>
              <div className="deliverables-list">
                {course.practicalExposure.map((item, idx) => (
                  <div key={idx} className="deliverable-item">
                    <div className="deliverable-bullet"></div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slideshow showing GAA hero stories/outcomes */}
            <div className="course-detail-slideshow-container">
              <AnimatedHeroGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Syllabus Accordion */}
      <section className="course-syllabus-section container reveal-on-scroll">
        <div className="course-syllabus-banner">
          <div className="section-title-wrapper">
            <h2 className="section-title-divider course-syllabus-banner-title">Program Modules</h2>
          </div>
        </div>

        <div className="syllabus-accordion">
          {course.modules.map((module, idx) => {
            const isExpanded = expandedModule === idx;
            return (
              <div key={idx} className={`accordion-item ${isExpanded ? 'active' : ''}`}>
                <div className="accordion-trigger" onClick={() => toggleModule(idx)}>
                  <div className="accordion-trigger-left">
                    <span className="module-index">0{idx + 1}</span>
                    <h3 className="module-title">{module.title}</h3>
                  </div>
                  <div className="accordion-arrow">
                    <svg viewBox="0 0 24 24" className={`arrow-svg ${isExpanded ? 'rotated' : ''}`}>
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className={`accordion-panel ${isExpanded ? 'expanded' : 'collapsed'}`}>
                  <div style={{ minHeight: '0px' }}>
                    <div className="accordion-panel-content">
                      {module.description && <p className="module-desc">{module.description}</p>}
                      
                      <div className="module-sections-list" style={{ marginTop: '1rem' }}>
                        {module.sections.map((section, sIdx) => (
                          <div key={sIdx} className="curriculum-section-box">
                            <h4 className="curriculum-section-title">{section.title}</h4>
                            <div className="curriculum-topics-grid">
                              {section.topics.map((topic, tIdx) => (
                                <div key={tIdx} className="topic-bullet-item">
                                  <div className="topic-bullet-dot"></div>
                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>

                            {section.applications && section.applications.length > 0 && (
                              <div className="section-apps-panel">
                                <h5>Applications</h5>
                                <div className="apps-pills">
                                  {section.applications.map((app, aIdx) => (
                                    <span key={aIdx} className="app-pill">{app}</span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Industry Projects - Grouped by Domain */}
      <section className="course-projects-section industry-projects-section container reveal-on-scroll">
        <div className="projects-header text-center">
          <span className="section-subtitle">PRACTICAL PORTFOLIO</span>
          <h2 className="section-title">INDUSTRY PROJECTS</h2>
          <div className="title-underline center"></div>
          <p className="projects-intro">
            Build and deploy enterprise-level solutions designed around active industry scenarios.
          </p>
        </div>

        <div className="industry-domains-grid">
          {course.industryProjects.map((domain, idx) => (
            <div key={idx} className="domain-card">
              <div className="domain-card-header">
                <span className="domain-icon">🏢</span>
                <h3 className="domain-title">{domain.domain}</h3>
              </div>
              <div className="domain-projects-list">
                {domain.projects.map((project, pIdx) => (
                  <div key={pIdx} className="domain-project-item">
                    <span className="domain-project-bullet">▸</span>
                    <span>{project}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Career Pathways & Roles */}
      <section className="course-careers-section container reveal-on-scroll">
        <div className="careers-header text-center">
          <span className="section-subtitle">FUTURE PROGRESSION</span>
          <h2 className="section-title">CAREER OPPORTUNITIES</h2>
          <div className="title-underline center"></div>
        </div>

        <div className="career-path-grid">
          {course.careers.map((career, idx) => (
            <div key={idx} className="career-path-card">
              <div className="career-card-top">
                <span className="career-level">{career.level}</span>
              </div>
              <div className="career-roles-list">
                {career.roles.map((role, rIdx) => (
                  <div key={rIdx} className="career-role-item">
                    <span className="role-bullet-check">✔</span>
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Program Outcome */}
      <section className="program-outcome-section container reveal-on-scroll">
        <div className="text-center">
          <span className="section-subtitle">MEASURABLE RESULTS</span>
          <h2 className="section-title">PROGRAM OUTCOME</h2>
          <div className="title-underline center"></div>
        </div>

        <div className="outcome-checklist-grid">
          {course.programOutcome.map((outcome, idx) => (
            <div key={idx} className="outcome-checklist-item">
              <span className="outcome-check-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="outcome-check-icon-svg">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M10 8l4 4-4 4" />
                </svg>
              </span>
              <span className="outcome-check-text">{outcome}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Career Advantage */}
      <section className="career-advantage-section container reveal-on-scroll">
        <div className="text-center">
          <span className="section-subtitle">YOUR COMPETITIVE EDGE</span>
          <h2 className="section-title">CAREER ADVANTAGE</h2>
          <div className="title-underline center"></div>
        </div>

        <div className="career-advantage-box">
          <div className="advantage-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
            </svg>
          </div>
          <p className="advantage-text">{course.careerAdvantage}</p>
        </div>
      </section>

      {/* 9. Certifications Alignment (conditional) */}
      {course.certifications && course.certifications.length > 0 && (
        <section className="certifications-section container reveal-on-scroll">
          <div className="text-center">
            <span className="section-subtitle">INDUSTRY RECOGNITION</span>
            <h2 className="section-title">CERTIFICATIONS ALIGNMENT</h2>
            <div className="title-underline center"></div>
          </div>

          <div className="certifications-badges-wrap">
            {course.certifications.map((cert, idx) => (
              <div key={idx} className="certification-badge">
                <span className="cert-icon">🏅</span>
                <span className="cert-name">{cert}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 10. Success Stories */}
      <SuccessStories />

      {/* 11. Bottom CTA Section */}
      <section className="course-bottom-cta reveal-on-scroll">
        <div className="cta-box container text-center">
          <h2>Ready to Launch Your Career in {course.id.toUpperCase()}?</h2>
          <p>
            {hasPlacementSupport
              ? 'Get mentored by industry experts and secure placements in top corporate groups.'
              : 'Get mentored by industry experts and build job-ready skills to launch your career.'}
          </p>
          <div className="cta-btn-row">
            <button ref={bottomEnrollRef} className="btn btn-enroll-bottom" onClick={onEnroll}>Enroll Now</button>
            <button className="btn btn-back-home-bottom" onClick={onBackHome}>← Back to Homepage</button>
          </div>
        </div>
      </section>

    </div>
  );
};
