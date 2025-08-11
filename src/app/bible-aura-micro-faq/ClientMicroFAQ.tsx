'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function ClientMicroFAQ() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )

    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
    )
  }, [])

  const microAnswers = [
    {
      question: "What is Bible Aura?",
      snippet: "Bible Aura is an AI-powered Bible study platform with 95%+ theological accuracy, delivering instant verse explanations, sermon generation, and contextual insights backed by evangelical scholarship."
    },
    {
      question: "How does Bible Aura AI work?",
      snippet: "Bible Aura uses advanced language models trained on evangelical theological resources, biblical texts, and historical context to deliver accurate, Scripture-referenced responses in seconds."
    },
    {
      question: "Can Bible Aura generate sermons?",
      snippet: "Yes, Bible Aura's Sermon Writer creates complete sermon outlines, provides illustrations, and offers exegetical insights, helping pastors save 6-8 hours per week in preparation."
    },
    {
      question: "Is Bible Aura theologically accurate?",
      snippet: "Bible Aura maintains 95%+ theological accuracy through evangelical scholarship, transparent biblical citations, and expert review, ensuring doctrinal soundness in all responses."
    },
    {
      question: "Does Bible Aura work offline?",
      snippet: "Bible Aura requires internet connection for AI-powered features, but offers Progressive Web App (PWA) installation for faster loading and app-like experience."
    },
    {
      question: "Can I use Bible Aura for group Bible study?",
      snippet: "Yes, Bible Aura supports collaborative study with shared insights, discussion forums, prayer request tracking, and study group coordination tools for enhanced community learning."
    },
    {
      question: "Is Bible Aura free to use?",
      snippet: "Bible Aura offers a generous free tier including AI Bible Chat, Bible Reader, and basic journaling. Premium features start at $9.99/month for unlimited conversations and advanced tools."
    },
    {
      question: "How is Bible Aura different from other Bible apps?",
      snippet: "Unlike traditional Bible apps, Bible Aura provides AI-powered verse explanations, instant theological insights, sermon generation, and contextual historical background all in one platform."
    },
    {
      question: "Can Bible Aura explain complex theology topics?",
      snippet: "Yes, Bible Aura explains complex theological concepts in clear, accessible language with comprehensive Scripture references and multiple denominational perspectives when appropriate."
    },
    {
      question: "What Bible translations does Bible Aura support?",
      snippet: "Bible Aura supports 8+ popular translations including KJV, NIV, ESV, NASB, NLT, CSB, and more, with easy translation switching during study sessions."
    }
  ]

  // Combined FAQPage Schema for Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Bible Aura: AI-Powered Bible Study Platform FAQ",
    "description": "Quick answers to frequently asked questions about Bible Aura AI Bible study platform",
    "url": "https://blog.bibleaura.xyz/bible-aura-micro-faq",
    "mainEntity": microAnswers.map(answer => ({
      "@type": "Question",
      "name": answer.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer.snippet
      }
    }))
  }

  return (
    <>
      {/* FAQPage Schema for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div ref={heroRef} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Quick FAQ
              </span>
              <h1 className="text-4xl font-bold mt-4 mb-4">
                Bible Aura: 10 Essential Questions Answered
              </h1>
              <p className="text-xl text-blue-100">
                Get instant, SEO-optimized answers to the most important questions about Bible Aura.
              </p>
            </div>

            {/* Content */}
            <div ref={contentRef} className="p-8">
              <div className="mb-8">
                <p className="text-lg text-gray-700">
                  Looking for quick, accurate information about <Link href="https://bibleaura.xyz" className="text-blue-600 hover:text-blue-700 font-semibold">Bible Aura</Link>? 
                  These 10 micro-answers are optimized for search engines and designed to give you exactly what you need to know.
                </p>
              </div>

              {/* Micro-Answers Grid */}
              <div className="space-y-6">
                {microAnswers.map((answer, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {answer.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {answer.snippet}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Experience Bible Aura?</h2>
                <p className="text-xl mb-6">
                  Join thousands of believers using AI to deepen their Bible study and grow spiritually.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="https://bibleaura.xyz" 
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Free Trial →
                  </Link>
                  <Link 
                    href="/faq" 
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    View Full FAQ
                  </Link>
                </div>
              </div>

              {/* Related Links */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-4">🚀 Popular Resources</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/getting-started" className="text-blue-600 hover:text-blue-700">
                        Complete Getting Started Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/best-bible-ai-2025" className="text-blue-600 hover:text-blue-700">
                        Best Bible AI 2025 Comparison
                      </Link>
                    </li>
                    <li>
                      <Link href="/success-stories" className="text-blue-600 hover:text-blue-700">
                        Real User Success Stories
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-4">📖 Study Resources</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/comprehensive-guide" className="text-blue-600 hover:text-blue-700">
                        Comprehensive Bible Aura Guide  
                      </Link>
                    </li>
                    <li>
                      <Link href="/bible-aura-for-pastors" className="text-blue-600 hover:text-blue-700">
                        Bible Aura for Pastors & Ministers
                      </Link>
                    </li>
                    <li>
                      <Link href="/how-ai-transforms-bible-study" className="text-blue-600 hover:text-blue-700">
                        How AI Transforms Bible Study
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
} 