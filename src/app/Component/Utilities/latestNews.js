import Image from 'next/image'
import React from 'react'

const LatestNews = ({Imag,date,Heading,Paragrap}) => {
  return (
    <div className="mx-auto flex">
    <div className='2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full w-full  gap-9 items-center'>
      <div className="">
        <Image src={Imag} alt='latest' width={100} height={100} className='2xl:w-36 xl:w-36 lg:w-32 md:w-28 sm:w-24 w-24 2xl:h-16 xl:h-16 lg:h-14 md:h-12 sm:h-11 h-10 pb-4'/>
      </div>
      <div className="w-52">
        <p className='font-medium font-Poppins text-lg text-[#C1C8CE]'>{date}</p>
        <p className='font-semibold font-Poppins text-xl text-[#22262A] py-1'>{Heading}</p>
        <p className='font-normal font-Poppins text-lg text-[#22262A]'>{Paragrap}</p>
      </div>
    </div>

    </div>
  )
}

export default LatestNews
