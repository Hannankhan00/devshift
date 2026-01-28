"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon: Icon, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-2xl"
            style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: isHovered ? 'var(--accent)' : 'var(--card-border)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-xl p-3 shadow-lg transition-colors duration-300"
                    style={{ backgroundColor: isHovered ? 'var(--accent)' : 'var(--background)' }}>
                    <Icon size={32} className="transition-colors duration-300"
                        style={{ color: isHovered ? '#ffffff' : 'var(--accent)' }} />
                </div>

                <h3 className="mb-4 text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                    {title}
                </h3>

                <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default function ServiceFeatures({ title, subtitle, features }) {
    return (
        <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--background)' }}>
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6"
                        style={{ color: 'var(--foreground)' }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto max-w-2xl text-lg md:text-xl"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
