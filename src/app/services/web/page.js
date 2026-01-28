"use client";
import ServiceHero from "../components/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures";
import Technologies from "../components/Technologies";
import Process from "../../home/components/Process";
import FinalCTA from "../../home/components/FinalCTA";
import { Code2, Globe, ShoppingCart, Database, Smartphone, Cloud } from "lucide-react";

export default function WebDevelopment() {
  const features = [
    {
      title: "Custom Web Applications",
      description: "Tailor-made solutions built with modern frameworks like Next.js and React to meet your specific business needs.",
      icon: Code2
    },
    {
      title: "E-commerce Solutions",
      description: "Scalable online stores with secure payment gateways, inventory management, and seamless checkout experiences.",
      icon: ShoppingCart
    },
    {
      title: "SaaS Platforms",
      description: "Robust Software-as-a-Service platforms designed for scalability, multi-tenancy, and high performance.",
      icon: Cloud
    },
    {
      title: "API Development",
      description: "Secure and efficient RESTful and GraphQL APIs to connect your applications and services.",
      icon: Database
    },
    {
      title: "Progressive Web Apps",
      description: "Web apps that offer a native-like experience with offline capabilities and push notifications.",
      icon: Smartphone
    },
    {
      title: "CMS Development",
      description: "Custom content management systems or integration with headless CMS for easy content updates.",
      icon: Globe
    }
  ];

  return (
    <>
      <ServiceHero
        title="Web Development"
        description="We build powerful, scalable, and secure web applications that drive business growth. From simple websites to complex enterprise solutions."
        ctaText="Start Your Project"
        visualType="web"
      />

      <ServiceFeatures
        title="Our Web Solutions"
        subtitle="Comprehensive web development services tailored to your needs."
        features={features}
      />

      <Technologies
        technologies={[
          { name: "Next.js", icon: <Globe size={40} /> },
          { name: "React", icon: <Code2 size={40} /> },
          { name: "Node.js", icon: <Database size={40} /> },
          { name: "TypeScript", icon: <Code2 size={40} /> },
          { name: "Tailwind CSS", icon: <Code2 size={40} /> },
          { name: "PostgreSQL", icon: <Database size={40} /> }
        ]}
      />

      <Process />

      <FinalCTA />
    </>
  );
}
