import Image from "next/image";

export default function FirstScreen() {
    return (
        <section className="h-screen w-full bg-black relative overflow-hidden">
            <div className="relative top-0 left-0 w-full h-full">

                {/* Background image */}
                <Image
                    src="/w_1800/v1749451077/tlc/2025/website/ksa/main-landing-bg.png"
                    fill
                    alt="Talent Leaders Council"
                    className="hidden md:block object-cover object-top"
                    priority
                />

                {/* Background image mobile */}
                <Image
                    src="/w_800/v1749451068/tlc/2025/website/ksa/main-landing-mobile-bg.png"
                    fill
                    alt="Talent Leaders Council"
                    className="block md:hidden object-cover object-top bg-white"
                    priority
                />
            </div>
        </section>
    )
}