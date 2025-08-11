'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { Metadata } from 'next'
import FAQSchema from '@/components/FAQSchema'
import AnswerSnippet from '@/components/AnswerSnippet'

export const metadata: Metadata = {
  title: 'Bible Aura FAQ: Everything You Need to Know | Bible Aura Blog',
  description: 'Get answers to frequently asked questions about Bible Aura AI Bible study platform. Learn about features, pricing, theological accuracy, and more.',
  keywords: 'Bible Aura FAQ, AI Bible study questions, Bible AI help, Christian AI FAQ, Bible study support',
  openGraph: {
    title: 'Bible Aura FAQ: Everything You Need to Know',
    description: 'Get answers to frequently asked questions about Bible Aura AI Bible study platform.',
    type: 'article',
    url: 'https://blog.bibleaura.xyz/faq',
  },
  alternates: {
    canonical: 'https://blog.bibleaura.xyz/faq',
  },
}

export default function FAQPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )

    gsap.fromTo(faqRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
    )
  }, [])

  const toggleFAQ = (index: number) => {
    const isOpening = openFAQ !== index
    setOpenFAQ(isOpening ? index : null)
    
    const element = document.getElementById(`faq-content-${index}`)
    if (element) {
      if (isOpening) {
        gsap.fromTo(element, 
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        )
      } else {
        gsap.to(element, 
          { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" }
        )
      }
    }
  }

  const faqs = [
    {
      question: "What is Bible Aura and how does it work?",
      answer: "Bible Aura is an AI-powered Bible study platform that provides instant, contextual explanations of Scripture. It uses advanced AI trained on evangelical scholarship to answer your Bible questions with accurate, referenced responses."
    },
    {
      question: "Is Bible Aura theologically accurate?",
      answer: "Yes! Bible Aura is built on sound evangelical scholarship with 95%+ accuracy. Every response includes biblical references for verification, and the AI presents multiple perspectives when appropriate while staying within orthodox Christianity."
    },
    {
      question: "How much does Bible Aura cost?",
      answer: "Bible Aura offers a generous free tier with AI Bible Chat, Bible Reader, basic journaling, and community access. Premium features start at $9.99/month and include unlimited AI conversations, advanced sermon tools, and priority support."
    },
    {
      question: "Can pastors use Bible Aura for sermon preparation?",
      answer: "Absolutely! Bible Aura includes specialized sermon preparation tools that help create structured outlines, provide illustrations, and offer exegetical insights. Many pastors save 6-8 hours per week using our Sermon Writer feature."
    },
    {
      question: "Does Bible Aura work on mobile devices?",
      answer: "Yes! Bible Aura is fully responsive and works perfectly on smartphones and tablets. You can also install it as a Progressive Web App (PWA) for a native app experience."
    },
    {
      question: "What Bible translations are available?",
      answer: "Bible Aura supports 8+ popular translations including KJV, NIV, ESV, NASB, NLT, CSB, and more. You can easily switch between translations while studying."
    },
    {
      question: "Is my data secure with Bible Aura?",
      answer: "Absolutely. Bible Aura uses industry-standard encryption to protect your data. We never sell user information, and your personal conversations and notes remain completely private."
    },
    {
      question: "Can I use Bible Aura for group Bible study?",
      answer: "Yes! Bible Aura includes robust community features for group study, including shared insights, prayer request tracking, discussion forums, and study group coordination tools."
    },
    {
      question: "How accurate are the AI's biblical interpretations?",
      answer: "Bible Aura maintains 95%+ accuracy by being trained on evangelical theological resources and providing transparent biblical citations. All responses can be verified against Scripture and established scholarship."
    },
    {
      question: "Can I export my notes and insights?",
      answer: "Yes! Bible Aura allows you to export your journal entries, highlighted verses, and study notes in various formats. Your insights are always portable and accessible."
    }
  ]

  return (
    <>
      {/* Enhanced FAQ Schema */}
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div ref={heroRef} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                FAQ
              </span>
              <h1 className="text-4xl font-bold mt-4 mb-4">
                Bible Aura FAQ: Everything You Need to Know
              </h1>
              <p className="text-xl text-indigo-100">
                Get answers to frequently asked questions about Bible Aura AI Bible study platform.
              </p>
            </div>

            <div ref={faqRef} className="p-8">
              {/* GEO-Optimized Answer Snippet */}
              <AnswerSnippet
                question="What is Bible Aura and how does it help with Bible study?"
                shortAnswer="Bible Aura is an AI-powered Bible study platform offering instant, contextual Scripture explanations with 95%+ theological accuracy, comprehensive study tools, and community features."
                scriptureCitation="2 Timothy 2:15"
                supportingPoints={[
                  "95%+ theological accuracy with expert review",
                  "Complete study workflow from reading to sermon prep",
                  "Generous free tier with premium features available"
                ]}
                relatedLink={{
                  href: "https://bibleaura.xyz",
                  text: "Try Bible Aura free"
                }}
              />

              <div className="mb-8">
                <p className="text-lg text-gray-700">
                  Have questions about <Link href="https://bibleaura.xyz" className="text-indigo-600 hover:text-indigo-700 font-semibold">Bible Aura</Link>? 
                  Find answers to the most common questions about our AI-powered Bible study platform.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </h3>
                        <span className={`ml-6 flex-shrink-0 transform transition-transform duration-300 ${
                          openFAQ === index ? 'rotate-180' : 'rotate-0'
                        }`}>
                          <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                    </button>
                    <div
                      id={`faq-content-${index}`}
                      className={`overflow-hidden ${openFAQ === index ? 'block' : 'hidden'}`}
                      style={{ height: openFAQ === index ? 'auto' : 0 }}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-700">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                <p className="text-xl mb-6">
                  Our support team is ready to help you get the most out of Bible Aura.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="https://bibleaura.xyz" 
                    className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Try Bible Aura Free
                  </Link>
                  <Link 
                    href="https://bibleaura.xyz/contact" 
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
} 