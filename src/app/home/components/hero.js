"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Layers, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

const ROTATING_LINES = [
  { text: "Mission-Critical Web Platforms", tag: "Full-Stack Web" },
  { text: "Scalable Cloud Architecture", tag: "Cloud Native" },
  { text: "High-Performance Mobile Apps", tag: "iOS & Android" },
  { text: "Enterprise Digital Systems", tag: "Custom Software" },
  { text: "Intelligent AI & Automation", tag: "Machine Learning" }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_LINES.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const currentItem = ROTATING_LINES[currentIndex];

  const highlights = [
    { title: "Clean Architecture", desc: "Maintainable, scalable codebases designed for long-term evolution", icon: Layers },
    { title: "Enterprise Security", desc: "Rigorous standards, OWASP compliance, and secure cloud setups", icon: ShieldCheck },
    { title: "High-Velocity Delivery", desc: "Agile sprints with transparent milestones and continuous deployment", icon: Zap },
  ];

  return (
    <section 
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-16 pb-20 md:pt-28 md:pb-32"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Subtle tech dot-grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(var(--card-border) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Subtle ambient gradient aura in accent color */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] rounded-full blur-[130px] pointer-events-none opacity-20"
        style={{ backgroundColor: 'var(--accent)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            id="hero-heading"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15]"
            style={{ color: 'var(--foreground)' }}
          >
            We Engineer <br className="hidden sm:inline" />
            <span className="inline-block relative min-h-[1.25em] align-top">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentItem.text}
                  initial={{ y: 25, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -25, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="inline-block bg-gradient-to-r from-[var(--accent)] via-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent"
                >
                  {currentItem.text}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p 
            className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            Devshift is an agile software development house. We build robust, scalable web platforms, custom cloud applications, and intelligent digital products with clean architecture and modern engineering standards.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-3"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border transition-all duration-200 hover:bg-[var(--card-bg)] focus-visible:outline-3"
              style={{ 
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                color: 'var(--foreground)'
              }}
            >
              <Code2 className="h-4 w-4" style={{ color: 'var(--accent)' }} aria-hidden="true" />
              <span>Explore Capabilities</span>
            </Link>
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div 
                key={i} 
                className="p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--card-border)'
                }}
              >
                <div 
                  className="flex h-11 w-11 items-center justify-center rounded-xl mb-4"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 12%, transparent)' }}
                >
                  <Icon className="h-5 w-5" style={{ color: 'var(--accent)' }} aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {h.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
