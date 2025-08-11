import { Metadata } from 'next'
import ClientFAQ from './ClientFAQ'

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
  return <ClientFAQ />
} 