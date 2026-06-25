import React, { useState, useEffect, useRef } from 'react';

const slideshowImages = [
  '/hero-stories/hero-section-first-image.jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.39 PM (1).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.39 PM (2).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.39 PM.jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.40 PM (1).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.40 PM (2).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.40 PM.jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.41 PM (1).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.41 PM (2).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.41 PM.jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.42 PM (1).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.42 PM (2).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.42 PM (3).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.42 PM.jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.43 PM (1).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.43 PM (2).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.43 PM.jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.44 PM (1).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.44 PM (2).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.44 PM (3).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.44 PM.jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.45 PM (1).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.45 PM (2).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.45 PM.jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.46 PM (1).jpeg',
  '/hero-stories/WhatsApp Image 2026-06-24 at 8.54.46 PM.jpeg',
];

const SLIDE_DURATION = 3500; // 3.5 seconds per slide

export const AnimatedHeroGraphic: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const threshold = 50; // pixels

    if (diffX > threshold) {
      handleNext();
    } else if (diffX < -threshold) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="hero-slideshow-card"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slideshow Content */}
      <div className="slideshow-slides-viewport">
        {slideshowImages.map((image, index) => {
          const isActive = index === currentIndex;
          return (
            <div 
              key={index} 
              className={`slideshow-slide ${isActive ? 'active' : ''}`}
            >
              {/* Foreground sharp image */}
              <img 
                src={image} 
                alt={`Hero Story ${index + 1}`} 
                className="slide-image-foreground"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <button 
        className="slideshow-nav-btn prev-btn" 
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button 
        className="slideshow-nav-btn next-btn" 
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};
