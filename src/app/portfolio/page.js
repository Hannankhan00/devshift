"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Head from "next/head";

export default function Portfolio() {
  const products = [
    {
      title: "E-Commerce Platform",
      link: "https://example-ecommerce.com",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop",
      tech: "Next.js, Stripe, Sanity",
      keyPoints: ["Custom Cart Logic", "Real-time Inventory", "Secure Checkout"]
    },
    {
      title: "SaaS Dashboard",
      link: "https://example-saas.com",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      tech: "React, TypeScript, Tailwind",
      keyPoints: ["Data Visualization", "User Management", "Dark Mode Support"]
    },
    {
      title: "Portfolio Website",
      link: "https://example-portfolio.com",
      thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
      tech: "Next.js, Framer Motion",
      keyPoints: ["Smooth Animations", "SEO Optimized", "Responsive Design"]
    },
    {
      title: "Corporate Website",
      link: "https://example-corporate.com",
      thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
      tech: "Next.js, Contentful, Vercel",
      keyPoints: ["CMS Integration", "Multi-language", "Fast Loading"]
    },
    {
      title: "Mobile App Landing",
      link: "https://example-mobile.com",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      tech: "React, Tailwind, Animation",
      keyPoints: ["App Store Links", "Feature Showcase", "Newsletter Signup"]
    },
    {
      title: "Blog Platform",
      link: "https://example-blog.com",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
      tech: "Next.js, MDX, Notion API",
      keyPoints: ["Markdown Support", "Category Filtering", "Reading Time"]
    },
    {
      title: "Restaurant Website",
      link: "https://example-restaurant.com",
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
      tech: "Next.js, Sanity, Online Orders",
      keyPoints: ["Menu Management", "Reservation System", "Gallery"]
    },
    {
      title: "Agency Website",
      link: "https://example-agency.com",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop",
      tech: "Next.js, Framer Motion, CMS",
      keyPoints: ["Case Studies", "Team Profiles", "Contact Forms"]
    },
    {
      title: "Tech Startup",
      link: "https://example-startup.com",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      tech: "React, TypeScript, D3.js",
      keyPoints: ["Interactive Charts", "Live Data", "Investor Portal"]
    },
    {
      title: "Healthcare Platform",
      link: "https://example-healthcare.com",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
      tech: "Next.js, HIPAA Compliant",
      keyPoints: ["Patient Portal", "Appointment Booking", "Secure Messaging"]
    },
    {
      title: "Educational Portal",
      link: "https://example-education.com",
      thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop",
      tech: "Next.js, Video Streaming",
      keyPoints: ["Course Management", "Progress Tracking", "Quizzes"]
    },
    {
      title: "Real Estate Site",
      link: "https://example-realestate.com",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
      tech: "Next.js, Maps API, Search",
      keyPoints: ["Property Listings", "Map Integration", "Virtual Tours"]
    },
    {
      title: "Non-Profit Website",
      link: "https://example-nonprofit.com",
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2064&auto=format&fit=crop",
      tech: "Next.js, Donation Integration",
      keyPoints: ["Donation System", "Event Calendar", "Volunteer Signup"]
    },
    {
      title: "Fitness App",
      link: "https://example-fitness.com",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
      tech: "React Native, Firebase",
      keyPoints: ["Workout Tracking", "Social Features", "Progress Photos"]
    },
    {
      title: "Finance Dashboard",
      link: "https://example-finance.com",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tech: "Next.js, Charts, Analytics",
      keyPoints: ["Financial Reports", "Budget Planning", "Investment Tracking"]
    }
  ];

  return (
    <>
      <Head>
        <title>Our Portfolio — Showcase of Exceptional Projects | Technoad</title>
        <meta name="description" content="Explore our portfolio of successful web development projects. We build exceptional digital experiences with cutting-edge technology and beautiful design." />
        <meta name="keywords" content="portfolio, web development projects, React, Next.js, UI/UX design, automation" />
      </Head>

      <HeroParallax products={products} />
    </>
  );
}
