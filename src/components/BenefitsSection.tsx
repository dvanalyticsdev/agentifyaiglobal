import React, { useState } from 'react';
import { useGlowCard } from '../hooks/useGlowCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BenefitItem {
  id: string;
  number: string;
  title: string;
  description: string;
  theme: string;
  icon: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const BenefitsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'program' | 'lms'>('program');

  const programBenefits: BenefitItem[] = [
    {
      id: 'p1',
      number: '01',
      title: 'Instructor-Led Training',
      theme: 'blue',
      description: 'Learn from experienced industry professionals through interactive live sessions. Get real-time insights, ask questions, and clarify concepts for a deeper understanding.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(2, 132, 199, 0.08)" />
          {/* Presenter Person */}
          <path d="M40 75v-8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="50" cy="48" r="7" fill="none" stroke="#0284c7" strokeWidth="2.5" />
          {/* Whiteboard */}
          <rect x="65" y="35" width="38" height="26" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="68" y1="42" x2="88" y2="42" stroke="rgba(30, 41, 59, 0.3)" strokeWidth="2" strokeLinecap="round" />
          <line x1="68" y1="49" x2="98" y2="49" stroke="rgba(30, 41, 59, 0.3)" strokeWidth="2" strokeLinecap="round" />
          <line x1="68" y1="56" x2="80" y2="56" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          {/* Whiteboard Legs */}
          <line x1="75" y1="61" x2="70" y2="78" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="93" y1="61" x2="98" y2="78" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
          {/* Pointer stick */}
          <line x1="56" y1="55" x2="68" y2="48" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
          {/* Audience */}
          <path d="M28 88v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4" fill="none" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2" />
          <circle cx="34" cy="72" r="4" fill="none" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2" />
          <path d="M48 88v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4" fill="none" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2" />
          <circle cx="54" cy="72" r="4" fill="none" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2" />
          <path d="M68 88v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4" fill="none" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2" />
          <circle cx="74" cy="72" r="4" fill="none" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'p2',
      number: '02',
      title: 'LMS Access',
      theme: 'purple',
      description: 'Get access to our advanced Learning Management System 24/7. Access recordings, study materials, resources, and track your progress anytime, anywhere.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(124, 58, 237, 0.08)" />
          {/* Laptop */}
          <rect x="25" y="44" width="70" height="42" rx="3" fill="#ffffff" stroke="#7c3aed" strokeWidth="2.5" />
          <line x1="18" y1="86" x2="102" y2="86" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" />
          <line x1="45" y1="86" x2="75" y2="86" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />
          {/* Screen LMS Label */}
          <text x="60" y="65" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="bold" fontFamily="sans-serif">LMS</text>
          {/* Play Icon */}
          <polygon points="54,70 54,80 64,75" fill="#4f46e5" />
          {/* Graduation Cap on top */}
          <polygon points="85,32 100,37 85,42 70,37" fill="#1e293b" />
          <path d="M78 39v6c0 2 3 4 7 4s7-2 7-4v-6" fill="#1e293b" />
          <path d="M96 37.5v12" fill="none" stroke="#ea580c" strokeWidth="1.5" />
          <circle cx="96" cy="50" r="1.5" fill="#ea580c" />
          {/* Stack of books next to laptop */}
          <rect x="96" y="70" width="16" height="5" rx="1" fill="#ea580c" />
          <rect x="94" y="76" width="18" height="5" rx="1" fill="#0d9488" />
          <rect x="95" y="82" width="17" height="4" rx="1" fill="#ca8a04" />
        </svg>
      )
    },
    {
      id: 'p3',
      number: '03',
      title: 'Assignments & Case Studies',
      theme: 'indigo',
      description: 'Strengthen your concepts through well-designed assignments and real-world case studies that enhance problem-solving skills.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(79, 70, 229, 0.08)" />
          {/* Clipboard */}
          <rect x="35" y="32" width="46" height="58" rx="4" fill="#ffffff" stroke="#4f46e5" strokeWidth="2.5" />
          {/* Clip */}
          <path d="M50 32v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" fill="#475569" stroke="#4f46e5" strokeWidth="2" />
          {/* Lines and checkmarks */}
          <polyline points="45,48 48,51 54,44" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="60" y1="48" x2="74" y2="48" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" strokeLinecap="round" />
          
          <polyline points="45,60 48,63 54,56" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="60" y1="60" x2="74" y2="60" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" strokeLinecap="round" />
          
          <polyline points="45,72 48,75 54,68" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="60" y1="72" x2="70" y2="72" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" strokeLinecap="round" />

          {/* Book under/behind clipboard */}
          <rect x="68" y="78" width="28" height="7" rx="1.5" fill="#ea580c" stroke="#4f46e5" strokeWidth="1.5" />
          <rect x="71" y="85" width="26" height="7" rx="1.5" fill="#0284c7" stroke="#4f46e5" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'p4',
      number: '04',
      title: 'Industry Projects',
      theme: 'teal',
      description: 'Work on real-time industry projects that give you hands-on experience and help you apply your learning to practical scenarios.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(13, 148, 136, 0.08)" />
          {/* Monitor */}
          <rect x="28" y="32" width="64" height="44" rx="4" fill="#ffffff" stroke="#0d9488" strokeWidth="2.5" />
          <path d="M50 76l-5 12h30l-5-12" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="40" y1="88" x2="80" y2="88" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
          {/* Charts on screen */}
          <rect x="36" y="40" width="20" height="24" rx="2" fill="rgba(13, 148, 136, 0.1)" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="1.5" />
          <line x1="41" y1="58" x2="41" y2="48" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="46" y1="58" x2="46" y2="44" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="51" y1="58" x2="51" y2="52" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
          
          <circle cx="72" cy="52" r="10" fill="none" stroke="#0d9488" strokeWidth="2" />
          <path d="M72 42a10 10 0 0 1 10 10h-10z" fill="#ea580c" />
          {/* Gears overlay */}
          <g transform="translate(85, 74)">
            <circle cx="10" cy="10" r="8" fill="#ffffff" stroke="#ea580c" strokeWidth="2" />
            <path d="M10 5v10M5 10h10M6.5 6.5l7 7M6.5 13.5l7-7" stroke="#ea580c" strokeWidth="2" />
            <circle cx="10" cy="10" r="4.5" fill="#ffffff" stroke="#ea580c" strokeWidth="1.5" />
          </g>
        </svg>
      )
    },
    {
      id: 'p5',
      number: '05',
      title: 'Capstone Project',
      theme: 'orange',
      description: 'Comprehensive end-to-end project to demonstrate your skills, build a strong portfolio, and showcase your ability to deliver real-world solutions.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(234, 88, 12, 0.08)" />
          {/* Target */}
          <circle cx="45" cy="65" r="30" fill="none" stroke="#ea580c" strokeWidth="2.5" />
          <circle cx="45" cy="65" r="20" fill="none" stroke="#ea580c" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="45" cy="65" r="10" fill="rgba(234, 88, 12, 0.2)" stroke="#ea580c" strokeWidth="2" />
          <circle cx="45" cy="65" r="3" fill="#ea580c" />
          {/* Arrow */}
          <line x1="88" y1="28" x2="52" y2="58" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
          <polygon points="50,60 58,56 54,50" fill="#1e293b" />
          {/* Feathers */}
          <path d="M85 31l8-2M81 35l8-2M88 28l4-4" stroke="#ea580c" strokeWidth="2" fill="none" />
          {/* Trophy Cup */}
          <path d="M80 50h14v16c0 4-3 8-7 8s-7-4-7-8V50z" fill="#ffffff" stroke="#ca8a04" strokeWidth="2" />
          <path d="M76 54c-4 0-4 6 0 6M98 54c4 0 4 6 0 6" fill="none" stroke="#ca8a04" strokeWidth="2" />
          <path d="M83 74l-3 8h14l-3-8" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinejoin="round" />
          <line x1="77" y1="82" x2="97" y2="82" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="87,55 89,60 94,60 90,63 92,68 87,65 82,68 84,63 80,60 85,60" fill="#ca8a04" />
        </svg>
      )
    },
    {
      id: 'p6',
      number: '06',
      title: 'Resume Preparation',
      theme: 'magenta',
      description: 'Create a professional, job-winning resume that highlights your skills, projects, and achievements to stand out to recruiters.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(219, 39, 119, 0.08)" />
          {/* Resume Sheet */}
          <rect x="35" y="28" width="50" height="64" rx="4" fill="#ffffff" stroke="#db2777" strokeWidth="2.5" />
          {/* Photo Box */}
          <rect x="43" y="38" width="12" height="14" rx="1.5" fill="none" stroke="rgba(219, 39, 119, 0.4)" strokeWidth="1.5" />
          <circle cx="49" cy="43" r="3" fill="none" stroke="rgba(219, 39, 119, 0.4)" strokeWidth="1.5" />
          <path d="M45 51c0-1.5 2-3 4-3s4 1.5 4 3" fill="none" stroke="rgba(219, 39, 119, 0.4)" strokeWidth="1.5" />
          {/* Info Lines */}
          <line x1="60" y1="39" x2="78" y2="39" stroke="#db2777" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="60" y1="46" x2="72" y2="46" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="2" strokeLinecap="round" />
          <line x1="60" y1="52" x2="75" y2="52" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="2" strokeLinecap="round" />
          
          <line x1="43" y1="62" x2="77" y2="62" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="2" strokeLinecap="round" />
          <line x1="43" y1="68" x2="77" y2="68" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="2" strokeLinecap="round" />
          <line x1="43" y1="74" x2="68" y2="74" stroke="#db2777" strokeWidth="2" strokeLinecap="round" />
          {/* Pen */}
          <line x1="88" y1="45" x2="73" y2="70" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
          <polygon points="70,75 75,71 71,67" fill="#1e293b" />
          <path d="M84 42l4 4" stroke="#db2777" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'p7',
      number: '07',
      title: 'LinkedIn Optimization',
      theme: 'blue',
      description: 'Build a powerful LinkedIn profile that showcases your skills and achievements to attract recruiters and grow your professional network.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(2, 132, 199, 0.08)" />
          {/* LinkedIn Badge */}
          <rect x="25" y="32" width="46" height="46" rx="6" fill="#0077b5" />
          <text x="35" y="66" fill="#ffffff" fontSize="32" fontWeight="bold" fontFamily="sans-serif">in</text>
          {/* Person optimizing profile */}
          <path d="M75 88v-8a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v8" fill="none" stroke="#1e293b" strokeWidth="2.5" />
          <circle cx="86" cy="60" r="7" fill="none" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="72" y1="64" x2="80" y2="64" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="70" cy="64" r="2.5" fill="#0d9488" />
          {/* Sparkles/check overlay */}
          <circle cx="68" cy="80" r="7" fill="#0d9488" />
          <polyline points="65,80 67,82 71,78" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'p8',
      number: '08',
      title: 'Mock Interviews',
      theme: 'teal',
      description: 'Practice with mock interviews conducted by industry experts and get valuable feedback to improve your confidence and performance.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(13, 148, 136, 0.08)" />
          {/* People Chatting */}
          <path d="M30 84v-7a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v7" fill="none" stroke="#1e293b" strokeWidth="2.5" />
          <circle cx="40" cy="58" r="7" fill="none" stroke="#1e293b" strokeWidth="2.5" />
          
          <path d="M90 84v-7a6 6 0 0 1-6-6h-8a6 6 0 0 1-6 6v7" fill="none" stroke="#0d9488" strokeWidth="2.5" />
          <circle cx="80" cy="58" r="7" fill="none" stroke="#0d9488" strokeWidth="2.5" />
          {/* Desk */}
          <line x1="24" y1="84" x2="96" y2="84" stroke="rgba(30, 41, 59, 0.3)" strokeWidth="3" strokeLinecap="round" />
          {/* Laptop on desk */}
          <line x1="53" y1="84" x2="67" y2="84" stroke="#1e293b" strokeWidth="2" />
          <line x1="55" y1="80" x2="65" y2="80" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="55" y1="80" x2="52" y2="84" stroke="#1e293b" strokeWidth="1.5" />
          {/* Chat bubbles */}
          <path d="M52 46h16a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-8l-5 5v-5H52a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4z" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
          <line x1="54" y1="52" x2="66" y2="52" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="54" y1="57" x2="62" y2="57" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'p9',
      number: '09',
      title: 'Placement Assistance',
      theme: 'orange',
      description: 'Get dedicated placement support including job opportunities, referrals, and guidance to help you kickstart your career.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(234, 88, 12, 0.08)" />
          {/* Avatars on top */}
          <circle cx="45" cy="42" r="5" fill="none" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2" />
          <path d="M38 54v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2" fill="none" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2" />

          <circle cx="60" cy="38" r="6" fill="none" stroke="#ea580c" strokeWidth="2.5" />
          <path d="M51 52v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" fill="none" stroke="#ea580c" strokeWidth="2.5" />
          <polygon points="60,25 62,29 67,29 63,31 65,36 60,33 55,36 57,31 53,29 58,29" fill="#ca8a04" />

          <circle cx="75" cy="42" r="5" fill="none" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2" />
          <path d="M68 54v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2" fill="none" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2" />
          {/* Handshake */}
          <g transform="translate(30, 56)">
            {/* Left Arm */}
            <path d="M2 14h14l4 6-2 4-6-6" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Right Arm */}
            <path d="M58 14H44l-4 6 2 4 6-6" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Clasped Hands */}
            <path d="M20 18h18" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
            <path d="M22 22h14" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
            <path d="M24 26h10" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      )
    },
    {
      id: 'p10',
      number: '10',
      title: 'Industry Certification',
      theme: 'blue',
      description: 'Earn a recognized industry certificate that validates your skills and boosts your credibility in the job market.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(2, 132, 199, 0.08)" />
          {/* Certificate Frame */}
          <rect x="30" y="32" width="60" height="46" rx="4" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
          <rect x="34" y="36" width="52" height="38" rx="2" fill="none" stroke="rgba(2, 132, 199, 0.3)" strokeWidth="1" />
          {/* Lines */}
          <line x1="42" y1="44" x2="78" y2="44" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="45" y1="52" x2="75" y2="52" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="48" y1="58" x2="72" y2="58" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Gold Seal / Badge */}
          <g transform="translate(68, 64)">
            {/* Ribbons */}
            <path d="M5 8l4 18-4-3-4 3 4-18" fill="#ea580c" />
            <path d="M9 8l4 18-4-3-4 3 4-18" fill="#ca8a04" />
            {/* Seal Circle */}
            <circle cx="7" cy="8" r="8" fill="#ca8a04" stroke="#ffffff" strokeWidth="1.5" />
            <polygon points="7,4 8,6 10,6 8.5,8 9,10 7,9 5,10 5.5,8 4,6 6,6" fill="#ffffff" />
          </g>
        </svg>
      )
    }
  ];

  const lmsBenefits: BenefitItem[] = [
    {
      id: 'l1',
      number: '01',
      title: 'Post Class Materials & Live Videos',
      theme: 'blue',
      description: 'Get lifetime access to live recorded sessions, slides, notes and other study materials anytime, anywhere to revise and strengthen your concepts.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(2, 132, 199, 0.08)" />
          {/* Screen / Monitor */}
          <rect x="25" y="32" width="70" height="46" rx="4" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
          <polygon points="52,48 52,62 65,55" fill="#0284c7" />
          <line x1="20" y1="84" x2="100" y2="84" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="78" x2="50" y2="84" stroke="#0284c7" strokeWidth="2.5" />
          <line x1="70" y1="78" x2="70" y2="84" stroke="#0284c7" strokeWidth="2.5" />
          {/* Cloud icon overlay */}
          <g transform="translate(78, 20)">
            <rect x="0" y="0" width="22" height="20" rx="4" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M6 14a3 3 0 0 1 0-6 4 4 0 0 1 7-2 3 3 0 0 1 3 4 3 3 0 0 1-3 4z" fill="#ffffff" />
            <polygon points="11,10 11,6 12,6 12,10 14,10 11.5,13 9,10" fill="#0d9488" />
          </g>
        </svg>
      )
    },
    {
      id: 'l2',
      number: '02',
      title: 'Assignment Upload & Feedback',
      theme: 'orange',
      description: 'Access session-wise assignments, complete them at your convenience, and upload them for evaluation with detailed feedback from industry experts.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(234, 88, 12, 0.08)" />
          {/* Assignment sheet */}
          <rect x="35" y="30" width="44" height="56" rx="4" fill="#ffffff" stroke="#ea580c" strokeWidth="2.5" />
          <polyline points="43,45 46,48 52,41" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="43,57 46,60 52,53" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="58" y1="45" x2="70" y2="45" stroke="rgba(234, 88, 12, 0.4)" strokeWidth="2" strokeLinecap="round" />
          <line x1="58" y1="57" x2="70" y2="57" stroke="rgba(234, 88, 12, 0.4)" strokeWidth="2" strokeLinecap="round" />
          {/* Upload overlay */}
          <g transform="translate(68, 64)">
            <circle cx="12" cy="12" r="11" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M12 6v10M8 10l4-4 4 4" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      )
    },
    {
      id: 'l3',
      number: '03',
      title: 'MCQs & Practical Tests (Score >= 70%)',
      theme: 'teal',
      description: 'Reinforce your learning by attempting MCQs and practical questions. Keep practicing until you score 70% or more to ensure strong concepts.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(13, 148, 136, 0.08)" />
          {/* MCQ Screen */}
          <rect x="25" y="32" width="56" height="42" rx="3" fill="#ffffff" stroke="#0d9488" strokeWidth="2.5" />
          <text x="32" y="44" fill="#0d9488" fontSize="8" fontWeight="bold" fontFamily="sans-serif">MCQ TEST</text>
          <circle cx="35" cy="52" r="2.5" fill="none" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1" />
          <circle cx="35" cy="62" r="2.5" fill="#0d9488" />
          <line x1="42" y1="52" x2="65" y2="52" stroke="rgba(30, 41, 59, 0.3)" strokeWidth="1.5" />
          <line x1="42" y1="62" x2="70" y2="62" stroke="rgba(30, 41, 59, 0.3)" strokeWidth="1.5" />
          
          <line x1="20" y1="80" x2="86" y2="80" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
          <line x1="43" y1="74" x2="43" y2="80" stroke="#0d9488" strokeWidth="2" />
          <line x1="63" y1="74" x2="63" y2="80" stroke="#0d9488" strokeWidth="2" />
          {/* Target bullseye on right */}
          <g transform="translate(68, 52)">
            <circle cx="16" cy="16" r="15" fill="#ffffff" stroke="#ea580c" strokeWidth="2" />
            <circle cx="16" cy="16" r="10" fill="none" stroke="#ea580c" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="5" fill="#ea580c" />
            <line x1="16" y1="2" x2="16" y2="30" stroke="rgba(234, 88, 12, 0.3)" strokeWidth="1" />
            <line x1="2" y1="16" x2="30" y2="16" stroke="rgba(234, 88, 12, 0.3)" strokeWidth="1" />
          </g>
          {/* Question badge */}
          <g transform="translate(74, 20)">
            <circle cx="8" cy="8" r="8" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
            <text x="8" y="12" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">?</text>
          </g>
        </svg>
      )
    },
    {
      id: 'l4',
      number: '04',
      title: 'Resume Builder & Generation',
      theme: 'purple',
      description: 'Fill the resume form with your details and get a professionally crafted, recruiter-ready resume that highlights your skills and projects.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(124, 58, 237, 0.08)" />
          {/* Laptop Screen with profile form */}
          <rect x="25" y="32" width="70" height="46" rx="4" fill="#ffffff" stroke="#7c3aed" strokeWidth="2.5" />
          <line x1="18" y1="84" x2="102" y2="84" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
          <line x1="48" y1="78" x2="48" y2="84" stroke="#7c3aed" strokeWidth="2" />
          <line x1="72" y1="78" x2="72" y2="84" stroke="#7c3aed" strokeWidth="2" />
          {/* Profile form */}
          <rect x="33" y="40" width="10" height="12" rx="1" fill="none" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1.2" />
          <circle cx="38" cy="44" r="2.2" fill="none" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1" />
          <path d="M35 50a3 3 0 0 1 6 0" fill="none" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1" />

          <line x1="48" y1="42" x2="68" y2="42" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
          <line x1="48" y1="48" x2="80" y2="48" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="33" y1="58" x2="80" y2="58" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="33" y1="64" x2="70" y2="64" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Pen writing overlay */}
          <g transform="translate(78, 55)">
            <line x1="12" y1="2" x2="2" y2="18" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="1,20 4,17 1,16" fill="#1e293b" />
          </g>
        </svg>
      )
    },
    {
      id: 'l5',
      number: '05',
      title: 'Interview Preparation Kit',
      theme: 'indigo',
      description: 'Access a comprehensive interview preparation kit covering behavioral, technical, and project-related questions and answers to boost your confidence.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(79, 70, 229, 0.08)" />
          {/* Laptop Screen with Q&A */}
          <rect x="25" y="32" width="70" height="46" rx="4" fill="#ffffff" stroke="#4f46e5" strokeWidth="2.5" />
          <line x1="18" y1="84" x2="102" y2="84" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
          <line x1="48" y1="78" x2="48" y2="84" stroke="#4f46e5" strokeWidth="2" />
          <line x1="72" y1="78" x2="72" y2="84" stroke="#4f46e5" strokeWidth="2" />
          {/* Q&A layout inside laptop */}
          <circle cx="36" cy="44" r="5" fill="#4f46e5" />
          <text x="36" y="47" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">?</text>
          <line x1="46" y1="44" x2="78" y2="44" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" />

          <circle cx="36" cy="58" r="5" fill="#0d9488" />
          <text x="36" y="61" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">!</text>
          <line x1="46" y1="58" x2="74" y2="58" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="46" y1="64" x2="68" y2="64" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Right Doc icon with Q&A label */}
          <g transform="translate(80, 20)">
            <rect x="0" y="0" width="22" height="24" rx="3" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.5" />
            <text x="11" y="15" fill="#4f46e5" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Q&A</text>
          </g>
        </svg>
      )
    },
    {
      id: 'l6',
      number: '06',
      title: 'Mock Interview Scheduler',
      theme: 'teal',
      description: 'Schedule mock interviews directly in the LMS with industry mentors, get real-time feedback, and improve your performance.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(13, 148, 136, 0.08)" />
          {/* Video meeting screen */}
          <rect x="25" y="32" width="70" height="46" rx="4" fill="#ffffff" stroke="#0d9488" strokeWidth="2.5" />
          <line x1="18" y1="84" x2="102" y2="84" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
          <line x1="48" y1="78" x2="48" y2="84" stroke="#0d9488" strokeWidth="2" />
          <line x1="72" y1="78" x2="72" y2="84" stroke="#0d9488" strokeWidth="2" />
          {/* Mentor Video Feed */}
          <circle cx="48" cy="48" r="6.5" fill="none" stroke="#0d9488" strokeWidth="2" />
          <path d="M38 64c0-3.5 4-6 10-6s10 2.5 10 6" fill="none" stroke="#0d9488" strokeWidth="2" />
          {/* Small user video feed */}
          <rect x="72" y="52" width="16" height="18" rx="1.5" fill="none" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1" />
          <circle cx="80" cy="58" r="2.5" fill="none" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1" />
          <path d="M75 66a3 3 0 0 1 6-2 3 3 0 0 1 2 2" fill="none" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1" />
          {/* Chat / Meeting overlay bubble */}
          <g transform="translate(76, 18)">
            <circle cx="10" cy="10" r="9" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M6 10h4M6 13h6" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="14" cy="7" r="1.5" fill="#ea580c" />
          </g>
        </svg>
      )
    },
    {
      id: 'l7',
      number: '07',
      title: 'Appear for DV Elite Test',
      theme: 'magenta',
      description: 'Clear the DV Elite Test to become eligible for placement assistance and connect directly with our top hiring partners.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(219, 39, 119, 0.08)" />
          {/* Laptop Screen with test */}
          <rect x="25" y="32" width="70" height="46" rx="4" fill="#ffffff" stroke="#db2777" strokeWidth="2.5" />
          <line x1="18" y1="84" x2="102" y2="84" stroke="#db2777" strokeWidth="3" strokeLinecap="round" />
          <line x1="48" y1="78" x2="48" y2="84" stroke="#db2777" strokeWidth="2" />
          <line x1="72" y1="78" x2="72" y2="84" stroke="#db2777" strokeWidth="2" />
          {/* Test title */}
          <text x="60" y="44" fill="#db2777" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">DV ELITE TEST</text>
          {/* Test Checklist */}
          <rect x="36" y="50" width="4" height="4" fill="none" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1" />
          <rect x="36" y="57" width="4" height="4" fill="none" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1" />
          <rect x="36" y="64" width="4" height="4" fill="none" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1" />
          <line x1="43" y1="52" x2="70" y2="52" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" />
          <line x1="43" y1="59" x2="70" y2="59" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" />
          <line x1="43" y1="66" x2="65" y2="66" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" />
          {/* Check overlays */}
          <polyline points="35,51 38,53 42,49" fill="none" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="35,58 38,60 42,56" fill="none" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Badge Overlay */}
          <g transform="translate(80, 50)">
            {/* Ribbons */}
            <path d="M5 8l3 12-3-2-3 2 3-12" fill="#db2777" />
            <path d="M11 8l3 12-3-2-3 2 3-12" fill="#db2777" />
            {/* Badge Star */}
            <circle cx="8" cy="8" r="8" fill="#db2777" stroke="#ffffff" strokeWidth="1.5" />
            <polygon points="8,4 9,6 11,6 9.5,8 10,10 8,9 6,10 6.5,8 5,6 7,6" fill="#ffffff" />
          </g>
        </svg>
      )
    },
    {
      id: 'l8',
      number: '08',
      title: 'Skills Certificates',
      theme: 'blue',
      description: 'Earn recognized Training and Industry Data Science & AI skill certificates to validate your expertise and boost your career.',
      icon: (
        <svg viewBox="0 0 120 120" className="benefit-svg">
          <circle cx="60" cy="60" r="50" fill="rgba(2, 132, 199, 0.08)" />
          {/* Certificate 1 */}
          <rect x="25" y="38" width="46" height="34" rx="3" fill="#ffffff" stroke="#0284c7" strokeWidth="2" transform="rotate(-6 48 55)" />
          <line x1="32" y1="48" x2="60" y2="45" stroke="rgba(2, 132, 199, 0.5)" strokeWidth="1.5" />
          <line x1="34" y1="54" x2="56" y2="52" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" />
          <circle cx="58" cy="60" r="3" fill="#ca8a04" />
          {/* Certificate 2 */}
          <rect x="52" y="44" width="46" height="34" rx="3" fill="#ffffff" stroke="#0d9488" strokeWidth="2.2" />
          <line x1="58" y1="54" x2="88" y2="54" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
          <line x1="60" y1="62" x2="84" y2="62" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" />
          <line x1="60" y1="68" x2="80" y2="68" stroke="rgba(30, 41, 59, 0.4)" strokeWidth="1.5" />
          
          {/* Medal Seal overlay */}
          <g transform="translate(80, 64)">
            {/* Ribbons */}
            <path d="M3 6l2 10-2-1.5-2 1.5 2-10" fill="#ea580c" />
            <path d="M7 6l2 10-2-1.5-2 1.5 2-10" fill="#ca8a04" />
            <circle cx="5" cy="6" r="6" fill="#ca8a04" stroke="#ffffff" strokeWidth="1.2" />
          </g>
        </svg>
      )
    }
  ];

  const benefits = activeTab === 'program' ? programBenefits : lmsBenefits;
  const revealRef = useScrollReveal(activeTab);

  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">
        
        {/* Title Header */}
        <div className="benefits-header reveal-on-scroll">
          <span className="benefits-subtitle">MAXIMIZE YOUR SUCCESS</span>
          <h2 className="benefits-title">
            {activeTab === 'program' ? 'PROGRAM BENEFITS' : 'LMS PLATFORM BENEFITS'}
          </h2>
          
          {/* Decorative Divider */}
          <div className="benefits-title-divider">
            <div className="divider-line"></div>
            <div className="divider-diamond">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" fill="#1e293b"/>
              </svg>
            </div>
            <div className="divider-line"></div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="benefits-tab-switcher reveal-on-scroll delay-1">
          <button 
            className={`tab-btn ${activeTab === 'program' ? 'active' : ''}`}
            onClick={() => setActiveTab('program')}
          >
            <span className="tab-btn-icon">📋</span>
            Core Program Benefits
          </button>
          <button 
            className={`tab-btn ${activeTab === 'lms' ? 'active' : ''}`}
            onClick={() => setActiveTab('lms')}
          >
            <span className="tab-btn-icon">💻</span>
            LMS Platform Benefits
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid" ref={revealRef}>
          {benefits.map((item, idx) => (
            <BenefitCard 
              key={item.id} 
              item={item} 
              index={idx}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="benefits-footer-banner reveal-on-scroll">
          <div className="banner-logo-badge">🏆</div>
          <div className="banner-text-wrapper">
            <h4 className="banner-action-text">
              {activeTab === 'program' 
                ? 'LEARN. PRACTICE. BUILD. SUCCEED.' 
                : 'LEARN. PRACTICE. GET CERTIFIED. GET PLACED.'
              }
            </h4>
            <p className="banner-sub-text">
              {activeTab === 'program'
                ? 'Everything you need to achieve your career goals!'
                : 'Accelerate your learning curve with our customized features!'
              }
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

// Subcomponent representing an individual benefit card
interface BenefitCardProps {
  item: BenefitItem;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ item, index }) => {
  const cardRef = useGlowCard();

  const glowColors = {
    blue: 'rgba(2, 132, 199, 0.1)',
    purple: 'rgba(124, 58, 237, 0.1)',
    indigo: 'rgba(79, 70, 229, 0.1)',
    magenta: 'rgba(219, 39, 119, 0.1)',
    orange: 'rgba(234, 88, 12, 0.1)',
    teal: 'rgba(13, 148, 136, 0.1)'
  };

  const themeKey = item.theme as keyof typeof glowColors;
  const glowColor = glowColors[themeKey] || glowColors.blue;

  return (
    <div 
      ref={cardRef}
      className={`benefit-card glow-card ${item.theme} reveal-on-scroll`}
      style={{ 
        transitionDelay: `${0.04 * (index + 1)}s`,
        '--glow-color': glowColor
      } as React.CSSProperties}
    >
      {/* Number Badge */}
      <div className="benefit-number-badge">
        {item.number}
      </div>

      {/* Icon Container */}
      <div className="benefit-icon-wrapper">
        {item.icon}
      </div>

      {/* Text Info */}
      <div className="benefit-content">
        <h3 className="benefit-card-title">
          <span className="benefit-checkmark">✓</span>
          {item.title}
        </h3>
        <p className="benefit-card-desc">{item.description}</p>
      </div>
    </div>
  );
};
