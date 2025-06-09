export default function ContactUs() {
    return (
        <section id="contact-us" className="bg-black">
            <div className="container mx-auto px-4 pt-[65px] pb-[56px]">
                <h2 className="font-neuething-sans text-white text-2xl md:text-3xl leading-normal font-bold text-center">
                    Contact us
                </h2>
                <p className="font-neuething-sans text-white leading-normal mt-2 text-center tracking-widest">
                    GREATNESS RECOGNISES GREATNESS
                </p>

                <div className="mt-10">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 text-white">
                        <div className="flex">
                            <div className="flex flex-col">
                                <div className="font-neuething-sans font-extrabold text-xs leading-normal text-orange flex items-center gap-4">
                                    Product Insights & Collaboration
                                    <div className="h-[1px] bg-orange flex-1"></div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-10 md:gap-6 mt-4 md:mt-1">
                                    <div className="font-poppins font-bold text-base space-y-2 flex-1">
                                        <div>ADITYA CHOPRA</div>
                                        <div>Head - New Markets, <br /> People Matters</div>
                                        <div className="break-words">aditya.chopra@gopeoplematters.com</div>
                                        <div>+91-9910 9108 80</div>
                                    </div>

                                    <div className="font-poppins font-bold text-base space-y-2 flex-1">
                                        <div>MEHAK JAIN</div>
                                        <div>Senior Associate - Community & Growth, New Markets, People Matters</div>
                                        <div className="break-words">mehak.jain@gopeoplematters.com</div>
                                        <div>+91-9560 9774 93</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex flex-col">
                                <div className="font-neuething-sans font-extrabold text-xs leading-normal text-orange flex items-center gap-4">
                                    Community
                                    <div className="h-[1px] bg-orange flex-1"></div>
                                </div>

                                <div className="font-poppins font-bold text-base space-y-2 mt-4 md:mt-1">
                                    <div>ABIDA KHAN</div>
                                    <div>Manager - New Markets, <br /> People Matters</div>
                                    <div className="break-words">abida.khan@gopeoplematters.com</div>
                                    <div>+91-9594 3770 04</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}