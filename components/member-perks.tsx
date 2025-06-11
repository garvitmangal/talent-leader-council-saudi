import Image from 'next/image';

export default function MemberPerks() {
    return (
        <section id="member-perks">
            <div className="container mx-auto pt-[75px] pb-[76px]">
                <h2 className="font-neuething-sans text-2xl md:text-3xl leading-normal font-bold text-center px-4">
                    A TLC member gets
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-between mt-16 md:mt-24 px-4 md:px-16 gap-8 md:gap-0">
                    <div className="flex-1 flex flex-col items-center text-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 mb-6 relative">
                            <Image
                                src="/v1749635067/tlc/2025/website/ksa/Asset_49.png"
                                alt="Perk 1"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="font-neuething-sans text-base max-w-sm">
                            An emblem of prestige that represents your influence and innovation in the talent space.
                        </p>
                    </div>

                    <div className="hidden md:block w-px h-40 bg-gray-300 mx-10" />

                    <div className="flex-1 flex flex-col items-center text-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 mb-6 relative">
                            <Image
                                src="/v1749635066/tlc/2025/website/ksa/Asset_50.png"
                                alt="Perk 2"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="font-neuething-sans text-base max-w-sm">
                            A recognition of your dedication to advancing talent leadership – crafted with prestige and purpose.
                        </p>
                    </div>

                    <div className="hidden md:block w-px h-40 bg-gray-300 mx-10" />

                    <div className="flex-1 flex flex-col items-center text-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 mb-6 relative">
                            <Image
                                src="/v1749635066/tlc/2025/website/ksa/Asset_51.png"
                                alt="Perk 3"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="font-neuething-sans text-base max-w-sm">
                            The essential toolkit for talent leaders shaping the future of work and development in the Middle East.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}