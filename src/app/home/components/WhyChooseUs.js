"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Handshake, TrendingUp, Check } from "lucide-react";

/* ----------------------------- Content ----------------------------- */

const REASONS = [
  {
    icon: Building2,
    title: "Industry Expertise",
    text: "We learn your domain before we write a line of code. From healthcare and e-commerce to SaaS and finance, our teams bring practical, industry-specific experience so the solution fits how your sector really works.",
    points: ["Domain-first discovery", "Industry-aware solutions", "Compliance-minded delivery"],
  },
  {
    icon: Handshake,
    title: "Client-Centric Approach",
    text: "We look at what your business needs before suggesting a solution. Your project gets focused attention throughout the entire lifecycle, with transparent, prompt communication at every step.",
    points: ["Single point of contact", "Regular demos & updates", "Your goals before our tech"],
  },
  {
    icon: TrendingUp,
    title: "Results-Driven Delivery",
    text: "Our solutions are tied to business outcomes: faster operations, easier scaling, better conversions and improved customer experiences. We define success up front and build towards it.",
    points: ["Clear success metrics", "Built to scale", "Continuous improvement"],
  },
];

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------ Panel ------------------------------ */

function Panel({ reason, index, active, onActivate }) {
  const Icon = reason.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: EASE }}
      role="button"
      tabIndex={0}
      aria-expanded={active}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      className="relative cursor-pointer overflow-hidden rounded-3xl border transition-[flex-grow,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:h-[420px] lg:basis-0"
      style={{
        borderColor: active ? "var(--accent)" : "var(--card-border)",
        backgroundColor: "var(--card-bg)",
        flexGrow: active ? 2.6 : 1,
        boxShadow: active ? "0 25px 60px -20px color-mix(in srgb, var(--accent) 55%, transparent)" : "none",
      }}
    >
      {/* accent fill fades in when expanded */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: active ? 1 : 0,
          background: "linear-gradient(155deg, var(--accent) 0%, #3b1bd6 55%, #1e1b6b 100%)",
        }}
      />
      {/* soft light + grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: active ? 0.35 : 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(135deg, #000 0%, transparent 65%)",
          WebkitMaskImage: "linear-gradient(135deg, #000 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl transition-opacity duration-700"
        style={{ backgroundColor: "#ffffff", opacity: active ? 0.18 : 0 }}
      />

      <div className="relative flex h-full flex-col justify-between gap-6 p-7 sm:p-8">
        {/* top: icon + number */}
        <div className="flex items-start justify-between">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-500"
            style={{
              backgroundColor: active ? "rgba(255,255,255,0.16)" : "color-mix(in srgb, var(--accent) 12%, transparent)",
              color: active ? "#ffffff" : "var(--accent)",
              backdropFilter: active ? "blur(6px)" : "none",
            }}
          >
            <Icon size={26} aria-hidden="true" />
          </span>
          <span
            className="font-mono text-sm font-semibold transition-colors duration-500"
            style={{ color: active ? "rgba(255,255,255,0.7)" : "var(--text-muted)" }}
          >
            0{index + 1}
          </span>
        </div>

        {/* bottom: copy */}
        <div>
          <h3
            className="text-2xl font-bold leading-tight tracking-tight transition-colors duration-500 sm:text-3xl"
            style={{ color: active ? "#ffffff" : "var(--foreground)" }}
          >
            {reason.title}
          </h3>

          <div
            className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              active ? "lg:max-h-[240px] lg:opacity-100" : "lg:max-h-0 lg:opacity-0"
            }`}
          >
            <div className="lg:w-[min(420px,100%)]">
              <p
                className="mt-4 text-sm leading-relaxed transition-colors duration-500 sm:text-base"
                style={{ color: active ? "rgba(255,255,255,0.85)" : "var(--text-muted)" }}
              >
                {reason.text}
              </p>
              <ul className="mt-5 space-y-2">
                {reason.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 text-sm font-medium transition-colors duration-500"
                    style={{ color: active ? "#ffffff" : "var(--foreground)" }}
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: active ? "rgba(255,255,255,0.2)" : "color-mix(in srgb, var(--accent) 12%, transparent)",
                        color: active ? "#ffffff" : "var(--accent)",
                      }}
                    >
                      <Check size={12} aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* hint on collapsed panels (desktop) */}
          <p
            className={`hidden font-mono text-xs uppercase tracking-widest transition-opacity duration-500 lg:block ${
              active ? "h-0 opacity-0" : "mt-3 opacity-100"
            }`}
            style={{ color: "var(--text-muted)" }}
          >
            Hover to explore
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------ Main ------------------------------- */

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full blur-[150px]"
        style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        animate={{ x: [0, 50, -20, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Why work with us
          </motion.p>
          <motion.h2
            id="why-heading"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: "var(--foreground)" }}
          >
            A partner you can <span style={{ color: "var(--accent)" }}>rely on.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Plenty of teams can write code. We focus on what makes a project actually succeed.
          </motion.p>
        </div>

        {/* Expanding panels */}
        <div className="mt-14 flex flex-col gap-4 lg:flex-row lg:gap-5">
          {REASONS.map((r, i) => (
            <Panel key={r.title} reason={r} index={i} active={active === i} onActivate={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
