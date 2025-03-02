"use client";
import React, { useState, useEffect } from "react";
import CreditCard from "./CreditCard";

const Personalize = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Açılma effekti 1200px-dən sonra aktiv olsun
    const startScroll = 1100;
    const revealAmount = scrollY > startScroll ? Math.min((scrollY - startScroll) / 5, 80) : 0;

    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex flex-col gap-9 items-start w-[49%] relative">
                <h1 className="text-[2.7rem] font-bold animate-fadeIn">
                    Design your personalized credit card.
                </h1>
                <p className="text-[1.1rem] text-gray-400 w-[80%] animate-slideIn">
                    Discover the power of our secure and rewarding credit cards. Explore
                    our range of credit cards and take control of your finances today.
                </p>
                <button className="start-btn bg-[#2BB32A] text-white border-none rounded-[4rem] px-8 py-4 flex items-center justify-center gap-4 hover:bg-[#1b721b] cursor-pointer transition-all duration-300 hover:scale-105">
                    Create New Card <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>

            <div className="flex w-[49%] relative h-[400px]">
                {/* 1-ci kart (tam görünən) */}
                <div className="absolute left-0 top-0 z-30">
                    <CreditCard background="rgba(185, 190, 189, 0.4)" skew="-15deg" />
                </div>

                {/* 2-ci kart (aşağı doğru açılır) */}
                <div
                    className="absolute left-0 transition-all duration-[2000ms]"
                    style={{
                        top: `0px`, // Başlanğıcda eyni nöqtədə
                        transform: `translateY(${revealAmount}px)`,
                        zIndex: 20,
                        opacity: revealAmount > 0 ? 1 : 0.3, // Yavaş-yavaş görünür
                    }}
                >
                    <CreditCard background="#2BB32A" skew="-15deg" />
                </div>

                {/* 3-cü kart (aşağı doğru açılır) */}
                <div
                    className="absolute left-0 transition-all duration-[2000ms]"
                    style={{
                        top: `0px`, // Başlanğıcda eyni nöqtədə
                        transform: `translateY(${revealAmount * 2.4}px)`,
                        zIndex: 10,
                        opacity: revealAmount > 0 ? 1 : 0.3, // Yavaş-yavaş görünür
                    }}
                >
                    <CreditCard background="black" skew="-15deg" />
                </div>
            </div>
        </div>
    );
};

export default Personalize;
