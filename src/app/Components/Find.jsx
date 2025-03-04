'use client';
import React, { useState, useEffect } from 'react';
import CreditCard from './CreditCard';

const Find = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsExpanded(window.innerWidth > 1600);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1600);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='w-full flex justify-between items-center mt-[100px] relative'>
            <div className='relative w-[300px] h-[550px]'>
                {/* Arxadakı yaşıl kart */}
                <div className={`absolute transition-all duration-[2000ms] ease-in-out
                    ${isScrolled ? "translate-y-16 rotate-6 opacity-100 left-[-35px] top-[150px] skew-y-[10deg]" 
                    : "translate-y-[0] opacity-10 top-[0] left-0"}`}>
                    <CreditCard background='#2BB32A' textColor="black" />
                </div>

                {/* Üstdəki blur effektli kart */}
                <div className={`absolute transition-all duration-[2000ms] ease-in-out 
                    ${isScrolled ? "opacity-90 translate-y-2 skew-y-0 z-10" 
                    : "opacity-100"}
                    bg-gray-400/30 backdrop-blur-md rounded-3xl`}>
                    <CreditCard />
                </div>
            </div>
            <div className="flex flex-col gap-9 items-end w-[49%] relative">
                <h1 className="text-[2.7rem] font-bold animate-fadeIn w-[80%]">
                    Find the perfect credit card for you.
                </h1>
                <p className="text-[1.1rem] text-[#ADB2B1] w-[80%] animate-slideIn">
                Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and aspirations.
                </p>
                <button className="start-btn bg-[#2BB32A] text-white border-none rounded-[4rem] px-8 py-4 flex items-center justify-center gap-4 hover:bg-[#1b721b] cursor-pointer transition-all duration-300 hover:scale-105">
                    Create New Card <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Find;
