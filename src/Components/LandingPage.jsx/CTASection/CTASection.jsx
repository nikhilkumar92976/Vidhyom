import React from 'react'

const CTASection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 py-16 lg:py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-350 mx-auto relative z-10">
        <div className="text-center text-white">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Start Your Learning Journey Today
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of students who are already learning smarter, 
            not harder, with AI-powered personalized education.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="px-10 py-4 bg-white text-green-600 font-bold rounded-full text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
              Get Started Free
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-green-600 transition-all duration-300 w-full sm:w-auto">
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Free Forever Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Cancel Anytime</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center text-white">
            <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
            <div className="text-sm lg:text-base opacity-90">AI Support</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl lg:text-5xl font-bold mb-2">10+</div>
            <div className="text-sm lg:text-base opacity-90">Subjects</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
            <div className="text-sm lg:text-base opacity-90">Personalized</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl lg:text-5xl font-bold mb-2">Free</div>
            <div className="text-sm lg:text-base opacity-90">To Start</div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t-2 border-gray-200 p-4 shadow-2xl z-50">
        <button className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full shadow-lg">
          Get Started Free
        </button>
      </div>
    </section>
  )
}

export default CTASection

