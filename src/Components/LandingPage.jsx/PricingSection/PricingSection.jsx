import React from 'react'

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect to get started",
      features: [
        "AI Mentor access (limited)",
        "Basic progress tracking",
        "5 subjects",
        "Community support",
        "Mobile & web access"
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-gray-50 to-gray-100",
      buttonStyle: "bg-gray-900 hover:bg-gray-800 text-white"
    },
    {
      name: "Premium",
      price: "₹499",
      period: "per month",
      description: "For serious learners",
      features: [
        "Unlimited AI Mentor access",
        "Advanced analytics",
        "All subjects (10+)",
        "Priority support",
        "Offline mode",
        "Parent dashboard",
        "Personalized study plans",
        "Exam preparation tools"
      ],
      cta: "Coming Soon",
      popular: true,
      gradient: "from-green-50 to-blue-50",
      buttonStyle: "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
    },
    {
      name: "Family",
      price: "₹899",
      period: "per month",
      description: "For multiple children",
      features: [
        "Everything in Premium",
        "Up to 3 student profiles",
        "Family dashboard",
        "Dedicated support",
        "Custom learning paths",
        "Progress reports",
        "Sibling comparison (optional)"
      ],
      cta: "Coming Soon",
      popular: false,
      gradient: "from-purple-50 to-pink-50",
      buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white"
    }
  ]

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24 px-4">
      <div className="max-w-350 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${plan.gradient} border-2 ${
                plan.popular ? 'border-green-400 shadow-2xl scale-105' : 'border-gray-200'
              } rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-6 ${plan.buttonStyle}`}
              >
                {plan.cta}
              </button>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-6 lg:p-8 border border-blue-200">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">🎉 Launch Offer:</span> Premium plans coming soon with special early-bird pricing!
          </p>
          <p className="text-sm text-gray-600">
            Start with our free plan today and get notified when premium features launch.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingSection

