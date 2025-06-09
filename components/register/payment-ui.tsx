"use client"

import formatCurrency from "@/lib/currency-formater";
import { Conference, Subscription, PriceResponse, CreatePaymentBody, Country } from "@/lib/types/type";
import { useEffect, useState } from "react";
import PaymentForm from "../forms/payment-form";
import { createPayment, getSubscriptionPrices } from "@/lib/api/conference";
import { paymentFormSchema } from "@/lib/zod-schemas/payment-form-schema";
import { PaymentFormSchema } from "@/lib/zod-schemas/payment-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import appConfig from "@/app.config.json"
import PromoUI from "../blocks/promo-ui";
import { useSearchParams } from "next/navigation";

interface PaymentUIProps {
    conference: Conference;
    subscription: Subscription;
    prices: PriceResponse;
    countries: Country[]
}

export interface PaymentData {
    totalParticipants: number;
    promoCode: string;
}

export default function PaymentUI({ conference, subscription, prices, countries }: PaymentUIProps) {
    const searchParams = useSearchParams();
    const [data, setData] = useState({
        totalParticipants: 1,
        promoCode: ''
    })

    const [promoCode, setPromoCode] = useState('')
    const [calculations, setCalculations] = useState(prices);

    const form = useForm<PaymentFormSchema>({
        resolver: zodResolver(paymentFormSchema),
        defaultValues: {
            serviceProvider: "N",
            firstName: "",
            lastName: "",
            email: "",
            country: "",
            mobile: "",
            city: "",
            designation: "",
            company: "",
            hear: "",
            terms: false,
        },
    });

    const onSubmit = async (formData: PaymentFormSchema) => {
        const trackers: Record<string, string> = {};
        for (const param of appConfig.trackers) {
            const value = searchParams.get(param);
            if (value) {
                trackers[param] = value;
            }
        }

        const body: CreatePaymentBody = {
            ...formData,
            techhr_page_id: conference.id,
            app_group: conference.app_group,
            gst: appConfig.payment.tax,
            passes: data.totalParticipants,
            subscription_id: subscription.id,
            promoCode,
            successUrl: process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL || "",
            cancelUrl: process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL || "",
            trackers,
            subscription_type: subscription.type
        }

        const response = await createPayment(body)
        if (!response) {
            toast.error("Failed to create payment")
            return
        }

        const { url } = response
        window.location.href = url
    };

    useEffect(() => {
        getSubscriptionPrices(subscription, {
            totalParticipants: data.totalParticipants,
            gst: appConfig.payment.tax,
            promoCode: data.promoCode
        }).then((res) => {
            if (res) {
                setCalculations(res.prices)
            }
        }).catch((err) => {
            console.log("error", err)
        })
    }, [data, subscription])

    const handleParticipantsCount = (count: number) => {
        setData({ ...data, totalParticipants: count })
    }

    return (
        <div className="grid md:grid-cols-2 mb-10 px-3">
            <div className="md:border-r-2 md:border-dotted md:px-12">
                <div className="mt-14">
                    <h2 className="font-neuething-sans text-xl md:text-2xl font-bold">
                        Talent Leaders Council Member Pass
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm">
                        Join the exclusive community of talent leaders
                    </p>
                </div>

                <hr className="border-0 border-t border-light-gray my-8" />

                <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div className="font-poppingsregular">
                                <span className="text-sm text-gray-600">Number of Delegates</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button type="button"
                                    className="w-8 h-8 rounded-full border bg-white flex items-center justify-center font-poppingsregular hover:ring-2 transition-all"
                                    onClick={() => handleParticipantsCount(data.totalParticipants - 1)}
                                    disabled={data.totalParticipants <= 1}>
                                    -
                                </button>
                                <span className="text-lg font-medium w-8 text-center">{calculations.totalParticipants}</span>
                                <button type="button"
                                    className="w-8 h-8 rounded-full border bg-white flex items-center justify-center font-poppingsregular hover:ring-2 transition-all"
                                    onClick={() => handleParticipantsCount(data.totalParticipants + 1)}>
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-between text-sm">
                            <span className="text-gray-600">Fee per delegate:</span>
                            <span className="font-medium">{formatCurrency(Number(calculations.selectedAmt), calculations.currency)}</span>
                        </div>
                    </div>

                    {
                        !appConfig.promoCodes.disabled && (
                            <PromoUI
                                subscription={subscription}
                                data={data}
                                setData={setData}
                                setPromoCode={setPromoCode}
                                promoCode={promoCode}
                                form={form} />
                        )
                    }

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Total Amount:</span>
                            <span className="text-2xl font-bold text-orange">
                                {formatCurrency(Number(calculations.finalPayableAmount), calculations.currency)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:px-12 mt-8 md:mt-0">
                <div className="mt-14">
                    <h2 className="font-neuething-sans text-xl md:text-2xl font-bold">
                        Let&apos;s get you onboard!
                    </h2>
                </div>

                <hr className="border-0 border-t border-light-gray my-8" />

                <div className="mt-4">
                    <PaymentForm countries={countries} form={form} onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}