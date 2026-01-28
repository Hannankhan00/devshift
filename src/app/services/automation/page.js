"use client";
import ServiceHero from "../components/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures";
import Technologies from "../components/Technologies";
import Process from "../../home/components/Process";
import FinalCTA from "../../home/components/FinalCTA";
import { Bot, Workflow, Brain, Zap, MessageSquare, BarChart, Code2 } from "lucide-react";

export default function Automation() {
  const features = [
    {
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and business processes with custom automation solutions.",
      icon: Workflow
    },
    {
      title: "AI Chatbots",
      description: "Intelligent chatbots that provide 24/7 customer support and engagement.",
      icon: MessageSquare
    },
    {
      title: "Machine Learning",
      description: "Leverage data to build predictive models and intelligent systems.",
      icon: Brain
    },
    {
      title: "Process Optimization",
      description: "Analyze and optimize your existing workflows for maximum efficiency.",
      icon: Zap
    },
    {
      title: "RPA Solutions",
      description: "Robotic Process Automation to handle high-volume, repeatable tasks.",
      icon: Bot
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights with advanced analytics and visualization.",
      icon: BarChart
    }
  ];

  return (
    <>
      <ServiceHero
        title="Automation & AI"
        description="Leverage the power of artificial intelligence and automation to transform your business operations and stay ahead of the curve."
        ctaText="Start Your Project"
        visualType="automation"
      />

      <ServiceFeatures
        title="Intelligent Solutions"
        subtitle="Future-proof your business with our cutting-edge automation and AI services."
        features={features}
      />

      <Technologies
        technologies={[
          { name: "Python", icon: <Code2 size={40} /> },
          { name: "Zapier", icon: <Zap size={40} /> },
          { name: "Make", icon: <Workflow size={40} /> },
          { name: "OpenAI API", icon: <Brain size={40} /> },
          { name: "LangChain", icon: <Bot size={40} /> }
        ]}
      />

      <Process />

      <FinalCTA />
    </>
  );
}
