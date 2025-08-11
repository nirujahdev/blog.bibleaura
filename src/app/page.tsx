'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { Metadata } from 'next'

// Define blog posts data for the homepage
const blogPosts = [
  // High-Priority SEO Posts
  {
    title: "Best Bible AI 2025: Complete Platform Comparison",
    slug: "/best-bible-ai-2025",
    description: "Comprehensive analysis of the top Bible AI platforms in 2025. Compare features, accuracy, and pricing to find the best fit for your Bible study needs.",
    category: "Comparison",
    featured: true,
    readTime: "8 min read",
    keywords: "Best Bible AI 2025"
  },
  {
    title: "Getting Started with Bible Aura: Complete Guide",
    slug: "/getting-started",
    description: "Step-by-step tutorial for new Bible Aura users. Learn how to maximize your Bible study experience with AI-powered tools and features.",
    category: "Tutorial",
    featured: true,
    readTime: "6 min read",
    keywords: "Getting started Bible Aura"
  },
  {
    title: "AI Bible Study Benefits: 10 Ways AI Enhances Your Study",
    slug: "/ai-bible-study-benefits",
    description: "Discover how AI transforms Bible study with deeper insights, faster research, and personalized learning. Complete benefits analysis.",
    category: "Benefits",
    featured: true,
    readTime: "7 min read",
    keywords: "AI Bible study benefits"
  },
  {
    title: "Why Bible Aura is the Best Bible AI Platform in 2025",
    slug: "/why-bible-aura-is-best-bible-ai",
    description: "Comprehensive analysis reveals why Bible Aura leads with 95% theological accuracy, advanced features, and superior user experience.",
    category: "Authority",
    featured: false,
    readTime: "10 min read",
    keywords: "Why Bible Aura is best"
  },
  
  // Pastor & Ministry Posts
  {
    title: "Bible Aura for Pastors: AI Sermon Preparation Guide",
    slug: "/bible-aura-for-pastors",
    description: "How pastors save 6+ hours weekly using Bible Aura AI for sermon preparation. Complete guide to AI-powered preaching tools.",
    category: "For Pastors",
    featured: false,
    readTime: "9 min read",
    keywords: "Bible Aura for pastors"
  },
  {
    title: "From Verses to Sermons: Complete AI Workflow",
    slug: "/verses-to-sermons",
    description: "Step-by-step guide showing how to transform biblical verses into powerful sermons using Bible Aura's AI sermon preparation tools.",
    category: "For Pastors",
    featured: false,
    readTime: "8 min read",
    keywords: "AI sermon generator"
  },
  
  // Student & Academic Posts
  {
    title: "AI Bible Study for Students: Study Smarter, Not Harder",
    slug: "/ai-bible-study-for-students",
    description: "How Christian students and seminary scholars revolutionize their Bible study with AI. Accelerate learning and improve comprehension.",
    category: "For Students",
    featured: false,
    readTime: "7 min read",
    keywords: "AI Bible study for students"
  },
  {
    title: "Smart Bible Search Techniques: Advanced AI Methods",
    slug: "/smart-bible-search-techniques",
    description: "Master advanced Bible search techniques using AI. Learn to find connections, themes, and insights faster than traditional methods.",
    category: "Tutorial",
    featured: false,
    readTime: "6 min read",
    keywords: "Smart Bible search"
  },
  
  // Comparison & Analysis Posts
  {
    title: "Bible AI vs Traditional Study: Which is Better?",
    slug: "/bible-ai-vs-traditional-study",
    description: "Honest comparison of AI-powered vs traditional Bible study methods. Discover the benefits and limitations of each approach.",
    category: "Comparison",
    featured: false,
    readTime: "8 min read",
    keywords: "AI vs traditional Bible study"
  },
  {
    title: "Bible Aura vs Other Apps: Feature Comparison",
    slug: "/bible-aura-vs-other-apps",
    description: "Detailed comparison of Bible Aura against major competitors. See why Bible Aura offers superior features and value.",
    category: "Comparison",
    featured: false,
    readTime: "9 min read",
    keywords: "Bible Aura vs competitors"
  },
  {
    title: "AI Bible Insights Accuracy: How Reliable is AI?",
    slug: "/ai-bible-insights-accuracy",
    description: "Independent analysis of Bible AI accuracy. Learn how Bible Aura achieves 95% theological accuracy and what that means for users.",
    category: "Analysis",
    featured: false,
    readTime: "7 min read",
    keywords: "AI Bible accuracy"
  },
  
  // Feature & Technology Posts
  {
    title: "How AI Transforms Bible Study: Complete Analysis",
    slug: "/how-ai-transforms-bible-study",
    description: "Explore how artificial intelligence is revolutionizing Bible study with personalized insights, faster research, and deeper understanding.",
    category: "Technology",
    featured: false,
    readTime: "8 min read",
    keywords: "How AI transforms Bible study"
  },
  {
    title: "How AI Chat Transforms Your Bible Study Experience",
    slug: "/how-ai-chat-transforms-study",
    description: "Discover how conversational AI makes Bible study more interactive, engaging, and insightful than ever before.",
    category: "Features",
    featured: false,
    readTime: "6 min read",
    keywords: "AI Bible chat"
  },
  {
    title: "5 Ways AI Deepens Your Bible Study",
    slug: "/five-ways-ai-deepens-study",
    description: "Learn specific ways AI enhances Bible study depth with contextual analysis, cross-references, and personalized insights.",
    category: "Benefits",
    featured: false,
    readTime: "5 min read",
    keywords: "AI deepens Bible study"
  },
  {
    title: "Christian AI Technology Future: What's Coming Next?",
    slug: "/christian-ai-technology-future",
    description: "Explore the future of AI in Christian ministry and Bible study. Upcoming innovations and trends to watch.",
    category: "Technology",
    featured: false,
    readTime: "7 min read",
    keywords: "Future of Christian AI"
  },
  
  // Success Stories & Community
  {
    title: "Bible Aura Success Stories: Real User Testimonials",
    slug: "/success-stories",
    description: "Read inspiring testimonials from pastors, students, and believers who transformed their Bible study with Bible Aura.",
    category: "Success Stories",
    featured: false,
    readTime: "6 min read",
    keywords: "Bible Aura testimonials"
  },
  {
    title: "Bible Aura vs Traditional Study: Integration Benefits",
    slug: "/bible-aura-vs-traditional-study",
    description: "Learn how to integrate Bible Aura with traditional study methods for enhanced learning and spiritual growth.",
    category: "Integration",
    featured: false,
    readTime: "7 min read",
    keywords: "Bible Aura vs traditional"
  },
  
  // Authority & Founder Posts
  {
    title: "How Benaiah Built Bible Aura: The Complete Story",
    slug: "/how-benaiah-built-bible-aura",
    description: "The inspiring story of how Benaiah Nicholas Nimal created Bible Aura to make Bible study accessible to everyone through AI.",
    category: "About",
    featured: false,
    readTime: "8 min read",
    keywords: "Benaiah Nicholas Nimal"
  },
  {
    title: "Top 7 Reasons Why Bible Aura Leads the Market",
    slug: "/top-7-reasons-bible-aura",
    description: "Discover the key advantages that make Bible Aura the most trusted Bible AI platform for 350,000+ users worldwide.",
    category: "Authority",
    featured: false,
    readTime: "6 min read",
    keywords: "Why choose Bible Aura"
  },
  
  // FAQ & Support
  {
    title: "Bible Aura FAQ: Everything You Need to Know",
    slug: "/bible-aura-faq",
    description: "Get answers to frequently asked questions about Bible Aura AI platform. Find solutions and learn how to maximize your experience.",
    category: "FAQ",
    featured: false,
    readTime: "5 min read",
    keywords: "Bible Aura FAQ"
  }
]

export default function BlogHomepage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const blogGridRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )

    gsap.fromTo(featuredRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
    )

    gsap.fromTo(blogGridRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power2.out" }
    )

    gsap.fromTo(sidebarRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.6, ease: "power2.out" }
    )

    gsap.fromTo(faqRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power2.out" }
    )
  }, [])

  const featuredPosts = blogPosts.filter(post => post.featured)
  const allPosts = blogPosts.filter(post => !post.featured)
  const categories = [...new Set(blogPosts.map(post => post.category))]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Bible Aura Blog",
    "description": "Expert insights on Bible AI, digital Bible study tools, and how artificial intelligence enhances Christian learning and ministry.",
    "url": "https://blog.bibleaura.xyz",
    "publisher": {
      "@type": "Organization",
      "name": "Bible Aura",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bibleaura.xyz/logo.png"
      }
    },
    "mainEntity": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "url": `https://blog.bibleaura.xyz${post.slug}`,
      "keywords": post.keywords
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div ref={heroRef} className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Bible Aura Blog
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Expert insights on Bible AI, digital Bible study tools, and how artificial intelligence enhances Christian learning and ministry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://bibleaura.xyz" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Try Bible Aura Free
                </Link>
                <Link 
                  href="https://bibleaura.xyz/bible-ai" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Explore AI Bible Chat
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Articles */}
              <div ref={featuredRef} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {featuredPosts.map((post, index) => (
                    <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          <Link href={post.slug} className="hover:text-blue-600 transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                          <Link 
                            href={post.slug}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* All Blog Posts */}
              <div ref={blogGridRef}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {allPosts.map((post, index) => (
                    <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-3 ${
                          post.category === 'For Pastors' ? 'bg-purple-100 text-purple-800' :
                          post.category === 'For Students' ? 'bg-green-100 text-green-800' :
                          post.category === 'Tutorial' ? 'bg-blue-100 text-blue-800' :
                          post.category === 'Comparison' ? 'bg-orange-100 text-orange-800' :
                          post.category === 'Technology' ? 'bg-indigo-100 text-indigo-800' :
                          post.category === 'Benefits' ? 'bg-emerald-100 text-emerald-800' :
                          post.category === 'Analysis' ? 'bg-red-100 text-red-800' :
                          post.category === 'Authority' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {post.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          <Link href={post.slug} className="hover:text-blue-600 transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{post.readTime}</span>
                          <Link 
                            href={post.slug}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div ref={sidebarRef} className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Try Bible Aura Free</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Experience the world's most accurate Bible AI. Join 350,000+ Christians worldwide.
                  </p>
                  <Link 
                    href="https://bibleaura.xyz" 
                    className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 block text-center"
                  >
                    Get Started →
                  </Link>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Browse by Category</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-700 text-sm">{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Features */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Features</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="https://bibleaura.xyz/bible-ai" className="text-blue-600 hover:text-blue-700 text-sm">
                        🤖 AI Bible Chat
                      </Link>
                    </li>
                    <li>
                      <Link href="https://bibleaura.xyz/sermon-writer" className="text-blue-600 hover:text-blue-700 text-sm">
                        ✍️ Sermon Writer
                      </Link>
                    </li>
                    <li>
                      <Link href="https://bibleaura.xyz/bible-reader" className="text-blue-600 hover:text-blue-700 text-sm">
                        📖 Bible Reader
                      </Link>
                    </li>
                    <li>
                      <Link href="https://bibleaura.xyz/community" className="text-blue-600 hover:text-blue-700 text-sm">
                        👥 Community
                      </Link>
                    </li>
                    <li>
                      <Link href="https://bibleaura.xyz/journal" className="text-blue-600 hover:text-blue-700 text-sm">
                        📝 Study Journal
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Stats */}
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

          {/* FAQ Section */}
          <div ref={faqRef} className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">What is Bible Aura?</h3>
                <p className="text-gray-600 mb-4">
                  Bible Aura is an AI-powered Bible study platform that provides instant, contextual explanations of Scripture with 95% theological accuracy.
                </p>
                
                <h3 className="text-lg font-semibold mb-2">Is Bible Aura free to use?</h3>
                <p className="text-gray-600 mb-4">
                  Yes! Bible Aura offers a generous free tier with 100 AI conversations per month, Bible reader, and community access.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How accurate is the AI?</h3>
                <p className="text-gray-600 mb-4">
                  Bible Aura maintains 95% theological accuracy, verified by evangelical scholars, with biblical references for every response.
                </p>
                
                <h3 className="text-lg font-semibold mb-2">Can pastors use it for sermons?</h3>
                <p className="text-gray-600 mb-4">
                  Absolutely! Bible Aura includes advanced sermon preparation tools that save pastors 6+ hours weekly while improving message quality.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link 
                href="/bible-aura-faq"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All FAQs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
