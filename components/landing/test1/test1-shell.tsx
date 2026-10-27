import HeaderSection from "@/components/landing/header";
import HeroSection from "@/components/landing/hero";
import SocialProofMarqueeSection from "@/components/landing/social-proof-marquee";
import LeadCaptureSection from "@/components/landing/lead-capture";
import FooterSection from "@/components/landing/footer";
import AudienceSection from "@/components/landing/test1/audience-section";
import OutcomesSection from "@/components/landing/test1/outcomes-section";
import ScheduleSection from "@/components/landing/test1/schedule-section";
import TestimonialsSection from "@/components/landing/test1/testimonials-section";
import CountdownSection from "@/components/landing/test1/countdown-section";

const navLinks = [
  { href: "#danh-cho-ai", label: "Đối tượng" },
  { href: "#loi-ich", label: "Lợi ích" },
  { href: "#thoi-gian", label: "Thời gian" },
  { href: "#chung-thuc", label: "Feedback" },
];

export default function Test1Shell() {
  return (
    <>
      <HeaderSection links={navLinks} />
      <main className="flex-1">
        <HeroSection programHash="#loi-ich" />
        <SocialProofMarqueeSection />
        <AudienceSection />
        <OutcomesSection />
        <ScheduleSection />
        <TestimonialsSection />
        <CountdownSection />
        <LeadCaptureSection />
      </main>
      <FooterSection />
    </>
  );
}
