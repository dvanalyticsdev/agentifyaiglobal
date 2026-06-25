import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RobotSpeechBubblesProps {
  pose: 'idle' | 'wave' | 'programs' | 'benefits' | 'roadmap' | 'footer';
  isClicked: boolean;
  onClick?: () => void;
  hoveredSection: string | null;
}

// Section-specific contextual messages shown when user hovers a section
const sectionMessages: Record<string, string> = {
  'hero': "🏠 Welcome! This is our hero section — discover how you can become an IT professional with us!",
  'programs': "🎓 You're browsing our Programs! We offer AI, Data Science & Cybersecurity training with industry experts.",
  'benefits': "🌟 These are your Learner Benefits — 24/7 LMS access, placement support, expert mentors & more!",
  'roadmap': "🚀 Career Roadmap! Follow this step-by-step path to land a high-paying tech role.",
  'companies': "🏢 Top companies where our graduates are working! Your future employer could be here.",
  'success-stories': "🏆 Real success stories from our alumni — these could be your achievements next!",
  'footer': "📞 Need to reach us? Our contact details and office locations are right here!",
  'header': "📌 Use the navigation bar to explore our Programs, Services, About page & more!",
  'about': "ℹ️ Learn about Agentify AI's mission, our leadership team, and global offices!",
  'services': "⚙️ Enterprise AI Services — we help businesses deploy cutting-edge AI solutions.",
  'faqs': "❓ Got questions? Check out our Frequently Asked Questions for quick answers!",
  'enrollment': "📝 Ready to enroll? Fill out this form and our team will get in touch!",
  'course-detail': "📖 Dive deep into course details — curriculum, tools, outcomes & pricing!",
};

// Pose-based messages (fallback when no section is hovered)
const poseMessages: Record<string, string> = {
  idle: "Hi! I'm Eva, your Agentify AI assistant. 👋",
  wave: "Nice to meet you! Click on me or scroll down to explore our programs. 😄",
  programs: "Explore our intensive programs in AI, Data Science, and Cybersecurity! 🎓",
  benefits: "Check out our unique advantages: 24/7 LMS access, placement support, and expert mentors! 🌟",
  roadmap: "Follow this career roadmap to transition into a high-paying tech role! 🚀",
  footer: "Have questions? Feel free to click here to chat with me anytime! 💬",
};

// Cycling nudge messages shown every 5 seconds when idle
const nudgeMessages = [
  "👋 Hey! I'm your AI buddy — how can I help you?",
  "💡 Curious about a course? Just click me and ask!",
  "🤖 I'm Eva! Tap me to chat about anything on this site.",
  "🔍 Need help finding something? I'm right here for you!",
  "✨ Pro tip: Click me to learn about programs, services & more!",
  "🎯 Looking for career guidance? Let's chat!",
  "📚 Want to know which course fits you best? Ask me!",
  "🌍 We have offices in Dubai, Australia & India — ask me for details!",
];

export const RobotSpeechBubbles: React.FC<RobotSpeechBubblesProps> = ({
  pose,
  isClicked,
  onClick,
  hoveredSection,
}) => {
  const [currentText, setCurrentText] = useState(poseMessages.idle);
  const [visible, setVisible] = useState(true);
  const [messageSource, setMessageSource] = useState<'pose' | 'section' | 'nudge'>('pose');
  const [isNudgePulsing, setIsNudgePulsing] = useState(false);
  const nudgeIndexRef = useRef(0);
  const nudgeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastHoveredRef = useRef<string | null>(null);
  const lastPoseRef = useRef(pose);

  // Animate text change with a subtle fade
  const changeText = useCallback((text: string, source: 'pose' | 'section' | 'nudge') => {
    setVisible(false);
    const timeout = setTimeout(() => {
      setCurrentText(text);
      setMessageSource(source);
      setVisible(true);
      if (source === 'nudge') {
        setIsNudgePulsing(true);
        setTimeout(() => setIsNudgePulsing(false), 2000);
      }
    }, 200);
    return timeout;
  }, []);

  // Handle section hover changes (highest priority)
  useEffect(() => {
    if (hoveredSection && hoveredSection !== lastHoveredRef.current) {
      lastHoveredRef.current = hoveredSection;
      const msg = sectionMessages[hoveredSection];
      if (msg) {
        const t = changeText(msg, 'section');
        return () => clearTimeout(t);
      }
    }

    // When hover leaves, revert to pose message
    if (!hoveredSection && lastHoveredRef.current) {
      lastHoveredRef.current = null;
      const poseMsg = isClicked ? poseMessages.wave : (poseMessages[pose] || poseMessages.idle);
      const t = changeText(poseMsg, 'pose');
      return () => clearTimeout(t);
    }
  }, [hoveredSection, pose, isClicked, changeText]);

  // Handle pose changes (when not hovering a section)
  useEffect(() => {
    if (hoveredSection) return; // Section hover takes priority
    if (pose === lastPoseRef.current && !isClicked) return;
    lastPoseRef.current = pose;

    let text = poseMessages.idle;
    if (isClicked) {
      text = poseMessages.wave;
    } else {
      text = poseMessages[pose] || poseMessages.idle;
    }

    const t = changeText(text, 'pose');
    return () => clearTimeout(t);
  }, [pose, isClicked, hoveredSection, changeText]);

  // Nudge timer — every 5 seconds cycle nudge messages when idle
  useEffect(() => {
    // Clear existing timer
    if (nudgeTimerRef.current) {
      clearInterval(nudgeTimerRef.current);
      nudgeTimerRef.current = null;
    }

    // Only nudge when no section is hovered and bot is in idle/footer pose
    if (hoveredSection) return;

    nudgeTimerRef.current = setInterval(() => {
      // Don't nudge if a section is currently being hovered
      if (lastHoveredRef.current) return;

      const msg = nudgeMessages[nudgeIndexRef.current % nudgeMessages.length];
      nudgeIndexRef.current += 1;
      changeText(msg, 'nudge');
    }, 5000);

    return () => {
      if (nudgeTimerRef.current) {
        clearInterval(nudgeTimerRef.current);
        nudgeTimerRef.current = null;
      }
    };
  }, [hoveredSection, changeText]);

  const handleBubbleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="robot-bubble-container">
      <AnimatePresence>
        {visible && (
          <motion.div
            className={`robot-speech-bubble ${messageSource === 'section' ? 'section-aware' : ''} ${messageSource === 'nudge' ? 'nudge-mode' : ''} ${isNudgePulsing ? 'nudge-pulse' : ''}`}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            onClick={handleBubbleClick}
          >
            <div className="bubble-arrow" />
            {messageSource === 'section' && (
              <div className="bubble-section-indicator">
                <span className="section-dot" />
                Section Info
              </div>
            )}
            {messageSource === 'nudge' && (
              <div className="bubble-nudge-indicator">
                <span className="nudge-wave">🤖</span>
              </div>
            )}
            <p className="bubble-text">{currentText}</p>
            <p className="bubble-action-hint">Click to chat with Eva →</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default RobotSpeechBubbles;
