"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Bot, Server, Globe, Database, Cloud } from 'lucide-react';

const ServiceDetailCard = ({ title, description, features, icon: Icon, index }) => {
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

                <p className="mb-8 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {description}
                </p>

                <ul className="space-y-3">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: 'var(--accent)' }} />
                            <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default function DetailedServices() {
    const services = [
        {
            title: "Web Development",
            description: "Build scalable, high-performance web applications using the latest technologies. We specialize in Next.js, React, and modern web standards.",
            icon: Globe,
            features: [
                "Custom Web Application Development",
                "Progressive Web Apps (PWA)",
                "E-commerce Solutions",
                "API Integration & Development"
            ]
        },
        {
            title: "Mobile Development",
            description: "Create native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android devices.",
            icon: Smartphone,
            features: [
                "React Native Development",
                "iOS & Android Native Apps",
                "Cross-Platform Solutions",
                "App Store Optimization"
            ]
        },
        {
            title: "UI/UX Design",
            description: "Design intuitive and beautiful interfaces that engage users and drive conversions. We focus on user-centric design principles.",
            icon: Palette,
            features: [
                "User Interface (UI) Design",
                "User Experience (UX) Research",
                "Wireframing & Prototyping",
                "Design Systems"
            ]
        },
        {
            title: "AI & Automation",
            description: "Leverage artificial intelligence to automate workflows, analyze data, and enhance decision-making processes.",
            icon: Bot,
            features: [
                "Process Automation",
                "AI Chatbot Integration",
                "Data Analysis & Insights",
                "Machine Learning Solutions"
            ]
        },
        {
            title: "Backend Systems",
            description: "Robust backend architectures that power your applications with security, scalability, and performance in mind.",
            icon: Server,
            features: [
                "Microservices Architecture",
                "Database Design & Management",
                "Cloud Infrastructure",
                "Security & Compliance"
            ]
        },
        {
            title: "Cloud Solutions",
            description: "Deploy and manage your applications on leading cloud platforms with optimized performance and cost-efficiency.",
            icon: Cloud,
            features: [
                "AWS / Azure / Google Cloud",
                "DevOps & CI/CD Pipelines",
                "Serverless Computing",
                "Cloud Migration"
            ]
        }
    ];

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
                        Comprehensive Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto max-w-2xl text-lg md:text-xl"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        We offer a full spectrum of digital services to help your business thrive in the modern digital landscape.
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceDetailCard
                            key={index}
                            {...service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
