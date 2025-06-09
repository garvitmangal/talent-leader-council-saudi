import Link from "next/link";

export default function BecomeMember() {
    return (
        <div className="px-4 md:px-10 pt-8 md:pt-16 bg-black">
            <div className="text-center">
                <Link href="/register" className="font-neuething-sans text-white text-xl md:text-2xl leading-normal font-bold text-center px-4 hover:text-orange transition-colors duration-300">
                    Become a TLC member
                </Link>
                <p className="font-neuething-sans text-white leading-normal mt-2 text-center px-4 tracking-widest">
                    Access is earned, not granted
                </p>

                <div className="flex flex-col justify-center items-center md:flex-row gap-4">
                    <div className="text-orange font-neuething-sans font-bold text-xl md:text-2xl p-6 rounded-2xl flex flex-col items-center">
                        <span className="line-through text-gray-400 mb-2">4,999 USD</span>
                        <span>3,499 USD</span>
                    </div>
                </div>

            </div>
        </div>
    )
}