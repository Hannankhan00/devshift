"use client";
import ServiceHero from "../components/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures";
import Technologies from "../components/Technologies";
import Process from "../../home/components/Process";
import FinalCTA from "../../home/components/FinalCTA";
import { Smartphone, Tablet, Monitor, Layers, Zap, Globe, Database } from "lucide-react";

export default function AppDevelopment() {
    const features = [
        {
            title: "iOS Development",
            description: "Native iOS applications built with Swift and SwiftUI for the best performance and user experience on Apple devices.",
            icon: Smartphone
        },
        {
            title: "Android Development",
            description: "Robust Android apps developed with Kotlin and Jetpack Compose to reach the widest global audience.",
            icon: Tablet
        },
        {
            title: "Cross-Platform Apps",
            description: "Efficient multi-platform solutions using React Native and Flutter to deploy on both iOS and Android from a single codebase.",
            icon: Layers
        },
        {
            title: "Progressive Web Apps",
            description: "Web apps that provide a native-like experience, installable on devices without app store friction.",
            icon: Globe
        },
        {
            title: "App Maintenance",
            description: "Ongoing support, updates, and optimization to ensure your app remains secure and performs at its best.",
            icon: Zap
        },
        {
            title: "UI/UX for Apps",
            description: "Mobile-first design approach ensuring intuitive navigation and engaging interfaces for small screens.",
            icon: Monitor
        }
    ];

    return (
        <>
            <ServiceHero
                title="App Development"
                description="We transform your ideas into powerful, user-friendly mobile applications that engage users and drive business growth."
                ctaText="Start Your Project"
                visualType="app"
            />

            <ServiceFeatures
                title="Mobile Solutions"
                subtitle="End-to-end mobile application development services for startups and enterprises."
                features={features}
            />

            <Technologies
                technologies={[
                    { name: "React Native", icon: <Layers size={40} /> },
                    { name: "Flutter", icon: <Layers size={40} /> },
                    { name: "Swift", icon: <Smartphone size={40} /> },
                    { name: "Kotlin", icon: <Tablet size={40} /> },
                    { name: "Firebase", icon: <Database size={40} /> }
                ]}
            />

            <Process />

            <FinalCTA />
        </>
    );
}
