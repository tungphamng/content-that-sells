import HeaderSection from "@/components/landing/header";
import HeroSection from "@/components/landing/hero";
import SocialProofMarqueeSection from "@/components/landing/social-proof-marquee";
import BenefitsSection from "@/components/landing/benefits";
import ProblemSection from "@/components/landing/problem";
import AgendaSection from "@/components/landing/agenda";
import FaqSection from "@/components/landing/faq";
import LeadCaptureSection from "@/components/landing/lead-capture";
import FooterSection from "@/components/landing/footer";
import PremiumPreviewBanner from "@/components/landing/premium/premium-preview-banner";
import { SectionContainer } from "@/components/ui/section";

function SectionDivider() {
  return (
    <SectionContainer className="py-0">
      <div className="section-glow-line" aria-hidden />
    </SectionContainer>
  );
}

export default function PremiumLandingShell() {
  return (
    <div className="premium-landing min-h-full flex flex-col">
      <PremiumPreviewBanner />
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
    </div>
  );
}
