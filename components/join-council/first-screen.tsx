import Image from "next/image";

export default function FirstScreen() {
    return (
        <section className="md:h-[75vh] h-[60vh] w-full bg-black relative overflow-hidden">
            <div className="relative top-0 left-0 w-full h-full">
                {/* Background image */}
                <Image
                    src="/v1749452414/tlc/2025/website/ksa/join-the-council-bg.png"
                    fill
                    alt="Talent Leaders Council"
                    className="hidden md:block object-cover object-top-left"
                    priority
                />

                {/* Background image mobile */}
                <Image
                    src="/v1749452441/tlc/2025/website/ksa/join-the-council-mobile-bg.png"
                    fill
                    alt="Talent Leaders Council"
                    className="block md:hidden object-cover object-top-left bg-white"
                    priority
                />
            </div>
        </section>
    )
}