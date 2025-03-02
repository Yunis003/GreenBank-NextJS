import React from 'react';
import Image from 'next/image';

const Offer = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-4'>
            <h2 className=''>What do we offer?</h2>
            <div className='flex justify-between items-center'>
                <div className="">
                    <Image src='/f.svg' alt='security' width={70} height={70} />
                    <div>
                    <h3>Security Guarantee</h3>
                    <p>Your data and funds will be securely protected.</p>
                    </div>
                </div>
                <div className="">
                <Image src='/f.svg' alt='security' width={70} height={70} />
                    <div>
                    <h3>Investing</h3>
                    <p>Your data and funds will be securely protected.</p>
                    </div>
                </div>
                <div className="">
                <Image src='/f.svg' alt='security' width={70} height={70} />
                    <div>
                    <h3>Multiple Method</h3>
                    <p>Your data and funds will be securely protected.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;
