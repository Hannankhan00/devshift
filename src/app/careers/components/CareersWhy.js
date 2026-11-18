"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, GraduationCap, Wrench, MessagesSquare, Heart, Target } from "lucide-react";
import { EASE, SectionHeader, Aura, spotlight, SPOTLIGHT_BG } from "../../about/components/shared";

/* Editable: describe the culture as it really is. */
const REASONS = [
  {
    icon: Target,
    title: "Work that matters",
    text: "You'll ship real products for real businesses and see the impact of what you build.",
  },
  {
    icon: GraduationCap,
    title: "Always learning",
    text: "We make room to learn new tools, share knowledge and grow beyond your current role.",
  },
  {
    icon: Wrench,
    title: "Modern tools",
    text: "We build with current, well-supported technologies and care about doing things properly.",
  },
  {
    icon: MessagesSquare,
    title: "Honest communication",
    text: "Clear feedback, open discussion and no surprises, with colleagues and with clients.",
  },
  {
    icon: Rocket,
    title: "Real ownership",
    text: "Small teams mean you own your work, have a voice in decisions and get to make a difference.",
  },
  {
    icon: Heart,
    title: "A supportive team",
    text: "We're collaborative and kind. We win together and help each other when things get hard.",
  },
];

export default function CareersWhy() {
  return (
    <section
      id="why-join"
      aria-labelledby="why-join-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <Aura side="right" top="top-32" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="why-join-heading"
          eyebrow="Why join us"
          title="A place to do your"
          highlight="best work."
        >
          What it&apos;s like to be part of the team.
        </SectionHeader>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.li
                key={r.title}
                className="list-none"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: EASE }}
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
                    <h3 className="mt-5 text-xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {r.text}
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
