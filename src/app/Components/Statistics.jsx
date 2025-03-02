'use client'; // Add this at the top since we're using client-side features
import GradientText from './GradientText';
import { useState, useEffect, useRef } from 'react';

const Statistics = () => {
    const [counts, setCounts] = useState({
        years: 0,
        partners: 0,
        experience: 0,
        clients: 0
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef(null);

    const targets = {
        years: 16,
        partners: 250,
        experience: 18,
        clients: 10200
    };

    useEffect(() => {
        if (typeof window === 'undefined') return; // Check for browser environment

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated) {
                    startAnimation();
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [hasAnimated]);

    const startAnimation = () => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const timer = setInterval(() => {
            setCounts(prevCounts => ({
                years: Math.min(prevCounts.years + Math.ceil(targets.years / steps), targets.years),
                partners: Math.min(prevCounts.partners + Math.ceil(targets.partners / steps), targets.partners),
                experience: Math.min(prevCounts.experience + Math.ceil(targets.experience / steps), targets.experience),
                clients: Math.min(prevCounts.clients + Math.ceil(targets.clients / steps), targets.clients)
            }));
        }, interval);

        setTimeout(() => clearInterval(timer), duration);
    };

    return (
        <div className='w-full py-14 flex justify-evenly backdrop-blur-[8px] bg-[#222b28] rounded-2xl' ref={containerRef}>
            <div className='flex flex-col items-center'>
                <span className='text-[3rem] font-bold'>{counts.years}y</span>
                <span className='text-[1rem] font-medium text-[#2BB32A]'>Experience</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[3rem] font-bold'>{counts.partners}+</span>
                <span className='text-[1rem] font-medium text-[#2BB32A]'>Merchant Partner</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[3rem] font-bold'>{counts.experience}+</span>
                <span className='text-[1rem] font-medium text-[#2BB32A]'>Years Experience</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[3rem] font-bold'>{(counts.clients / 1000).toFixed(1)}k+</span>
                <span className='text-[1rem] font-medium text-[#2BB32A]'>Worldwide Clients</span>
            </div>
        </div>
    );
}

export default Statistics;