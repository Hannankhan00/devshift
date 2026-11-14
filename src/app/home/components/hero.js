"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Lock, 
  CheckCircle2, 
  Building2, 
  Server,
  Layers
} from "lucide-react";

export default function Hero() {
  const complianceBadges = [
    { label: "Crown Commercial Service", sub: "Framework Supplier Ready", icon: Building2 },
    { label: "Cyber Essentials Plus", sub: "NCSC Technical Standard", icon: Lock },
    { label: "WCAG 2.2 AA & PSBAR", sub: "Accessibility Standard", icon: CheckCircle2 },
    { label: "ISO 27001 & ISO 9001", sub: "Security & Quality Aligned", icon: ShieldCheck },
  ];

  const deliveryMetrics = [
    { value: "GDS Standard", label: "Discovery, Alpha, Beta & Live" },
    { value: "BPSS & SC", label: "Security-Cleared Engineers" },
    { value: "100% UK", label: "Data Sovereignty (London)" },
    { value: "WCAG 2.2 AA", label: "Accessibility Guarantee" },
  ];

  return (
    <section 
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Subtle accessible geometric grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(var(--card-border) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Public Sector Tag */}
        <div className="flex justify-center">
          <div 
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold border shadow-xs"
            style={{ 
              backgroundColor: 'var(--card-bg)', 
              borderColor: 'var(--card-border)',
              color: 'var(--foreground)'
            }}
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
            <span>UK Public Sector & Central Government Digital Engineering</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 
            id="hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            style={{ color: 'var(--foreground)' }}
          >
            Digital Public Services & Software Engineering Built for <span style={{ color: 'var(--accent)' }}>UK Government</span>
          </h1>

          <p 
            className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            Devshift partners with central government departments, local authorities, and the NHS to deliver secure, accessible, cloud-native services aligned with the <strong>GDS Service Standard</strong> from Discovery through to Live.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-lg shadow-sm transition-all duration-150 hover:opacity-95 focus-visible:outline-3"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <span>Procure via Frameworks</span>
              <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium rounded-lg border transition-all duration-150 focus-visible:outline-3"
              style={{ 
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                color: 'var(--foreground)'
              }}
            >
              <Layers className="h-5 w-5" style={{ color: 'var(--accent)' }} aria-hidden="true" />
              <span>Explore GDS Capabilities</span>
            </Link>
          </div>

          {/* Secondary Sub-note */}
          <p className="mt-3 text-xs" style={{ color: 'var(--text-muted)' }}>
            Available via Direct Award and Further Competition on Crown Commercial Service Frameworks & Contracts Finder.
          </p>
        </div>

        {/* Accreditations & Standards Strip */}
        <div className="mt-16 pt-10 border-t" style={{ borderColor: 'var(--card-border)' }}>
          <p className="text-center text-xs font-semibold uppercase tracking-wider mb-6" style={{ color: 'var(--text-muted)' }}>
            Compliance & Technical Assurance Standards
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {complianceBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl border transition-colors"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--card-border)',
                  }}
                >
                  <div 
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 15%, transparent)' }}
                  >
                    <Icon className="h-5 w-5" style={{ color: 'var(--accent)' }} aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm font-bold leading-tight" style={{ color: 'var(--foreground)' }}>
                      {badge.label}
                    </p>
                    <p className="text-[11px] leading-tight mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {badge.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Public Sector Delivery Metrics */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {deliveryMetrics.map((metric, i) => (
            <div 
              key={i} 
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className="text-xl sm:text-2xl font-extrabold" style={{ color: 'var(--accent)' }}>
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-medium mt-1" style={{ color: 'var(--text-muted)' }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
