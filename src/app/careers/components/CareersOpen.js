"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Code2, PenTool, ClipboardList, ShieldCheck, MapPin, Clock, Mail } from "lucide-react";
import { EASE, SectionHeader, Aura } from "../../about/components/shared";

/* ------------------------------------------------------------------
   OPEN ROLES - EDIT ME
   Leave the array empty to show the "no open roles" message.
   Add a role to show it in the list, for example:
   {
     title: "Senior Full-Stack Engineer",
     team: "Engineering",
     location: "Remote",
     type: "Full-time",
     href: "/contact",
   }
------------------------------------------------------------------- */
const ROLES = [];

const TEAMS = [
  {
    icon: Code2,
    title: "Engineering",
    text: "Full-stack, mobile and AI engineers who write clean, tested, maintainable code.",
    skills: ["React / Next.js", "Node.js", "Python", "React Native"],
  },
  {
    icon: PenTool,
    title: "Design",
    text: "Product and UI/UX designers who turn complex problems into clear, beautiful interfaces.",
    skills: ["Figma", "Design systems", "Prototyping", "User research"],
  },
  {
    icon: ClipboardList,
    title: "Product & Delivery",
    text: "Project and product managers who keep delivery on track and clients in the loop.",
    skills: ["Agile delivery", "Planning", "Communication"],
  },
  {
    icon: ShieldCheck,
    title: "Quality & DevOps",
    text: "QA and cloud engineers who make sure what we ship is fast, secure and reliable.",
    skills: ["Test automation", "AWS", "CI/CD", "Security"],
  },
];

const STEPS = [
  { title: "Apply", text: "Send us your CV or portfolio and tell us what you'd like to work on." },
  { title: "Intro chat", text: "A relaxed conversation about you, your goals and how we work." },
  { title: "Deep dive", text: "A practical discussion or small task relevant to the role." },
  { title: "Offer", text: "If it's a fit on both sides, we move quickly with a clear offer." },
];

export default function CareersOpen() {
  return (
    <>
      {/* ---------- Teams ---------- */}
      <section
        id="teams"
        aria-labelledby="teams-heading"
        className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
      >
        <Aura side="left" top="top-24" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader id="teams-heading" eyebrow="Where you could fit" title="Teams we" highlight="hire for.">
            The kinds of people who thrive at Technoad.
          </SectionHeader>

          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {TEAMS.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.li
                  key={t.title}
                  className="list-none"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: (i % 2) * 0.12, ease: EASE }}
                >
                  <div
                    className="flex h-full gap-5 rounded-3xl border p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                    style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {t.text}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {t.skills.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border px-3 py-1 font-mono text-[11px]"
                            style={{ borderColor: "var(--card-border)", backgroundColor: "var(--background)", color: "var(--text-muted)" }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- Open roles ---------- */}
      <section
        id="open-roles"
        aria-labelledby="roles-heading"
        className="relative scroll-mt-24 overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
      >
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader id="roles-heading" eyebrow="Open positions" title="Current" highlight="openings.">
            {ROLES.length > 0
              ? "Find a role that fits and get in touch."
              : "We don't have any open roles right now, but we're always happy to meet great people."}
          </SectionHeader>

          {ROLES.length > 0 ? (
            <ul className="mt-12 space-y-4">
              {ROLES.map((r, i) => (
                <motion.li
                  key={r.title}
                  className="list-none"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                >
                  <Link
                    href={r.href}
                    className="group flex flex-col gap-4 rounded-2xl border p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl sm:flex-row sm:items-center sm:justify-between"
                    style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
                  >
                    <div>
                      <p className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                        {r.team}
                      </p>
                      <h3 className="mt-1 text-lg font-bold" style={{ color: "var(--foreground)" }}>
                        {r.title}
                      </h3>
                      <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm" style={{ color: "var(--text-muted)" }}>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={14} aria-hidden="true" /> {r.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} aria-hidden="true" /> {r.type}
                        </span>
                      </p>
                    </div>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      Apply
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative mt-12 overflow-hidden rounded-3xl border p-8 text-center sm:p-12"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
            >
              <div
                aria-hidden="true"
                className="absolute -top-16 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full blur-3xl"
                style={{ backgroundColor: "var(--accent)", opacity: 0.15 }}
              />
              <div className="relative">
                <span
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <Mail size={26} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
                  Don&apos;t see the right role?
                </h3>
                <p className="mx-auto mt-3 max-w-md text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Send us your CV or portfolio and a few lines about what you&apos;d like to work on. We keep every
                  application in mind for future openings.
                </p>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <span>Send an open application</span>
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ---------- Hiring process ---------- */}
      <section
        id="hiring-process"
        aria-labelledby="hiring-heading"
        className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader id="hiring-heading" eyebrow="Hiring process" title="What to" highlight="expect.">
            A clear, respectful process, so you always know where you stand.
          </SectionHeader>

          <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                className="list-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              >
                <div
                  className="h-full rounded-3xl border p-6"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ backgroundColor: "var(--accent)", boxShadow: "0 0 0 5px color-mix(in srgb, var(--accent) 18%, transparent)" }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold" style={{ color: "var(--foreground)" }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {s.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
