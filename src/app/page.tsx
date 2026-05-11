import { Banner } from "./_components/banners/Banner";
import { Footer } from "./_components/footers/Footer";
import Header from "./_components/headers/Header";
import AboutSection from "./_components/sections/AboutSection";
import { ContactSection } from "./_components/sections/ContactSection";
import ServiceSection from "./_components/sections/ServiceSection";
import StepsSection from "./_components/sections/StepsSection";
import { TestimonialsSection } from "./_components/sections/TestimonialsSection";
import { WhatsAppSection } from "./_components/sections/WhatsAppSection";



export default function page() {
    return (
        <>
            <Header />
            <Banner />
            <AboutSection />
            <ServiceSection />
            <StepsSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
            <WhatsAppSection />
        </>
    )
}
