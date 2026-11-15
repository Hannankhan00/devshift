import Hero from "./components/hero";
import AboutSection from "./components/AboutSection";
import Services from "./components/services";
import FeaturedWork from "./components/FeaturedWork";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import People from "./components/People";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

export const metadata = {
    title: "Technoad | Software Development House & Digital Engineering Studio",
    description: "Technoad is an agile software development house engineering scalable web platforms, cloud architectures, and digital products.",
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <AboutSection />
            <Services />
            <FeaturedWork />
            <Process />
            <WhyChooseUs />
            <People />
            <FAQ />
            <FinalCTA />
        </>
    );
}
