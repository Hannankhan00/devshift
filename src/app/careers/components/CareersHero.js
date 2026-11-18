"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EASE } from "../../about/components/shared";

const WORDS = ["Build", "great", "software", "with", "great", "people."];
const HIGHLIGHT_FROM = 3;
const AREAS = ["Engineering", "Design", "Product & Delivery", "Quality & DevOps"];

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: 0.15 + i * 0.08, ease: EASE },
  }),
};

export default function CareersHero() {
  return (
    <section
      aria-labelledby="careers-hero-heading"
      className="relative overflow-x-clip pb-16 pt-20 md:pb-24 md:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: "radial-gradient(var(--card-border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to bottom, #000 45%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 45%, transparent 100%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{ backgroundColor: "var(--accent)", opacity: 0.2 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Careers at Technoad
          </motion.p>

          <h1
            id="careers-hero-heading"
            className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl md:text-7xl"
            style={{ color: "var(--foreground)" }}
          >
            {WORDS.map((w, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="mr-[0.25em] inline-block last:mr-0"
                style={i >= HIGHLIGHT_FROM ? { color: "var(--accent)" } : undefined}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl"
            style={{ color: "var(--text-muted)" }}
          >
            We&apos;re a team of engineers, designers and problem-solvers who care about craft and about the people we
            build for. If that sounds like you, we&apos;d love to meet you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#open-roles"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <span>View open roles</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <Link
              href="/about"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border px-8 py-4 text-base font-semibold transition-colors duration-200 hover:bg-[var(--card-bg)] sm:w-auto"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)", color: "var(--foreground)" }}
            >
              <span>About Technoad</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            {AREAS.map((a) => (
              <li
                key={a}
                className="rounded-full border px-4 py-1.5 font-mono text-xs"
                style={{ borderColor: "var(--card-border)", backgroundColor: "var(--card-bg)", color: "var(--text-muted)" }}
              >
                {a}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
