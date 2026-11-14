import HeroParticles from "../home/components/hero-particles";
import DetailedServices from "./components/DetailedServices";
import Process from "../home/components/Process";
import FinalCTA from "../home/components/FinalCTA";

export const metadata = {
  title: "GDS Capabilities & Public Sector Services - Devshift",
  description: "User-centred software engineering, legacy modernisation, and cloud digital services aligned with GDS standards and Technology Code of Practice.",
};

export default function Services() {
  return (
    <>
      <HeroParticles
        title="Public Sector Digital Capabilities"
        description="User-centred, secure, and compliant digital software engineering aligned with the GDS Service Standard and UK Government Technology Code of Practice from Discovery to Live."
        ctaText="Explore Capabilities"
        quantity={80}
        staticity={30}
      />

      <DetailedServices />

      <Process />

      <FinalCTA />
    </>
  );
}
