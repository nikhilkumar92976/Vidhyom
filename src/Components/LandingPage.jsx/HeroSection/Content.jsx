import React from 'react'
import BottomSection from './BottomSection'

{/* 'Pacifico, cursive' */}
const Content = () => {
    return (
        <div className="
            relative w-full
            flex flex-col items-center justify-center text-center
            px-4
            py-20 sm:py-24 lg:py-4
            
            ">

            {/* Main Heading */}
            <h1
                style={{ fontFamily: 'Cookie, cursive' }}
                className="
                flex flex-wrap items-center justify-center
                gap-x-3 gap-y-4
                text-[clamp(2.2rem,7vw,5.5rem)]
                font-extrabold
                leading-[1]
                tracking-tight
                text-[#1f1f1f]
                "
            >
                Empowering

                <span className="inline-flex items-center">
                <img
                    src="/Hero-png.avif"
                    alt=""
                    className="
                    w-[55vw] h-[28vw]
                    sm:w-[40vw] sm:h-[20vw]
                    lg:w-[24vw] lg:h-[13vw]
                    max-w-[420px]
                    object-cover
                    rounded-full
                    "
                />
                </span>

                Students
            </h1>

            {/* Second Line */}
            <h2
                style={{ fontFamily: 'Lobster, cursive' }}
                className="
                mt-4
                text-[clamp(2rem,6.5vw,5.2rem)]
                font-extrabold
                leading-10
                tracking-tight
                text-[#1f1f1f]
                "
            >
                One Mentor at a Time!
            </h2>

            {/* Buttons */}
            <div
                style={{ fontFamily: 'Manrope, sans-serif' }}
                className="
                mt-10
                flex  sm:flex-row
                items-center lg:gap-4 
                uppercase
                gap-1
                "
            >
                <button className="
                px-8 py-3
                rounded-full
                bg-green-500 text-white
                text-sm 
                shadow-[0_10px_30px_rgba(34,197,94,0.35)]
                transition-all duration-300
                hover:bg-green-600
                hover:-translate-y-1
                uppercase
                ">
                Get Started For Free
                </button>

                <span className="
                inline-flex
                items-center justify-center
                w-10 h-10 sm:w-11 sm:h-11
                text-xl
                rounded-full
                border border-black/20
                cursor-pointer
                transition-all duration-300
                hover:bg-gray-200
                hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]
                hover:-translate-y-[1px]
                ">
                ↗
                </span>
            </div>

            <div className='h-[1px] w-[95%] bg-gray-400 lg:mt-[15vh] sm:mt-[20vh] '></div>

            <BottomSection/>
            </div>


    )
}

export default Content
