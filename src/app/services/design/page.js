"use client";
import ServiceHero from "../components/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures";
import Technologies from "../components/Technologies";
import Process from "../../home/components/Process";
import FinalCTA from "../../home/components/FinalCTA";
import { Palette, Layout, PenTool, Users, Smartphone, Eye } from "lucide-react";

export default function Design() {
  const features = [
    {
      title: "UI Design",
      description: "Visually stunning interfaces that align with your brand identity and provide a delightful user experience.",
      icon: Palette
    },
    {
      title: "UX Research",
      description: "In-depth user research and testing to understand your audience and create intuitive user journeys.",
      icon: Users
    },
    {
      title: "Prototyping",
      description: "Interactive prototypes to visualize and test ideas before moving into development.",
      icon: Layout
    },
    {
      title: "Design Systems",
      description: "Comprehensive design systems to ensure consistency and efficiency across all your digital products.",
      icon: PenTool
    },
    {
      title: "Mobile-First Design",
      description: "Responsive designs that look and feel great on all devices, from mobile phones to large desktops.",
      icon: Smartphone
    },
    {
      title: "Brand Identity",
      description: "Creating cohesive visual identities including logos, typography, and color palettes.",
      icon: Eye
    }
  ];

  return (
    <>
      <ServiceHero
        title="UI/UX Design"
        description="We craft beautiful, intuitive, and user-centered designs that elevate your brand and delight your users."
        ctaText="Start Your Project"
        visualType="design"
      />

      <ServiceFeatures
        title="Our Design Services"
        subtitle="Creating exceptional digital experiences through thoughtful design."
        features={features}
      />

      <Technologies
        technologies={[
          { name: "Figma", icon: <Layout size={40} /> },
          { name: "Adobe XD", icon: <PenTool size={40} /> },
          { name: "Photoshop", icon: <Palette size={40} /> },
          { name: "Illustrator", icon: <PenTool size={40} /> },
          { name: "After Effects", icon: <Eye size={40} /> }
        ]}
      />

      <Process />

      <FinalCTA />
    </>
  );
}
