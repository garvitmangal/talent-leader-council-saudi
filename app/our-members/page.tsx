import BecomeMember from "@/components/blocks/become-member";
import Cta2 from "@/components/blocks/cta2";
import ContactUs from "@/components/contact-us";
import Navbar from "@/components/navbar";
import Members from "@/components/our-members/members";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Our Members | TLC UAE',
    description: 'Meet the leaders and experts who make up the Talent Leaders Council. Discover their backgrounds, expertise, and contributions to the community.',
    keywords: 'TLC UAE, Leadership Council, Business Network UAE, Executive Network Dubai, Business Leaders UAE',
    twitter: {
        card: 'summary_large_image',
        title: 'Our Members | TLC UAE',
        description: 'Meet the leaders and experts who make up the Talent Leaders Council. Discover their backgrounds, expertise, and contributions to the community.',
        images: ['https://res.cloudinary.com/people-matters/image/upload/v1749082828/tlc/2025/website/uae/TLC_Thumbnail.png'],
    },
    openGraph: {
        title: 'Our Members | TLC UAE',
        description: 'Meet the leaders and experts who make up the Talent Leaders Council. Discover their backgrounds, expertise, and contributions to the community.',
        type: 'website',
        locale: 'en_US',
        siteName: 'TLC UAE',
        images: ['https://res.cloudinary.com/people-matters/image/upload/v1749082828/tlc/2025/website/uae/TLC_Thumbnail.png'],
    },
}


export default async function OurMembers() {
    return (
        <>
            <Navbar darkMode={true} />

            <Members />

            <BecomeMember />

            <Cta2 />

            <ContactUs />
        </>
    )
}