import ContactUs from "@/components/contact-us";
import Navbar from "@/components/navbar";
import PaymentUI from "@/components/register/payment-ui";
import { getCountries, getSubscriptionPrices, getSubscriptions } from "@/lib/api/conference";
import { redirect } from "next/navigation";
import appConfig from "@/app.config.json"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Register | TLC UAE',
    description: 'Register for the Talent Leaders Council. Join the exclusive community of business leaders in UAE. Network, learn and grow with fellow executives through curated experiences and knowledge sharing.',
    keywords: 'TLC UAE, Leadership Council, Business Network UAE, Executive Network Dubai, Business Leaders UAE',
    openGraph: {
        title: 'Register | TLC UAE',
        description: 'Register for the Talent Leaders Council. Join the exclusive community of business leaders in UAE. Network, learn and grow with fellow executives through curated experiences and knowledge sharing.',
        type: 'website',
        locale: 'en_US',
        siteName: 'TLC UAE',
        images: ['https://res.cloudinary.com/people-matters/image/upload/v1749082828/tlc/2025/website/uae/TLC_Thumbnail.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Register | TLC UAE',
        description: 'Register for the Talent Leaders Council. Join the exclusive community of business leaders in UAE. Network, learn and grow with fellow executives through curated experiences and knowledge sharing.',
        images: ['https://res.cloudinary.com/people-matters/image/upload/v1749082828/tlc/2025/website/uae/TLC_Thumbnail.png'],
    }
}

export default async function Register() {
    const subscriptionResponse = await getSubscriptions()
    if (!subscriptionResponse) return redirect("/")

    const { subscriptions } = subscriptionResponse
    const subscription = subscriptions.find(subscription => subscription.type === appConfig.payment.plan[0].type)
    if (!subscription) return redirect("/")

    const subscriptionPrices = await getSubscriptionPrices(
        subscription,
        { totalParticipants: 1, gst: appConfig.payment.tax }
    )

    if (!subscriptionPrices) return redirect("/")

    const { conference, prices } = subscriptionPrices

    const countries = await getCountries()
    if (!countries) return redirect("/")

    return (
        <>
            <Navbar />
            <div className="h-10 md:h-20"></div>
            <PaymentUI conference={conference} subscription={subscription} prices={prices} countries={countries} />
            <ContactUs />
        </>
    )
}