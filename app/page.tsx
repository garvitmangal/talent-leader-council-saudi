import FirstScreen from "@/components/first-screen";
import JoinInnerCircle from "@/components/join-inner-circle";
import AboutUs from "@/components/about-us";
import NetworkingGroup from "@/components/networking-group";
import WhyUs from "@/components/why-us";
import AdvisoryBoard from "@/components/advisory-board";
import WhyJoin from "@/components/why-join";
import TlcJourney from "@/components/tlc-journey";
import ContactUs from "@/components/contact-us";
import MemberPerks from "@/components/member-perks";
import Cta from "@/components/blocks/cta";
import Navbar from "@/components/navbar";
import { getConference } from "@/lib/api/conference";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'TLC KSA | Talents Leadership Council',
  description: 'Join the exclusive community of business leaders in KSA. Network, learn and grow with fellow executives through curated experiences and knowledge sharing.',
  keywords: 'TLC KSA, Leadership Council, Business Network KSA, Executive Network Riyadh, Business Leaders KSA',
  openGraph: {
    title: 'TLC KSA | Talents Leadership Council',
    description: 'Join the exclusive community of business leaders in UAE. Network, learn and grow with fellow executives through curated experiences and knowledge sharing.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TLC KSA',
    images: ['https://res.cloudinary.com/people-matters/image/upload/v1749082828/tlc/2025/website/uae/TLC_Thumbnail.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TLC KSA | Talents Leadership Council',
    description: 'Join the exclusive community of business leaders in KSA. Network, learn and grow with fellow executives through curated experiences and knowledge sharing.',
    images: ['https://res.cloudinary.com/people-matters/image/upload/v1749082828/tlc/2025/website/uae/TLC_Thumbnail.png'],
  }
};

export default async function LandingPage() {
  const conference = await getConference();
  if (!conference) {
    return <div>No conference found</div>;
  }

  return (
    <>
      <Navbar />

      <FirstScreen />

      <JoinInnerCircle />

      <AboutUs />

      <NetworkingGroup />

      <WhyUs />

      <AdvisoryBoard />

      <WhyJoin />

      <TlcJourney />

      <MemberPerks />

      <Cta />

      <ContactUs />
    </>
  );
}
