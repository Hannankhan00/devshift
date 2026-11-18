"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Gem, Handshake, Rocket } from "lucide-react";
import { EASE, SectionHeader, Aura, spotlight, SPOTLIGHT_BG } from "./shared";

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation first",
    text: "We keep exploring new tools and better ways of working, so you get modern solutions, not yesterday's playbook.",
  },
  {
    icon: Gem,
    title: "Quality obsessed",
    text: "Every line of code and every pixel is reviewed, tested and refined with meticulous attention to detail.",
  },
  {
    icon: Handshake,
    title: "Client-centric",
    text: "Your success is ours. We build long-term partnerships on trust, transparency and honest communication.",
  },
  {
    icon: Rocket,
    title: "Future-ready",
    text: "We architect for what comes next, so your product can scale and evolve with your business.",
  },
];

export default function AboutValues() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <Aura side="right" top="top-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="values-heading"
          eyebrow="What we stand for"
          title="Principles that guide"
          highlight="every project."
        >
          The values behind how we work, how we communicate and what we ship.
        </SectionHeader>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.li
                key={v.title}
                className="list-none"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              >
                <div
                  onMouseMove={spotlight}
                  className="group relative h-full overflow-hidden rounded-3xl border p-7 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: SPOTLIGHT_BG }}
                  />
                  <div className="relative">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-[var(--accent)] group-hover:text-white"
                      style={{ backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" }}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <p className="mt-6 font-mono text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                      0{i + 1}
                    </p>
                    <h3 className="mt-1 text-xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {v.text}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
