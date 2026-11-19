import TeamHero from "./components/TeamHero";
import TeamGrid from "./components/TeamGrid";
import TeamCulture from "./components/TeamCulture";

export const metadata = {
  title: "Meet the Team | Technoad",
  description:
    "Meet the engineers, designers and delivery leads behind Technoad, a software house building web platforms, mobile apps and AI-driven software.",
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamGrid />
      <TeamCulture />
    </>
  );
}
