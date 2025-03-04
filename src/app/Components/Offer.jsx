import React from 'react';
import Image from 'next/image';

const Offer = () => {
    return (
        <div className='w-full flex flex-col gap-[50px] z-50'>
            <p className='text-[40px] text-center'>What do we offer?</p>
            <div className='flex justify-between items-center'>
                <div className="flex justify-center items-center gap-4">
                    <Image src='/f.svg' alt='security' width={70} height={70} />
                    <div className='flex flex-col gap-2'>
                    <h3 className='text-[19px]'>Security Guarantee</h3>
                    <p className='text-[#ADB2B1] text-[12px] w-[220px]'>Your data and funds will be securely protected.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4">
                <Image src='/f.svg' alt='security' width={70} height={70} />
                    <div className='flex flex-col gap-2'>
                    <h3 className='text-[19px]'>Investing</h3>
                    <p className='text-[#ADB2B1] text-[12px] w-[220px]'>Your data and funds will be securely protected.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4">
                <Image src='/f.svg' alt='security' width={70} height={70} />
                    <div className='flex flex-col gap-2'>
                    <h3 className='text-[19px]'>Multiple Method</h3>
                    <p className='text-[#ADB2B1] text-[12px] w-[220px]'>Your data and funds will be securely protected.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;
