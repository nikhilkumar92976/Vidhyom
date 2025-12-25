import React from 'react'

const AudienceSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 lg:py-24 px-4">
      <div className="max-w-350 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Illustration/Image */}
          <div className="flex-1 w-full">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl transform rotate-3 opacity-20" />
              
              {/* Main Content Box */}
              <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
                <div className="text-center">
                  <div className="text-7xl lg:text-8xl mb-6">🎓</div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl">👦</span>
                      <span className="text-4xl">👧</span>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Class 1 - 10
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 w-full">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Who Is This For?
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Designed for Students Up to Class 10
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              Vidhyom is specifically built for young learners in their foundational years. 
              We understand the unique challenges and opportunities at this crucial stage of education.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Age-Appropriate Content</h4>
                  <p className="text-gray-600">Curriculum aligned with CBSE, ICSE, and State boards</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Safe & Secure</h4>
                  <p className="text-gray-600">Child-safe platform with parental controls</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Foundation Building</h4>
                  <p className="text-gray-600">Focus on core concepts and strong fundamentals</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Perfect for My Child
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AudienceSection

