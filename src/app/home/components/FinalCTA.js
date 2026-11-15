"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const ASSURANCES = ["Free initial consultation", "No-obligation estimate", "Clear next steps"];

export default function FinalCTA() {
  return (
    <section
      id="start-project"
      aria-labelledby="cta-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
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
          {/* dot texture */}
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
          {/* drifting light */}
          <motion.div
            aria-hidden="true"
            className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white blur-3xl"
            style={{ opacity: 0.16 }}
            animate={{ x: [0, 60, -10, 0], y: [0, 30, -20, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-[#3b82f6] blur-3xl"
            style={{ opacity: 0.35 }}
            animate={{ x: [0, -50, 20, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-white/75">
              Let&apos;s work together
            </p>

            <h2
              id="cta-heading"
              className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Have a project in mind? Let&apos;s build it.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
              Tell us what you&apos;re trying to achieve and we&apos;ll come back with honest advice, a clear plan and an
              estimate you can trust.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
                style={{ color: "#3b1bd6" }}
              >
                <span>Start your project</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/quote"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/35 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 sm:w-auto"
              >
                Get a free quote
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
  );
}
