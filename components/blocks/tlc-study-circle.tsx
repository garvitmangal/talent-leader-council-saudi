const StudyCircleItem = ({
    month,
    title,
    description,
    bgColor,
    width = "w-full md:w-1/3",
    pClassName = "font-poppins text-black text-sm"
}: {
    month: string,
    title?: string,
    description: string,
    bgColor: string,
    width?: string,
    pClassName?: string
}) => {
    return (
        <div className={`${width} ${bgColor} p-6 relative`}>
            <div className="flex items-start gap-4">
                {title && (
                    <div className="absolute -top-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
                            <path d="M42.6094 85.7998C66.0815 85.7998 85.1094 66.7719 85.1094 43.2998C85.1094 19.8277 66.0815 0.799805 42.6094 0.799805C19.1373 0.799805 0.109375 19.8277 0.109375 43.2998C0.109375 66.7719 19.1373 85.7998 42.6094 85.7998Z" fill="url(#paint0_linear_85_15832)"></path>
                            <path d="M47.4893 54.8604H13.7988V26.25H56.479V34.6396" stroke="white" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M41.9878 40.5311C42.8999 36.6664 40.5069 32.7941 36.6422 31.8819C32.7774 30.9698 28.9046 33.3632 27.9924 37.2279C27.0803 41.0927 29.4742 44.9651 33.339 45.8773C37.2037 46.7895 41.0756 44.3959 41.9878 40.5311Z" stroke="white" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M38.7891 39.4004L32.999 36.0596V42.75L38.7891 39.4004ZM38.7891 39.4004L32.999 36.0596V42.75L38.7891 39.4004Z" stroke="white" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17.9092 51.04H43.0889" stroke="white" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M23.3184 50.4697V51.5996" stroke="white" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M69.229 65.2695C69.229 63.7995 71.4189 62.0098 71.4189 59.7998V49.0195C71.4189 47.7295 70.3691 46.6797 69.0791 46.6797H67.0488" stroke="white" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M62.3086 44.4902H64.6987C65.9887 44.4902 67.0386 45.5401 67.0386 46.8301V52.4697" stroke="white" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M58.2985 50.3399V36.8302C58.3085 35.6202 57.3185 34.6497 56.1085 34.6397C54.8985 34.6297 53.9286 35.5801 53.9186 36.7901V53.5001C53.9186 53.8001 53.5488 53.94 53.3488 53.71C52.5688 52.82 50.8285 50.8403 49.5485 49.9503C48.7385 49.3803 47.6189 49.3398 46.7189 49.7598C45.4489 50.3598 45.1886 52.0402 46.1286 53.0802C48.9586 56.2102 50.0088 60.3604 52.8288 63.0704C53.9988 64.2004 53.9186 64.6398 53.9186 65.2598" stroke="white" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M58.2988 43.3896H60.3291C61.6191 43.3896 62.6689 44.4405 62.6689 45.7305V51.04" stroke="white" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"></path>
                            <defs>
                                <linearGradient id="paint0_linear_85_15832" x1="0.109375" y1="43.2998" x2="85.1094" y2="43.2998" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F79D67"></stop>
                                    <stop offset="0.05" stopColor="#F79C5D"></stop>
                                    <stop offset="0.29" stopColor="#F79831"></stop>
                                    <stop offset="0.41" stopColor="#F79721"></stop>
                                    <stop offset="0.51" stopColor="#F69327"></stop>
                                    <stop offset="0.65" stopColor="#F58939"></stop>
                                    <stop offset="0.81" stopColor="#F37957"></stop>
                                    <stop offset="0.99" stopColor="#F06280"></stop>
                                    <stop offset="1" stopColor="#F06282"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                )}
                <h4 className={`font-neuething-sans ${pClassName} text-xl font-bold ${title ? 'ml-24' : ''}`}>{month}</h4>
            </div>
            <p className={`font-poppins mt-5 ${pClassName}`}>
                {title && (
                    <>
                        <span className="font-bold">{title}</span>
                        <br />
                    </>
                )}
                {description}
            </p>
        </div>
    );
};


export default function TlcStudyCircle() {
    const studyCircleItems = [
        {
            month: "Sept '25",
            title: "Building High-Impact National Talent Strategies in a Diversified Economy:",
            description: "How Saudi companies can align workforce planning and skills development with Vision 2030’s economic diversification—from oil to tourism, logistics, tech, and beyond?",
            bgColor: "bg-white",
            width: "w-full md:w-[40%]"
        },
        {
            month: "Nov '25",
            title: "Saudization 2.0:",
            description: "From Compliance to Competitive Advantage: Evolving Saudization from a regulatory requirement to a strategic enabler for sustainable business and national talent empowerment.",
            bgColor: "bg-[#f0f0f0]",
            width: "w-full md:w-[40%]"
        },
        {
            month: "Nov '25",
            description: "Experiential Study tour & get together at any chosen corporate",
            bgColor: "bg-gradient-to-r from-[#F79D67] via-[#F79721] to-[#F06280] text-white",
            width: "w-full md:w-[20%]",
            pClassName: "font-poppins text-white text-sm"
        },
        {
            month: "Jan '26",
            title: "Women in Leadership:",
            description: "Unlocking Untapped Potential: Moving from policy to real progress—how to accelerate women’s participation and leadership across industries in support of Vision 2030 goals.",
            bgColor: "bg-[#f0f0f0]"
        },
        {
            month: "Mar '26",
            title: "The Future of Work in a Digital-First KSA:",
            description: "Preparing organizations for a hybrid, AI-enabled, and digitally native workforce while maintaining cultural and national values.",
            bgColor: "bg-[#DCDCDC]"
        },
        {
            month: "May '26",
            title: "The Rise of Portfolio Careers and the Future of Employment Models in KSA:",
            description: "How flexible careers, gig work, freelancing, and portfolio careers will reshape traditional employment in Saudi Arabia—and what talent leaders must do to prepare",
            bgColor: "bg-white"
        },
        {
            month: "May '26",
            description: "Experiential Study tour & get together at any chosen corporate",
            bgColor: "bg-gradient-to-r from-[#F79D67] via-[#F79721] to-[#F06280] text-white",
            width: "w-full md:w-[40%]",
            pClassName: "font-poppins text-white text-sm"
        },
        {
            month: "June '26",
            title: "Preparing Saudi Talent for the Global Innovation Economy:",
            description: "Developing innovation capabilities, entrepreneurial mindsets, and R&D talent pipelines to position Saudi Arabia as a global innovation and knowledge economy hub.",
            bgColor: "bg-[#f0f0f0]",
            width: "w-full md:w-[60%]"
        }
    ];

    return (
        <div className="container mx-auto pt-[65px] pb-[56px] px-4">
            <h2 className="font-neuething-sans text-white text-2xl md:text-3xl leading-normal font-bold text-center px-4">
                TLC Study Circle
            </h2>

            <p className="font-poppins text-white leading-normal mt-2 text-center px-4 max-w-4xl mx-auto">
                Talent Leaders Council Study Circle is a platform for curated, collective learning. This will be
                an impactful initiative to empower the talent leaders with collective learning, future-focused dialogue,
                and collaborative action. Your leadership journey deserves more than just experience - it deserves
                evolution. Through this circle, you&apos;ll not just stay relevant; you&apos;ll stay ahead, shaping the future
                while accelerating your own.
            </p>

            <div className="flex flex-col rounded-2xl mt-10 md:mt-20">
                {/* First row */}
                <div className="flex flex-col md:flex-row">
                    {studyCircleItems.slice(0, 3).map((item, index) => (
                        <StudyCircleItem key={index} {...item} />
                    ))}
                </div>

                {/* Second row */}
                <div className="flex flex-col md:flex-row">
                    {studyCircleItems.slice(3, 6).map((item, index) => (
                        <StudyCircleItem key={index} {...item} />
                    ))}
                </div>

                {/* Third row */}
                <div className="flex flex-col md:flex-row">
                    {studyCircleItems.slice(6).map((item, index) => (
                        <StudyCircleItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}