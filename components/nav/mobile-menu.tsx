import Link from "next/link";
import JoinCouncilBtn from "../buttons/join-council-btn";

export default function MobileMenu({ menuItems }: { menuItems: { id: string, label: string, url?: string }[], darkMode: boolean }) {
    const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        // Check if we're on the landing page
        if (window.location.pathname === '/') {
            // If on landing page, smooth scroll to section
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If on another page, navigate to landing page with hash
            window.location.href = `/#${id}`;
        }
        document.getElementById('mobile-menu')?.classList.add('translate-x-full');
    };

    return (
        <div className="lg:hidden">
            <button
                className="text-black p-2 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => {
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu) {
                        mobileMenu.classList.toggle('translate-x-full');
                    }
                }}
            >
                <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.2099 34.4H4.50992C2.51617 34.4 0.899902 36.0163 0.899902 38.01V39.34C0.899902 41.3337 2.51617 42.95 4.50992 42.95H40.2099C42.2037 42.95 43.8199 41.3337 43.8199 39.34V38.01C43.8199 36.0163 42.2037 34.4 40.2099 34.4Z" fill="url(#paint0_linear_8_4977)" />
                    <path d="M40.2099 17.61H4.50992C2.51617 17.61 0.899902 19.2263 0.899902 21.22V22.55C0.899902 24.5437 2.51617 26.16 4.50992 26.16H40.2099C42.2037 26.16 43.8199 24.5437 43.8199 22.55V21.22C43.8199 19.2263 42.2037 17.61 40.2099 17.61Z" fill="url(#paint1_linear_8_4977)" />
                    <path d="M40.2099 0.82H4.50992C2.51617 0.82 0.899902 2.43625 0.899902 4.43V5.76C0.899902 7.75375 2.51617 9.37 4.50992 9.37H40.2099C42.2037 9.37 43.8199 7.75375 43.8199 5.76V4.43C43.8199 2.43625 42.2037 0.82 40.2099 0.82Z" fill="url(#paint2_linear_8_4977)" />
                    <defs>
                        <linearGradient id="paint0_linear_8_4977" x1="0.899902" y1="38.68" x2="43.8199" y2="38.68" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F06280" />
                            <stop offset="0.16" stopColor="#F37957" />
                            <stop offset="0.29" stopColor="#F58939" />
                            <stop offset="0.4" stopColor="#F69327" />
                            <stop offset="0.48" stopColor="#F79721" />
                            <stop offset="0.64" stopColor="#F79831" />
                            <stop offset="0.94" stopColor="#F79C5D" />
                            <stop offset="1" stopColor="#F79D67" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_8_4977" x1="0.899902" y1="21.89" x2="43.8199" y2="21.89" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F06280" />
                            <stop offset="0.16" stopColor="#F37957" />
                            <stop offset="0.29" stopColor="#F58939" />
                            <stop offset="0.4" stopColor="#F69327" />
                            <stop offset="0.48" stopColor="#F79721" />
                            <stop offset="0.64" stopColor="#F79831" />
                            <stop offset="0.94" stopColor="#F79C5D" />
                            <stop offset="1" stopColor="#F79D67" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_8_4977" x1="0.899902" y1="5.1" x2="43.8199" y2="5.1" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F06280" />
                            <stop offset="0.16" stopColor="#F37957" />
                            <stop offset="0.29" stopColor="#F58939" />
                            <stop offset="0.4" stopColor="#F69327" />
                            <stop offset="0.48" stopColor="#F79721" />
                            <stop offset="0.64" stopColor="#F79831" />
                            <stop offset="0.94" stopColor="#F79C5D" />
                            <stop offset="1" stopColor="#F79D67" />
                        </linearGradient>
                    </defs>
                </svg>

            </button>

            {/* Mobile Menu Panel */}
            <div id="mobile-menu" className="fixed top-20 right-0 bottom-0 w-full md:w-80 bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out">
                <div className="flex flex-col p-6 gap-6">
                    {menuItems.map(item => (
                        <Link
                            key={item.id}
                            href={item.url ?? `/#${item.id}`}
                            className={`font-neuething-sans font-semibold text-black hover:text-gray-600 transition-colors text-sm border-b border-gray-200 pb-4`}
                            onClick={(e) => !item.url && handleMobileNavClick(e, item.id)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <JoinCouncilBtn className="bg-gradient-to-r from-[#F06280] via-[#F79721] to-[#F79D67] w-full" />
                </div>
            </div>
        </div>
    );
}