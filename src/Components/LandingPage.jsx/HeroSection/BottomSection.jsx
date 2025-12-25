import React from 'react'
import { FaArrowDown } from "react-icons/fa";
const BottomSection = () => {
  return (
        <div className='w-full lg:h-[14vh]  flex items-center justify-end px-10'> 
            {/* <div >
                <img src="/brand1_removebg.png" className='h-[22vh]' alt="" />
            </div>
            <div >
                <img src="/brand2.png" className='h-[20vh]' alt="" />
            </div>
            <div >
                <img src="/brand1_removebg.png" className='h-[22vh]' alt="" />
            </div>
            <div >
                <img src="/brand1_removebg.png" className='h-[22vh]' alt="" />
            </div>
            <div >
                <img src="/brand1_removebg.png" className='h-[22vh]' alt="" />
            </div> */}
            <div  style={{ fontFamily: 'Manrope,sans-serif' }} className="flex  gap-2 uppercase text-sm items-center justify-center">
                <h1>Scroll Down</h1>
                <span className="
                inline-flex
                items-center justify-center
                w-10 h-10 sm:w-11 sm:h-11
                rounded-full
                border border-black/20
                cursor-pointer
                transition-all duration-300
                hover:bg-gray-200
                hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]
                hover:-translate-y-[1px]
                ">
                    <FaArrowDown  className='text-md font-light'/>
                </span>
            </div>
        </div>
  )
}

export default BottomSection
