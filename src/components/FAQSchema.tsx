interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
  pageTitle?: string
  pageUrl?: string
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  // If only one FAQ, use QAPage instead
  const qaSchema = faqs.length === 1 ? {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": faqs[0].question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqs[0].answer
      }
    }
  } : null

  const schemaToUse = faqs.length === 1 ? qaSchema : faqSchema

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaToUse)
      }}
    />
  )
} 