"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, MessagesSquare, Handshake, ArrowUpRight, Check } from "lucide-react";
import { EASE, SectionHeader, Aura, spotlight, SPOTLIGHT_BG } from "../../about/components/shared";

/* Editable: describe how the team really works. */
const PRINCIPLES = [
  {
    icon: Users,
    title: "Small, senior-led teams",
    text: "Experienced people work directly on your product, with no layers of hand-offs between you and the builders.",
  },
  {
    icon: MessagesSquare,
    title: "Open and direct",
    text: "Clear updates, honest feedback and a straight answer when something isn't going to plan.",
  },
  {
    icon: Handshake,
    title: "Shared ownership",
    text: "We treat every project as our own. When you win, we win, and we stay on after launch.",
  },
];

const ASSURANCES = ["Direct access to the team", "Regular demos & updates", "Support after launch"];

export default function TeamCulture() {
  return (
    <>
      <section
        id="how-we-work"
        aria-labelledby="culture-heading"
        className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
      >
        <Aura side="left" top="top-24" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="culture-heading"
            eyebrow="How we work together"
            title="A team that"
            highlight="shows up."
          >
            What you can expect when you work with us.
          </SectionHeader>

          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.li
                  key={p.title}
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
                      <h3 className="mt-5 text-xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {p.text}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Join-us panel */}
      <section aria-labelledby="join-heading" className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative overflow-hidden rounded-[2rem] px-6 py-10 text-center sm:px-12 md:py-14"
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, #3b1bd6 55%, #1e1b6b 100%)",
              boxShadow: "0 40px 100px -30px color-mix(in srgb, var(--accent) 60%, transparent)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                maskImage: "radial-gradient(ellipse at center, #000 0%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, #000 0%, transparent 75%)",
              }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white blur-3xl"
              style={{ opacity: 0.16 }}
              animate={{ x: [0, 60, -10, 0], y: [0, 30, -20, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative mx-auto max-w-2xl">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-white/75">
                Want to be part of it?
              </p>
              <h2
                id="join-heading"
                className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Come and build with us.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                We&apos;re always interested in meeting talented, curious people who care about craft.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/careers"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
                  style={{ color: "#3b1bd6" }}
                >
                  <span>See careers</span>
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/35 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 sm:w-auto"
                >
                  Start a project
                </Link>
              </div>

              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {ASSURANCES.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-white/85">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                      <Check size={12} aria-hidden="true" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
