"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle, ArrowUpRight } from "lucide-react";

/* ----------------------------- Content ----------------------------- */
/* EDIT ME: keep answers accurate for how Technoad actually works. */

const FAQS = [
  {
    q: "What services do you offer?",
    a: "We design and build web platforms, mobile apps, AI-driven solutions and custom software, and we also provide medical billing services. Our teams cover everything from UX design and architecture to cloud deployment and ongoing support.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope, complexity and timeline. After an initial discovery conversation we provide a clear, itemised estimate so you know what to expect before committing. We work on fixed-scope projects, dedicated teams or monthly retainers.",
  },
  {
    q: "How long does a project take?",
    a: "Focused projects such as a marketing site or MVP can take a few weeks, while larger platforms take several months. We break the work into milestones so you see progress early and often, and we agree a realistic timeline during planning.",
  },
  {
    q: "How will we communicate during the project?",
    a: "You get a single point of contact, a shared project board and regular demos, so you always know what has been done and what comes next. We are happy to adapt to the tools and meeting rhythm your team already uses.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do. The code and assets created for your project are yours, and ownership terms are set out clearly in our agreement from the start.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. We offer monitoring, maintenance, bug fixes and new feature development after release, either as an ongoing retainer or on an as-needed basis.",
  },
  {
    q: "Can you work with our existing team or codebase?",
    a: "Absolutely. We can extend your in-house team, audit and improve an existing codebase, or take over a project that is already underway.",
  },
  {
    q: "How do we get started?",
    a: "Send us a message or book a consultation. We will talk through your goals, answer your questions and, if we are a good fit, outline the next steps and a proposal.",
  },
];

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------ Item ------------------------------- */

function Item({ item, index, open, onToggle }) {
  const id = `faq-${index}`;

  return (
    <motion.li
      className={`list-none ${index > 0 ? "border-t" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: Math.min(index, 4) * 0.06, ease: EASE }}
      style={{ backgroundColor: open ? "var(--card-bg)" : "transparent", borderColor: "var(--card-border)" }}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="group flex w-full items-center gap-4 px-5 py-5 text-left sm:gap-5 sm:px-7 sm:py-6"
        >
          <span
            className="font-mono text-xs font-semibold transition-colors duration-300"
            style={{ color: open ? "var(--accent)" : "var(--text-muted)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="flex-1 text-base font-semibold transition-colors duration-300 sm:text-lg"
            style={{ color: "var(--foreground)" }}
          >
            {item.q}
          </span>
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-[var(--accent)]"
            style={{
              borderColor: open ? "var(--accent)" : "var(--card-border)",
              backgroundColor: open ? "var(--accent)" : "transparent",
              color: open ? "#ffffff" : "var(--text-muted)",
              transform: open ? "rotate(45deg)" : "none",
            }}
          >
            <Plus size={16} aria-hidden="true" />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <p
              className="px-5 pb-6 pl-[3.25rem] pr-5 text-sm leading-relaxed sm:pb-7 sm:pl-[4.25rem] sm:pr-16 sm:text-base"
              style={{ color: "var(--text-muted)" }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

/* ------------------------------ Main ------------------------------- */

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-x-clip pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-32 h-[420px] w-[420px] rounded-full blur-[150px]"
        style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        animate={{ x: [0, 50, -20, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: intro */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
                className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                FAQ
              </motion.p>
              <motion.h2
                id="faq-heading"
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: EASE }}
                className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl"
                style={{ color: "var(--foreground)" }}
              >
                Questions? <span style={{ color: "var(--accent)" }}>Answered.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                className="mt-6 text-base leading-relaxed sm:text-lg"
                style={{ color: "var(--text-muted)" }}
              >
                The things clients ask us most before starting a project. Can&apos;t find yours? Just ask.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                className="mt-8 rounded-3xl border p-6"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)" }}
                >
                  <MessageCircle size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold" style={{ color: "var(--foreground)" }}>
                  Still have a question?
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Tell us about your project and we&apos;ll get back to you with honest advice.
                </p>
                <Link
                  href="/contact"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  <span>Contact our team</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8">
            <ul
              className="divide-y overflow-hidden rounded-3xl border"
              style={{ borderColor: "var(--card-border)" }}
            >
              {FAQS.map((f, i) => (
                <Item
                  key={f.q}
                  item={f}
                  index={i}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
