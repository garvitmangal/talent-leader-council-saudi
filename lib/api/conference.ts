import z from "zod";
import { Conference, Country, CreatePaymentBody, PriceResponse, Speaker, Subscription } from "../types/type";
import { brochureFormSchema } from "../zod-schemas/brochure-form-schema";
import appConfig from "@/app.config.json"


export async function getConference() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/conference`, {
        cache: 'force-cache',
        next: {
            revalidate: 60 * 60 * 1 // 1 hours
        },
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            app_group: appConfig.app_group
        })
    });

    if (!response.ok) {
        console.log("Failed to get conference")
        return null
    }

    const data = await response.json()

    if (data.length > 0) {
        return data[0] as Conference
    }

    return null
}

export async function getCountries() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/countries`, {
        cache: 'force-cache',
        next: {
            revalidate: 60 * 60 * 24 // 24 hours
        }
    })

    if (!response.ok) {
        console.log("Failed to get countries")
        return null
    }

    const data = await response.json()

    const uae = data.find((country: Country) => country.name === "Saudi Arabia")

    const countries = data.filter((country: Country) => country.id !== uae.id)
    return [uae, ...countries] as Country[]
}

export async function downloadBrochure(
    data: z.infer<typeof brochureFormSchema>,
    type: "delegate" | "partner" | "workshop",
    trackers: Record<string, string> = {}
) {
    const conference = await getConference();
    if (!conference) {
        return null
    }

    const requestBody = {
        ...data,
        sessionId: conference.id,
        type,
        trackers
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/download`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        console.log("Failed to download brochure")
        return null
    }

    const respData = await response.json()
    return respData
}

export async function getConferenceMembers(type: "think-tank" | "speaker" | "startup-mentors") {
    const conference = await getConference();
    if (!conference) {
        return null
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/speakers`, {
        // cache: 'no-store',
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            techhr_page_id: conference.id,
            startup_mentors: type === "startup-mentors" ? true : false,
            is_think_tank: type === "think-tank" ? true : false
        })
    })

    if (!response.ok) {
        console.log("Failed to get conference members")
        return null
    }

    const data = await response.json()
    return { conference, members: data as Speaker[] }
}

export async function getSubscriptions() {
    const conference = await getConference();
    if (!conference) {
        return null
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscriptions`, {
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            techhr_page_id: conference.id,
            type: appConfig.payment.plan[0].type
        })
    })

    if (!response.ok) {
        console.log("Failed to get subscriptions")
        return null
    }

    const data = await response.json()
    return { conference, subscriptions: data as Subscription[] }
}

interface GetSubscriptionPricesProps {
    totalParticipants: number
    promoCode?: string
    gst: number
}

export async function getSubscriptionPrices(subscription: Subscription, { totalParticipants, gst, promoCode }: GetSubscriptionPricesProps) {
    try {
        const conference = await getConference()
        if (!conference) {
            throw new Error("Conference not found")
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/price`, {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                totalParticipants,
                subscriptionId: subscription.id,
                sessionId: conference.id,
                gst,
                promoCode
            })
        })

        if (!response.ok) {
            throw new Error("Failed to get subscription prices")
        }

        const data = await response.json()
        return { conference, subscription, prices: data as PriceResponse }
    } catch (error) {
        console.log("Failed to get subscription prices", error)
        return null
    }
}

interface GetPromoCodeProps {
    subscription: Subscription,
    promoCode: string,
    totalParticipants: number,
    tax: number,
    serviceProvider: string
}

export async function getPromoCode({ subscription, promoCode, totalParticipants, tax, serviceProvider }: GetPromoCodeProps) {
    try {
        const conference = await getConference()
        if (!conference) {
            throw new Error("Conference not found")
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/promo`, {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subscriptionId: subscription.id,
                sessionId: conference.id,
                totalParticipants,
                tax,
                serviceProvider,
                promoCode
            })
        })

        if (!response.ok) {
            throw new Error("Failed to get promo code")
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.log("Failed to get promo code", error)
        return null
    }
}

export async function createPayment(body: CreatePaymentBody) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            throw new Error("Failed to create payment")
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.log("Failed to create payment", error)
        return null
    }
}

export async function confirmPayment(token: string, order_id: string) {
    try {
        const conference = await getConference()
        if (!conference) {
            throw new Error("Conference not found")
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/confirm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                order_id,
                techhr_page_id: conference.id,
                gst: appConfig.payment.tax
            })
        })

        if (!response.ok) {
            throw new Error("Failed to get payment")
        }

        const data = await response.json()
        return { conference, confirmed: data }
    } catch (error) {
        console.log("Failed to confirm payment", error)
        return null
    }
}

export async function cancelPayment(token: string, order_id: string) {
    try {
        const conference = await getConference()
        if (!conference) {
            throw new Error("Conference not found")
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cancel`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                order_id,
                techhr_page_id: conference.id,
                gst: appConfig.payment.tax
            })
        })

        if (!response.ok) {
            throw new Error("Failed to cancel payment")
        }

        const data = await response.json()
        return { conference, cancelled: data }
    } catch (error) {
        console.log("Failed to cancel payment", error)
        return null
    }
}