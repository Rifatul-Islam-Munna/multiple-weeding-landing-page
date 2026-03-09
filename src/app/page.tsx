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
import { weddingData } from "@/static-data/data";

const Index = () => {
  return (
    <main className="overflow-x-hidden relative">
      <RSVPModal data={weddingData.rsvpModal} />
      <div className="fixed inset-0 bg-gradient-to-b from-[#EC884C]/15 via-[#EC884C]/8 via-blue-50/40 via-blue-50/60 to-blue-100/70 -z-10 h-full"></div>
      <HeroSection
        data={weddingData.hero}
        rsvpButtonData={weddingData.rsvpButton}
      />

      <QuoteSection data={weddingData.quote} />
      {/*   <ScheduleSection data={weddingData.schedule} /> */}
      <LocationSection data={weddingData.location} />
      <KoumbaroiSection data={weddingData.koumbaroi} />
      <MomentsSection data={weddingData.moments} />
      <InvitationSection data={weddingData.invitation} />
      {/*   <FAQSection data={weddingData.faq} /> */}

      <FloatingRSVP data={weddingData.floatingRsvp} />
      <div className="text-center py-6 px-4">
        <p className="text-gray-500 text-base tracking-wide mb-1">
          Προαιρετική λίστα γάμου
        </p>
        <p className="text-gray-800 font-semibold text-lg tracking-widest">
          IBAN: GR3502603940000100201257005
        </p>
        <p className="text-gray-400 text-sm mt-1">(Eurobank)</p>
      </div>
    </main>
  );
};

export default Index;
