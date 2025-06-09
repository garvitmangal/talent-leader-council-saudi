import DownloadBrochureBtn from "../buttons/download-brochure-btn";
import JoinCouncilBtn from "../buttons/join-council-btn";

export default function Cta() {
    return (
        <section id="cta" className="bg-black">
            <div className="container mx-auto pt-[65px] pb-[56px]">
                <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 max-w-3xl px-4 md:px-0 md:mx-auto">
                    <JoinCouncilBtn className="bg-white w-full sm:w-auto" spanClassName="text-sm sm:text-base" />
                    <DownloadBrochureBtn
                        className="bg-gradient-to-r from-[#F06280] via-[#F79721] to-[#F79D67] text-white"
                        spanClassName="text-sm sm:text-base" />
                </div>
            </div>

        </section>
    )
}