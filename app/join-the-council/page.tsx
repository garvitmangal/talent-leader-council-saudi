import BecomeMember from "@/components/blocks/become-member";
import Cta2 from "@/components/blocks/cta2";
import ContactUs from "@/components/contact-us";
import Details from "@/components/join-council/details";
import FirstScreen from "@/components/join-council/first-screen";
import MemberPerks from "@/components/member-perks";
import Navbar from "@/components/navbar";
import { getConference } from "@/lib/api/conference";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Join the Council | TLC KSA',
    description: 'Join the exclusive community of business leaders in KSA. Network, learn and grow with fellow executives through curated experiences and knowledge sharing.',
    keywords: 'TLC KSA, Leadership Council, Business Network KSA, Executive Network Riyadh, Business Leaders KSA',
    openGraph: {
        title: 'Join the Council | TLC KSA',
        description: 'Join the exclusive community of business leaders in KSA. Network, learn and grow with fellow executives through curated experiences and knowledge sharing.',
        type: 'website',
        locale: 'en_US',
        siteName: 'TLC KSA',
        images: ['https://res.cloudinary.com/people-matters/image/upload/v1749082828/tlc/2025/website/uae/TLC_Thumbnail.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Join the Council | TLC KSA',
        description: 'Join the exclusive community of business leaders in KSA. Network, learn and grow with fellow executives through curated experiences and knowledge sharing.',
        images: ['https://res.cloudinary.com/people-matters/image/upload/v1749082828/tlc/2025/website/uae/TLC_Thumbnail.png'],
    }
}

export default async function JoinTheCouncil() {
    const conference = await getConference();
    if (!conference) {
        redirect("/")
    }

    return (
        <>
            <Navbar />

            <FirstScreen />

            <Details />

            <MemberPerks />

            <BecomeMember />

            <Cta2 />

            <ContactUs />
        </>
    );
}