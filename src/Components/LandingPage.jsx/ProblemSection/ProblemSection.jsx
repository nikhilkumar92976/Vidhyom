import React from 'react'

const ProblemSection = () => {
  const problems = [
    {
      icon: "⚠️",
      title: "Lack of Personal Mentoring",
      description: "Students struggle without one-on-one guidance tailored to their unique learning needs."
    },
    {
      icon: "📉",
      title: "Low Personalization",
      description: "Generic teaching methods fail to address individual strengths and weaknesses."
    },
    {
      icon: "👨‍👩‍👧",
      title: "Poor Parent Awareness",
      description: "Parents lack real-time insights into their child's academic progress and challenges."
    },
    {
      icon: "🎯",
      title: "No Clear Learning Path",
      description: "Students feel lost without structured guidance on what to learn and when."
    }
  ]

  return (
    <section className="w-full min-h-screen bg-white py-16 lg:py-24 px-4">
      <div className="max-w-350 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
            The Problem
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education Challenges Today
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Students face real barriers to success. We're here to change that.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:border-red-200 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-xl flex items-center justify-center text-2xl lg:text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 font-medium">
            Sound familiar? <span className="text-green-600 font-bold">Vidhyom has the solution.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection

