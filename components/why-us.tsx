import Image from "next/image";

export default function WhyUs() {
    return (
        <section id="why-us">
            <div className="container mx-auto pt-[40px] md:pt-[65px] pb-[36px] md:pb-[56px] px-4">
                <h2 className="font-neuething-sans text-black text-2xl md:text-3xl leading-normal font-bold text-center">
                    What sets TLC apart?
                </h2>
                <p className="font-neuething-sans text-black leading-normal mt-2 text-center tracking-widest">
                    CREDIBILITY OVER CREDENTIALS
                </p>

                <div className="flex flex-col gap-8 md:gap-10 mt-4">
                    <div className="flex flex-col-reverse md:flex-row md:items-center gap-4">
                        <div className="flex flex-col gap-4 w-full md:w-1/2 justify-center p-6 md:p-14">
                            <h4 className="font-neuething-sans text-black text-xl md:text-2xl leading-normal">Country Focus</h4>
                            <p className="font-poppins text-black text-base md:text-lg leading-normal">
                                Addressing unique challenges and opportunities,
                                TLC emphasizes national priorities within the Middle
                                East while incorporating global best practices.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <Image src="/v1748556558/tlc/2025/website/uae/Asset_8.png" alt="" width={400} height={300} className="w-full max-w-[300px] md:max-w-[400px]" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <Image src="/v1748556558/tlc/2025/website/uae/Asset_11.png" alt="" width={400} height={300} className="w-full max-w-[300px] md:max-w-[400px]" />
                        </div>

                        <div className="flex flex-col gap-4 w-full md:w-1/2 justify-center p-6 md:p-14">
                            <h4 className="font-neuething-sans text-black text-xl md:text-2xl leading-normal">
                                Blended Learning & Networking
                            </h4>
                            <p className="font-poppins text-black text-base md:text-lg leading-normal">
                                Combining virtual and in-person events for holistic
                                engagement, TLC provides mentorship,
                                masterclasses, and certifications to upskill members.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row gap-4">
                        <div className="flex flex-col gap-4 w-full md:w-1/2 justify-center p-6 md:p-14">
                            <h4 className="font-neuething-sans text-black text-xl md:text-2xl leading-normal">
                                Exclusive <br className="hidden md:block" />
                                Opportunities
                            </h4>
                            <p className="font-poppins text-black text-base md:text-lg leading-normal">
                                Access to exclusive leaders&apos; meets, prestigious
                                conferences, study tours, and editorial features.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <Image src="/v1748556558/tlc/2025/website/uae/Asset_10.png" alt="" width={400} height={300} className="w-full max-w-[300px] md:max-w-[400px]" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <Image src="/v1749012253/tlc/2025/website/uae/Asset_12.png" alt="Community Led Growth" width={400} height={300} className="w-full max-w-[300px] md:max-w-[400px]" />
                        </div>

                        <div className="flex flex-col gap-4 w-full md:w-1/2 justify-center p-6 md:p-14">
                            <h4 className="font-neuething-sans text-black text-xl md:text-2xl leading-normal">
                                Community <br className="hidden md:block" />
                                -Led Growth
                            </h4>
                            <p className="font-poppins text-black text-base md:text-lg leading-normal">
                                Members actively shape the agenda through
                                mentorship, case studies, and regional meets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}