import HeroParticles from "../home/components/hero-particles";
import DetailedServices from "./components/DetailedServices";
import Process from "../home/components/Process";
import FinalCTA from "../home/components/FinalCTA";

export const metadata = {
  title: "Engineering Services - Technoad",
  description: "Full-stack software engineering, custom cloud applications, mobile platforms, and AI automation.",
};

export default function Services() {
  return (
    <>
      <HeroParticles
        title="Our Engineering Services"
        description="From architectural discovery and prototyping to high-performance production systems, we engineer software built for scale, resilience, and business growth."
        ctaText="Start a Project"
        quantity={80}
        staticity={30}
      />

      <DetailedServices />

      <Process />

      <FinalCTA />
    </>
  );
}
