import Image from 'next/image';
const Partners = () => {
    return (
        <div className='flex justify-between w-full'>
            <Image src="/upwork.svg" alt="Partner 1" width={100} height={50} className="hover:scale-105 hover:brightness-50 hover:cursor-pointer"/>
            <Image src="/petal.svg" alt="Partner 2" width={100} height={50} className="hover:scale-105 hover:brightness-50 hover:cursor-pointer"/>
            <Image src="/rakuten.svg" alt="Partner 3" width={100} height={50} className="hover:scale-105 hover:brightness-50 hover:cursor-pointer"/>
            <Image src="/nyt.svg" alt="Partner 4" width={100} height={50} className="hover:scale-105 hover:brightness-50 hover:cursor-pointer"/>
            <Image src="/vice.svg" alt="Partner 5" width={100} height={50} className="hover:scale-105 hover:brightness-50 hover:cursor-pointer"/>
            <Image src="/dell.svg" alt="Partner 6" width={100} height={50} className="hover:scale-105 hover:brightness-[50%] hover:cursor-pointer"/>
        </div>
    );
}

export default Partners;