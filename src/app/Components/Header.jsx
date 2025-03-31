import React from 'react'
import Image from 'next/image';
export default function Header() {
return (
    <header className='flex justify-between items-center p-4 md:p-6 lg:p-8'>
        <div className='flex justify-center items-center gap-2 md:gap-3'>
            <Image src='/Exclude.svg' width={20} height={20} alt='logo' className='md:w-6 md:h-6'/>
            <p className='text-xl md:text-2xl text-white'>GreenBank</p>
        </div>
        <nav className='hidden md:block'>
            <ul className='flex justify-center items-center gap-3 lg:gap-5'>
                <li><a className='font-medium hover:text-gray-300' href="#">Why Us</a></li>
                <li><a className='font-medium hover:text-gray-300' href="#">Services</a></li>
                <li><a className='font-medium hover:text-gray-300' href="#">Our Process</a></li>
                <li><a className='font-medium hover:text-gray-300' href="#">Payments</a></li>
                <li><a className='font-medium hover:text-gray-300' href="#">FAQs</a></li>
            </ul>
        </nav>
        <button className='bg-transparent px-4 py-1 md:px-8 md:py-2 text-green-500 rounded-[3.5rem] border border-green-500 font-extrabold text-sm md:text-base hover:bg-green-500 hover:text-white transition-colors duration-300'>Contact</button>
        <div className="md:hidden">
            {/* Add a hamburger menu icon here that toggles a mobile menu */}
            <button className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>
)
}