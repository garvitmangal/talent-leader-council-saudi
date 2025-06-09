interface PromoCodeProps {
    promoCode: string;
    title: string;
    data: {
        promoCode: string;
        totalParticipants: number;
    };
    handlePromoCode: (promoCode: string) => void;
}

export default function PromoCode({ promoCode, title, data, handlePromoCode }: PromoCodeProps) {
    return (
        <div
            onClick={() => handlePromoCode(promoCode)}
            className={`border rounded-lg p-3 cursor-pointer hover:border-orange transition-colors ${data.promoCode === promoCode ? 'border-orange' : ''}`}
        >
            <div className="text-sm font-medium">{promoCode}</div>
            <div className="text-xs text-gray-600">{title}</div>
        </div>
    )
}