import React from 'react';

export const SuccessStories: React.FC = () => {
  const successImages = [
    "WhatsApp Image 2026-06-20 at 12.46.51 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.52 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.52 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.53 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.53 AM (2).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.53 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.54 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.54 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.55 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.55 AM (2).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.55 AM (3).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.55 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.56 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.56 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.57 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.57 AM (2).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.57 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.58 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.58 AM (2).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.58 AM (3).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.58 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.59 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.59 AM (2).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.59 AM (3).jpeg",
    "WhatsApp Image 2026-06-20 at 12.46.59 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.00 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.00 AM (2).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.00 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.01 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.01 AM (2).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.01 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.02 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.02 AM (2).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.02 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.03 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.03 AM (2).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.03 AM (3).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.03 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.04 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.04 AM (2).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.04 AM.jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.05 AM (1).jpeg",
    "WhatsApp Image 2026-06-20 at 12.47.05 AM.jpeg"
  ];

  return (
    <section className="success-stories-section reveal-on-scroll" id="stories">
      <div className="stories-container">
        
        {/* Title Header */}
        <div className="stories-header">
          <span className="stories-subtitle">PROVEN RESULTS</span>
          <h2 className="stories-title">STUDENT SUCCESS STORIES</h2>
          <div className="stories-header-line"></div>
        </div>

        {/* Marquee Wrapper */}
        <div className="marquee-wrapper">
          
          {/* Single Row: Scrolling Right-to-Left */}
          <div className="marquee-row marquee-left-dir">
            <div className="marquee-track">
              {/* Set 1 */}
              <div className="marquee-group">
                {successImages.map((img, i) => (
                  <div key={`story-1-${i}`} className="story-card">
                    <img 
                      src={`/Success Stories/${img}`} 
                      alt={`Student Success Story ${i+1}`}
                      className="story-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              {/* Set 2 (Duplicate for seamless looping) */}
              <div className="marquee-group">
                {successImages.map((img, i) => (
                  <div key={`story-2-${i}`} className="story-card">
                    <img 
                      src={`/Success Stories/${img}`} 
                      alt={`Student Success Story ${i+1}`}
                      className="story-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
