import React from 'react'

const WhyVidhyomSection = () => {
  const usps = [
    {
      icon: "💰",
      title: "Affordable for Everyone",
      description: "Start free, upgrade when ready. No hidden costs.",
      points: [
        "Free plan with core features",
        "Transparent pricing",
        "No long-term commitments"
      ]
    },
    {
      icon: "🌟",
      title: "Holistic Development",
      description: "Beyond academics - we focus on overall growth.",
      points: [
        "Academic excellence",
        "Critical thinking skills",
        "Confidence building"
      ]
    },
    {
      icon: "🤖",
      title: "AI-Driven Intelligence",
      description: "Smart technology that truly understands learning.",
      points: [
        "Adaptive learning algorithms",
        "Personalized recommendations",
        "Continuous improvement"
      ]
    },
    {
      icon: "🔒",
      title: "Child-Safe Platform",
      description: "Security and privacy are our top priorities.",
      points: [
        "Age-appropriate content",
        "Parental controls",
        "Data protection"
      ]
    },
    {
      icon: "📱",
      title: "Learn Anywhere, Anytime",
      description: "Access from any device, at your convenience.",
      points: [
        "Mobile & desktop apps",
        "Offline mode available",
        "Cloud sync across devices"
      ]
    },
    {
      icon: "👨‍🏫",
      title: "Expert-Backed Content",
      description: "Created by experienced educators and subject experts.",
      points: [
        "Curriculum-aligned",
        "Regularly updated",
        "Quality assured"
      ]
    }
  ]

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24 px-4">
      <div className="max-w-350 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-50 text-yellow-600 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Vidhyom Stands Out
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another learning app. Here's what makes us different.
          </p>
        </div>

        {/* USP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:shadow-2xl hover:border-green-200 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {usp.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                {usp.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {usp.description}
              </p>

              {/* Checklist */}
              <ul className="space-y-2">
                {usp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-lg lg:text-xl mb-6 opacity-90">
            Join thousands of students already learning smarter with Vidhyom.
          </p>
          <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-full text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyVidhyomSection

