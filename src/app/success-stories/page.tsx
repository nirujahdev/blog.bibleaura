


import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bible Aura Success Stories: Real User Transformations | Bible Aura Blog',
  description: 'Read inspiring testimonials from pastors, students, and believers who transformed their Bible study with Bible Aura AI. Real stories, real results.',
  keywords: 'Bible Aura testimonials, AI Bible study success stories, Christian AI testimonials, Bible study transformation',
  openGraph: {
    title: 'Bible Aura Success Stories: Real User Transformations',
    description: 'Read inspiring testimonials from pastors, students, and believers who transformed their Bible study with Bible Aura AI.',
    type: 'article',
    url: 'https://blog.bibleaura.xyz/success-stories',
  },
  alternates: {
    canonical: 'https://blog.bibleaura.xyz/success-stories',
  },
}

export default function SuccessStoriesPage() {


  const stories = [
    {
      name: "Pastor Michael Chen",
      role: "Senior Pastor, Grace Community Church",
      location: "California",
      image: "👨‍💼",
      quote: "Bible Aura has revolutionized my sermon preparation. What used to take me 8 hours now takes 3 hours, and the quality has actually improved. The AI provides insights I might have missed and helps me create more engaging, biblically sound messages.",
      highlight: "Saves 5 hours per sermon"
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Seminary Professor",
      location: "Dallas Theological Seminary",
      image: "👩‍🏫",
      quote: "As someone who teaches biblical exegesis, I was initially skeptical about AI in Bible study. But Bible Aura's commitment to accuracy and proper hermeneutics has impressed me. It's become an essential tool for my students learning to study Scripture.",
      highlight: "Enhanced theological education"
    },
    {
      name: "Mark Williams",
      role: "Small Group Leader",
      location: "Texas",
      image: "👨‍👥",
      quote: "Our small group discussions have never been deeper. Bible Aura helps me prepare engaging questions and provides background context that brings Scripture to life. Group members are more engaged and asking better questions.",
      highlight: "Deeper group discussions"
    },
    {
      name: "Jennifer Rodriguez",
      role: "Bible Study Leader",
      location: "Florida",
      image: "👩‍💼",
      quote: "I was nervous about using AI for Bible study, but Bible Aura's responses are always biblically grounded with clear references. It's like having a seminary professor available 24/7 to answer my questions.",
      highlight: "24/7 biblical guidance"
    },
    {
      name: "David Thompson",
      role: "Seminary Student",
      location: "Westminster Seminary",
      image: "👨‍🎓",
      quote: "Bible Aura has accelerated my learning dramatically. I can quickly research theological concepts, explore cross-references, and understand difficult passages. It's like having a research assistant that never sleeps.",
      highlight: "Accelerated learning"
    },
    {
      name: "Rachel Kim",
      role: "Youth Pastor",
      location: "Washington",
      image: "👩‍💼",
      quote: "Teaching teenagers about the Bible can be challenging, but Bible Aura helps me find modern applications and examples that resonate with young people. My youth group is more engaged with Scripture than ever before.",
      highlight: "Engaged youth ministry"
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Bible Aura Success Stories: Real User Transformations",
            "description": "Read inspiring testimonials from pastors, students, and believers who transformed their Bible study with Bible Aura AI.",
            "image": "https://blog.bibleaura.xyz/success-stories-og.jpg",
            "author": {
              "@type": "Organization",
              "name": "Bible Aura Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bible Aura",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bibleaura.xyz/logo.png"
              }
            },
            "datePublished": "2024-12-19",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://blog.bibleaura.xyz/success-stories"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Success Stories
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
              Real Stories, Real Transformations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how pastors, students, and believers worldwide have transformed their Bible study with <Link href="https://bibleaura.xyz" className="text-green-600 hover:text-green-700 font-semibold">Bible Aura</Link> AI.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{story.image}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.role}</p>
                      <p className="text-sm text-gray-500">{story.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      {story.highlight}
                    </span>
                  </div>
                  
                  <blockquote className="text-gray-700 italic">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-lg p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Thousands of Satisfied Users</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                  <p className="text-gray-600">Theological Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                  <p className="text-gray-600">Active Users</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">5 Hours</div>
                  <p className="text-gray-600">Average Time Saved Weekly</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">
                Ready to transform your Bible study experience? Join the growing community of believers who have discovered the power of AI-enhanced Scripture exploration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://bibleaura.xyz" 
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Start Your Free Trial
                </Link>
                <Link 
                  href="/getting-started" 
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Learn How to Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Success Story</h2>
            <p className="text-xl mb-8">
              Have Bible Aura transformed your ministry or personal study? We'd love to hear about it!
            </p>
            <Link 
              href="https://bibleaura.xyz/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Tell Us Your Story
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 