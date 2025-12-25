import React, { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Is Vidhyom really free?",
      answer: "Yes! Our free plan includes core features like AI mentor access (limited), basic progress tracking, and access to 5 subjects. You can upgrade to premium plans later for unlimited access and advanced features."
    },
    {
      question: "What age group is Vidhyom designed for?",
      answer: "Vidhyom is specifically designed for students from Class 1 to Class 10. Our content and AI are tailored to this age group's learning needs and curriculum requirements."
    },
    {
      question: "How does the AI mentor work?",
      answer: "Our AI mentor uses advanced machine learning to understand your learning style, strengths, and weaknesses. It provides personalized explanations, answers questions 24/7, and adapts the curriculum to your pace."
    },
    {
      question: "Can parents track their child's progress?",
      answer: "Absolutely! Parents get access to a dedicated dashboard showing real-time progress, activity logs, and weekly reports. Premium plans include even more detailed analytics and insights."
    },
    {
      question: "Which curriculum does Vidhyom follow?",
      answer: "We support CBSE, ICSE, and major State boards. Our content is aligned with standard curricula while being flexible enough to adapt to individual learning needs."
    },
    {
      question: "Is my child's data safe?",
      answer: "Yes, security and privacy are our top priorities. We use industry-standard encryption, never share data with third parties, and comply with all child safety regulations. Parents have full control over privacy settings."
    },
    {
      question: "Can I use Vidhyom offline?",
      answer: "Premium plans include offline mode, allowing students to download lessons and practice materials for learning without internet connectivity. Progress syncs automatically when back online."
    },
    {
      question: "What devices are supported?",
      answer: "Vidhyom works on all modern devices - smartphones (iOS & Android), tablets, laptops, and desktops. Your progress syncs seamlessly across all devices."
    },
    {
      question: "How is this different from YouTube or other free resources?",
      answer: "Unlike passive video watching, Vidhyom provides personalized, interactive learning with AI-powered assessments, progress tracking, and adaptive curriculum. It's like having a personal tutor available 24/7."
    },
    {
      question: "When will premium features be available?",
      answer: "We're currently in pilot phase with our free plan. Premium features will launch soon with special early-bird pricing for our initial users. Sign up free to get notified!"
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Reach out to our support team.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection

