"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  Workflow,
  Globe2,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

/* ----------------------------- Content ----------------------------- */

const HEADLINE = ["Engineering", "partners", "for", "teams", "that", "ship."];
const HIGHLIGHT_FROM = 3; // words from this index are accent-coloured and underlined

const STATS = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 3, suffix: "+", label: "Years of shipping" },
  { value: 3, suffix: "", label: "Regions served" },
  { value: 24, suffix: "/7", label: "Support coverage" },
];

const PRINCIPLES = [
  {
    id: "architecture",
    icon: Layers,
    title: "Architecture that lasts",
    text: "Clean boundaries, modular services and documented decisions, so your product scales without a rewrite.",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Security by default",
    text: "Encryption, least-privilege access and hardened APIs are part of every sprint, never an afterthought.",
  },
  {
    id: "velocity",
    icon: Workflow,
    title: "Transparent velocity",
    text: "CI/CD, regular demos and clear communication. You always see working software and know what's next.",
  },
];

const MARKETS = [
  { city: "United Kingdom", short: "London", tz: "Europe/London" },
  { city: "United States", short: "New York", tz: "America/New_York" },
  { city: "Pakistan", short: "Lahore", tz: "Asia/Karachi" },
];

/* ----------------------------- Helpers ----------------------------- */

const EASE = [0.22, 1, 0.36, 1];

function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function LocalTime({ tz }) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  if (!now) return <span className="opacity-0">00:00</span>; // avoids hydration mismatch

  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: tz,
  }).format(now);

  const hour = parseInt(time.slice(0, 2), 10);
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: tz }).format(now);
  const open = hour >= 9 && hour < 18 && weekday !== "Sat" && weekday !== "Sun";

  return (
    <span className="inline-flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        {open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        )}
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ backgroundColor: open ? "#10b981" : "var(--text-muted)" }}
        />
      </span>
      <span className="font-mono tabular-nums">{time}</span>
    </span>
  );
}

/* Card shell: same glow-border pattern as the "Why Choose Us" grid */
function BentoCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`relative h-full rounded-3xl border p-1.5 ${className}`}
      style={{ borderColor: "var(--card-border)" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 24 } }}
    >
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
      <div
        className="relative h-full overflow-hidden rounded-[1.25rem] p-6 sm:p-8"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ----------------------------- Sections ---------------------------- */

function Principles() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % PRINCIPLES.length), 5500);
    return () => clearInterval(id);
  }, [paused, reduce]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        How we work
      </p>
      <div className="space-y-2">
        {PRINCIPLES.map((p, i) => {
          const Icon = p.icon;
          const isActive = i === active;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={isActive}
              className="relative w-full overflow-hidden rounded-2xl border px-4 py-4 text-left transition-colors duration-300 sm:px-5"
              style={{
                borderColor: isActive ? "color-mix(in srgb, var(--accent) 45%, transparent)" : "transparent",
                backgroundColor: isActive ? "var(--background)" : "transparent",
              }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300"
                  style={{
                    backgroundColor: isActive ? "var(--accent)" : "color-mix(in srgb, var(--accent) 10%, transparent)",
                    color: isActive ? "#fff" : "var(--accent)",
                  }}
                >
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span
                  className="text-base font-semibold sm:text-lg"
                  style={{ color: isActive ? "var(--foreground)" : "var(--text-muted)" }}
                >
                  {p.title}
                </span>
                <span className="ml-auto font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                  0{i + 1}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="pb-1 pl-14 pt-3 text-sm leading-relaxed sm:pl-14" style={{ color: "var(--text-muted)" }}>
                      {p.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* progress line */}
              {isActive && !paused && !reduce && (
                <motion.span
                  key={`bar-${active}`}
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{ backgroundColor: "var(--accent)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5.5, ease: "linear" }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------ Main ------------------------------- */

export default function AboutSection() {
  const wordVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, delay: 0.1 + i * 0.08, ease: EASE },
    }),
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      {/* soft drifting accent auras, same family as the hero & services */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-40 h-[420px] w-[420px] rounded-full blur-[140px]"
        style={{ backgroundColor: "var(--accent)", opacity: 0.12 }}
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-[380px] w-[380px] rounded-full blur-[140px]"
        style={{ backgroundColor: "#3b82f6", opacity: 0.1 }}
        animate={{ x: [0, -50, 20, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Header ---------- */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            About us
          </motion.p>
          <h2
            id="about-heading"
            className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: "var(--foreground)" }}
          >
            {HEADLINE.slice(0, HIGHLIGHT_FROM).map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
            <span className="relative inline-block whitespace-nowrap">
              {HEADLINE.slice(HIGHLIGHT_FROM).map((word, j) => (
                <motion.span
                  key={word}
                  custom={HIGHLIGHT_FROM + j}
                  variants={wordVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="mr-[0.25em] inline-block last:mr-0"
                  style={{ color: "var(--accent)" }}
                >
                  {word}
                </motion.span>
              ))}
              {/* hand-drawn underline */}
              <svg
                aria-hidden="true"
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3 sm:h-4"
                fill="none"
              >
                <motion.path
                  d="M3 10 C 35 4, 70 13, 110 8 S 180 3, 215 9 S 275 12, 297 5"
                  stroke="var(--accent)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    pathLength: { duration: 0.9, delay: 0.9, ease: [0.65, 0, 0.35, 1] },
                    opacity: { duration: 0.01, delay: 0.9 },
                  }}
                />
              </svg>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            We&apos;re a software house working with startups and established businesses across the UK, US and Pakistan.
            Small senior-led teams, clean architecture and honest communication from first call to launch and beyond.
          </motion.p>
        </div>

        {/* ---------- Bento grid ---------- */}
        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
          {/* Story */}
          <div className="lg:col-span-7">
            <BentoCard delay={0}>
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl"
                style={{ backgroundColor: "var(--accent)", opacity: 0.12 }}
              />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div>
                  <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                    Our mission
                  </p>
                  <p
                    className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl"
                    style={{ color: "var(--foreground)" }}
                  >
                    Treat every client&apos;s product like our own: no shortcuts, no throwaway code, no surprises.
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed sm:text-base" style={{ color: "var(--text-muted)" }}>
                    From web platforms and mobile apps to cloud infrastructure and AI automation, we design,
                    build and evolve software that holds up in production and keeps getting better after launch.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="group inline-flex w-fit items-center gap-2 text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  <span>Read our full story</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </BentoCard>
          </div>

          {/* Stats */}
          <div className="lg:col-span-5">
            <BentoCard delay={0.1}>
              <div className="grid h-full grid-cols-2 gap-x-6 gap-y-8">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-4xl font-extrabold tracking-tight sm:text-5xl"
                      style={{ color: "var(--foreground)" }}
                    >
                      <CountUp to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-2 h-px w-8" style={{ backgroundColor: "var(--accent)" }} />
                    <div className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>

          {/* Principles */}
          <div className="lg:col-span-7">
            <BentoCard delay={0.05}>
              <Principles />
            </BentoCard>
          </div>

          {/* Global presence */}
          <div className="lg:col-span-5">
            <BentoCard delay={0.15}>
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                  Global delivery
                </p>
                <Globe2 size={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
              </div>

              <p className="mt-4 text-xl font-bold leading-snug sm:text-2xl" style={{ color: "var(--foreground)" }}>
                Overlapping hours with the UK and US.
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Our team works across time zones, so you get real-time collaboration, not next-day replies.
              </p>

              <ul className="mt-6 space-y-2.5">
                {MARKETS.map((m, i) => (
                  <motion.li
                    key={m.tz}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: EASE }}
                    className="flex items-center justify-between rounded-xl border px-4 py-3"
                    style={{ backgroundColor: "var(--background)", borderColor: "var(--card-border)" }}
                  >
                    <div>
                      <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                        {m.city}
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {m.short} time
                      </div>
                    </div>
                    <div className="text-sm" style={{ color: "var(--foreground)" }}>
                      <LocalTime tz={m.tz} />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
