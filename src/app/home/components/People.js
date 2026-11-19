"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Linkedin, Github } from "lucide-react";
import { TEAM } from "@/lib/team";
import Portrait from "../../components/portrait";

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------ Card ------------------------------- */

function Member({ person, index }) {
  const hasSocial = person.linkedin || person.github;

  return (
    <motion.li
      className={`list-none ${index % 2 === 1 ? "lg:mt-12" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: EASE }}
    >
      <div className="group">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-3xl border"
          style={{ borderColor: "var(--card-border)", backgroundColor: "var(--card-bg)" }}
        >
          <Portrait person={person} />

          {/* hover bio (desktop) */}
          <div
            className="absolute inset-x-0 bottom-0 hidden translate-y-4 flex-col justify-end p-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
            style={{
              background: "linear-gradient(to top, rgba(8,6,24,0.92) 0%, rgba(8,6,24,0.7) 55%, transparent 100%)",
              minHeight: "62%",
            }}
          >
            <p className="text-sm leading-relaxed text-white/85">{person.bio}</p>
            {hasSocial && (
              <div className="mt-4 flex gap-2">
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-[var(--accent)]"
                  >
                    <Linkedin size={16} aria-hidden="true" />
                  </a>
                )}
                {person.github && (
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} on GitHub`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-[var(--accent)]"
                  >
                    <Github size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 px-1">
          <h3 className="text-lg font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
            {person.name}
          </h3>
          <p className="mt-0.5 font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            {person.role}
          </p>
          <p className="mt-3 text-sm leading-relaxed lg:hidden" style={{ color: "var(--text-muted)" }}>
            {person.bio}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

/* ------------------------------ Main ------------------------------- */

export default function People() {
  return (
    <section
      id="people"
      aria-labelledby="people-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-32 h-[420px] w-[420px] rounded-full blur-[150px]"
        style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        animate={{ x: [0, -50, 20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            People
          </motion.p>
          <motion.h2
            id="people-heading"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: "var(--foreground)" }}
          >
            The people behind <span style={{ color: "var(--accent)" }}>every project.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Behind the code and the screens is a small team of engineers, designers and strategists who care about the
            details, and about the people we build for.
          </motion.p>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {TEAM.map((p, i) => (
            <Member key={`${p.role}-${i}`} person={p} index={i} />
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-16 flex flex-col items-center gap-5 text-center lg:mt-20"
        >
          <p className="max-w-xl text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            When you work with Technoad, you work directly with the people building your product, not an account
            manager in between.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <span>Say hello</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/team"
              className="group inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--accent)" }}
            >
              <span>Meet the full team</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
