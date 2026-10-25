import HeaderSection from "@/components/landing/header";
import HeroSection from "@/components/landing/hero";
import SocialProofMarqueeSection from "@/components/landing/social-proof-marquee";
import BenefitsSection from "@/components/landing/benefits";
import ProblemSection from "@/components/landing/problem";
import AgendaSection from "@/components/landing/agenda";
import FaqSection from "@/components/landing/faq";
import LeadCaptureSection from "@/components/landing/lead-capture";
import FooterSection from "@/components/landing/footer";

function SectionDivider() {
  return (
    <div className="container mx-auto px-5 md:px-4">
      <div className="section-glow-line" />
    </div>
  );
}

export default function LandingPageShell() {
  return (
    <>
      <HeaderSection />
      <main className="flex-1">
        <HeroSection />
        <SocialProofMarqueeSection />
        <SectionDivider />
        <BenefitsSection />
        <ProblemSection />
        <AgendaSection />
        <FaqSection />
        <LeadCaptureSection />
      </main>
      <FooterSection />
    </>
  );
}
