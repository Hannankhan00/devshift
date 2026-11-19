"use client";

import Link from "next/link";
import Logo from "./logo";
import { Github, Linkedin, ArrowUp, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, COMPANY_ADDRESS_ONE_LINE } from "@/lib/company";

const SOCIALS = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", label: "Technoad on LinkedIn" },
  { name: "GitHub", icon: Github, href: "https://github.com/technoad", label: "Technoad on GitHub" },
];

const COLUMNS = [
  {
    title: "Services",
    links: [
      { name: "AI-Driven Solutions", href: "/services/automation" },
      { name: "Mobile App Development", href: "/services/app" },
      { name: "Software Development", href: "/services" },
      { name: "Medical Billing", href: "/services" },
      { name: "UI/UX Design", href: "/services/design" },
      { name: "Cloud & DevOps", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Our process", href: "/home#process" },
      { name: "Meet the team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "FAQ", href: "/home#faq" },
    ],
  },
  {
    title: "Get started",
    links: [
      { name: "Contact us", href: "/contact" },
      { name: "Request a quote", href: "/quote" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{ backgroundColor: "var(--background)", borderColor: "var(--card-border)" }}
      role="contentinfo"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" aria-label="Technoad home" className="inline-block">
              <Logo iconClassName="h-10" textClassName="text-2xl" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              We design and build web platforms, mobile apps and AI-driven software for ambitious businesses.
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--accent)" }}
            >
              <span>Start a conversation</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <address className="mt-6 space-y-3 text-sm not-italic" style={{ color: "var(--text-muted)" }}>
              <a href={COMPANY.phoneHref} className="flex items-center gap-3 transition-colors hover:text-[var(--accent)]">
                <Phone size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
                {COMPANY.phone}
              </a>
              <a href={COMPANY.emailHref} className="flex items-center gap-3 transition-colors hover:text-[var(--accent)]">
                <Mail size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-[var(--accent)]"
              >
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span>{COMPANY_ADDRESS_ONE_LINE}</span>
              </a>
            </address>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <Icon size={17} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--foreground)" }}>
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.name}>
                      <Link
                        href={l.href}
                        className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: "var(--card-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {year} Technoad. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 text-xs font-semibold transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-muted)" }}
          >
            Back to top
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[var(--accent)]"
              style={{ borderColor: "var(--card-border)", backgroundColor: "var(--card-bg)" }}
            >
              <ArrowUp size={14} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>

      {/* oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden text-center font-extrabold leading-none tracking-tighter"
        style={{
          fontSize: "clamp(4rem, 19vw, 17rem)",
          marginBottom: "-0.18em",
          color: "transparent",
          backgroundImage: "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 35%, transparent), transparent 80%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        TECHNOAD
      </div>
    </footer>
  );
}
