'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import AnswerSnippet from './AnswerSnippet'
import BreadcrumbSchema from './BreadcrumbSchema'

interface MicroAnswer {
  question: string
  snippet: string
  jsonLd: object
}

interface MicroContentPostProps {
  answers: MicroAnswer[]
  pageTitle?: string
  className?: string
}

export default function MicroContentPost({ 
  answers, 
  pageTitle = "Bible Aura FAQ",
  className = ""
}: MicroContentPostProps) {
  // Combine all micro-answers into a single FAQPage schema
  const combinedSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": pageTitle,
    "mainEntity": answers.map(answer => ({
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
      {/* Combined Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema)
        }}
      />

      {/* Micro-Answer Display */}
      <div className={`space-y-6 ${className}`}>
        {answers.map((answer, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {answer.question}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {answer.snippet}
            </p>
          </div>
        ))}
      </div>
    </>
  )
} 