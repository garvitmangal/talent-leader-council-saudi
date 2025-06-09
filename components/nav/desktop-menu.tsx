import Link from "next/link";
import JoinCouncilBtn from "../buttons/join-council-btn";

export default function DesktopMenu({ menuItems, darkMode }: { menuItems: { id: string, label: string, url?: string }[], darkMode: boolean }) {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        
        // Check if we're on the landing page
        if (window.location.pathname === '/') {
            // If on landing page, smooth scroll to section
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If on another page, navigate to landing page with hash
            window.location.href = `/#${id}`;
        }
    };

    return (
        <div className="hidden lg:flex items-center gap-2 xl:gap-5 2xl:gap-8">
            {menuItems.map(item => (
                <Link
                    key={item.id}
                    href={item.url ?? `/#${item.id}`}
                    className={`font-neuething-sans font-semibold  ${darkMode ? 'text-white' : 'text-black'} hover:text-gray-600 transition-colors text-[10px] whitespace-nowrap`}
                    onClick={(e) => !item.url && handleNavClick(e, item.id)}
                >
                    {item.label}
                </Link>
            ))}

            <JoinCouncilBtn
                className="bg-gradient-to-r from-[#F06280] via-[#F79721] to-[#F79D67] hidden whitespace-nowrap"
                spanClassName="text-sm" />
        </div>
    );
}