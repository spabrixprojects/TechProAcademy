import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/HeroSection";
import { AboutCourse } from "@/components/AboutCourse";
import { CourseModules } from "@/components/CourseModules";
import { CareerOpportunities } from "@/components/CareerOpportunities";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutCourse />
        <CourseModules />
        <CareerOpportunities />
        <WhyChooseUs />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
