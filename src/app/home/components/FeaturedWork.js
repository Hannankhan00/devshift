"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ----------------------------- Content ----------------------------- */
/* Sample projects reused from the Portfolio page. Replace with real case studies. */

const PROJECTS = [
  {
    id: "healthcare",
    category: "Healthcare",
    title: "Healthcare Patient Platform",
    summary: "Secure patient portal with appointment booking and encrypted messaging.",
    tags: ["Next.js", "HIPAA-ready", "Secure messaging"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
    span: "lg:col-span-7",
  },
  {
    id: "saas",
    category: "SaaS",
    title: "Analytics Dashboard",
    summary: "Real-time data visualisation with user management and dark mode.",
    tags: ["React", "TypeScript", "Charts"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    span: "lg:col-span-5",
  },
  {
    id: "ecommerce",
    category: "E-commerce",
    title: "E-Commerce Platform",
    summary: "Custom cart logic, live inventory and a fast, secure checkout.",
    tags: ["Next.js", "Stripe", "Sanity"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop",
    span: "lg:col-span-5",
  },
  {
    id: "mobile",
    category: "Mobile App",
    title: "Fitness Companion App",
    summary: "Workout tracking, progress photos and social features on iOS and Android.",
    tags: ["React Native", "Firebase", "Offline-first"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    span: "lg:col-span-7",
  },
];

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------ Card ------------------------------- */

function ProjectCard({ project, index }) {
  return (
    <motion.li
      className={`list-none ${project.span}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.12, ease: EASE }}
    >
      <Link
        href="/portfolio"
        aria-label={`${project.title}: view in portfolio`}
        className="group relative block h-[340px] overflow-hidden rounded-3xl border sm:h-[400px]"
        style={{ borderColor: "var(--card-border)", backgroundColor: "var(--card-bg)" }}
      >
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />

        {/* readability gradient + brand tint */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,6,24,0.92) 0%, rgba(8,6,24,0.55) 45%, rgba(8,6,24,0.05) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundColor: "var(--accent)" }}
        />

        {/* category chip */}
        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          {project.category}
        </span>

        {/* arrow */}
        <span
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition-all duration-300 group-hover:border-transparent group-hover:bg-[var(--accent)]"
          aria-hidden="true"
        >
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>

        {/* text */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{project.title}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/90 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.li>
  );
}

/* ------------------------------ Main ------------------------------- */

export default function FeaturedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-32 h-[420px] w-[420px] rounded-full blur-[150px]"
        style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        animate={{ x: [0, 50, -20, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Featured work
            </motion.p>
            <motion.h2
              id="work-heading"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
              style={{ color: "var(--foreground)" }}
            >
              Products we&apos;re proud to <span style={{ color: "var(--accent)" }}>have shipped.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="max-w-md text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            A selection of platforms and apps across healthcare, SaaS, e-commerce and mobile.
          </motion.p>
        </div>

        {/* Projects */}
        <ul className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </ul>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <span>View all work</span>
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
