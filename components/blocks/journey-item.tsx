export default function JourneyItem({ items, month }: { items: { text: string, bold: boolean }[], month: string }) {

    return (
        <div className="border border-[#F79721] rounded-2xl md:rounded-tl-2xl md:rounded-bl-2xl">
            <div className="flex flex-row">
                <div className="bg-white p-2.5 rounded-tl-2xl rounded-bl-2xl w-30 md:w-44 flex-none">
                    <div className="text-black text-base md:text-xl font-bold font-neuething-sans">{month}</div>
                </div>
                <div className="py-2.5 pr-2.5 flex flex-col gap-2">
                    {items.map((item, index) => (
                        <div key={index} className="flex">
                            <p className={
                                `font-poppins text-white flex items-center gap-2 md:gap-6 before:content-[''] before:w-4 before:h-4 md:before:w-5 md:before:h-5 before:rounded-full before:bg-gradient-to-r before:from-[#F06280] before:via-[#F79721] before:to-[#F79D67] before:-ml-2.5 text-sm md:text-base ${item.bold ? 'font-bold' : ''}`
                            }>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}