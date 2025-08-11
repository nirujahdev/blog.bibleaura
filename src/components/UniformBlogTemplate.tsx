'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

interface BlogTemplateProps {
  // SEO & Meta
  title: string
  description: string
  keywords: string
  canonicalUrl: string
  category: string
  publishDate: string
  lastModified?: string
  
  // Content
  heroTitle: string
  heroSubtitle: string
  heroQuestion: string
  children: ReactNode
  
  // Styling
  categoryColor: string
  gradientFrom: string
  gradientTo: string
  
  // Related Content
  relatedPosts?: Array<{
    title: string
    url: string
    description: string
  }>
  
  // FAQ Schema (optional)
  faqData?: Array<{
    question: string
    answer: string
  }>
}

export default function UniformBlogTemplate({
  title,
  description,
  keywords,
  canonicalUrl,
  category,
  publishDate,
  lastModified,
  heroTitle,
  heroSubtitle,
  heroQuestion,
  children,
  categoryColor,
  gradientFrom,
  gradientTo,
  relatedPosts = [],
  faqData = []
}: BlogTemplateProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP animations for consistent experience
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )

    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
    )

    gsap.fromTo(sidebarRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.4, ease: "power2.out" }
    )
  }, [])

  // Generate JSON-LD structured data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `https://blog.bibleaura.xyz/og-images/${canonicalUrl.split('/').pop()}.jpg`,
    "author": {
      "@type": "Organization",
      "name": "Bible Aura Team",
      "url": "https://bibleaura.xyz/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bible Aura",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bibleaura.xyz/logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": lastModified || publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://blog.bibleaura.xyz${canonicalUrl}`
    },
    "keywords": keywords
  }

  // FAQ JSON-LD if FAQ data provided
  const faqJsonLd = faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null

  const defaultRelatedPosts = [
    {
      title: "Getting Started with Bible Aura",
      url: "/getting-started",
      description: "Complete beginner's guide to Bible Aura"
    },
    {
      title: "Best Bible AI 2025",
      url: "/best-bible-ai-2025",
      description: "Comprehensive comparison of Bible AI platforms"
    },
    {
      title: "Bible Aura Success Stories",
      url: "/success-stories",
      description: "Real testimonials from satisfied users"
    },
    {
      title: "Bible Aura FAQ",
      url: "/bible-aura-faq",
      description: "Answers to frequently asked questions"
    }
  ]

  const finalRelatedPosts = relatedPosts.length > 0 ? relatedPosts : defaultRelatedPosts

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <Link href="https://bibleaura.xyz" className="text-gray-500 hover:text-gray-700 transition-colors">
                    Bible Aura
                  </Link>
                </li>
                <li><span className="text-gray-400">/</span></li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                    Blog
                  </Link>
                </li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-900 font-medium">{category}</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div ref={contentRef} className="lg:col-span-3">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Hero Section */}
                <div 
                  ref={heroRef} 
                  className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white p-8`}
                >
                  <span 
                    className={`${categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                    {heroTitle}
                  </h1>
                  <p className="text-xl opacity-90 mb-6">
                    {heroSubtitle}
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                    <p className="text-lg font-medium">
                      <strong>Question Answered:</strong> {heroQuestion}
                    </p>
                  </div>
                  <div className="flex items-center opacity-80">
                    <span className="mr-4">By Bible Aura Team</span>
                    <span>{new Date(publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    {/* CTA Banner */}
                    <blockquote className="text-lg italic text-gray-600 border-l-4 border-blue-500 pl-4 mb-8 bg-blue-50 p-4 rounded-r-lg">
                      <strong>Quick Answer:</strong> {heroQuestion} | 
                      <Link 
                        href="https://bibleaura.xyz" 
                        className="text-blue-600 hover:text-blue-700 font-semibold ml-2"
                      >
                        Try Bible Aura Free →
                      </Link>
                    </blockquote>

                    {/* Main Content */}
                    {children}

                    {/* Call to Action Section */}
                    <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white p-8 rounded-lg text-center my-12`}>
                      <h2 className="text-3xl font-bold mb-4">Ready to Experience Bible Aura?</h2>
                      <p className="text-xl mb-6 opacity-90">
                        Join 350,000+ Christians who trust Bible Aura for their daily Bible study.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                          href="https://bibleaura.xyz" 
                          className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                          Start Free Trial
                        </Link>
                        <Link 
                          href="https://bibleaura.xyz/bible-ai" 
                          className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                        >
                          Try AI Bible Chat
                        </Link>
                      </div>
                    </div>

                    {/* Related Posts */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Related Resources:</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {finalRelatedPosts.map((post, index) => (
                          <div key={index}>
                            <Link 
                              href={post.url} 
                              className="text-blue-600 hover:text-blue-700 font-medium"
                            >
                              {post.title} →
                            </Link>
                            <p className="text-sm text-gray-600">{post.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div ref={sidebarRef} className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Primary CTA */}
                <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white p-6 rounded-xl`}>
                  <h3 className="text-xl font-bold mb-3">Try Bible Aura Free</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Experience the world's most accurate Bible AI. No credit card required.
                  </p>
                  <Link 
                    href="https://bibleaura.xyz" 
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 block text-center transition-colors"
                  >
                    Get Started →
                  </Link>
                </div>

                {/* Quick Navigation */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Features</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        href="https://bibleaura.xyz/bible-ai" 
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                      >
                        🤖 AI Bible Chat
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="https://bibleaura.xyz/sermon-writer" 
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                      >
                        ✍️ Sermon Writer
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="https://bibleaura.xyz/bible-reader" 
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                      >
                        📖 Bible Reader
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="https://bibleaura.xyz/community" 
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                      >
                        👥 Community
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="https://bibleaura.xyz/journal" 
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                      >
                        📝 Study Journal
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose Bible Aura</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>95% theological accuracy</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>350,000+ satisfied users</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Free plan available</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Works on all devices</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>24/7 support</span>
                    </div>
                  </div>
                </div>

                {/* User Stats */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Live Stats</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Active Users:</span>
                      <span className="font-semibold text-blue-600">350,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>App Rating:</span>
                      <span className="font-semibold">4.9/5 ⭐</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accuracy Rate:</span>
                      <span className="font-semibold text-green-600">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Countries:</span>
                      <span className="font-semibold">120+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 