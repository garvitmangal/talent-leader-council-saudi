import DownloadBrochureBtn from "./buttons/download-brochure-btn";
import JoinCouncilBtn from "./buttons/join-council-btn";


export default function JoinInnerCircle() {
    return (
        <section className="bg-gradient-to-r from-[#F06280] via-[#F79721] to-[#F79D67] w-full">
            <div className="container mx-auto px-4 py-8 md:pt-[65px] md:pb-[56px]">
                <div className="text-center font-neuething-sans text-black text-2xl md:text-3xl leading-normal">
                    Join the Middle East Inner Circle for HR and Work Tech
                </div>

                <div className="mt-5 flex flex-col md:flex-row gap-4 justify-center items-center">
                    <JoinCouncilBtn className="bg-white hover:bg-gray-100 transition-colors w-full md:w-auto cursor-pointer" />
                    <DownloadBrochureBtn />
                </div>
            </div>
        </section>
    )
}