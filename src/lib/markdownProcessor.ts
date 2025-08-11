interface BlogPost {
  title: string
  description: string
  content: string
  category: string
  author: string
  date: string
  keywords?: string
}

// Mock blog posts data for now
const mockPosts: Record<string, BlogPost> = {
  'getting-started': {
    title: 'Getting Started with Bible Aura',
    description: 'Complete beginner\'s guide to Bible Aura AI Bible study platform',
    content: '<h2>Getting Started</h2><p>Welcome to Bible Aura...</p>',
    category: 'Guide',
    author: 'Bible Aura Team',
    date: '2024-01-15',
    keywords: 'Bible Aura guide, getting started, AI Bible study'
  },
  'comprehensive-guide': {
    title: 'Comprehensive Bible Aura Guide',
    description: 'Ultimate tutorial for mastering Bible Aura\'s AI-powered features',
    content: '<h2>Comprehensive Guide</h2><p>This complete guide covers...</p>',
    category: 'Tutorial',
    author: 'Bible Aura Team',
    date: '2024-01-20',
    keywords: 'Bible Aura tutorial, comprehensive guide, AI features'
  },
  'success-stories': {
    title: 'Bible Aura Success Stories',
    description: 'Real testimonials from satisfied Bible Aura users',
    content: '<h2>Success Stories</h2><p>Here are some amazing testimonials...</p>',
    category: 'Testimonials',
    author: 'Bible Aura Community',
    date: '2024-01-25',
    keywords: 'Bible Aura testimonials, success stories, user reviews'
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  return mockPosts[slug] || null
}

export function getAllPostSlugs() {
  return Object.keys(mockPosts).map(slug => ({
    params: { slug }
  }))
} 