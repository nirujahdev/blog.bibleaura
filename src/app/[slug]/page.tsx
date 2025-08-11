import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs } from '@/lib/markdownProcessor'
import { Metadata } from 'next'
import ClientBlogPost from './ClientBlogPost'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return <ClientBlogPost post={post} />
}

// This would be used for static generation if we want pre-built pages
export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.params.slug,
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Bible Aura Blog',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | Bible Aura Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://blog.bibleaura.xyz/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://blog.bibleaura.xyz/${slug}`,
    },
  }
} 