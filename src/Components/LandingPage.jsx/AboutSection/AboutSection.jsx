import React from 'react'

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-4">
      <div className="max-w-350 mx-auto">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-semibold mb-6">
            Our Mission
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Democratizing Quality Education Through AI
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
            Every student deserves personalized mentoring. We're making it accessible, 
            affordable, and available to all through the power of artificial intelligence.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8" />

          <p className="text-lg text-gray-600 leading-relaxed">
            Vidhyom was born from a simple belief: that technology can bridge the gap between 
            traditional education and individual learning needs. We combine cutting-edge AI with 
            proven pedagogical methods to create a learning experience that adapts to each student.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
              🎯
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibility</h3>
            <p className="text-gray-600">
              Quality education should be available to every student, regardless of location or background.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
              💡
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We leverage the latest AI technology to create smarter, more effective learning experiences.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
              ❤️
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Student-First</h3>
            <p className="text-gray-600">
              Every decision we make is guided by what's best for student learning and growth.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">AI</div>
              <div className="text-sm lg:text-base text-gray-600">Powered Learning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-sm lg:text-base text-gray-600">Subjects Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm lg:text-base text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm lg:text-base text-gray-600">Personalized</div>
            </div>
          </div>
        </div>

        {/* Team Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Built by educators and technologists who care deeply about the future of learning.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

