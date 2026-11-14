import Hero from "./components/hero";
import Services from "./components/services";
import Results from "./components/Results";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";


export const metadata = {
    title: "Devshift | Software Development House & Digital Engineering Studio",
    description: "Devshift is an agile software development house engineering scalable web platforms, cloud architectures, and digital products.",
};

export default function HomePage() {
    return (
        <>
            {/* Software House Animated Hero */}
            <Hero />
            
            {/* Services Section */}
            <Services />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Process Section */}
            <Process />

            {/* Results Section */}
            <Results />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Final CTA Section */}
            <FinalCTA />
        </>
    );
}
