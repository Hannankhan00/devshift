"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Abstract Visual Components ---

const WebVisual = () => (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center perspective-1000">
        {/* "The Stack" - Abstract representation of layers */}
        <div className="relative w-64 h-64 [transform-style:preserve-3d] [transform:rotateX(60deg)_rotateZ(-45deg)]">
            {/* Bottom Layer - Database/Infrastructure */}
            <motion.div
                initial={{ z: 0, opacity: 0 }}
                animate={{ z: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute inset-0 bg-slate-900/80 border border-slate-700/50 rounded-2xl shadow-2xl backdrop-blur-sm"
                style={{ transform: "translateZ(0px)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl" />
                <div className="absolute inset-2 border border-dashed border-slate-700/30 rounded-xl" />
            </motion.div>

            {/* Middle Layer - Backend/Logic */}
            <motion.div
                initial={{ z: 0, opacity: 0 }}
                animate={{ z: 40, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute inset-0 bg-slate-800/60 border border-slate-600/50 rounded-2xl shadow-xl backdrop-blur-md"
                style={{ transform: "translateZ(40px)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
            </motion.div>

            {/* Top Layer - Frontend/Interface */}
            <motion.div
                initial={{ z: 0, opacity: 0 }}
                animate={{ z: 80, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl shadow-lg backdrop-blur-lg"
                style={{ transform: "translateZ(80px)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-50" />
                {/* Abstract UI Elements */}
                <div className="absolute top-4 left-4 right-4 h-2 bg-white/20 rounded-full" />
                <div className="absolute top-10 left-4 w-1/3 h-2 bg-white/10 rounded-full" />
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-cyan-500/80 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
            </motion.div>

            {/* Floating Particles */}
            <motion.div
                animate={{ z: [100, 120, 100] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-12 h-12 bg-blue-500/30 rounded-full blur-md"
                style={{ transform: "translateZ(100px)" }}
            />
        </div>
    </div>
);

const DesignVisual = () => (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
        {/* "The Composition" - Abstract Geometric Shapes */}
        <div className="relative w-[400px] h-[400px]">
            {/* Main Sphere - Frosted Glass */}
            <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] z-10"
            >
                <div className="absolute inset-0 rounded-full bg-white/5" />
            </motion.div>

            {/* Cube - Matte/Solid */}
            <motion.div
                animate={{ rotate: 360, x: [0, 10, 0] }}
                transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, x: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl z-20 flex items-center justify-center overflow-hidden"
            >
                <div className="absolute w-[200%] h-[200%] bg-gradient-to-t from-pink-500/20 to-transparent rotate-45" />
            </motion.div>

            {/* Ring/Torus - Metallic */}
            <motion.div
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-[1px] border-slate-500/30 rounded-full z-0"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
            </motion.div>

            {/* Floating Accent */}
            <motion.div
                animate={{ y: [20, -20, 20], x: [-10, 10, -10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-xl opacity-60 z-0"
            />
        </div>
    </div>
);

const AutomationVisual = () => (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
        {/* "The Neural Core" - Organic/Pulsing */}
        <div className="relative flex items-center justify-center">
            {/* Core */}
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-32 h-32 bg-emerald-500 rounded-full shadow-[0_0_100px_rgba(16,185,129,0.4)] z-20 flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-white/20 rounded-full blur-sm" />
                <div className="w-24 h-24 bg-emerald-400 rounded-full shadow-inner" />
            </motion.div>

            {/* Orbital Rings */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                    className="absolute border border-emerald-500/20 rounded-full"
                    style={{
                        width: `${180 + i * 80}px`,
                        height: `${180 + i * 80}px`,
                        borderStyle: i % 2 === 0 ? "dashed" : "solid"
                    }}
                >
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"
                    />
                </motion.div>
            ))}

            {/* Connecting Lines/Rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0.2, height: "100px" }}
                    animate={{ opacity: [0.2, 0.5, 0.2], height: ["100px", "150px", "100px"] }}
                    transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[1px] bg-gradient-to-t from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 origin-bottom"
                    style={{ transform: `rotate(${deg}deg) translateY(-50px)` }}
                />
            ))}
        </div>
    </div>
);

const AppVisual = () => (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center perspective-1000">
        {/* "The Layers" - Deconstructed UI */}
        <div className="relative w-64 h-96 [transform-style:preserve-3d] [transform:rotateX(45deg)_rotateZ(-30deg)]">

            {/* Back Layer - Content */}
            <motion.div
                initial={{ z: 0, opacity: 0 }}
                animate={{ z: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl"
                style={{ transform: "translateZ(0px)" }}
            >
                <div className="p-6 space-y-4">
                    <div className="w-1/2 h-4 bg-slate-800 rounded-full" />
                    <div className="space-y-2">
                        <div className="w-full h-20 bg-slate-800/50 rounded-xl" />
                        <div className="w-full h-20 bg-slate-800/50 rounded-xl" />
                    </div>
                </div>
            </motion.div>

            {/* Middle Layer - Glass Overlay */}
            <motion.div
                initial={{ z: 0, opacity: 0 }}
                animate={{ z: 60, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-white/10 rounded-[2rem] backdrop-blur-sm"
                style={{ transform: "translateZ(60px)" }}
            >
                {/* Floating Button */}
                <div className="absolute bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full" />
                </div>
            </motion.div>

            {/* Top Layer - Notification/Alert */}
            <motion.div
                initial={{ z: 0, opacity: 0, y: 20 }}
                animate={{ z: 120, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-1/4 left-[-20%] right-[-20%] h-24 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md shadow-2xl flex items-center px-4 gap-4"
                style={{ transform: "translateZ(120px)" }}
            >
                <div className="w-10 h-10 bg-orange-500 rounded-full shadow-lg" />
                <div className="flex-1 space-y-2">
                    <div className="w-2/3 h-2 bg-white/40 rounded-full" />
                    <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                </div>
            </motion.div>

        </div>
    </div>
);

export default function ServiceHero({
    title,
    description,
    ctaText = "Start Your Project",
    onCtaClick,
    visualType = "web",
    className
}) {
    const visuals = {
        web: <WebVisual />,
        design: <DesignVisual />,
        automation: <AutomationVisual />,
        app: <AppVisual />
    };

    return (
        <section className={cn("relative min-h-[90vh] flex items-center overflow-hidden", className)} style={{ backgroundColor: 'var(--background)' }}>
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,var(--background)_0%,transparent_100%)]" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight" style={{ color: 'var(--foreground)' }}>
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-xl" style={{ color: 'var(--text-muted)' }}>
                            {description}
                        </p>
                        <button
                            onClick={onCtaClick}
                            className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-white"
                            style={{ backgroundColor: 'var(--accent)', boxShadow: '0 4px 14px 0 rgba(0,0,0,0.39)' }}
                        >
                            {ctaText}
                        </button>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full flex items-center justify-center lg:justify-end"
                    >
                        {visuals[visualType] || visuals.web}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
