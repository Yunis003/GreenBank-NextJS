import Image from 'next/image';
const Partners = () => {
    return (
        <div className='flex justify-between w-full z-10 flex-wrap gap-4'>
            <Image src="/upwork.svg" alt="Partner 1" width={100} height={50} className="hover:scale-105 hover:brightness-50 hover:cursor-pointer w-1/6 md:w-1/4 lg:w-1/6"/>
            <Image src="/petal.svg" alt="Partner 2" width={100} height={50} className="hover:scale-105 hover:brightness-50 hover:cursor-pointer w-1/6 md:w-1/4 lg:w-1/6"/>
            <Image src="/rakuten.svg" alt="Partner 3" width={100} height={50} className="hover:scale-105 hover:brightness-50 hover:cursor-pointer w-1/6 md:w-1/4 lg:w-1/6"/>
            <Image src="/nyt.svg" alt="Partner 4" width={100} height={50} className="hover:scale-105 hover:brightness-50 hover:cursor-pointer w-1/6 md:w-1/4 lg:w-1/6"/>
            <Image src="/vice.svg" alt="Partner 5" width={100} height={50} className="hover:scale-105 hover:brightness-50 hover:cursor-pointer w-1/6 md:w-1/4 lg:w-1/6"/>
            <Image src="/dell.svg" alt="Partner 6" width={100} height={50} className="hover:scale-105 hover:brightness-[50%] hover:cursor-pointer w-1/6 md:w-1/4 lg:w-1/6"/>
        </div>
    );
}

export default Partners;