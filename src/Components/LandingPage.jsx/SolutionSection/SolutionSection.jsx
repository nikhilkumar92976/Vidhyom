import React from 'react'

const SolutionSection = () => {
  const solutions = [
    {
      icon: "🤖",
      title: "AI-Powered Mentoring",
      description: "Get personalized guidance 24/7 from our intelligent AI mentor that adapts to your learning style.",
      features: ["Instant doubt solving", "Adaptive learning paths", "Smart recommendations"],
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100"
    },
    {
      icon: "📊",
      title: "Progress Monitoring",
      description: "Track every milestone with detailed analytics and insights into your academic journey.",
      features: ["Real-time tracking", "Performance analytics", "Goal setting"],
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100"
    },
    {
      icon: "👪",
      title: "Parent Dashboard",
      description: "Keep parents informed with comprehensive reports and updates on student progress.",
      features: ["Weekly reports", "Activity logs", "Direct communication"],
      color: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100"
    }
  ]

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24 px-4">
      <div className="max-w-350 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-semibold mb-4">
            Our Solution
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Your AI Learning Companion
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Vidhyom combines cutting-edge AI with proven teaching methods to deliver personalized education at scale.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${solution.color} border ${solution.borderColor} rounded-2xl p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${solution.iconBg} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-sm lg:text-base text-gray-600">AI Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm lg:text-base text-gray-600">Personalized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">Real-time</div>
            <div className="text-sm lg:text-base text-gray-600">Progress Tracking</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">Free</div>
            <div className="text-sm lg:text-base text-gray-600">To Get Started</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection

