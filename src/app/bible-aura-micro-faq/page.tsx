import Link from 'next/link'
import { Metadata } from 'next'
import ClientMicroFAQ from './ClientMicroFAQ'

export const metadata: Metadata = {
  title: 'Bible Aura Quick FAQ: 10 Essential Questions Answered | Bible Aura',
  description: 'Get instant answers to the top 10 questions about Bible Aura AI Bible study platform. Perfect for quick reference and SEO-optimized for rich results.',
  keywords: 'Bible Aura FAQ, AI Bible study questions, quick Bible AI answers, Bible Aura features, Christian AI FAQ',
  openGraph: {
    title: 'Bible Aura Quick FAQ: 10 Essential Questions Answered',
    description: 'Instant answers to top Bible Aura questions - accuracy, features, pricing, and more.',
    type: 'article',
    url: 'https://blog.bibleaura.xyz/bible-aura-micro-faq',
  },
  alternates: {
    canonical: 'https://blog.bibleaura.xyz/bible-aura-micro-faq',
  },
}

export default function MicroFAQPage() {
  return <ClientMicroFAQ />
} 