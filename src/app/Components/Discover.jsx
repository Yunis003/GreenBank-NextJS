import Image from 'next/image';
import CreditCard from './CreditCard';
import './credit-card.css';

const Discover = () => {
    return (
        <div className='w-full flex flex-col md:flex-row items-center gap-10 px-4 md:px-0'>
            <div className="flex flex-col gap-9 items-start w-full md:w-[49%] relative">
                <h1 className='text-3xl md:text-[3.5rem] font-bold'>
                        Discover the Perfect Credit Card for You 
                </h1>
                <Image src="/circle.svg" alt="circle" width={250} height={250} className="absolute top-[85px] left-[-10px]" style={{width: '250px', height: 'auto'}} />
                <p className='text-sm md:text-[1.1rem] text-gray-400 w-[80%]'>
                Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.
                </p>    
                <button className='start-btn bg-[#2BB32A] text-white border-none rounded-[4rem] px-8 py-4 flex items-center justify-center gap-4 hover:bg-[#1b721b] cursor-pointer'>Get Started <i className="fa-solid fa-arrow-right"></i></button>
                <Image src="/users.svg" alt="users" width={200} height={200} style={{width: '200px', height: 'auto'}} />
            </div>  
            <div className="flex w-full md:w-[49%] justify-center items-center relative">
                <div style={{ transform: 'rotate(15deg)', zIndex: 30 }}>
                    <CreditCard 
                        background='rgba(185, 190, 189, 0.4)'
                    />
                </div>
                <Image src="/discover.svg" alt="users" width={300} height={300} className='circle' style={{width: '300px', height: 'auto'}}/>
            </div>
        </div>
    );
}

export default Discover;