"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  siNextdotjs, siReact, siTypescript, siJavascript, siNodedotjs, siPython,
  siPostgresql, siMongodb, siRedis, siDocker, siKubernetes, siTerraform,
  siGraphql, siTailwindcss, siFlutter, siDart, siSwift, siKotlin,
  siFirebase, siFigma, siLaravel, siDjango, siFlask, siGo,
  siTensorflow, siPytorch, siLangchain, siHuggingface, siN8n, siSupabase,
  siStripe, siAndroid, siMysql, siGithubactions, siGooglecloud, siCloudflare,
} from "simple-icons";
import { EASE, SectionHeader, Aura } from "./shared";

/*
  EDIT ME: keep this list in line with the stack you actually use.
  Each row scrolls on its own: rows 1 & 3 move left, row 2 moves right at a different speed.
*/
const ROWS = [
  {
    direction: "left",
    duration: 70,
    items: [
      ["Next.js", siNextdotjs], ["React", siReact], ["TypeScript", siTypescript], ["JavaScript", siJavascript],
      ["Node.js", siNodedotjs], ["Python", siPython], ["PostgreSQL", siPostgresql], ["MongoDB", siMongodb],
      ["Redis", siRedis], ["Docker", siDocker], ["Kubernetes", siKubernetes], ["Terraform", siTerraform],
    ],
  },
  {
    direction: "right",
    duration: 52,
    items: [
      ["GraphQL", siGraphql], ["Tailwind CSS", siTailwindcss], ["Flutter", siFlutter], ["Dart", siDart],
      ["Swift", siSwift], ["Kotlin", siKotlin], ["Firebase", siFirebase], ["Figma", siFigma],
      ["Laravel", siLaravel], ["Django", siDjango], ["Flask", siFlask], ["Go", siGo],
    ],
  },
  {
    direction: "left",
    duration: 64,
    items: [
      ["TensorFlow", siTensorflow], ["PyTorch", siPytorch], ["LangChain", siLangchain], ["Hugging Face", siHuggingface],
      ["n8n", siN8n], ["Supabase", siSupabase], ["Stripe", siStripe], ["Android", siAndroid],
      ["MySQL", siMysql], ["GitHub Actions", siGithubactions], ["Google Cloud", siGooglecloud], ["Cloudflare", siCloudflare],
    ],
  },
];

function Tile({ name, icon }) {
  return (
    <div
      className="group mr-3 flex h-[96px] w-[96px] shrink-0 flex-col items-center justify-center gap-2 rounded-xl border px-2 text-center transition-[transform,border-color,box-shadow,background-color] duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:mr-3.5 sm:h-[116px] sm:w-[124px]"
      style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
    >
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="h-7 w-7 transition-colors duration-300 group-hover:text-[var(--accent)] sm:h-9 sm:w-9"
        style={{ color: "var(--foreground)", opacity: 0.92 }}
        fill="currentColor"
      >
        <path d={icon.path} />
      </svg>
      <span className="text-[11px] leading-tight sm:text-xs" style={{ color: "var(--text-muted)" }}>
        {name}
      </span>
    </div>
  );
}

function Row({ row, index }) {
  // duplicate the list so the loop is seamless (track is translated by -50%)
  const doubled = [...row.items, ...row.items];

  return (
    <div className="tech-row overflow-hidden py-2" aria-hidden="true">
      <div
        className="tech-track"
        style={{
          animationName: row.direction === "left" ? "tech-scroll-left" : "tech-scroll-right",
          animationDuration: `${row.duration}s`,
          // stagger the starting offsets so the rows never line up
          animationDelay: `-${index * 9}s`,
        }}
      >
        {doubled.map(([name, icon], i) => (
          <Tile key={`${name}-${i}`} name={name} icon={icon} />
        ))}
      </div>
    </div>
  );
}

export default function AboutTech() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <Aura side="right" top="top-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="stack-heading"
          eyebrow="Powered by modern technologies"
          title="Technologies we"
          highlight="build with."
        >
          Modern, proven tools chosen for performance, security and long-term maintainability.
        </SectionHeader>
      </div>

      {/* screen-reader friendly list (the animated rows are decorative) */}
      <ul className="sr-only">
        {ROWS.flatMap((r) => r.items).map(([name]) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      {/* full-bleed rows */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative mt-12 space-y-2.5 sm:space-y-3.5"
      >
        {ROWS.map((row, i) => (
          <Row key={i} row={row} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
