import React from 'react'

const Navbar = () => {
  return (
    <nav style={{ fontFamily: 'Manrope,sans-serif' }} className='w-full px-6 py-4 lg:px-12 lg:py-6 fixed top-0 left-0 bg-transparent z-50 uppercase'>
      <div className='flex items-center justify-between max-w-[1400px] mx-auto'>
        {/* Logo Section */}
        <div className='flex items-center gap-3'>
          <img
            src="/logo/SVG/logo_black.svg"
            alt="Hope Rise Logo"
            className='h-8 w-8 lg:h-10 lg:w-10'
          />
          <span className='text-sm font-normal -tracking-tight  text-gray-900 hover:text-gray-600 transition-colors'>
            Vidhyom
          </span>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className='hidden lg:flex items-center gap-8 xl:gap-12'>
          <a href="#Home" className='text-sm font-normal -tracking-tight  text-gray-900 hover:text-gray-600 transition-colors'>
            Home
          </a>
          <a href="#Features-Provide" className='text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors'>
            Features Provide
          </a>
          <a href="#About-Us" className='text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors'>
            About Us
          </a>
          <a href="#Contact-Us" className='text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors'>
            Contact Us
          </a>
        </div>

        {/* Right Side Actions */}
        <div className='flex items-center gap-4'>
          {/* Phone Icon */}
          <button className='p-2 hover:bg-gray-100 rounded-full transition-colors rounded-full
            border border-black/10'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 lg:w-6 lg:h-6"
              
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </button>

          <button
          className="
            px-7 py-2.5
            text-sm 
            rounded-full
            border border-black/10
            
            text-gray-900
            shadow-[0_1px_0_rgba(0,0,0,0.04)]
            transition-all duration-300 ease-out
            hover:bg-gray-200
            hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]
            hover:-translate-y-[1px]
            active:translate-y-0

            font-normal -tracking-tight
          "
        >
          Login
        </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
