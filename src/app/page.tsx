"use client";

import HeroSection from "@/components/wedding/HeroSection";
import GalleryStrip from "@/components/wedding/GalleryStrip";
import QuoteSection from "@/components/wedding/QuoteSection";
import ScheduleSection from "@/components/wedding/ScheduleSection";
import LocationSection from "@/components/wedding/LocationSection";
import KoumbaroiSection from "@/components/wedding/KoumbaroiSection";
import MomentsSection from "@/components/wedding/MomentsSection";
import InvitationSection from "@/components/wedding/InvitationSection";
import FAQSection from "@/components/wedding/FAQSection";
import FloatingRSVP from "@/components/wedding/FloatingRSVP";
import RSVPModal from "@/components/wedding/RSVPModal";

const Index = () => {
  return (
    <main className="overflow-x-hidden relative">
      <RSVPModal />
      <div className="fixed inset-0 bg-gradient-to-b from-[#EC884C]/15 via-[#EC884C]/8 via-blue-50/40 via-blue-50/60 to-blue-100/70 -z-10 h-full"></div>
      <HeroSection />

      <QuoteSection />
      {/*   <ScheduleSection /> */}
      <LocationSection />
      <KoumbaroiSection />
      <MomentsSection />
      <InvitationSection />
      <FAQSection />

      <FloatingRSVP />
    </main>
  );
};

export default Index;
