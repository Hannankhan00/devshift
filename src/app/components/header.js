"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import ThemeToggle from "./theme-toggle";

/* ------------------------------------------------------------------
   NAVIGATION
   Pages that don't exist yet point at the closest existing page.
   When you add a page (e.g. /solutions/hr-payroll), just change its href.
------------------------------------------------------------------- */
const SOLUTIONS_PAGE = "/services";
const INDUSTRIES_PAGE = "/portfolio";

const NAV = [
    { label: "Home", href: "/" },
    {
        label: "About",
        type: "list",
        items: [
            { label: "About Technoad", href: "/about" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Meet the team", href: "/home#people" },
            { label: "Careers", href: "/contact" },
        ],
    },
    {
        label: "Services",
        type: "list",
        items: [
            { label: "Web Development", href: "/services/web" },
            { label: "Mobile App Development", href: "/services/app" },
            { label: "UI/UX Design", href: "/services/design" },
            { label: "AI-Driven Solutions", href: "/services/automation" },
            { label: "Custom Software Development", href: "/services" },
            { label: "Cloud & DevOps", href: "/services" },
            { label: "Medical Billing", href: "/services" },
        ],
        footer: { label: "View all services", href: "/services" },
    },
    {
        label: "Solutions",
        type: "mega",
        cols: 2,
        items: [
            { label: "HR & Payroll", href: SOLUTIONS_PAGE },
            { label: "Gym Management", href: SOLUTIONS_PAGE },
            { label: "Restaurant & POS", href: SOLUTIONS_PAGE },
            { label: "Expense Tracker", href: SOLUTIONS_PAGE },
            { label: "CRM & Projects", href: SOLUTIONS_PAGE },
            { label: "And more", href: SOLUTIONS_PAGE },
        ],
        footer: { label: "Explore all solutions", href: SOLUTIONS_PAGE },
    },
    {
        label: "Industries",
        type: "mega",
        cols: 3,
        items: [
            { label: "Healthcare", href: INDUSTRIES_PAGE },
            { label: "E-commerce", href: INDUSTRIES_PAGE },
            { label: "Education", href: INDUSTRIES_PAGE },
            { label: "Media & Entertainment", href: INDUSTRIES_PAGE },
            { label: "On-demand", href: INDUSTRIES_PAGE },
            { label: "Real Estate", href: INDUSTRIES_PAGE },
            { label: "Automotive", href: INDUSTRIES_PAGE },
            { label: "SaaS", href: INDUSTRIES_PAGE },
            { label: "Social Media", href: INDUSTRIES_PAGE },
            { label: "Consultants & Professional Firms", href: INDUSTRIES_PAGE },
            { label: "Restaurant", href: INDUSTRIES_PAGE },
            { label: "Travel", href: INDUSTRIES_PAGE },
            { label: "Transport & Logistics", href: INDUSTRIES_PAGE },
            { label: "Manufacturing", href: INDUSTRIES_PAGE },
            { label: "Medical Billing", href: INDUSTRIES_PAGE },
        ],
        footer: { label: "See our work by industry", href: INDUSTRIES_PAGE },
    },
    { label: "Blog", href: "/contact" },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const leaveTimeout = useRef(null);
    const navRef = useRef(null);
    const mobileRef = useRef(null);

    const openNow = (label) => {
        if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
        setOpenMenu(label);
    };
    const closeSoon = () => {
        if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
        leaveTimeout.current = setTimeout(() => setOpenMenu(null), 160);
    };
    const closeNow = () => {
        if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
        setOpenMenu(null);
    };

    // change background when scrolling
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // close dropdowns on Escape / outside click / route change
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") {
                setOpenMenu(null);
                setMobileOpen(false);
            }
        };
        const onClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onClick);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onClick);
        };
    }, []);

    useEffect(() => {
        setOpenMenu(null);
        setMobileOpen(false);
    }, [pathname]);

    // lock scroll + close on outside click for mobile drawer
    useEffect(() => {
        if (!mobileOpen) return;
        const onClick = (e) => {
            if (mobileRef.current && !mobileRef.current.contains(e.target)) setMobileOpen(false);
        };
        document.addEventListener("mousedown", onClick);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("mousedown", onClick);
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const isActive = (item) => {
        if (item.href === "/") return pathname === "/" || pathname === "/home";
        if (item.href) return pathname === item.href;
        return item.items?.some((s) => s.href === pathname && s.href !== "/services" && s.href !== "/portfolio");
    };

    return (
        <header
            className={[
                "fixed inset-x-0 top-0 z-50 transition-all duration-300",
                scrolled ? "backdrop-blur-md border-b" : "bg-transparent",
            ].join(" ")}
            style={{
                backgroundColor: scrolled ? "var(--background)" : "transparent",
                borderColor: scrolled ? "var(--card-border)" : "transparent",
            }}
            role="banner"
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main">
                <div ref={navRef} className="relative flex h-16 items-center justify-between">
                    <Link href="/" aria-label="Technoad home" className="flex items-center">
                        <Logo priority />
                    </Link>

                    {/* ---------- Desktop nav ---------- */}
                    <ul className="hidden items-center gap-1 lg:flex">
                        {NAV.map((item) => {
                            const active = isActive(item);

                            if (!item.items) {
                                return (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[var(--card-bg)] hover:text-[var(--accent)]"
                                            style={{ color: active ? "var(--accent)" : "var(--foreground)" }}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            }

                            const open = openMenu === item.label;
                            const isMega = item.type === "mega";

                            return (
                                <li
                                    key={item.label}
                                    className={isMega ? "" : "relative"}
                                    onMouseEnter={() => openNow(item.label)}
                                    onMouseLeave={closeSoon}
                                >
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[var(--card-bg)]"
                                        style={{ color: open || active ? "var(--accent)" : "var(--foreground)" }}
                                        aria-haspopup="true"
                                        aria-expanded={open}
                                        onClick={() => (open ? closeNow() : openNow(item.label))}
                                    >
                                        {item.label}
                                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
                                    </button>

                                    <AnimatePresence>
                                        {open && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                                transition={{ duration: 0.2, ease: EASE }}
                                                className={[
                                                    "absolute top-full z-50 pt-3",
                                                    isMega
                                                        ? item.cols === 3
                                                            ? "left-1/2 w-[min(92vw,760px)] -translate-x-1/2"
                                                            : "left-1/2 w-[min(92vw,520px)] -translate-x-1/2"
                                                        : "left-0 w-72",
                                                ].join(" ")}
                                            >
                                                <div
                                                    className="rounded-2xl border p-2 shadow-2xl"
                                                    style={{
                                                        backgroundColor: "var(--card-bg)",
                                                        borderColor: "var(--card-border)",
                                                    }}
                                                >
                                                    <div
                                                        className={
                                                            isMega
                                                                ? item.cols === 3
                                                                    ? "grid grid-cols-3 gap-x-2 gap-y-0.5 p-1"
                                                                    : "grid grid-cols-2 gap-x-2 gap-y-0.5 p-1"
                                                                : "flex flex-col p-1"
                                                        }
                                                    >
                                                        {item.items.map((sub) => (
                                                            <Link
                                                                key={sub.label}
                                                                href={sub.href}
                                                                onClick={closeNow}
                                                                className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors duration-150 hover:bg-[var(--background)] hover:text-[var(--accent)]"
                                                                style={{ color: "var(--foreground)" }}
                                                            >
                                                                <span>{sub.label}</span>
                                                                <ArrowRight
                                                                    className="h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                                                                    aria-hidden="true"
                                                                />
                                                            </Link>
                                                        ))}
                                                    </div>

                                                    {item.footer && (
                                                        <Link
                                                            href={item.footer.href}
                                                            onClick={closeNow}
                                                            className="mt-1 flex items-center justify-between rounded-lg border-t px-4 py-3 text-sm font-semibold"
                                                            style={{ borderColor: "var(--card-border)", color: "var(--accent)" }}
                                                        >
                                                            <span>{item.footer.label}</span>
                                                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                                        </Link>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            );
                        })}
                    </ul>

                    {/* ---------- Right actions (desktop) ---------- */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <ThemeToggle />
                        <Link
                            href="/contact"
                            className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                            style={{ backgroundColor: "var(--accent)" }}
                        >
                            Start a Project
                        </Link>
                    </div>

                    {/* ---------- Mobile toggle ---------- */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <ThemeToggle />
                        <button
                            aria-label="Open menu"
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen(true)}
                            className="inline-flex items-center rounded-lg p-2 transition-colors duration-200"
                            style={{ color: "var(--foreground)" }}
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* ---------- Mobile drawer ---------- */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <motion.aside
                            ref={mobileRef}
                            className="fixed right-0 top-0 z-50 h-full w-[88%] max-w-sm overflow-y-auto border-l p-4 shadow-xl"
                            style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
                            aria-label="Mobile menu"
                        >
                            <div className="mb-2 flex items-center justify-between">
                                <Link
                                    href="/"
                                    onClick={() => setMobileOpen(false)}
                                    aria-label="Technoad home"
                                    className="flex items-center"
                                >
                                    <Logo iconClassName="h-7" textClassName="text-lg" />
                                </Link>
                                <button
                                    aria-label="Close menu"
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-lg p-2 transition-colors duration-200"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="mt-4 space-y-1">
                                {NAV.map((item) =>
                                    item.items ? (
                                        <details key={item.label} className="group rounded-lg">
                                            <summary
                                                className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-[var(--background)]"
                                                style={{ color: "var(--foreground)" }}
                                            >
                                                {item.label}
                                                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                                            </summary>
                                            <div className="ml-2 mt-1 space-y-0.5 border-l pl-2" style={{ borderColor: "var(--card-border)" }}>
                                                {item.items.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:bg-[var(--background)] hover:text-[var(--accent)]"
                                                        style={{ color: "var(--text-muted)" }}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </details>
                                    ) : (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-[var(--background)]"
                                            style={{ color: "var(--foreground)" }}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                )}
                            </div>

                            <div className="mt-6 border-t pt-4" style={{ borderColor: "var(--card-border)" }}>
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-xl px-4 py-3 text-center text-sm font-semibold text-white"
                                    style={{ backgroundColor: "var(--accent)" }}
                                >
                                    Start a Project
                                </Link>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
