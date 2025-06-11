import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about-us" className="bg-white w-full">
            <div className="container mx-auto pt-[65px] pb-[56px] px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="w-full h-80 md:h-full text-center font-neuething-sans text-black text-3xl leading-normal place-self-start relative">
                        <Image
                            src="/v1748549218/tlc/2025/website/uae/work_tech_true_net_worth.webp"
                            alt="Work Tech's True Net Worth"
                            fill
                            className="h-auto object-contain" />
                    </div>

                    <div className="flex flex-col gap-8 order-1 md:order-2">
                        <div>
                            <h2 className="font-neuething-sans text-black text-2xl md:text-3xl leading-normal font-bold text-center md:text-left">
                                About us
                            </h2>

                            <h4 className="font-neuething-sans text-black md:text-left text-center leading-normal tracking-widest mt-2">
                                KSA&apos;S MOST ELITE THINK TANK
                            </h4>
                        </div>

                        <div className="flex flex-col gap-6">
                            <p className="font-poppins text-black text-base md:leading-normal leading-relaxed">
                                Talent Leaders Council is poised to be an ultimate talent think & action tank - a powerhouse
                                of HR evangelists, policymakers, industry leaders, and academia coming together to rewrite
                                the talent playbook for the KSA.
                            </p>

                            <p className="font-poppins text-black text-base md:leading-normal leading-relaxed">
                                TLC is an exclusive, membership-driven community dedicated to senior HR professionals and
                                thought leaders in KSA, nurtured by uniting the most influential voices across the region.
                                With this initiative, we aim to drive impactful discussions, foster collaboration, share
                                best practices and empower leaders with the tools and insights to build resilient, inclusive,
                                and future-ready workforces.
                            </p>

                            <p className="font-poppins text-black text-base md:leading-normal leading-relaxed">
                                We aim to position KSA as a global hub for top talent and forward-thinking organizations by
                                aligning strategies with national development goals. With its unique value proposition and
                                structured approach, TLC is set to redefine community engagement and professional growth for
                                talent leaders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}