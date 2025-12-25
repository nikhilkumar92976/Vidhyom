import React from 'react'

const FeatureSection = () => {
  const features = [
    {
      icon: "🎯",
      title: "Personal Learning Paths",
      description: "Customized curriculum that adapts to your pace and learning style.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💬",
      title: "24/7 AI Mentor Access",
      description: "Get instant answers to your questions anytime, anywhere.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Visual dashboards showing your growth and achievements.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "🏆",
      title: "Gamified Learning",
      description: "Earn badges, points, and rewards as you master concepts.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "📝",
      title: "Smart Assessments",
      description: "AI-powered tests that identify gaps and recommend practice.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: "👨‍👩‍👧",
      title: "Parent Insights",
      description: "Detailed reports keeping parents in the loop.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: "📚",
      title: "Rich Content Library",
      description: "Access thousands of lessons, videos, and practice problems.",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      description: "Never miss a lesson with intelligent scheduling.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🎓",
      title: "Exam Preparation",
      description: "Targeted prep for school tests and competitive exams.",
      gradient: "from-violet-500 to-purple-500"
    }
  ]

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24 px-4">
      <div className="max-w-350 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed specifically for students up to Class 10.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-gray-300 transition-all duration-300"
            >
              {/* Icon with Gradient */}
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            And many more features being added regularly! 🚀
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
