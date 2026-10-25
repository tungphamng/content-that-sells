import AltPreviewBanner from "@/components/landing/alt/alt-preview-banner";
import AltHeader from "@/components/landing/alt/alt-header";
import AltHero from "@/components/landing/alt/alt-hero";
import AltOutcomesBento from "@/components/landing/alt/alt-outcomes-bento";
import AltPainStrip from "@/components/landing/alt/alt-pain-strip";
import AltAgendaTimeline from "@/components/landing/alt/alt-agenda-timeline";
import AltFaqRegister from "@/components/landing/alt/alt-faq-register";
import AltMobileCta from "@/components/landing/alt/alt-mobile-cta";
import FooterSection from "@/components/landing/footer";

export default function AltLandingShell() {
  return (
    <div className="alt-landing min-h-full flex flex-col pb-20 md:pb-0">
      <AltPreviewBanner />
      <AltHeader />
      <main className="flex-1">
        <AltHero />
        <AltOutcomesBento />
        <AltPainStrip />
        <AltAgendaTimeline />
        <AltFaqRegister />
      </main>
      <FooterSection />
      <AltMobileCta />
    </div>
  );
}
