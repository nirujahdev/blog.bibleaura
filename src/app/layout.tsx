import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bible Aura Blog — AI-Powered Bible Study Insights',
  description: 'Discover how AI transforms Bible study with Bible Aura. Comprehensive guides, success stories, and expert insights for modern Christian learning.',
  keywords: 'Bible AI, AI Bible study, Bible Aura, Christian AI, digital Bible study',
  authors: [{ name: 'Bible Aura Team' }],
  creator: 'Bible Aura',
  publisher: 'Bible Aura',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blog.bibleaura.xyz',
    siteName: 'Bible Aura Blog',
    title: 'Bible Aura Blog — AI-Powered Bible Study Insights',
    description: 'Discover how AI transforms Bible study with Bible Aura. Comprehensive guides, success stories, and expert insights for modern Christian learning.',
    images: [
      {
        url: 'https://blog.bibleaura.xyz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bible Aura Blog - AI-Powered Bible Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bible Aura Blog — AI-Powered Bible Study Insights',
    description: 'Discover how AI transforms Bible study with Bible Aura. Comprehensive guides, success stories, and expert insights for modern Christian learning.',
    images: ['https://blog.bibleaura.xyz/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://blog.bibleaura.xyz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://blog.bibleaura.xyz" />
      </head>
      <body className={inter.className}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-blue-600">
                  Bible Aura Blog
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </a>
                  <a href="/getting-started" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Getting Started
                  </a>
                  <a href="/comprehensive-guide" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Guides
                  </a>
                  <a href="/success-stories" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Success Stories
                  </a>
                  <a href="/faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    FAQ
                  </a>
                  <a href="https://bibleaura.xyz" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                    Try Bible Aura Free
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Start</h3>
                <ul className="space-y-2">
                  <li><a href="/getting-started" className="text-gray-300 hover:text-white">Getting Started</a></li>
                  <li><a href="/comprehensive-guide" className="text-gray-300 hover:text-white">Complete Guide</a></li>
                  <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="/ai-bible-study-benefits" className="text-gray-300 hover:text-white">Benefits</a></li>
                  <li><a href="/success-stories" className="text-gray-300 hover:text-white">Success Stories</a></li>
                  <li><a href="/best-bible-ai-2025" className="text-gray-300 hover:text-white">Bible AI Comparison</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Bible Aura Platform</h3>
                <ul className="space-y-2">
                  <li><a href="https://bibleaura.xyz/bible-ai" className="text-gray-300 hover:text-white">AI Bible Chat</a></li>
                  <li><a href="https://bibleaura.xyz/features" className="text-gray-300 hover:text-white">Features</a></li>
                  <li><a href="https://bibleaura.xyz/community" className="text-gray-300 hover:text-white">Community</a></li>
                  <li><a href="https://bibleaura.xyz" className="text-gray-300 hover:text-white">Main Site</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="https://bibleaura.xyz/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                  <li><a href="https://bibleaura.xyz/help" className="text-gray-300 hover:text-white">Help Center</a></li>
                  <li><a href="https://bibleaura.xyz/privacy" className="text-gray-300 hover:text-white">Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-center text-gray-400">
                © 2024 Bible Aura. All rights reserved. | 
                <a href="https://bibleaura.xyz" className="text-blue-400 hover:text-blue-300 ml-1">
                  Try Bible Aura Free →
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
