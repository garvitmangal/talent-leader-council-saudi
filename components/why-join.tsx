'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhyJoin() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const autoSlideInterval = 5000; // 5 seconds between slides

    const slides = [
        {
            image: "/v1749726923/tlc/2025/website/ksa/1.jpg",
            number: "1",
            text: "Gain unparalleled insights into regional talent trends and practices."
        },
        {
            image: "/v1749726923/tlc/2025/website/ksa/2.jpg",
            number: "2",
            text: "Enhance professional credibility through recognition and certifications."
        },
        {
            image: "/v1749726923/tlc/2025/website/ksa/3.jpg",
            number: "3",
            text: "Build meaningful connections with peers, thought leaders, and industry pioneers."
        },
        {
            image: "/v1749726923/tlc/2025/website/ksa/4.jpg",
            number: "4",
            text: "Access opportunities for personal and professional growth through mentorship and leadership roles."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, autoSlideInterval);

        return () => clearInterval(interval);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
    };

    return (
        <section id="why-join" className="overflow-hidden">
            <div className="container mx-auto pt-[65px] pb-[56px] px-4 md:px-10">
                <h2 className="font-neuething-sans text-black text-2xl md:text-3xl leading-normal font-bold text-center">
                    Why join?
                </h2>
                <p className="font-neuething-sans text-black leading-normal mt-2 text-center tracking-widest">
                    UNITED WORK TECH LEADERS
                </p>

                <div className="mt-10 md:mt-20">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <button className="p-2 md:p-4 hover:bg-gray-100 rounded-full transition-colors" onClick={prevSlide}>
                            <Image
                                src="/v1748571864/tlc/2025/website/uae/previous.svg"
                                alt="Previous slide"
                                width={40}
                                height={40}
                                className="w-6 h-6 md:w-8 md:h-8"
                            />
                        </button>

                        <div className="overflow-hidden max-w-[1200px]">
                            <div
                                className="slider flex transition-transform duration-300"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div key={index} className="flex-none w-full">
                                        <div className="flex flex-col md:flex-row border border-black rounded-2xl md:rounded-4xl h-auto md:h-[500px]">
                                            <div className="w-full md:w-1/2">
                                                <div className="relative w-full h-[250px] sm:h-[300px] md:h-full">
                                                    <Image
                                                        src={slide.image}
                                                        alt={`Slide ${index + 1}`}
                                                        fill
                                                        className="object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-4xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-20 text-center flex flex-col justify-center items-center gap-4">
                                                <h4 className="font-neuething-sans text-black font-bold text-2xl sm:text-2xl md:text-3xl leading-normal mt-0 md:mt-8">
                                                    {slide.number}
                                                </h4>
                                                <p className="mt-2 md:mt-4 text-black text-base sm:text-lg md:text-base font-neuething-sans max-w-[280px] sm:max-w-[400px] md:max-w-none">
                                                    {slide.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="p-2 md:p-4 hover:bg-gray-100 rounded-full transition-colors" onClick={nextSlide}>
                            <Image
                                src="/v1748571898/tlc/2025/website/uae/next.svg"
                                alt="Next slide"
                                width={40}
                                height={40}
                                className="w-6 h-6 md:w-8 md:h-8"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex justify-center items-center relative h-48 mt-10 sm:mt-16 md:mt-20">
                <Image
                    src="/c_crop,w_1924,h_412,x_0,y_0/v1748600316/tlc/2025/website/uae/Asset_21.png"
                    alt="Background Image"
                    fill
                    className="w-full object-contain md:object-cover object-top"
                />
            </div>
        </section>
    )
}