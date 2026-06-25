import React, { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  onNavClick?: (page: string) => void;
  activePage?: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavClick, activePage = 'home' }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const coursesList = [
    { id: 'course-apids', label: 'Advanced Program in Industrial Data Science & AI (APIDS)' },
    { id: 'course-apida', label: 'Advanced Program in Industrial Data Analytics & AI (APIDA)' },
    { id: 'course-specialist', label: 'Data Analytics Specialist (DAS)' },
    { id: 'course-aiml', label: 'Advanced AI/ML with Generative AI & Agentic AI (AIML-GAA)' },
    { id: 'course-genai', label: 'Master Program in Generative AI & Agentic AI (MPGAA)' },
    { id: 'course-apcs', label: 'Advanced Program in Cybersecurity & Forensics (APCF)' }
  ];

  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'faqs', label: 'FAQs' }
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCourseClick = (courseId: string) => {
    setDropdownOpen(false);
    if (onNavClick) {
      onNavClick(courseId);
    }
  };

  return (
    <header className="site-header" data-section="header">
      <div className="header-container">
        <a href="/" className="logo-link" onClick={(e) => {
          e.preventDefault();
          if (onNavClick) onNavClick('home');
        }}>
          <img src="/logo.png" alt="Agentify AI Logo" className="logo-image" />
        </a>
        
        <nav className="nav-panel">
          <ul className="nav-list">
            
            {/* All Courses Dropdown */}
            <li className="nav-item dropdown-container" ref={dropdownRef}>
              <a
                href="#courses"
                className={`dropdown-trigger ${dropdownOpen ? 'open' : ''} ${activePage.startsWith('course-') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }}
              >
                All Courses
                <svg className={`chevron-icon ${dropdownOpen ? 'rotated' : ''}`} viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Dropdown Menu */}
              <div className={`courses-dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                {coursesList.map((course) => (
                  <a
                    key={course.id}
                    href={`#${course.id}`}
                    className="dropdown-item-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCourseClick(course.id);
                    }}
                  >
                    {course.label}
                  </a>
                ))}
              </div>
            </li>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  className={activePage === item.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavClick) onNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="btn-enroll-header"
          onClick={() => {
            if (onNavClick) onNavClick('enroll');
          }}
        >
          Enroll Now
        </button>
      </div>
    </header>
  );
};
