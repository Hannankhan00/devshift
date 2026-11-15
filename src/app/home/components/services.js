"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Cloud, Sparkles } from "lucide-react";

/* ----------------------------- Illustrations ----------------------------- */
/* Theme-aware visuals built from the site's CSS variables (light + dark). */

const line = (w, strong = false) => (
  <div
    className="h-1.5 rounded-full"
    style={{
      width: w,
      backgroundColor: strong ? "var(--accent)" : "var(--card-border)",
      opacity: strong ? 0.9 : 1,
    }}
  />
);

const panel = {
  backgroundColor: "var(--background)",
  borderColor: "var(--card-border)",
};

function BillingArt() {
  const rows = [
    ["60%", "$"],
    ["45%", "$"],
    ["70%", "$"],
  ];
  return (
    <div className="relative w-[64%]">
      <div className="overflow-hidden rounded-xl border shadow-xl" style={panel}>
        <div className="flex items-center justify-between border-b px-3 py-2.5" style={{ borderColor: "var(--card-border)" }}>
          <div className="flex items-center gap-2">
            <span
              className="flex h-5 w-5 items-center justify-center rounded-md text-xs font-bold leading-none text-white"
              style={{ backgroundColor: "var(--accent)" }}
            >
              +
            </span>
            {line("48px", true)}
          </div>
          <span className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
            CLAIM #2041
          </span>
        </div>
        <div className="space-y-2.5 p-3.5">
          {rows.map(([w], i) => (
            <div key={i} className="flex items-center justify-between gap-3">
              <div className="flex-1 space-y-1.5">
                {line(w)}
                {line("35%")}
              </div>
              <div className="h-2 w-10 rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 30%, transparent)" }} />
            </div>
          ))}
          <div className="flex items-center justify-between border-t pt-2.5" style={{ borderColor: "var(--card-border)" }}>
            {line("30%")}
            <div className="h-2.5 w-14 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
          </div>
        </div>
      </div>
      <span
        className="absolute -bottom-3 -right-4 flex items-center gap-1 rounded-lg border px-2 py-1 font-mono text-[10px] font-semibold shadow-md"
        style={{ ...panel, color: "var(--foreground)" }}
      >
        <Check size={10} className="text-emerald-500" aria-hidden="true" />
        Paid
      </span>
    </div>
  );
}

function MobileArt() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="h-44 w-24 rounded-[1.4rem] border-2 p-2 shadow-xl" style={panel}>
        <div className="mx-auto mb-2 h-1 w-8 rounded-full" style={{ backgroundColor: "var(--card-border)" }} />
        <div className="mb-2 h-10 rounded-xl" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 18%, transparent)" }} />
        {[0, 1, 2].map((i) => (
          <div key={i} className="mb-1.5 flex items-center gap-1.5">
            <div className="h-5 w-5 shrink-0 rounded-md" style={{ backgroundColor: "var(--card-border)" }} />
            <div className="flex-1 space-y-1">
              {line("90%")}
              {line("55%")}
            </div>
          </div>
        ))}
        <div className="mt-2 h-5 rounded-lg" style={{ backgroundColor: "var(--accent)" }} />
      </div>
      <div className="absolute -right-10 top-4 h-32 w-20 rotate-6 rounded-[1.2rem] border-2 p-2 opacity-70 shadow-lg" style={panel}>
        <div className="mb-2 h-8 rounded-lg" style={{ backgroundColor: "var(--card-border)" }} />
        {line("80%")}
        <div className="mt-1.5">{line("50%")}</div>
      </div>
    </div>
  );
}

function DesignArt() {
  return (
    <div className="relative h-40 w-[70%] rounded-xl border shadow-xl" style={panel}>
      <div className="absolute left-4 top-4 h-14 w-14 rounded-2xl" style={{ backgroundColor: "var(--accent)" }} />
      <div className="absolute left-20 top-9 h-12 w-12 rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 35%, transparent)" }} />
      <div
        className="absolute bottom-5 right-6 h-0 w-0"
        style={{
          borderLeft: "26px solid transparent",
          borderRight: "26px solid transparent",
          borderBottom: "46px solid #3b82f6",
          opacity: 0.85,
        }}
      />
      {/* selection box */}
      <div className="absolute left-3 top-3 h-16 w-16 rounded-md border border-dashed" style={{ borderColor: "var(--accent)" }}>
        {[["-left-1", "-top-1"], ["-right-1", "-top-1"], ["-left-1", "-bottom-1"], ["-right-1", "-bottom-1"]].map(([x, y], i) => (
          <span key={i} className={`absolute ${x} ${y} h-1.5 w-1.5 rounded-[2px] border bg-white`} style={{ borderColor: "var(--accent)" }} />
        ))}
      </div>
      {/* palette */}
      <div className="absolute bottom-3 left-4 flex gap-1.5">
        {["var(--accent)", "#3b82f6", "#10b981", "#f59e0b"].map((c) => (
          <span key={c} className="h-3.5 w-3.5 rounded-full border" style={{ backgroundColor: c, borderColor: "var(--background)" }} />
        ))}
      </div>
    </div>
  );
}

function AiArt() {
  return (
    <div className="w-[72%] space-y-2.5">
      <div className="ml-auto w-[70%] rounded-2xl rounded-br-sm px-3 py-2.5 shadow-md" style={{ backgroundColor: "var(--accent)" }}>
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-white/80" />
          <div className="h-1.5 w-2/3 rounded-full bg-white/60" />
        </div>
      </div>
      <div className="flex items-start gap-2">
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)", color: "var(--accent)" }}
        >
          <Sparkles size={12} aria-hidden="true" />
        </span>
        <div className="w-[78%] space-y-1.5 rounded-2xl rounded-tl-sm border px-3 py-2.5 shadow-md" style={panel}>
          {line("100%")}
          {line("85%")}
          {line("55%", true)}
        </div>
      </div>
      <div className="ml-8 flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{ backgroundColor: "var(--accent)", animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function CloudArt() {
  return (
    <div className="relative h-44 w-[75%]">
      <svg viewBox="0 0 240 160" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        {[[40, 130], [120, 140], [200, 130]].map(([x, y], i) => (
          <line key={i} x1="120" y1="62" x2={x} y2={y - 18} stroke="var(--accent)" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="4 4" />
        ))}
      </svg>
      <div
        className="absolute left-1/2 top-2 flex h-16 w-24 -translate-x-1/2 items-center justify-center rounded-2xl border shadow-xl"
        style={panel}
      >
        <Cloud size={30} style={{ color: "var(--accent)" }} aria-hidden="true" />
      </div>
      {[
        ["8%", "Build"],
        ["38%", "Test"],
        ["68%", "Deploy"],
      ].map(([left, label]) => (
        <div
          key={label}
          className="absolute bottom-2 flex items-center gap-1 rounded-lg border px-2 py-1.5 text-[10px] font-mono font-semibold shadow-md"
          style={{ ...panel, left, color: "var(--foreground)" }}
        >
          <Check size={10} className="text-emerald-500" aria-hidden="true" />
          {label}
        </div>
      ))}
    </div>
  );
}

function CustomArt() {
  const rows = [
    ["14%", "var(--accent)"],
    ["52%", "#3b82f6"],
    ["36%", "var(--card-border)"],
    ["64%", "#10b981"],
    ["28%", "var(--card-border)"],
  ];
  return (
    <div className="relative w-[72%]">
      <div className="overflow-hidden rounded-xl border shadow-xl" style={panel}>
        <div className="flex items-center gap-1.5 border-b px-3 py-2" style={{ borderColor: "var(--card-border)" }}>
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
            api/orders.ts
          </span>
        </div>
        <div className="space-y-2 p-4">
          {rows.map(([w, c], i) => (
            <div key={i} className="flex items-center gap-2" style={{ paddingLeft: i % 2 ? 14 : 0 }}>
              <div className="h-1.5 rounded-full" style={{ width: "18%", backgroundColor: "var(--card-border)" }} />
              <div className="h-1.5 rounded-full" style={{ width: w, backgroundColor: c }} />
            </div>
          ))}
        </div>
      </div>
      <span
        className="absolute -bottom-3 -right-3 rounded-lg border px-2 py-1 font-mono text-[10px] font-semibold shadow-md"
        style={{ ...panel, color: "var(--accent)" }}
      >
        200 OK
      </span>
    </div>
  );
}

/* ----------------------------- Content ----------------------------- */

const SERVICES = [
  {
    id: "ai",
    title: "AI-Driven Solutions",
    summary: "Practical AI assistants, intelligent automation and data-driven tools that remove repetitive manual work.",
    tags: ["LLM","Python","Automation"],
    href: "/services/automation",
    Art: AiArt,
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    summary: "Polished iOS and Android apps from a single maintainable codebase, ready for the stores.",
    tags: ["React Native","Flutter","Swift"],
    href: "/services/app",
    Art: MobileArt,
  },
  {
    id: "custom",
    title: "Software Development Solutions",
    summary: "Bespoke systems, APIs and integrations built around the way your business actually works.",
    tags: ["APIs","Integrations","SaaS"],
    href: "/services",
    Art: CustomArt,
  },
  {
    id: "billing",
    title: "Medical Billing",
    summary: "End-to-end billing and revenue cycle management: accurate claims, fewer denials and faster payments.",
    tags: ["Claims", "Coding", "Denial Management"],
    href: "/services",
    Art: BillingArt,
  },
  {
    id: "design",
    title: "UI/UX Design",
    summary: "Research-led interfaces and design systems, validated with real users before development.",
    tags: ["Figma","Prototyping","Design Systems"],
    href: "/services/design",
    Art: DesignArt,
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    summary: "Secure, observable infrastructure with automated pipelines so releases stay routine.",
    tags: ["AWS","Docker","CI/CD"],
    href: "/services",
    Art: CloudArt,
  },
];

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------ Card ------------------------------- */

function ServiceCard({ service, index }) {
  const { Art, image } = service;

  return (
    <motion.li
      className="list-none"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: EASE }}
    >
      <Link
        href={service.href}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
          e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
        }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
        style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
        aria-label={`${service.title}: learn more`}
      >
        {/* cursor spotlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)",
          }}
        />

          {/* Image area */}
          <div
            className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--accent) 16%, var(--card-bg)) 0%, var(--card-bg) 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: "radial-gradient(var(--card-border) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            {image ? (
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="relative flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.05]">
                <Art />
              </div>
            )}
            <span
              className="absolute left-4 top-4 rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold"
              style={{ backgroundColor: "var(--background)", borderColor: "var(--card-border)", color: "var(--accent)" }}
            >
              0{index + 1}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              {service.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {service.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {service.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-2.5 py-1 font-mono text-[11px]"
                  style={{ borderColor: "var(--card-border)", backgroundColor: "var(--background)", color: "var(--text-muted)" }}
                >
                  {t}
                </span>
              ))}
            </div>

            <span
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--accent)" }}
            >
              Learn more
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
            </span>
          </div>
      </Link>
    </motion.li>
  );
}

/* ------------------------------ Main ------------------------------- */

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 h-[440px] w-[440px] rounded-full blur-[150px]"
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
            Our services
          </motion.p>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: "var(--foreground)" }}
          >
            Everything you need to <span style={{ color: "var(--accent)" }}>build, launch and scale.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            One team across strategy, design, engineering and operations, so nothing gets lost between handoffs.
          </motion.p>
        </div>

        {/* Cards */}
        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
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
            href="/services"
            className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <span>View all services</span>
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
