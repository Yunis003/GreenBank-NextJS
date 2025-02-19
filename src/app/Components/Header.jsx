import React from 'react'
import Image from 'next/image';
export default function Header() {
return (
    <header className='flex justify-between items-center'>
        <div className='flex justify-center items-center gap-3'>
            <Image src='/Exclude.svg' width={25} height={25} alt='logo'/>
            <p className='text-2xl text-white'>GreenBank</p>
        </div>
        <nav>
            <ul className='flex justify-center items-center gap-5'>
                <li><a className='font-medium' href="#">Why Us</a></li>
                <li><a className='font-medium' href="#">Services</a></li>
                <li><a className='font-medium' href="#">Our Process</a></li>
                <li><a className='font-medium' href="#">Payments</a></li>
                <li><a className='font-medium' href="#">FAQs</a></li>
            </ul>
        </nav>
        <button className='bg-transparent px-8 py-2 text-green-500 rounded-[3.5rem] border border-green-500 font-extrabold'>Contact</button>
    </header>
)
}