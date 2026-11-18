"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { EASE, Aura } from "./shared";

/* Editable copy */
const STORY = [
  "Technoad started with a simple frustration: too many good ideas stall somewhere between a pitch deck and a dependable product. Deadlines slip, communication goes quiet and the code can't keep up with the business.",
  "We set out to build the kind of engineering partner we would want to hire ourselves: senior, transparent and genuinely invested in the outcome. Today we work with founders and growing companies to design, build and scale software that holds up in the real world.",
];

const PILLARS = [
  {
    icon: Target,
    label: "Our mission",
    text: "To empower businesses with digital solutions that drive growth, efficiency and innovation, built with care and tied to real outcomes.",
  },
  {
    icon: Eye,
    label: "Our vision",
    text: "To be the engineering partner businesses trust to build, launch and scale their most important products.",
  },
];

export default function AboutStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <Aura side="left" top="top-24" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Story */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Our story
            </motion.p>
            <motion.h2
              id="story-heading"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl"
              style={{ color: "var(--foreground)" }}
            >
              We believe software should <span style={{ color: "var(--accent)" }}>just work.</span>
            </motion.h2>

            <div className="mt-8 space-y-5">
              {STORY.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: EASE }}
                  className="text-base leading-relaxed sm:text-lg"
                  style={{ color: "var(--text-muted)" }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Mission & vision */}
          <div className="space-y-5 lg:col-span-5">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-3xl border p-7 sm:p-8"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl"
                    style={{ backgroundColor: "var(--accent)", opacity: 0.12 }}
                  />
                  <div className="relative">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
                      {p.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed sm:text-base" style={{ color: "var(--text-muted)" }}>
                      {p.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
