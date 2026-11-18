import CareersHero from "./components/CareersHero";
import CareersWhy from "./components/CareersWhy";
import CareersOpen from "./components/CareersOpen";
import People from "../home/components/People";

export const metadata = {
  title: "Careers | Join the Technoad Team",
  description:
    "Build great software with great people. Explore careers at Technoad across engineering, design, product delivery and quality.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersWhy />
      <People />
      <CareersOpen />
    </>
  );
}
