import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";

const FeaturedProduct = ({Imag,Heading}) => {
  return (
    <div className='w-1/3 flex gap-9 items-center'>
      <div className="">
        <Image src={Imag} alt='latest' width={100} height={100} className='w-36 h-36'/>
      </div>
      <div className="">
        <p className='font-normal font-Poppins text-xl text-secondary'>{Heading} </p>
        <ul className='flex pt-11 pb-5 text-[#FFC600] text-lg gap-1'>
            <li><FaStar/></li>
            <li><FaStar/></li>
            <li><FaStar/></li>
            <li><FaStar/></li>
            <li className='text-[#C1C8CE]'><FaStar/></li>
        </ul>
        <div className='flex gap-1'>
            <p className='font-medium font-Poppins text-xl text-[#FF4858]'>$499</p>
            <p className='font-medium font-Poppins text-xl text-[#C1C8CE]'>$499</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProduct
