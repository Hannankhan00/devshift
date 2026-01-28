"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TechCard = ({ tech }) => (
    <div
        className="relative flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 hover:shadow-lg group whitespace-nowrap overflow-hidden"
        style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)'
        }}
    >
        {/* Colorful Gradient Background - Low Opacity */}
        <div
            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300"
            style={{
                background: 'linear-gradient(135deg, var(--accent), var(--foreground))'
            }}
        />

        {/* Icon - Always Colored */}
        <div className="relative z-10 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--accent)' }}>
            {tech.icon}
        </div>

        {/* Text */}
        <span className="relative z-10 font-medium text-lg" style={{ color: 'var(--foreground)' }}>{tech.name}</span>
    </div>
);

export default function Technologies({ title = "Technologies We Use", technologies }) {
    // Duplicate 4 times to ensure it fills wide screens and loops smoothly
    const marqueeItems = [...technologies, ...technologies, ...technologies, ...technologies];

    return (
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10 mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center"
                    style={{ color: 'var(--foreground)' }}
                >
                    {title}
                </motion.h2>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none" />

                <motion.div
                    className="flex gap-6 px-4"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                    style={{ width: "max-content" }}
                >
                    {marqueeItems.map((tech, index) => (
                        <TechCard key={index} tech={tech} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
