interface AnswerSnippetProps {
  question: string
  shortAnswer: string
  scriptureCitation?: string
  supportingPoints?: string[]
  relatedLink?: {
    href: string
    text: string
  }
}

export default function AnswerSnippet({ 
  question, 
  shortAnswer, 
  scriptureCitation,
  supportingPoints = [],
  relatedLink
}: AnswerSnippetProps) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">Quick Answer</h2>
        <p className="text-base text-gray-800 leading-relaxed">
          {shortAnswer}
          {scriptureCitation && (
            <span className="text-blue-700 font-medium ml-2">({scriptureCitation})</span>
          )}
        </p>
      </div>
      
      {supportingPoints.length > 0 && (
        <div className="mb-4">
          <ul className="space-y-1">
            {supportingPoints.map((point, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {relatedLink && (
        <div>
          <a 
            href={relatedLink.href} 
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {relatedLink.text} →
          </a>
        </div>
      )}
      
      {/* Schema for QAPage if this is a single Q&A */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": shortAnswer + (scriptureCitation ? ` (${scriptureCitation})` : '')
            }
          })
        }}
      />
    </div>
  )
} 