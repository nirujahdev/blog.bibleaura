'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import AnswerSnippet from './AnswerSnippet'
import BreadcrumbSchema from './BreadcrumbSchema'

interface MicroContentProps {
  question: string
  shortAnswer: string
  scriptureCitation?: string
  supportingPoints: string[]
  expandedContent: React.ReactNode
  relatedLink: {
    href: string
    text: string
  }
  author: {
    name: string
    role: string
  }
  reviewer?: {
    name: string
    role: string
    credentials: string
  }
  category: string
  datePublished: string
  categoryColor?: string
  relatedQuestions?: Array<{
    href: string
    question: string
    preview: string
  }>
}

export default function MicroContentPost({
  question,
  shortAnswer,
  scriptureCitation,
  supportingPoints,
  expandedContent,
  relatedLink,
  author,
  reviewer,
  category,
  datePublished,
  categoryColor = "blue",
  relatedQuestions = []
}: MicroContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )

    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power2.out" }
    )
  }, [])

  // QAPage Schema for single Q&A content
  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": shortAnswer + (scriptureCitation ? ` (${scriptureCitation})` : ''),
        "author": {
          "@type": "Person",
          "name": author.name,
          "jobTitle": author.role
        },
        "dateCreated": datePublished
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Bible Aura",
          "item": "https://bibleaura.xyz"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Blog",
          "item": "https://blog.bibleaura.xyz"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": question,
          "item": `https://blog.bibleaura.xyz/${question.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')}`
        }
      ]
    }
  }

  const defaultRelatedQuestions = [
    {
      href: "/how-ai-chat-transforms-study",
      question: "How does AI chat transform Bible study?",
      preview: "Discover the revolutionary way AI enhances your Bible study experience"
    },
    {
      href: "/getting-started",
      question: "How do I get started with Bible Aura?",
      preview: "Simple steps to begin your AI-powered Bible study journey"
    },
    {
      href: "/best-bible-ai-2025",
      question: "Which Bible AI is best in 2025?",
      preview: "Compare top Bible AI platforms and see why Bible Aura leads"
    }
  ]

  const questions = relatedQuestions.length > 0 ? relatedQuestions : defaultRelatedQuestions

  return (
    <>
      {/* QAPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(qaSchema)
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <Link href="https://bibleaura.xyz" className="text-gray-500 hover:text-gray-700">
                    Bible Aura
                  </Link>
                </li>
                <li><span className="text-gray-400">/</span></li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700">
                    Blog
                  </Link>
                </li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-900 font-medium">{question}</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div ref={heroRef} className={`bg-gradient-to-r from-${categoryColor}-600 to-${categoryColor}-700 text-white p-8`}>
              <div className="mb-4">
                <span className={`bg-${categoryColor}-500 text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {question}
              </h1>
              <div className={`text-${categoryColor}-200 text-sm`}>
                <span>By <strong>{author.name}</strong> - {author.role}</span>
                <span className="mx-2">•</span>
                <span>{new Date(datePublished).toLocaleDateString()}</span>
                {reviewer && (
                  <>
                    <span className="mx-2">•</span>
                    <span>Reviewed by {reviewer.name}, {reviewer.role}</span>
                  </>
                )}
              </div>
            </div>

            {/* Content */}
            <div ref={contentRef} className="p-8">
              {/* Answer Snippet - Critical for GEO */}
              <AnswerSnippet
                question={question}
                shortAnswer={shortAnswer}
                scriptureCitation={scriptureCitation}
                supportingPoints={supportingPoints}
                relatedLink={relatedLink}
              />

              {/* Expanded Content */}
              <div className="prose prose-lg max-w-none mb-8">
                {expandedContent}
              </div>

              {/* Quick CTA */}
              <div className={`bg-${categoryColor}-50 border border-${categoryColor}-200 p-6 rounded-lg text-center`}>
                <h3 className="text-xl font-semibold mb-3">Experience Bible Aura Yourself</h3>
                <p className="text-gray-600 mb-4">
                  Get instant, accurate Bible insights powered by AI. Start your free account today.
                </p>
                <Link 
                  href="https://bibleaura.xyz" 
                  className={`bg-${categoryColor}-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-${categoryColor}-700 transition-colors inline-block`}
                >
                  Try Bible Aura Free →
                </Link>
              </div>
            </div>

            {/* Related Questions */}
            <div className="border-t bg-gray-50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Questions</h3>
              <div className="grid md:grid-cols-1 gap-4">
                {questions.map((item, index) => (
                  <Link key={index} href={item.href} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">{item.question}</h4>
                    <p className="text-gray-600 text-sm">{item.preview}</p>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Quick Links Sidebar */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-4">Popular Bible AI Features</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="https://bibleaura.xyz/bible-ai" className={`text-${categoryColor}-600 hover:text-${categoryColor}-700`}>
                    🤖 AI Bible Chat - Get instant biblical insights
                  </Link>
                </li>
                <li>
                  <Link href="https://bibleaura.xyz/sermon-writer" className={`text-${categoryColor}-600 hover:text-${categoryColor}-700`}>
                    ✍️ Sermon Generator - Create powerful sermons
                  </Link>
                </li>
                <li>
                  <Link href="https://bibleaura.xyz/bible" className={`text-${categoryColor}-600 hover:text-${categoryColor}-700`}>
                    📖 Smart Bible Reader - Enhanced study experience
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-4">More Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/comprehensive-guide" className={`text-${categoryColor}-600 hover:text-${categoryColor}-700`}>
                    📚 Complete Bible Aura Guide
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className={`text-${categoryColor}-600 hover:text-${categoryColor}-700`}>
                    ⭐ User Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className={`text-${categoryColor}-600 hover:text-${categoryColor}-700`}>
                    ❓ Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 