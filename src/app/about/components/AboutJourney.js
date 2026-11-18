"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE, SectionHeader, Aura } from "./shared";

/* Editable milestones (carried over from the previous About page). */
const MILESTONES = [
  {
    year: "2021",
    title: "The beginning",
    text: "Technoad is founded by a small team with a passion for building exceptional digital products.",
  },
  {
    year: "2022",
    title: "Rapid growth",
    text: "We expand our services and team, deliver our first major projects and form key partnerships.",
  },
  {
    year: "2023",
    title: "Innovation focus",
    text: "We introduce AI and automation services and adopt modern frameworks such as Next.js early.",
  },
  {
    year: "2024",
    title: "Global reach",
    text: "We serve clients worldwide, with a focus on performance, scalability and user experience.",
  },
];

function Milestone({ m, index, last }) {
  const ref = useRef(null);
  const reached = useInView(ref, { once: true, margin: "0px 0px -40% 0px" });

  return (
    <li
      ref={ref}
      className="grid grid-cols-1 gap-2 md:grid-cols-12 md:gap-10"
    >
      {/* big outlined year */}
      <div className="md:col-span-5 md:text-right">
        <span
          aria-hidden="true"
          className="block select-none text-6xl font-extrabold leading-none tracking-tighter transition-all duration-1000 sm:text-7xl md:text-8xl lg:text-9xl"
          style={{
            color: reached ? "var(--accent)" : "transparent",
            WebkitTextStroke: reached ? "1.5px var(--accent)" : "1.5px var(--card-border)",
            opacity: reached ? 1 : 0.9,
          }}
        >
          {m.year}
        </span>
      </div>

      {/* content with its own progress line */}
      <div className="relative md:col-span-7">
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 top-3 w-px"
          style={{ backgroundColor: "var(--card-border)", display: last ? "none" : "block" }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute bottom-0 left-[-0.5px] top-3 w-[2px] origin-top"
          style={{
            background: "linear-gradient(to bottom, var(--accent), #3b82f6)",
            boxShadow: "0 0 10px color-mix(in srgb, var(--accent) 50%, transparent)",
            display: last ? "none" : "block",
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "0px 0px -40% 0px" }}
          transition={{ duration: 1.4, ease: EASE }}
        />
        {/* node */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-3 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 transition-all duration-700"
          style={{
            backgroundColor: reached ? "var(--accent)" : "var(--background)",
            borderColor: reached ? "var(--accent)" : "var(--card-border)",
            boxShadow: reached ? "0 0 0 5px color-mix(in srgb, var(--accent) 20%, transparent)" : "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className={`pl-8 md:pl-12 ${last ? "" : "pb-14 md:pb-20"}`}
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            Chapter 0{index + 1}
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: "var(--foreground)" }}>
            {m.title}
          </h3>
          <p className="mt-3 max-w-lg text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {m.text}
          </p>
        </motion.div>
      </div>
    </li>
  );
}

export default function AboutJourney() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <Aura side="left" top="top-32" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader id="journey-heading" eyebrow="Our journey" title="How we got" highlight="here.">
          A few milestones from the early days to today.
        </SectionHeader>

        <ol className="mt-16 space-y-2 md:mt-24 md:space-y-0">
          {MILESTONES.map((m, i) => (
            <Milestone key={m.year} m={m} index={i} last={i === MILESTONES.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
