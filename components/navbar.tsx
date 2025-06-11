'use client';

import Link from "next/link";
import Image from "next/image";
import DesktopMenu from "./nav/desktop-menu";
import MobileMenu from "./nav/mobile-menu";
import { useEffect } from "react";

export default function Navbar({ darkMode = false }: { darkMode?: boolean }) {
    const menuItems = [
        { id: 'about-us', label: 'ABOUT US' },
        { id: 'why-us', label: 'WHY US?' },
        { id: 'advisory-board', label: 'ADVISORY BOARD' },
        { id: 'why-join', label: 'WHY JOIN?' },
        { id: 'tlc-journey', label: 'TLC JOURNEY' },
        { id: 'contact-us', label: 'CONTACT US' },
        { id: 'our-members', label: 'OUR MEMBERS', url: '/our-members' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 0) {
                navbar?.classList.add(darkMode ? 'bg-black' : 'bg-white');
            } else {
                navbar?.classList.remove(darkMode ? 'bg-black' : 'bg-white');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [darkMode]);

    return (
        <nav className="fixed w-full transition-all duration-300 z-50" id="navbar">
            <div className="container mx-auto px-4 max-w-full">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src={darkMode ? "/v1749452782/tlc/2025/website/ksa/tlc_logo_white.png" : "/v1749452634/tlc/2025/website/ksa/tlc_ksa_logo.png"}
                                alt="TLC Logo"
                                priority
                                width={160}
                                height={53}
                                className="w-auto h-12 md:h-14"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <DesktopMenu menuItems={menuItems} darkMode={darkMode} />

                    {/* Mobile Menu */}
                    <MobileMenu menuItems={menuItems} darkMode={darkMode} />
                </div>
            </div>
        </nav>
    )
}