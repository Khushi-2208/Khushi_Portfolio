"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Award,
  Cpu,
  ArrowLeft,
  ArrowRight,
  Menu,
  Twitter,
  FileText
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

// Helper function to render thematic project illustrations
function getProjectIllustration(title: string) {
  switch (title) {
    case "Goonj":
      return (
        <svg className="w-full h-32 rounded-lg bg-stone-950 p-4 border border-stone-800" viewBox="0 0 200 100">
          <defs>
            <linearGradient id="glow-goonj" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C85A32" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <g stroke="url(#glow-goonj)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <path d="M 20 50 Q 35 20, 50 50 T 80 50 T 110 50 T 140 50 T 170 50 T 180 50" />
            <path d="M 20 50 Q 35 70, 50 50 T 80 50 T 110 50 T 140 50 T 170 50 T 180 50" opacity="0.4" strokeWidth="1.5" />
            <line x1="35" y1="50" x2="35" y2="30" />
            <line x1="65" y1="50" x2="65" y2="70" />
            <line x1="95" y1="50" x2="95" y2="25" />
            <line x1="125" y1="50" x2="125" y2="75" />
            <line x1="155" y1="50" x2="155" y2="35" />
          </g>
        </svg>
      );
    case "WDC Induction Portal":
      return (
        <svg className="w-full h-32 rounded-lg bg-stone-950 p-4 border border-stone-800" viewBox="0 0 200 100">
          <defs>
            <linearGradient id="glow-wdc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <rect x="15" y="15" width="170" height="70" rx="6" fill="none" stroke="url(#glow-wdc)" strokeWidth="1.5" />
          <line x1="55" y1="15" x2="55" y2="85" stroke="#292524" strokeWidth="1.5" />
          <line x1="15" y1="35" x2="185" y2="35" stroke="#292524" strokeWidth="1.5" />
          <circle cx="35" cy="25" r="4" fill="url(#glow-wdc)" />
          <circle cx="75" cy="25" r="3" fill="#292524" />
          <circle cx="95" cy="25" r="3" fill="#292524" />
          <rect x="70" y="45" width="45" height="12" rx="2" fill="none" stroke="#292524" strokeWidth="1" />
          <rect x="125" y="45" width="45" height="12" rx="2" fill="none" stroke="url(#glow-wdc)" strokeWidth="1" opacity="0.7" />
          <rect x="70" y="65" width="100" height="12" rx="2" fill="none" stroke="#292524" strokeWidth="1" />
        </svg>
      );
    case "Solaria AI":
      return (
        <svg className="w-full h-32 rounded-lg bg-stone-950 p-4 border border-stone-800" viewBox="0 0 200 100">
          <defs>
            <linearGradient id="glow-solaria" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          <g stroke="url(#glow-solaria)" strokeWidth="1" fill="none">
            <circle cx="100" cy="50" r="16" strokeWidth="1.5" />
            <circle cx="100" cy="50" r="6" fill="url(#glow-solaria)" />
            <circle cx="50" cy="30" r="4" stroke="#292524" />
            <circle cx="150" cy="30" r="4" stroke="#292524" />
            <circle cx="60" cy="70" r="4" stroke="#292524" />
            <circle cx="140" cy="70" r="4" stroke="#292524" />
            <line x1="100" y1="50" x2="50" y2="30" strokeWidth="1" opacity="0.5" />
            <line x1="100" y1="50" x2="150" y2="30" strokeWidth="1" opacity="0.5" />
            <line x1="100" y1="50" x2="60" y2="70" strokeWidth="1" opacity="0.5" />
            <line x1="100" y1="50" x2="140" y2="70" strokeWidth="1" opacity="0.5" />
          </g>
        </svg>
      );
    case "Aetherius Exchange":
      return (
        <svg className="w-full h-32 rounded-lg bg-stone-950 p-4 border border-stone-800" viewBox="0 0 200 100">
          <defs>
            <linearGradient id="glow-aether" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#glow-aether)" strokeWidth="1.2">
            <circle cx="100" cy="50" r="28" stroke="#292524" strokeWidth="1" />
            <circle cx="100" cy="50" r="12" strokeWidth="1.5" />
            <path d="M 60 50 A 40 15 0 1 1 140 50" strokeWidth="1.5" opacity="0.8" />
            <path d="M 60 50 A 40 15 0 1 0 140 50" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="80" cy="40" r="3" fill="url(#glow-aether)" />
            <circle cx="120" cy="60" r="3" fill="#3B82F6" />
          </g>
        </svg>
      );
    case "Vespera Canvas":
      return (
        <svg className="w-full h-32 rounded-lg bg-stone-950 p-4 border border-stone-800" viewBox="0 0 200 100">
          <defs>
            <linearGradient id="glow-vespera" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#glow-vespera)" strokeWidth="1.5">
            <rect x="30" y="25" width="35" height="25" rx="3" strokeWidth="1" />
            <circle cx="140" cy="35" r="14" strokeWidth="1" />
            <polygon points="100,60 115,85 85,85" strokeWidth="1" />
            <path d="M 65 37 L 126 35" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 47 50 L 85 70" strokeWidth="1" opacity="0.6" />
            <path d="M 140 49 L 115 72" strokeWidth="1" opacity="0.6" />
          </g>
        </svg>
      );
    case "Chronos Logger":
      return (
        <svg className="w-full h-32 rounded-lg bg-stone-950 p-4 border border-stone-800" viewBox="0 0 200 100">
          <defs>
            <linearGradient id="glow-chronos" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          <rect x="20" y="20" width="160" height="60" rx="4" fill="none" stroke="url(#glow-chronos)" strokeWidth="1.5" />
          <g stroke="url(#glow-chronos)" strokeWidth="1.2" opacity="0.8">
            <line x1="30" y1="35" x2="45" y2="35" />
            <line x1="30" y1="48" x2="110" y2="48" />
            <line x1="30" y1="60" x2="90" y2="60" />
            <line x1="30" y1="72" x2="70" y2="72" />
            <path d="M 30 35 L 35 40 L 30 45" fill="none" strokeWidth="1.5" />
          </g>
          <circle cx="165" cy="30" r="2.5" fill="#EF4444" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  const scrollLeft = () => {
    const container = document.getElementById('project-container');
    if (container) {
      container.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('project-container');
    if (container) {
      container.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Goonj",
      date: "Jun 2026",
      role: "Lead Architect",
      tech: ["Next.js", "Gemini API", "Web Speech API", "PostgreSQL", "Prisma", "Clerk"],
      description: "An AI-powered, voice-first discovery platform using Retrieval-Augmented Generation (RAG) to decode complex government schemes. Enabled natural speech interaction with sub-1.5s voice response time, delivering details in English, Hindi, and 8+ regional languages.",
      metrics: "Reduced manual eligibility checking time by 75%. Optimized using dynamic DB pooling and lazy loading to score 90+ on mobile Lighthouse audits.",
      github: "https://github.com/Khushi-2208/goonj",
      live: "https://goonj-iota.vercel.app/",
      glowColor: "rgba(200,90,50,0.3)",
      borderColor: "hover:border-brand-accent/70",
      image: "/projects/goonj.png"
    },
    {
      title: "WDC Induction Portal",
      date: "Mar 2026",
      role: "Full Stack Engineer",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "JWT", "Bcrypt"],
      description: "A secure recruitment and applicant workflow portal featuring dual-role access control (Member + Admin) for evaluating induction tasks. Features a fully-custom evaluation queue tracking 5+ application phases.",
      metrics: "Secured with HTTP-only cookies and bcrypt password hashes, utilizing Next.js middleware-based routing to restrict 10+ internal endpoints.",
      github: "https://github.com/Khushi-2208/wdc_induction_portal",
      live: "https://wdc-induction-portal.vercel.app/",
      glowColor: "rgba(16,185,129,0.3)",
      borderColor: "hover:border-emerald-500/70",
      image: "/projects/wdc.png"
    },
    {
      title: "GriefBridge",
      date: "Jul 2026",
      role: "Backend & API Developer (Executor Track)",
      tech: ["Next.js", "LangChain.js", "Claude API", "PostgreSQL", "Prisma", "Tailwind CSS"],
      description: "An AI-powered legacy & bereavement support system that automates executor tasks like document drafting and notification tracking, while creating a conversational, zero-hallucination memory graph from personal archives.",
      metrics: "Ingests chats and voice notes to construct queryable memory graphs, drafts print-ready legal PDFs in under 10 seconds, and lists 70+ prioritized executor tasks.",
      github: "https://github.com/Khushi-2208/GriefBridge",
      live: "https://grief-bridge-y2ln.vercel.app/",
      glowColor: "rgba(139,92,246,0.3)",
      borderColor: "hover:border-violet-500/70",
      image: "/projects/grief.png"
    },
    {
      title: "Awaaz Shield",
      date: "Jan 2026",
      role: "Lead Developer",
      tech: ["Next.js", "FastAPI", "SpeechBrain", "MongoDB", "Whisper API", "TypeScript"],
      description: "An AI-powered voice-verification companion built to catch AI-cloned voice scams in real time. Performs voiceprint match, NLP-based scam language detection, and codeword checks in parallel.",
      metrics: "Constructed a multi-signal confidence engine running parallel voice analysis, scanning live transcript urgency markers, and validating private codewords in under 1.5 seconds.",
      github: "https://github.com/Khushi-2208/AwaazShield",
      live: "https://awaaz-shield-ja3m.vercel.app/",
      glowColor: "rgba(6,182,212,0.3)",
      borderColor: "hover:border-cyan-500/70",
      image: "/projects/awaazshield.png"
    },
    {
      title: "Cortex-AI",
      date: "Oct 2025",
      role: "Sole Creator & Developer",
      tech: ["Next.js 14", "Gemini 2.0 Flash", "Astra DB", "Tailwind CSS", "JWT", "TypeScript"],
      description: "An intelligent sports companion powered by Retrieval-Augmented Generation (RAG) that provides instant, context-aware insights on Cricket.",
      metrics: "Integrates DataStax Astra DB for semantic vector search under 100ms, JWT-based secure auth with middleware session protection, and real-time query streaming.",
      github: "https://github.com/Khushi-2208/Cortex-AI",
      live: "https://cortex-ai-xjgb.vercel.app/",
      glowColor: "rgba(139,92,246,0.3)",
      borderColor: "hover:border-violet-500/70",
      image: "/projects/cortex.png"
    },
    {
      title: "EcoMindAI",
      date: "Jan 2026",
      role: "Backend Developer",
      tech: ["Node.js", "Express", "Google Gemini API", "PostgreSQL"],
      description: "An AI-powered community sustainability planning platform that transforms environmental data into custom, data-driven action plans. Generates narratives and predictions on resource optimization for residents and leaders.",
      metrics: "Designed and implemented the core backend API endpoints integrating Gemini AI for sustainability plan generation and predictive resource usage forecasting.",
      github: "https://github.com/Khushi-2208/ecomind_ai",
      live: "https://ecomind-ai-nu.vercel.app/",
      glowColor: "rgba(16,185,129,0.3)",
      borderColor: "hover:border-emerald-500/70",
      image: "/projects/ecomind.png"
    }
  ];

  const doubleProjects = [...projects, ...projects];

  const experience = [
    {
      title: "Web Team Member",
      organization: "NIT Patna Official Web Team",
      location: "Patna, Bihar",
      period: "Mar 2026 — Present",
      details: [
        "Contributing to the open source codebase of the official website for NIT Patna."
      ]
    },
    {
      title: "Web Developer",
      organization: "Hackslash",
      location: "Patna, Bihar",
      period: "Apr 2025 — Jul 2026",
      details: [
        "Co-developed internal club dashboards and organized developer-focused workshops."
      ]
    }
  ];

  const achievements = [
    {
      title: "3rd Place — TechSprint: Hack the Google Way",
      organization: "GDG On Campus, NIT Patna",
      date: "Jan 2026",
      detail: "Created 'Awaaz', an AI-powered voice assistant for digital accessibility, finishing 3rd out of dozens of competing teams."
    }
  ];

  const education = [
    {
      period: "2024 — 2028",
      title: "B.Tech — Electronics & Communication Engineering",
      score: "9.73 CGPA",
      school: "National Institute of Technology, Patna"
    },
    {
      period: "2023 — 2024",
      title: "Senior Secondary — NIOS",
      score: "89.6% Marks",
      school: "+2 Zila School, Bhagalpur"
    }
  ];

  // Specific custom skill nodes featuring centered custom illustration SVGs
  const skillsMarquee = [
    {
      name: "React.js",
      glowColor: "rgba(34,211,238,0.2)",
      icon: (
        <svg className="w-10 h-10 text-cyan-400 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(120 50 50)" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "Next.js",
      glowColor: "rgba(255,255,255,0.15)",
      icon: (
        <svg className="w-10 h-10 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="50" cy="50" r="40" stroke="currentColor" />
          <path d="M35 65 L60 35 M60 35 L60 65 M60 52 L50 65" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </svg>
      )
    },
    {
      name: "Node.js",
      glowColor: "rgba(34,197,94,0.15)",
      icon: (
        <svg className="w-10 h-10 text-green-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 15 L20 32.5 L20 67.5 L50 85 L80 67.5 L80 32.5 Z" />
          <path d="M50 15 L50 85 M20 32.5 L50 50 L80 32.5" opacity="0.3" />
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      glowColor: "rgba(56,189,248,0.2)",
      icon: (
        <svg className="w-10 h-10 text-sky-400" viewBox="0 0 100 100" fill="currentColor">
          <path d="M25 50 C 35 35, 55 35, 60 50 C 50 65, 30 65, 25 50 Z M40 65 C 50 50, 70 50, 75 65 C 65 80, 45 80, 40 65 Z" opacity="0.8" />
        </svg>
      )
    },
    {
      name: "Figma",
      glowColor: "rgba(162,89,255,0.2)",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="40" cy="30" r="12" fill="#F24E1E" />
          <circle cx="60" cy="30" r="12" fill="#FF7262" />
          <circle cx="40" cy="50" r="12" fill="#A259FF" />
          <circle cx="60" cy="50" r="12" fill="#1ABC9C" />
          <path d="M40 70 C 40 63.37 45.37 58 52 58 L52 82 C 45.37 82 40 76.63 40 70 Z" fill="#0ACF83" />
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      glowColor: "rgba(59,130,246,0.15)",
      icon: (
        <svg className="w-10 h-10 text-blue-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M30 65 C 30 50, 40 30, 60 30 C 75 30, 80 45, 80 55 C 80 70, 70 80, 50 80 C 40 80, 30 75, 30 65 Z" />
          <path d="M30 50 Q 50 50, 60 40 M45 35 C 50 40, 50 45, 45 50" />
        </svg>
      )
    },
    {
      name: "MongoDB",
      glowColor: "rgba(16,185,129,0.15)",
      icon: (
        <svg className="w-10 h-10 text-emerald-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 15 C 65 35, 65 65, 50 85 C 35 65, 35 35, 50 15 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M50 15 L50 85" strokeWidth="1" />
        </svg>
      )
    },
    {
      name: "Python",
      glowColor: "rgba(234,179,8,0.15)",
      icon: (
        <svg className="w-10 h-10 text-yellow-500" viewBox="0 0 100 100" fill="currentColor">
          <path d="M48 20 C 35 20, 30 25, 30 35 L 30 42 L 48 42 L 48 48 L 35 48 C 25 48, 20 53, 20 65 C 20 77, 25 80, 35 80 L 40 80 L 40 73 C 40 63, 45 58, 55 58 L 68 58 L 68 50 C 68 38, 63 33, 53 33 L 48 33 Z" opacity="0.8" />
          <path d="M52 80 C 65 80, 70 75, 70 65 L 70 58 L 52 58 L 52 52 L 65 52 C 75 52, 80 47, 80 35 C 80 23, 75 20, 65 20 L 60 20 L 60 27 C 60 37, 55 42, 45 42 L 32 42 L 32 50 C 32 62, 37 67, 47 67 L 52 67 Z" opacity="0.6" />
        </svg>
      )
    },
    {
      name: "Git / GitHub",
      glowColor: "rgba(120,113,108,0.2)",
      icon: (
        <svg className="w-10 h-10 text-stone-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="50" cy="50" r="40" stroke="currentColor" />
          <path d="M40 70 A 10 10 0 0 1 50 60 A 10 10 0 0 1 60 70" />
          <line x1="50" y1="30" x2="50" y2="60" />
          <circle cx="50" cy="30" r="5" fill="currentColor" />
          <circle cx="50" cy="60" r="5" fill="currentColor" />
        </svg>
      )
    }
  ];

  // Duplicate skills list for infinite looping marquee
  const doubleSkills = [...skillsMarquee, ...skillsMarquee];

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <div className="min-h-screen relative bg-brand-bg text-brand-text flex flex-col architectural-grid">

      {/* 1. HERO & ABOUT SECTION (Split Full Width Panel) */}
      <section id="about" className="w-full flex flex-col md:flex-row min-h-screen border-b border-brand-border relative">

        {/* Left Side (35% terracotta) */}
        <div className="w-full md:w-[35%] bg-brand-accent p-8 md:p-16 flex flex-col justify-between relative min-h-[300px] md:min-h-screen z-10">
          {/* Header Identity in Signature-like font */}
          <div className="flex justify-between items-center">
            <span className="font-serif italic text-3xl font-light text-stone-900 tracking-wide select-none">
              Khushi Kumari
            </span>
          </div>

          {/* Social Links (Bottom Left) */}
          <div className="mt-auto pt-16 flex items-center space-x-6 text-stone-900">
            <a
              href="https://github.com/Khushi-2208"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-white transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/khushi-kumari-428a20334"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:khushikumari062205@gmail.com"
              aria-label="Send Email"
              className="hover:text-white transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Circular Overlapping Portrait */}
        <div className="absolute top-[300px] md:top-1/2 left-1/2 md:left-[35%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full overflow-hidden border-[6px] border-stone-950 bg-stone-900 shadow-2xl relative group">
            <img
              src="/khushi_photo.jpeg"
              alt="Khushi Kumari Profile"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Cyber hover boundary glow */}
            <div className="absolute inset-0 rounded-full border-2 border-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>

        {/* Right Side (65% dark main body) */}
        <div className="w-full md:w-[65%] p-8 md:p-24 md:pl-40 flex flex-col justify-center bg-stone-950 text-stone-100 min-h-screen z-10 pt-32 md:pt-24">
          <div className="max-w-xl">

            {/*style title display: "Khushi" in orange, "Kumari" in white */}
            <h1 className="font-sans text-5xl md:text-6.5xl font-extrabold tracking-tight mb-6">
              <span className="text-brand-accent">Khushi</span> <span className="text-white">Kumari</span>
            </h1>

            {/* Subtitle / Role lists separator */}
            <p className="font-mono text-xs text-stone-400 tracking-wide leading-relaxed mb-4 uppercase">
              Web Engineer &bull; Full Stack Developer &bull; ECE Student at NIT Patna &bull; Competitive Programmer &bull; LeetCode: Max Rating 1563 (400+ solved) &bull; CodeChef: Max Rating 1416 (125+ solved)
            </p>

            <div className="font-sans text-stone-400 space-y-6 text-sm md:text-base leading-relaxed mb-12">
              <p>
                I'm <strong className="text-white font-medium">Khushi Kumari</strong>, an Electronics and Communication Engineering undergraduate at <strong className="text-white font-medium">NIT Patna</strong> with a passion for full-stack development and AI-driven applications. I enjoy building scalable web solutions that solve real-world problems and have hands-on experience with technologies including <strong className="text-white font-medium">Next.js, React, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, Tailwind CSS</strong>, and <strong className="text-white font-medium">Git</strong>. I also actively strengthen my problem-solving skills through Data Structures and Algorithms.
              </p>
              <p>
                Currently, I contribute as a <strong className="text-white font-medium">Full Stack Web Developer</strong> in the <strong className="text-white font-medium">NITP Official Web Team</strong>, where I work on production-grade institutional websites. I've built projects ranging from AI-powered multilingual platforms using RAG and Gemini to secure full-stack recruitment portals with role-based authentication. I enjoy collaborating on impactful projects, participating in hackathons, and continuously learning new technologies to create meaningful software.
              </p>
            </div>

            {/* Actions: Outlined Download CV + Filled Contact Link */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 border border-brand-accent text-white hover:text-stone-950 bg-brand-accent hover:bg-brand-accent-dark transition-all duration-300 font-mono text-xs uppercase tracking-widest rounded-full"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1_DWeHeNHAHAPNGFUsYUjisC7mBpOrPP4/view?usp=sharing"
                className="px-6 py-3 border border-stone-700 hover:border-white text-stone-300 hover:text-white transition-all duration-300 font-mono text-xs uppercase tracking-widest rounded-full flex items-center gap-2"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* 2. EDUCATION SECTION */}
      <section id="education" className="p-8 md:p-24 border-b border-stone-900 bg-stone-950 text-stone-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left side: Education cards stack */}
          <div className="lg:col-span-7">
            <h3 className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-brand-accent mb-12">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 p-6 rounded-2xl bg-[#1E1310] border border-brand-accent/15 hover:border-brand-accent/40 transition-all duration-300"
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,90,50,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Circle icon on the left matching mockup */}
                  <div className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6M6 18.8V19a2 2 0 002 2h8a2 2 0 002-2v-.2" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-brand-accent font-semibold block">{edu.period}</span>
                    <h4 className="font-serif text-lg text-white font-normal mt-1">
                      {edu.title}
                      {edu.score && (
                        <>
                          {" "}&bull; <span className="text-brand-accent font-medium">{edu.score}</span>
                        </>
                      )}
                    </h4>
                    <p className="font-sans text-xs text-stone-400 mt-1">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Study Desk Vector SVG */}
          <div className="lg:col-span-5 flex justify-center">
            <svg className="w-full max-w-sm h-auto" viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Floor line */}
              <line x1="20" y1="220" x2="280" y2="220" stroke="#333" strokeWidth="2" />

              {/* Desk */}
              <rect x="120" y="120" width="130" height="8" rx="2" fill="#C85A32" />
              <line x1="140" y1="128" x2="140" y2="220" stroke="#444" strokeWidth="3" />
              <line x1="230" y1="128" x2="230" y2="220" stroke="#444" strokeWidth="3" />
              <rect x="180" y="128" width="50" height="30" fill="#131316" stroke="#2a2a2a" />
              <circle cx="205" cy="143" r="2.5" fill="#C85A32" />

              {/* Laptop */}
              <line x1="150" y1="120" x2="185" y2="120" stroke="#f4f4f5" strokeWidth="3" />
              <path d="M 152 120 L 160 98 L 188 98 L 182 120 Z" fill="#222" stroke="#f4f4f5" strokeWidth="1" />
              <line x1="162" y1="110" x2="178" y2="110" stroke="#f4f4f5" strokeWidth="1.5" opacity="0.4" />

              {/* Lamp */}
              <path d="M 230 120 L 220 90 L 210 90" stroke="#444" strokeWidth="2.5" fill="none" />
              <path d="M 205 90 L 215 90 L 222 76 L 200 76 Z" fill="#C85A32" />
              <polygon points="200,76 222,76 240,120 180,120" fill="#C85A32" opacity="0.1" />

              {/* Plant */}
              <rect x="238" y="105" width="12" height="15" fill="#5c4033" />
              <path d="M 244 105 Q 235 90, 240 80 Q 248 95, 244 105 Z" fill="#2d5a27" />
              <path d="M 244 105 Q 253 90, 248 85 Q 242 98, 244 105 Z" fill="#2d5a27" />

              {/* Chair */}
              <line x1="60" y1="140" x2="60" y2="220" stroke="#444" strokeWidth="3" />
              <line x1="88" y1="140" x2="88" y2="220" stroke="#444" strokeWidth="3" />
              <rect x="50" y="132" width="48" height="8" rx="2" fill="#C85A32" />
              <path d="M 54 132 L 54 75 L 94 75 L 94 132" stroke="#444" strokeWidth="3" fill="none" />
              <rect x="50" y="70" width="48" height="12" rx="2" fill="#C85A32" />

              {/* Backpack on floor */}
              <rect x="100" y="170" width="30" height="50" rx="10" fill="#131316" stroke="#222" strokeWidth="1.5" />
              <rect x="105" y="185" width="20" height="20" rx="4" fill="#C85A32" />
              <path d="M 110 170 Q 115 158, 120 170" stroke="#444" strokeWidth="2.5" fill="none" />
            </svg>
          </div>

        </div>
      </section>

      {/* 3. PROJECTS SECTION (Infinitely Scrolling) */}
      <section
        id="projects"
        className="py-28 border-b border-brand-border bg-stone-950 text-stone-100 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 mb-16 relative z-10 flex justify-between items-end">
          <div>
            <h3 className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-brand-accent">
              Projects
            </h3>
          </div>
        </div>

        {/* Marquee Outer Container */}
        <div className="w-full relative flex overflow-x-hidden py-4 pointer-events-auto">
          {/* Subtle gradient overlays to fade marquee edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Marquee Wrapper (Slow speed for readability) */}
          <div className="animate-marquee-slow flex gap-8">
            {doubleProjects.map((project, idx) => (
              <div
                key={idx}
                className={`group relative p-[1px] rounded-[24px] bg-stone-900 hover:bg-stone-800 transition-all duration-500 shrink-0 w-[300px] sm:w-[380px] ${project.borderColor}`}
                style={{
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 35px ${project.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Card Interior */}
                <div className="bg-stone-900/95 rounded-[23px] p-6 h-full flex flex-col justify-between relative overflow-hidden">
                  <div
                    className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${project.glowColor.replace('0.3', '0.8')} 0%, transparent 80%)`
                    }}
                  />

                  <div>
                    <div className="mb-6 relative z-10 transition-transform duration-500 group-hover:scale-[1.02] h-44 rounded-xl overflow-hidden border border-stone-800 bg-stone-950">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex justify-between items-start mb-3">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500">
                        {project.date} — {project.role}
                      </span>

                      <div className="flex items-center space-x-3 text-stone-500 group-hover:text-stone-300 transition-colors duration-300">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors duration-200"
                          aria-label={`${project.title} GitHub`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors duration-200"
                          aria-label={`${project.title} Demo`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <h4 className="font-serif text-2xl text-white font-normal mb-3 group-hover:text-brand-accent transition-colors duration-300">
                      {project.title}
                    </h4>

                    <p className="font-sans text-stone-400 text-xs leading-relaxed mb-4 min-h-[70px]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-stone-800/80">
                    <div className="font-sans text-[11px] text-stone-300 mb-4">
                      <span className="text-stone-500 font-semibold block text-[9px] uppercase tracking-widest mb-1">Result</span>
                      {project.metrics}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span key={i} className="font-mono text-[9px] text-stone-400 bg-stone-950 px-2 py-0.5 border border-stone-800 rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 mt-6 text-stone-600 font-mono text-[9px] uppercase tracking-wider text-center md:text-left">
          <span>← Hover to pause &bull; Swipe or scroll horizontally to explore details</span>
        </div>
      </section>

      {/* 4. EXPERIENCE SECTION */}
      <section id="experience" className="p-8 md:p-24 border-b border-stone-900 bg-stone-950 text-stone-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left side: Work Desk & Clock SVG */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <svg className="w-full max-w-sm h-auto" viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Floor line */}
              <line x1="20" y1="220" x2="280" y2="220" stroke="#333" strokeWidth="2" />

              {/* Desk */}
              <rect x="50" y="140" width="160" height="8" rx="2" fill="#C85A32" />
              <line x1="70" y1="148" x2="70" y2="220" stroke="#444" strokeWidth="3" />
              <line x1="190" y1="148" x2="190" y2="220" stroke="#444" strokeWidth="3" />

              {/* Laptop */}
              <line x1="110" y1="140" x2="150" y2="140" stroke="#f4f4f5" strokeWidth="3" />
              <path d="M 112 140 L 122 115 L 158 115 L 148 140 Z" fill="#222" stroke="#f4f4f5" strokeWidth="1" />

              {/* Coffee Mug */}
              <rect x="80" y="125" width="10" height="15" rx="1" fill="#C85A32" />
              <path d="M 90 128 C 93 128, 93 137, 90 137" stroke="#C85A32" strokeWidth="1.5" fill="none" />

              {/* Chinese food box */}
              <path d="M 170 140 L 166 122 L 184 122 L 180 140 Z" fill="#131316" stroke="#222" strokeWidth="1.5" />
              <line x1="165" y1="120" x2="160" y2="108" stroke="#C85A32" strokeWidth="1.5" />
              <line x1="167" y1="120" x2="162" y2="106" stroke="#C85A32" strokeWidth="1.5" />

              {/* Chair */}
              <line x1="230" y1="150" x2="230" y2="220" stroke="#444" strokeWidth="3" />
              <line x1="254" y1="150" x2="254" y2="220" stroke="#444" strokeWidth="3" />
              <rect x="220" y="142" width="44" height="8" rx="2" fill="#C85A32" />
              <path d="M 224 142 L 224 95 L 260 95 L 260 142" stroke="#444" strokeWidth="3" fill="none" />

              {/* Clock on Wall */}
              <circle cx="130" cy="50" r="22" fill="#131316" stroke="#222" strokeWidth="2" />
              <circle cx="130" cy="50" r="18" fill="#f4f4f5" />
              <line x1="130" y1="50" x2="130" y2="38" stroke="#333" strokeWidth="2" strokeLinecap="round" />
              <line x1="130" y1="50" x2="142" y2="50" stroke="#C85A32" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Right side: Experience cards stack */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Right-aligned orange Experience heading matching screenshot */}
            <h3 className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-brand-accent text-left lg:text-right mb-12">
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 p-6 rounded-2xl bg-[#1E1310] border border-brand-accent/15 hover:border-brand-accent/40 transition-all duration-300"
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,90,50,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-brand-accent font-semibold block">{exp.period}</span>
                    <h4 className="font-serif text-lg text-white font-normal mt-1">{exp.title}</h4>
                    <p className="font-sans text-xs text-stone-400 mt-1">{exp.organization} &bull; {exp.location}</p>
                    <ul className="mt-4 space-y-1.5 list-disc list-inside">
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className="font-sans text-xs text-stone-400 leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. SKILLS SECTION (Infinite Marquee style from screenshot) */}
      <section id="skills" className="py-24 border-b border-brand-border bg-stone-950 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          {/* Centered orange Skills heading matching screenshot */}
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-brand-accent">
            Skills
          </h2>
        </div>

        {/* Marquee Outer Container */}
        <div className="w-full relative flex overflow-x-hidden py-4 pointer-events-auto">
          {/* Subtle gradient overlays to fade marquee edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Marquee Wrapper */}
          <div className="animate-marquee flex gap-6">
            {doubleSkills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center justify-center shrink-0 w-36 h-36 rounded-2xl bg-[#131316] border border-stone-800 hover:border-brand-accent/40 transition-all duration-300"
                style={{
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px ${skill.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* SVG Icon centered */}
                <div className="mb-4 text-stone-400 group-hover:text-brand-accent transition-colors duration-300">
                  {skill.icon}
                </div>
                {/* Text at bottom */}
                <span className="font-sans text-xs font-semibold text-stone-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACHIEVEMENTS SECTION */}
      <section id="achievements" className="p-8 md:p-24 border-b border-brand-border bg-stone-950 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-brand-accent mb-12">
            Achievements
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#1E1310] border border-brand-accent/15 hover:border-brand-accent/40 transition-all duration-300 items-start"
                style={{
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,90,50,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Left Column: Gold Trophy SVG Icon */}
                <div className="w-16 h-16 rounded-full bg-brand-accent-light border border-brand-accent/25 flex items-center justify-center shrink-0">
                  <svg className="w-9 h-9 text-brand-accent" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 15 C35 15, 30 25, 30 45 C30 55, 38 65, 50 65 C62 65, 70 55, 70 45 C70 25, 65 15, 50 15 Z" fill="#C85A32" fillOpacity="0.2" stroke="#C85A32" strokeWidth="2.5" />
                    <path d="M30 30 C15 30, 15 45, 30 45" stroke="#C85A32" strokeWidth="2" fill="none" />
                    <path d="M70 30 C85 30, 85 45, 70 45" stroke="#C85A32" strokeWidth="2" fill="none" />
                    <path d="M50 65 L50 80" stroke="#C85A32" strokeWidth="3" />
                    <rect x="35" y="80" width="30" height="8" rx="2" fill="#C85A32" />
                    <path d="M50 30 L53 38 L61 38 L55 43 L57 51 L50 46 L43 51 L45 43 L39 38 L47 38 Z" fill="#EAB308" />
                  </svg>
                </div>

                {/* Right Column: Details */}
                <div className="flex-grow">
                  <span className="font-mono text-[10px] text-brand-accent font-semibold block uppercase tracking-wider">{ach.date} &bull; GDG Hackathon</span>
                  <h4 className="font-serif text-xl text-white font-normal mt-1">
                    {ach.title}
                  </h4>
                  <p className="font-sans text-xs text-stone-400 mt-1">
                    {ach.organization}
                  </p>
                  <p className="font-sans text-sm text-stone-400 mt-4 leading-relaxed max-w-3xl">
                    {ach.detail}
                  </p>

                  {/* Hacking specs */}
                  <div className="flex flex-wrap gap-6 mt-6 pt-4 border-t border-stone-900/60 font-sans text-xs text-stone-300">
                    <div>
                      <span className="text-stone-500 font-semibold block text-[9px] uppercase tracking-wider mb-0.5">Role</span>
                      Full Stack Web & NLP Integration
                    </div>
                    <div>
                      <span className="text-stone-500 font-semibold block text-[9px] uppercase tracking-wider mb-0.5">Project</span>
                      Awaaz (Voice Accessibility Assist)
                    </div>
                    <div>
                      <span className="text-stone-500 font-semibold block text-[9px] uppercase tracking-wider mb-0.5">Scope</span>
                      AI Voice Discovery Interface
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION (Improved Split Layout) */}
      <section
        id="contact"
        className="p-8 md:p-24 border-b border-brand-border bg-stone-950 text-stone-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(200,90,50,0.015)_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column - Contact Context & Meta */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h3 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-white mb-6">
                Let's start a conversation.
              </h3>
              <p className="font-sans text-stone-400 text-sm leading-relaxed mb-12 max-w-md">
                Always interested in engineering roles, open source initiatives, competitive programming discussions, or voice interface technologies. Write me directly or fill the form.
              </p>
            </div>

            {/* Info Items */}
            <div className="space-y-8 font-sans">
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-stone-500 mb-1">Direct Mail</span>
                <a
                  href="mailto:khushikumari062205@gmail.com"
                  className="font-serif text-xl md:text-2xl text-brand-accent hover:text-white transition-colors duration-300 link-underline"
                >
                  khushikumari062205@gmail.com
                </a>
              </div>

              <div>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-stone-500 mb-1">Current Base</span>
                <span className="font-serif text-lg text-white font-normal">
                  Patna, Bihar, India
                </span>
              </div>

              <div>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-stone-500 mb-1">Active Status</span>
                <span className="font-sans text-xs bg-brand-accent-light text-brand-accent px-3 py-1 border border-brand-accent/25 rounded-full inline-block mt-1">
                  Open to Full Stack & Web Eng. Roles
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Sleek Dark Form Card */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-[#131316] border border-stone-800 shadow-2xl relative group w-full">
            {/* Ambient hover gradient highlight */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl bg-gradient-to-r from-brand-accent/10 to-amber-500/10 pointer-events-none -z-10" />
            <ContactForm />
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-8 bg-stone-950 text-center text-stone-600 text-[10px] font-mono border-t border-stone-900">
        <p>&copy; {new Date().getFullYear()} KHUSHI KUMARI. ALL RIGHTS RESERVED.</p>
        <p className="mt-1 text-[8px] text-stone-800">BUILT WITH NEXT.JS, TAILWIND &amp; FAMER MOTION</p>
      </footer>
    </div>
  );
}
