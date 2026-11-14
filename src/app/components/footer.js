"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", label: "Devshift LinkedIn" },
    { name: "GitHub", icon: Github, href: "https://github.com/devshiftofficials", label: "Devshift GitHub" },
  ];

  const footerLinks = [
    {
      title: "Capabilities",
      links: [
        { name: "GDS Phase Delivery", href: "/services" },
        { name: "Cloud & Web Engineering", href: "/services/web" },
        { name: "Citizen Portals & Apps", href: "/services/app" },
        { name: "User Research & Design", href: "/services/design" },
        { name: "Data & Ethical AI", href: "/services/automation" },
      ],
    },
    {
      title: "Procurement & Compliance",
      links: [
        { name: "Frameworks & How to Buy", href: "/contact" },
        { name: "Accessibility Statement", href: "/contact" },
        { name: "Social Value (PPN 06/20)", href: "/contact" },
        { name: "Carbon Reduction Plan", href: "/contact" },
        { name: "Modern Slavery Statement", href: "/contact" },
      ],
    },
    {
      title: "Organisation",
      links: [
        { name: "About Devshift", href: "/about" },
        { name: "Public Sector Case Studies", href: "/portfolio" },
        { name: "Security & Cyber Essentials", href: "/contact" },
        { name: "Commercial Desk Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{ 
        backgroundColor: "var(--background)",
        borderColor: "var(--card-border)" 
      }}
      role="contentinfo"
    >
      <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-12">
          {/* Left Column - Brand & Public Sector Desk */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <Link href="/" aria-label="Devshift Home">
                <Image
                  src="/assets/logo.png"
                  alt="Devshift Logo"
                  width={150}
                  height={44}
                  className="h-10 w-auto"
                />
              </Link>
              <p
                className="mt-4 text-sm leading-relaxed max-w-md"
                style={{ color: "var(--text-muted)" }}
              >
                Specialist digital public services and software engineering for UK central government, local authorities, and NHS trusts. Aligned with the GDS Service Standard and Technology Code of Practice.
              </p>
            </div>

            {/* Public Sector Commercial Contact Info */}
            <div className="space-y-3 pt-2">
              <h3
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--foreground)" }}
              >
                Public Sector Commercial Desk
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <Mail size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <span style={{ color: "var(--text-muted)" }}>publicsector@devshift.co.uk</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <span style={{ color: "var(--text-muted)" }}>+44 (0) 20 7946 0192 (UK Commercial Desk)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <span style={{ color: "var(--text-muted)" }}>London, United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Quick trust pill */}
            <div 
              className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs border"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                color: "var(--foreground)"
              }}
            >
              <ShieldCheck size={14} style={{ color: "var(--accent)" }} aria-hidden="true" />
              <span>Cyber Essentials Plus &middot; Crown Commercial Service Aligned</span>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((section, sectionIndex) => (
              <div key={section.title} className="space-y-3">
                <h3
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--foreground)" }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-xs sm:text-sm transition-colors duration-150"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={() => setHoveredLink(`${sectionIndex}-${linkIndex}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span
                          style={{
                            color: hoveredLink === `${sectionIndex}-${linkIndex}` ? "var(--accent)" : "inherit",
                          }}
                        >
                          {link.name}
                        </span>
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: "var(--accent)" }}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social / Developer Links */}
        <div className="flex items-center justify-between border-t pt-6 pb-4" style={{ borderColor: "var(--card-border)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Connect with our engineering team
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg border flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                    color: "var(--text-muted)",
                  }}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar - Statutory Corporate & Procurement Details */}
        <div className="border-t pt-6" style={{ borderColor: "var(--card-border)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
            <div className="text-center md:text-left">
              <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                &copy; {new Date().getFullYear()} Devshift Digital Ltd. All rights reserved.
              </p>
              <p className="mt-1 text-[11px] leading-relaxed">
                Registered in England &amp; Wales &middot; Crown Commercial Service Framework Ready &middot; Cyber Essentials Plus Certified &middot; WCAG 2.2 AA Conformance
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <Link href="/contact" className="hover:underline transition-colors">
                Accessibility Statement
              </Link>
              <Link href="/contact" className="hover:underline transition-colors">
                Social Value (PPN 06/20)
              </Link>
              <Link href="/contact" className="hover:underline transition-colors">
                Carbon Reduction (PPN 06/21)
              </Link>
              <Link href="/contact" className="hover:underline transition-colors">
                Privacy &amp; UK GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
