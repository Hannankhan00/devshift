"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import { TEAM } from "@/lib/team";
import Portrait from "../../components/portrait";
import { EASE, SectionHeader, Aura } from "../../about/components/shared";

function Socials({ person, onDark = false }) {
  if (!person.linkedin && !person.github) return null;
  const cls = onDark
    ? "border-white/25 bg-white/10 text-white hover:bg-[var(--accent)]"
    : "hover:border-[var(--accent)] hover:text-[var(--accent)]";
  const style = onDark ? undefined : { borderColor: "var(--card-border)", color: "var(--text-muted)", backgroundColor: "var(--background)" };

  return (
    <div className="mt-5 flex gap-2">
      {person.linkedin && (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} on LinkedIn`}
          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${cls}`}
          style={style}
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
          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${cls}`}
          style={style}
        >
          <Github size={16} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

/* Large landscape card for leadership */
function Leader({ person, index }) {
  return (
    <motion.li
      className="list-none"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: EASE }}
    >
      <div
        className="group flex h-full flex-col overflow-hidden rounded-3xl border transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:flex-row"
        style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-auto sm:min-h-[340px] sm:w-[44%]">
          <Portrait person={person} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw" />
        </div>
        <div className="flex flex-1 flex-col justify-center p-7 sm:p-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            {person.role}
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
            {person.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: "var(--text-muted)" }}>
            {person.bio}
          </p>
          <Socials person={person} />
        </div>
      </div>
    </motion.li>
  );
}

/* Portrait card for the wider team */
function Member({ person, index }) {
  return (
    <motion.li
      className="list-none"
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
        </div>
        <div className="mt-5 px-1">
          <h3 className="text-lg font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
            {person.name}
          </h3>
          <p className="mt-0.5 font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            {person.role}
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {person.bio}
          </p>
          <Socials person={person} />
        </div>
      </div>
    </motion.li>
  );
}

export default function TeamGrid() {
  const leaders = TEAM.filter((p) => p.featured);
  const rest = TEAM.filter((p) => !p.featured);

  return (
    <section
      id="team"
      aria-labelledby="leadership-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <Aura side="right" top="top-24" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {leaders.length > 0 && (
          <>
            <SectionHeader id="leadership-heading" eyebrow="Leadership" title="Guiding the" highlight="work.">
              The people who set the direction and keep the standard high.
            </SectionHeader>
            <ul className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {leaders.map((p, i) => (
                <Leader key={`${p.role}-${i}`} person={p} index={i} />
              ))}
            </ul>
          </>
        )}

        {rest.length > 0 && (
          <div className={leaders.length > 0 ? "mt-24 md:mt-32" : ""}>
            <SectionHeader
              id={leaders.length > 0 ? undefined : "leadership-heading"}
              eyebrow="The team"
              title="Building it"
              highlight="together."
            >
              Designers, engineers and delivery leads who turn plans into products.
            </SectionHeader>
            <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
              {rest.map((p, i) => (
                <Member key={`${p.role}-${i}`} person={p} index={i} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
