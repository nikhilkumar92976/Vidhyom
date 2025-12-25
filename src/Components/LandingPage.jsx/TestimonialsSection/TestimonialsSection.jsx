import React from 'react'

const TestimonialsSection = () => {
  const placeholderTestimonials = [
    {
      name: "Coming Soon",
      role: "Parent of Class 8 Student",
      avatar: "👨‍👩‍👧",
      quote: "Real testimonials from our pilot users will be featured here soon!",
      rating: 5
    },
    {
      name: "Pilot Program",
      role: "Class 10 Student",
      avatar: "🎓",
      quote: "We're currently in pilot phase. Your feedback will shape our future!",
      rating: 5
    },
    {
      name: "Join Us",
      role: "Early Adopter",
      avatar: "⭐",
      quote: "Be among the first to experience Vidhyom and share your story.",
      rating: 5
    }
  ]

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-4">
      <div className="max-w-350 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            We're in pilot phase. Real testimonials coming soon from our early users!
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {placeholderTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-dashed border-gray-300 rounded-2xl p-6 lg:p-8 hover:border-blue-300 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Early Users */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Be Part of Our Story
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Join our pilot program and help shape the future of AI-powered education. 
            Your feedback matters!
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Join Pilot Program
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">Launching Soon</div>
            <div className="text-sm text-gray-500">Pilot Phase Active</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-300" />
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">Early Access</div>
            <div className="text-sm text-gray-500">Limited Spots Available</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-300" />
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">Free to Start</div>
            <div className="text-sm text-gray-500">No Credit Card Required</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

