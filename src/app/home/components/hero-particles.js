"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroParticles({
  className = "",
  title = "Public Sector Digital Capabilities",
  description = "User-centred, secure, and compliant digital software engineering aligned with the GDS Service Standard and Technology Code of Practice.",
  ctaText = "Procure via Frameworks",
  onCtaClick,
  ...props
}) {
  return (
    <section
      className={cn("relative flex min-h-[50vh] items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden w-full", className)}
      style={{ backgroundColor: 'var(--background)' }}
      {...props}
    >
      {/* Subtle accessible geometric grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-15"
        style={{
          backgroundImage: `radial-gradient(var(--card-border) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold border mb-6"
          style={{ 
            backgroundColor: 'var(--card-bg)', 
            borderColor: 'var(--card-border)',
            color: 'var(--foreground)'
          }}
        >
          <ShieldCheck className="h-4 w-4" style={{ color: 'var(--accent)' }} aria-hidden="true" />
          <span>Crown Commercial Service & GDS Service Standard Aligned</span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
          style={{ color: 'var(--foreground)' }}
        >
          {title}
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {description}
        </p>

        {onCtaClick ? (
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg text-white transition-opacity hover:opacity-90 focus-visible:outline-3"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            <span>{ctaText}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : (
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg text-white transition-opacity hover:opacity-90 focus-visible:outline-3"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            <span>{ctaText}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}
