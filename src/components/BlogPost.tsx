'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

interface BlogPostProps {
  title: string
  description: string
  category: string
  author: string
  date: string
  children: React.ReactNode
  relatedArticles?: Array<{
    href: string
    title: string
    description: string
  }>
  categoryColor?: string
}

export default function BlogPost({ 
  title, 
  description, 
  category, 
  author, 
  date, 
  children,
  relatedArticles = [],
  categoryColor = "blue"
}: BlogPostProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )

    // Content animation
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
    )

    // Sidebar animation
    gsap.fromTo(sidebarRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.4, ease: "power2.out" }
    )
  }, [])

  const defaultRelatedArticles = [
    {
      href: "/getting-started",
      title: "Getting Started Guide",
      description: "Master AI-powered Bible study in minutes"
    },
    {
      href: "/best-bible-ai-2025",
      title: "Best Bible AI 2025",
      description: "Why Bible Aura outshines every other tool"
    },
    {
      href: "/comprehensive-guide",
      title: "Complete Guide",
      description: "Ultimate tutorial for Bible Aura mastery"
    }
  ]

  const articles = relatedArticles.length > 0 ? relatedArticles : defaultRelatedArticles

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="https://bibleaura.xyz" className="text-gray-500 hover:text-gray-700">
                  Bible Aura
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li className="text-gray-900 font-medium">
                {title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div ref={contentRef} className="lg:col-span-3">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Article Header */}
              <div ref={heroRef} className={`bg-gradient-to-r from-${categoryColor}-600 to-${categoryColor}-700 text-white p-8`}>
                <div className="mb-4">
                  <span className={`bg-${categoryColor}-500 text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {title}
                </h1>
                <p className={`text-xl text-${categoryColor}-100 mb-6`}>
                  {description}
                </p>
                <div className={`flex items-center text-${categoryColor}-200`}>
                  <span className="mr-4">By {author}</span>
                  <span>{new Date(date).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  {children}
                </div>
              </div>

              {/* Related Articles */}
              <div className="border-t bg-gray-50 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {articles.map((article, index) => (
                    <Link key={index} href={article.href} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                      <p className="text-gray-600 text-sm">{article.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div ref={sidebarRef} className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Try Bible Aura CTA */}
              <div className={`bg-${categoryColor}-600 text-white p-6 rounded-xl`}>
                <h3 className="text-xl font-bold mb-3">Try Bible Aura Free</h3>
                <p className={`text-${categoryColor}-100 mb-4 text-sm`}>
                  Experience AI-powered Bible study with instant access to all features.
                </p>
                <Link 
                  href="https://bibleaura.xyz" 
                  className={`bg-white text-${categoryColor}-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 block text-center`}
                >
                  Get Started →
                </Link>
              </div>

              {/* Quick Navigation */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/getting-started" className={`text-${categoryColor}-600 hover:text-${categoryColor}-700`}>
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link href="/comprehensive-guide" className={`text-${categoryColor}-600 hover:text-${categoryColor}-700`}>
                      Complete Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/best-bible-ai-2025" className={`text-${categoryColor}-600 hover:text-${categoryColor}-700`}>
                      Bible AI Comparison
                    </Link>
                  </li>
                  <li>
                    <Link href="/success-stories" className={`text-${categoryColor}-600 hover:text-${categoryColor}-700`}>
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className={`text-${categoryColor}-600 hover:text-${categoryColor}-700`}>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Popular Features */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Features</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="https://bibleaura.xyz/bible-ai" className={`text-gray-600 hover:text-${categoryColor}-600 text-sm`}>
                      🤖 AI Bible Chat
                    </Link>
                  </li>
                  <li>
                    <Link href="https://bibleaura.xyz/sermon-writer" className={`text-gray-600 hover:text-${categoryColor}-600 text-sm`}>
                      ✍️ Sermon Generator
                    </Link>
                  </li>
                  <li>
                    <Link href="https://bibleaura.xyz/bible" className={`text-gray-600 hover:text-${categoryColor}-600 text-sm`}>
                      📖 Smart Bible Reader
                    </Link>
                  </li>
                  <li>
                    <Link href="https://bibleaura.xyz/journal" className={`text-gray-600 hover:text-${categoryColor}-600 text-sm`}>
                      📝 Study Journal
                    </Link>
                  </li>
                  <li>
                    <Link href="https://bibleaura.xyz/community" className={`text-gray-600 hover:text-${categoryColor}-600 text-sm`}>
                      👥 Community
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className={`bg-${categoryColor}-600 py-16`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Bible Study?
          </h2>
          <p className={`text-xl text-${categoryColor}-100 mb-8`}>
            Join thousands of Christians who have already discovered the power of AI-enhanced Bible study.
          </p>
          <Link 
            href="https://bibleaura.xyz" 
            className={`bg-white text-${categoryColor}-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors`}
          >
            Try Bible Aura Free →
          </Link>
        </div>
      </div>
    </div>
  )
} 