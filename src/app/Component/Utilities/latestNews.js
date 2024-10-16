import Image from 'next/image'
import React from 'react'

const LatestNews = ({Imag,date,Heading,Paragrap}) => {
  return (
    <div className='w-1/3 flex gap-9 items-center'>
      <div className="">
        <Image src={Imag} alt='latest' width={100} height={100} className='w-36 h-16'/>
      </div>
      <div className="w-52">
        <p className='font-medium font-Poppins text-lg text-[#C1C8CE]'>{date}</p>
        <p className='font-semibold font-Poppins text-xl text-[#22262A] py-1'>{Heading}</p>
        <p className='font-normal font-Poppins text-lg text-[#22262A]'>{Paragrap}</p>
      </div>
    </div>
  )
}

export default LatestNews
