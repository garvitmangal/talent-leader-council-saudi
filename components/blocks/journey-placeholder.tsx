export default function JourneyPlaceholder({ month }: { month: string }) {
    return (
        <div className="border border-[#F79721] rounded-2xl md:rounded-tl-2xl md:rounded-bl-2xl">
            <div className="flex flex-row">
                <div className="bg-white p-2.5 rounded-tl-2xl rounded-bl-2xl w-30 md:w-44 flex-none">
                    <div className="text-black text-base md:text-xl font-bold font-neuething-sans">{month}</div>
                </div>
                <div className="py-2.5 flex flex-col gap-3 w-full">
                    <div className="flex w-full">
                        <div className="h-[1px] w-full bg-orange"></div>
                    </div>

                    <div className="flex w-full">
                        <div className="h-[1px] w-full bg-orange flex items-center before:content-[''] before:w-5 before:h-5 before:rounded-full before:bg-gradient-to-r before:from-[#F06280] before:via-[#F79721] before:to-[#F79D67] before:-ml-2.5"></div>
                    </div>

                    <div className="flex w-full">
                        <div className="h-[1px] w-full bg-orange"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}