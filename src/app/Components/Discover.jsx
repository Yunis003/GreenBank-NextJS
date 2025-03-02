import Image from 'next/image';
import CreditCard from './CreditCard';
import './credit-card.css';

const Discover = () => {
    return (
        <div className='w-full flex items-center gap-10'>
            <div className="flex flex-col gap-9 items-start w-[49%] relative">
                <h1 className='text-[3.5rem] font-bold'>
                        Discover the Perfect Credit Card for You 
                </h1>
                <Image src="/circle.svg" alt="circle" width={350} height={350} className="absolute top-[85px] left-[-10px]" />
                <p className='text-[1.1rem] text-gray-400 w-[80%]'>
                Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.
                </p>    
                <button className='start-btn bg-[#2BB32A] text-white border-none rounded-[4rem] px-8 py-4 flex items-center justify-center gap-4 hover:bg-[#1b721b] cursor-pointer'>Get Started <i className="fa-solid fa-arrow-right"></i></button>
                <Image src="/users.svg" alt="users" width={300} height={300} />
            </div>  
            <div className="flex w-[49%] justify-center items-center relative card-container">
                <CreditCard />
                <Image src="/discover.svg" alt="users" width={420} height={420} className='circle'/>
        </div>
    </div>
    );
}

export default Discover;