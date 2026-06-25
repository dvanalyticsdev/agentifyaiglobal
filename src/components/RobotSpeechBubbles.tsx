import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RobotSpeechBubblesProps {
  pose: 'idle' | 'wave' | 'programs' | 'benefits' | 'roadmap' | 'footer';
  isClicked: boolean;
  onClick?: () => void;
}

const speechMessages = {
  idle: "Hi! I'm Eva, your Agentify AI assistant. 👋",
  wave: "Nice to meet you! Click on me or scroll down to explore our programs. 😄",
  programs: "Explore our intensive programs in AI, Data Science, and Cybersecurity! 🎓",
  benefits: "Check out our unique advantages: 24/7 LMS access, placement support, and expert mentors! 🌟",
  roadmap: "Follow this career roadmap to transition into a high-paying tech role! 🚀",
  footer: "Have questions? Feel free to click here to chat with me anytime! 💬"
};

export const RobotSpeechBubbles: React.FC<RobotSpeechBubblesProps> = ({ pose, isClicked, onClick }) => {
  const [currentText, setCurrentText] = useState(speechMessages.idle);
  const [visible, setVisible] = useState(true);

  // Sync text with pose or clicked state
  useEffect(() => {
    let text = speechMessages.idle;
    if (isClicked) {
      text = speechMessages.wave;
    } else {
      switch (pose) {
        case 'programs':
          text = speechMessages.programs;
          break;
        case 'benefits':
          text = speechMessages.benefits;
          break;
        case 'roadmap':
          text = speechMessages.roadmap;
          break;
        case 'footer':
          text = speechMessages.footer;
          break;
        default:
          text = speechMessages.idle;
      }
    }

    // Trigger subtle bubble blink when text changes
    setVisible(false);
    const timeout = setTimeout(() => {
      setCurrentText(text);
      setVisible(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, [pose, isClicked]);

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
            className="robot-speech-bubble"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            onClick={handleBubbleClick}
          >
            <div className="bubble-arrow" />
            <p className="bubble-text">{currentText}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default RobotSpeechBubbles;
