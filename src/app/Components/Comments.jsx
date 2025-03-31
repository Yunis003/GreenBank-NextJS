import React from 'react';
import Image from 'next/image';
const Comments = () => {
    return (
        <div className='w-full flex justify-between items-center z-10 flex-wrap gap-4'>
            <div className="comment bg-[#41444366] backdrop-blur-md rounded-3xl w-full md:w-[30%] h-96 flex flex-col justify-center items-start p-5 gap-[50px]">
                <Image src="/Frame.svg" width={50} height={50} alt='cc' />
                <p className='text-[#D3D3D3]'>"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."</p>
                <span>Joe</span>
            </div>
            <div className="comment bg-[#41444366] backdrop-blur-md rounded-3xl w-full md:w-[30%] h-96 flex flex-col justify-center items-start p-5 gap-[50px]">
                <Image src="/Frame.svg" width={50} height={50} alt='cc' />
                <p className='text-[#D3D3D3]'>"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."</p>
                <span>Shan</span>
            </div>
            <div className="comment bg-[#41444366] backdrop-blur-md rounded-3xl w-full md:w-[30%] h-96 flex flex-col justify-center items-start p-5 gap-[50px]">
                <Image src="/Frame.svg" width={50} height={50} alt='cc' />
                <p className='text-[#D3D3D3]'>"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."</p>
                <span>Doe</span>
            </div>
        </div>
    );
}

export default Comments;
