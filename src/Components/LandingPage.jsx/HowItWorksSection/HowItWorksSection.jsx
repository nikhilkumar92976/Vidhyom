import React from 'react'

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Create Profile",
      description: "Quick and easy registration. Tell us about your grade, subjects, and learning goals.",
      icon: "📝",
      color: "bg-blue-500"
    },
    {
      number: "02",
      title: "AI Analyzes Your Needs",
      description: "Our intelligent system assesses your strengths, weaknesses, and creates a personalized learning path.",
      icon: "🧠",
      color: "bg-purple-500"
    },
    {
      number: "03",
      title: "Start Learning",
      description: "Engage with interactive lessons, get instant help, and track your progress in real-time.",
      icon: "📚",
      color: "bg-green-500"
    },
    {
      number: "04",
      title: "Continuous Feedback",
      description: "Receive regular insights, recommendations, and reports. Parents stay informed every step of the way.",
      icon: "📈",
      color: "bg-orange-500"
    }
  ]

  return (
    <section className="w-full min-h-screen bg-white py-16 lg:py-24 px-4">
      <div className="max-w-350 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Journey to Success
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and experience personalized learning like never before.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <span className="text-5xl">{step.icon}</span>
                      <span className="text-5xl lg:text-6xl font-bold text-gray-200">{step.number}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl lg:text-2xl shadow-lg`}>
                    {index + 1}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

