import HeroParticles from "../home/components/hero-particles";
import DetailedServices from "./components/DetailedServices";
import Process from "../home/components/Process";
import FinalCTA from "../home/components/FinalCTA";

export const metadata = {
  title: "Services - Devshift",
  description: "Professional web development, UI/UX design, and automation & AI solutions.",
};

export default function Services() {
  return (
    <>
      <HeroParticles
        title="Our Services"
        description="Comprehensive digital solutions tailored to elevate your business. From concept to execution, we deliver excellence in every line of code and pixel of design."
        ctaText="Start Your Project"
        quantity={80}
        staticity={30}
      />

      <DetailedServices />

      <Process />

      <FinalCTA />
    </>
  );
}
