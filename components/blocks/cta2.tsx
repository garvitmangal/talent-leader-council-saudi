import BecomeAMember from "../become-a-member";
import DownloadBrochureBtn from "../buttons/download-brochure-btn";

export default function Cta2() {
    return (
        <section id="cta" className="bg-black">
            <div className="container mx-auto pt-[65px] pb-[56px]">
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-3xl mx-auto">
                    <BecomeAMember className="bg-white w-full sm:w-auto" spanClassName="text-sm sm:text-base" />
                    <DownloadBrochureBtn
                        className="bg-gradient-to-r from-[#F06280] via-[#F79721] to-[#F79D67] text-white"
                        spanClassName="text-sm sm:text-base" />
                </div>
            </div>

        </section>
    )
}