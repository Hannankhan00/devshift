import Hero from "./components/hero";
import Services from "./components/services";
import Results from "./components/Results";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";


export const metadata = {
    title: "Devshift | UK Public Sector Software Engineering & Digital Services",
    description: "Secure, accessible, cloud-native digital public services for UK Government, NHS trusts, and local authorities aligned with GDS Service Standards.",
};

export default function HomePage() {
    return (
        <>
            {/* GovTech Accessible Hero */}
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
