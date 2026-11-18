"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, animate, useInView, useReducedMotion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

/** Centered section heading in the same style as the home page sections. */
export function SectionHeader({ eyebrow, title, highlight, children, id, align = "center" }) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--accent)" }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
        style={{ color: "var(--foreground)" }}
      >
        {title} <span style={{ color: "var(--accent)" }}>{highlight}</span>
      </motion.h2>
      {children && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className={`mt-6 text-base leading-relaxed sm:text-lg ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          style={{ color: "var(--text-muted)" }}
        >
          {children}
        </motion.p>
      )}
    </div>
  );
}

/** Soft drifting accent glow (same family as the home sections). */
export function Aura({ side = "right", top = "top-32", color = "var(--accent)", opacity = 0.1 }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${side === "right" ? "-right-32" : "-left-32"} ${top} h-[420px] w-[420px] rounded-full blur-[150px]`}
      style={{ backgroundColor: color, opacity }}
      animate={{ x: [0, side === "right" ? -50 : 50, 20, 0], y: [0, 40, -30, 0] }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/** Cursor spotlight handler shared by the card grids. */
export function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export const SPOTLIGHT_BG =
  "radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--accent) 15%, transparent), transparent 70%)";
