"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, ShieldCheck, Workflow } from "lucide-react";
import { CountUp } from "../../about/components/shared";

/* ----------------------------- Content ----------------------------- */

const HEADLINE = ["Engineering", "partners", "for", "teams", "that", "ship."];
const HIGHLIGHT_FROM = 3; // words from this index are accent-coloured and underlined

// Editable: replace with your real numbers.
const STATS = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 24, suffix: "/7", label: "Support available" },
];

const PRINCIPLES = [
  {
    icon: Layers,
    title: "Architecture that lasts",
    text: "Clean boundaries and modular services, so your product scales without a rewrite.",
  },
  {
    icon: ShieldCheck,
    title: "Security by default",
    text: "Encryption, least-privilege access and hardened APIs in every sprint, never an afterthought.",
  },
  {
    icon: Workflow,
    title: "Transparent delivery",
    text: "CI/CD, regular demos and clear communication, so you always see working software.",
  },
];

const EASE = [0.22, 1, 0.36, 1];

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: 0.1 + i * 0.08, ease: EASE },
  }),
};

/* ------------------------------ Main ------------------------------- */

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-40 h-[420px] w-[420px] rounded-full blur-[140px]"
        style={{ backgroundColor: "var(--accent)", opacity: 0.12 }}
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ---------- Left: story ---------- */}
          <div className="lg:col-span-6">
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
              className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl"
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
                  className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full sm:h-4"
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
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              Technoad is a software house that helps startups and growing businesses around the world turn ideas
              into reliable digital products. Small, senior-led teams, clean architecture and honest communication,
              from the first call to launch and beyond.
            </motion.p>

            {/* stats */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t pt-8"
              style={{ borderColor: "var(--card-border)" }}
            >
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dd
                    className="order-1 text-3xl font-extrabold tracking-tight sm:text-4xl"
                    style={{ color: "var(--foreground)" }}
                  >
                    <CountUp to={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="order-2 mt-1 text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
                    {s.label}
                  </dt>
                </div>
              ))}
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <span>More about us</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>

          {/* ---------- Right: principles ---------- */}
          <div className="lg:col-span-6">
            <ul className="space-y-4">
              {PRINCIPLES.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.li
                    key={p.title}
                    className="list-none"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: EASE }}
                  >
                    <div
                      className="group flex gap-5 rounded-3xl border p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl sm:p-7"
                      style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
                    >
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-[var(--accent)] group-hover:text-white"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
                          color: "var(--accent)",
                        }}
                      >
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
                          {p.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                          {p.text}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
