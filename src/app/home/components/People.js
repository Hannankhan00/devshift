"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Code2, PenTool, ClipboardList, Linkedin, Github } from "lucide-react";

/* ----------------------------- Content ----------------------------- */
/*
  EDIT ME: replace the placeholder names with your real team.
  - image:    path or URL of a portrait (optional; shows a themed illustration tile without one)
  - linkedin / github: optional URLs; icons only appear when provided
*/
const TEAM = [
  {
    name: "Add Name Here",
    role: "Founder & CEO",
    bio: "Sets the vision, leads client partnerships and makes sure every project is tied to real business goals.",
    icon: Briefcase,
    tint: "var(--accent)",
    image: "",
    linkedin: "",
    github: "",
  },
  {
    name: "Add Name Here",
    role: "Lead Engineer",
    bio: "Owns architecture and code quality, turning complex requirements into software that is fast, secure and maintainable.",
    icon: Code2,
    tint: "#3b82f6",
    image: "",
    linkedin: "",
    github: "",
  },
  {
    name: "Add Name Here",
    role: "Product Designer",
    bio: "Shapes how products look and feel, from research and prototypes to polished, accessible interfaces.",
    icon: PenTool,
    tint: "#10b981",
    image: "",
    linkedin: "",
    github: "",
  },
  {
    name: "Add Name Here",
    role: "Project Manager",
    bio: "Keeps delivery on track and communication clear, so you always know what is happening and what comes next.",
    icon: ClipboardList,
    tint: "#f59e0b",
    image: "",
    linkedin: "",
    github: "",
  },
];

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------ Card ------------------------------- */

function Member({ person, index }) {
  const Icon = person.icon;
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
        {/* Portrait */}
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-3xl border"
          style={{ borderColor: "var(--card-border)", backgroundColor: "var(--card-bg)" }}
        >
          {person.image ? (
            <Image
              src={person.image}
              alt={`${person.name}, ${person.role}`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <>
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(160deg, color-mix(in srgb, ${person.tint} 28%, var(--card-bg)) 0%, var(--card-bg) 75%)`,
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage: "radial-gradient(var(--card-border) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl"
                style={{ backgroundColor: person.tint, opacity: 0.35 }}
              />
              {/* abstract "person" silhouette */}
              <div className="absolute inset-0 flex items-end justify-center" aria-hidden="true">
                <div
                  className="relative h-[62%] w-[58%] rounded-t-[999px] transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundColor: `color-mix(in srgb, ${person.tint} 22%, var(--background))` }}
                >
                  <div
                    className="absolute -top-[38%] left-1/2 h-[52%] w-[52%] -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: `color-mix(in srgb, ${person.tint} 30%, var(--background))` }}
                  />
                </div>
              </div>
              <span
                className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg"
                style={{ backgroundColor: person.tint }}
              >
                <Icon size={20} aria-hidden="true" />
              </span>
            </>
          )}

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

        {/* Name + role */}
        <div className="mt-5 px-1">
          <h3 className="text-lg font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
            {person.name}
          </h3>
          <p className="mt-0.5 font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            {person.role}
          </p>
          {/* bio shown inline on touch / small screens */}
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
        {/* Header */}
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

        {/* Team */}
        <ul className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {TEAM.map((p, i) => (
            <Member key={`${p.role}-${i}`} person={p} index={i} />
          ))}
        </ul>

        {/* Closing note */}
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
        </motion.div>
      </div>
    </section>
  );
}
