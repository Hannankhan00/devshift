import AboutHero from "./components/AboutHero";
import AboutStory from "./components/AboutStory";
import AboutValues from "./components/AboutValues";
import AboutJourney from "./components/AboutJourney";
import AboutTech from "./components/AboutTech";
import People from "../home/components/People";
import FinalCTA from "../home/components/FinalCTA";

export const metadata = {
  title: "About Technoad | Software House & Digital Product Studio",
  description:
    "Meet Technoad: a software house of engineers, designers and problem-solvers building web platforms, mobile apps and AI-driven software that lasts.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutJourney />
      <AboutTech />
      <People />
      <FinalCTA />
    </>
  );
}
