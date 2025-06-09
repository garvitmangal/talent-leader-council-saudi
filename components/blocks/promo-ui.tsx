import { getPromoCode } from "@/lib/api/conference";
import { Button } from "../ui/button";
import PromoCode from "./promo-code";
import appConfig from "@/app.config.json";
import { Subscription } from "@/lib/types/type";
import { PaymentFormSchema } from "@/lib/zod-schemas/payment-form-schema";
import { UseFormReturn } from "react-hook-form";
import { PaymentData } from "../register/payment-ui";


interface PromoUIProps {
    subscription: Subscription;
    data: PaymentData;
    setData: (data: PaymentData) => void;
    setPromoCode: (promoCode: string) => void;
    promoCode: string;
    form: UseFormReturn<PaymentFormSchema>;
}

export default function PromoUI({ subscription, data, setData, setPromoCode, promoCode, form }: PromoUIProps) {
    const handlePromoCode = async (promoCode: string) => {
        setPromoCode(promoCode)

        const promoResponse = await getPromoCode({
            subscription,
            promoCode: promoCode,
            totalParticipants: data.totalParticipants,
            tax: appConfig.payment.tax,
            serviceProvider: form.watch('serviceProvider')
        })

        const parent = document.querySelector('.relative');
        const existingMsg = parent?.querySelector('.text-sm.mt-2');
        if (existingMsg) {
            parent?.removeChild(existingMsg);
        }

        const msg = document.createElement('div');
        msg.className = 'text-sm mt-2';

        if (promoResponse) {
            setData({ ...data, promoCode });
            msg.className += ' text-green-600';
            msg.textContent = '✓ Promo code applied successfully!';
        } else {
            setPromoCode('')
            setData({ ...data, promoCode: '' })
            msg.className += ' text-red-600';
            msg.textContent = '✕ Invalid promo code';
        }

        parent?.appendChild(msg);
    }


    return (
        <div className="space-y-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange focus:outline-none"
                />
                <Button
                    onClick={() => handlePromoCode(promoCode)}
                    className="absolute right-2 top-2 px-4 py-1 bg-orange text-white rounded-md text-sm hover:bg-orange/90 transition-colors"
                >
                    Apply
                </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <PromoCode
                    promoCode="EARLY10"
                    title="10% off for early birds"
                    data={data}
                    handlePromoCode={handlePromoCode}
                />
                <PromoCode
                    promoCode="GROUP20"
                    title="20% off for 3+ delegates"
                    data={data}
                    handlePromoCode={handlePromoCode}
                />
            </div>
        </div>
    )
}