"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ----------------------------- Content ----------------------------- */

const STEPS = [
  {
    title: "Discover & Strategize",
    description:
      "We start with a focused workshop to understand your goals, users and market. The result is a clear scope, roadmap and technical plan before any code is written.",
  },
  {
    title: "Design & Plan",
    description:
      "UX research, wireframes and clickable prototypes turn ideas into something you can test with real users, backed by an architecture and estimate you can trust.",
  },
  {
    title: "Build & Iterate",
    description:
      "Agile sprints with regular demos, automated testing and code reviews. You see working software throughout and can steer the product as we go.",
  },
  {
    title: "Launch & Scale",
    description:
      "Rigorous QA and security checks, a smooth monitored release, then ongoing support and improvements as your users and business grow.",
  },
];

const EASE = [0.22, 1, 0.36, 1];

/* Path geometry. X runs 0-1200 and is stretched to the full viewport width;
   Y is in real pixels (stage height), so text offsets stay predictable. */
const VB_W = 1200;
const STAGE_H = 620;
const NODES = [
  { x: 144, y: 70 },
  { x: 420, y: 175 },
  { x: 696, y: 280 },
  { x: 972, y: 385 },
];

function buildPath() {
  const S = NODES[1].x - NODES[0].x;
  let d = `M 0 ${NODES[0].y} L ${NODES[0].x} ${NODES[0].y}`;
  for (let i = 0; i < NODES.length - 1; i++) {
    const a = NODES[i];
    const b = NODES[i + 1];
    // flat for most of the run, then a late, smooth drop into the next node
    d += ` C ${a.x + S * 0.6} ${a.y}, ${b.x - S * 0.3} ${b.y}, ${b.x} ${b.y}`;
  }
  d += ` L ${VB_W} ${NODES[NODES.length - 1].y}`;
  return d;
}

const PATH_D = buildPath();

/* ------------------------- Desktop: scroll-drawn path ------------------------- */

function DesktopFlow() {
  const areaRef = useRef(null);
  const pathRef = useRef(null);
  const [fractions, setFractions] = useState(() => NODES.map((n) => n.x / VB_W));
  const [revealed, setRevealed] = useState(0);

  const { scrollYProgress } = useScroll({
    target: areaRef,
    offset: ["start start", "end end"],
  });
  // line draws over the first ~85% of the pinned scroll
  const drawn = useTransform(scrollYProgress, [0.02, 0.88], [0, 1]);

  // measure how far along the path each node sits
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    const next = NODES.map((n) => {
      let lo = 0;
      let hi = total;
      for (let i = 0; i < 24; i++) {
        const mid = (lo + hi) / 2;
        if (path.getPointAtLength(mid).x < n.x) lo = mid;
        else hi = mid;
      }
      return lo / total;
    });
    setFractions(next);
  }, []);

  useMotionValueEvent(drawn, "change", (v) => {
    const count = fractions.filter((f) => v >= f - 0.005).length;
    setRevealed((prev) => (prev === count ? prev : count));
  });

  return (
    <div ref={areaRef} className="relative hidden h-[340vh] md:block">
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center">
        <div className="relative w-full" style={{ height: STAGE_H }}>
          <div className="relative h-full w-full">
            <svg
              viewBox={`0 0 ${VB_W} ${STAGE_H}`}
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full overflow-visible"
              fill="none"
              aria-hidden="true"
            >
              {/* faint track */}
              <path
                ref={pathRef}
                d={PATH_D}
                stroke="var(--card-border)"
                strokeWidth="5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                opacity="0.55"
              />
              {/* drawn line */}
              <motion.path
                d={PATH_D}
                stroke="var(--accent)"
                strokeWidth="5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{
                  pathLength: drawn,
                  filter: "drop-shadow(0 0 8px color-mix(in srgb, var(--accent) 65%, transparent))",
                }}
              />
            </svg>

            {NODES.map((n, i) => {
              const on = revealed > i;
              return (
                <React.Fragment key={i}>
                  {/* node */}
                  <motion.div
                    className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border-2 text-base font-bold"
                    style={{
                      left: `${(n.x / VB_W) * 100}%`,
                      top: n.y,
                      backgroundColor: on ? "var(--accent)" : "var(--background)",
                      borderColor: on ? "var(--accent)" : "var(--card-border)",
                      color: on ? "#ffffff" : "var(--text-muted)",
                      boxShadow: on
                        ? "0 0 0 6px color-mix(in srgb, var(--accent) 20%, transparent), 0 8px 24px color-mix(in srgb, var(--accent) 45%, transparent)"
                        : "none",
                    }}
                    animate={{ scale: on ? 1 : 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {i + 1}
                  </motion.div>

                  {/* text */}
                  <motion.div
                    className="absolute"
                    style={{
                      left: `calc(${(n.x / VB_W) * 100}% - 22px)`,
                      top: n.y + 82,
                      width: "clamp(190px, 16vw, 250px)",
                    }}
                    initial={false}
                    animate={on ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 18, filter: "blur(6px)" }}
                    transition={{ duration: 0.7, ease: EASE }}
                  >
                    <h3 className="text-lg font-bold tracking-tight lg:text-xl" style={{ color: "var(--foreground)" }}>
                      {STEPS[i].title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed lg:text-sm" style={{ color: "var(--text-muted)" }}>
                      {STEPS[i].description}
                    </p>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------- Mobile: vertical timeline ------------------------- */

function MobileStep({ step, index }) {
  const ref = useRef(null);
  const reached = useInView(ref, { once: true, margin: "0px 0px -45% 0px" });

  return (
    <li ref={ref} className="relative pb-10 pl-14 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute left-5 top-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl border-2 text-sm font-bold transition-all duration-700"
        style={{
          backgroundColor: reached ? "var(--accent)" : "var(--background)",
          borderColor: reached ? "var(--accent)" : "var(--card-border)",
          color: reached ? "#ffffff" : "var(--text-muted)",
          boxShadow: reached ? "0 0 0 5px color-mix(in srgb, var(--accent) 20%, transparent)" : "none",
        }}
      >
        {index + 1}
      </span>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <h3 className="pt-1.5 text-lg font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {step.description}
        </p>
      </motion.div>
    </li>
  );
}

function MobileFlow() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });

  return (
    <ol ref={listRef} className="relative mt-12 md:hidden">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2"
        style={{ backgroundColor: "var(--card-border)" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-5 top-0 w-[2px] origin-top -translate-x-1/2"
        style={{
          scaleY: scrollYProgress,
          backgroundColor: "var(--accent)",
          boxShadow: "0 0 10px color-mix(in srgb, var(--accent) 55%, transparent)",
        }}
      />
      {STEPS.map((s, i) => (
        <MobileStep key={s.title} step={s} index={i} />
      ))}
    </ol>
  );
}

/* ------------------------------ Main ------------------------------- */

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-x-clip pt-10 md:pt-14"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-48 h-[420px] w-[420px] rounded-full blur-[150px]"
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
            Our process
          </motion.p>
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: "var(--foreground)" }}
          >
            From idea to launch, <span style={{ color: "var(--accent)" }}>in four clear steps.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            A transparent, collaborative way of working, so you always know where your project stands and what happens next.
          </motion.p>
        </div>

      </div>

      {/* full-bleed so the line runs from screen edge to screen edge */}
      <DesktopFlow />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MobileFlow />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex justify-center pb-24 pt-10 md:pb-32 md:pt-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <span>Start your project</span>
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
