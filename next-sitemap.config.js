/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blog.bibleaura.xyz',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  
  // Static paths for all blog posts
  additionalPaths: async (config) => {
    const blogPosts = [
      // High-Priority SEO Posts (Priority 1.0)
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/best-bible-ai-2025', changefreq: 'monthly', priority: 1.0 },
      { loc: '/getting-started', changefreq: 'monthly', priority: 1.0 },
      { loc: '/ai-bible-study-benefits', changefreq: 'monthly', priority: 1.0 },
      
      // Authority & Conversion Posts (Priority 0.9)
      { loc: '/why-bible-aura-is-best-bible-ai', changefreq: 'monthly', priority: 0.9 },
      { loc: '/bible-aura-for-pastors', changefreq: 'monthly', priority: 0.9 },
      { loc: '/verses-to-sermons', changefreq: 'monthly', priority: 0.9 },
      { loc: '/bible-aura-vs-other-apps', changefreq: 'monthly', priority: 0.9 },
      { loc: '/how-benaiah-built-bible-aura', changefreq: 'quarterly', priority: 0.9 },
      
      // Educational & Tutorial Posts (Priority 0.8)
      { loc: '/ai-bible-study-for-students', changefreq: 'monthly', priority: 0.8 },
      { loc: '/bible-ai-vs-traditional-study', changefreq: 'monthly', priority: 0.8 },
      { loc: '/how-ai-transforms-bible-study', changefreq: 'monthly', priority: 0.8 },
      { loc: '/smart-bible-search-techniques', changefreq: 'monthly', priority: 0.8 },
      { loc: '/ai-bible-insights-accuracy', changefreq: 'monthly', priority: 0.8 },
      
      // Feature-Focused Posts (Priority 0.7)
      { loc: '/how-ai-chat-transforms-study', changefreq: 'monthly', priority: 0.7 },
      { loc: '/five-ways-ai-deepens-study', changefreq: 'monthly', priority: 0.7 },
      { loc: '/christian-ai-technology-future', changefreq: 'monthly', priority: 0.7 },
      { loc: '/top-7-reasons-bible-aura', changefreq: 'monthly', priority: 0.7 },
      
      // Social Proof & Community Posts (Priority 0.6)
      { loc: '/success-stories', changefreq: 'monthly', priority: 0.6 },
      { loc: '/bible-aura-vs-traditional-study', changefreq: 'monthly', priority: 0.6 },
      { loc: '/bible-aura-faq', changefreq: 'weekly', priority: 0.8 }
    ]

    return blogPosts.map((post) => ({
      loc: post.loc,
      changefreq: post.changefreq,
      priority: post.priority,
      lastmod: new Date().toISOString(),
    }))
  },

  // Transform function for additional SEO customization
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7
    let changefreq = 'weekly'

    // Homepage gets highest priority
    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    }
    // High-value SEO pages
    else if (['/best-bible-ai-2025', '/getting-started', '/ai-bible-study-benefits'].includes(path)) {
      priority = 1.0
      changefreq = 'monthly'
    }
    // Authority and conversion pages
    else if ([
      '/why-bible-aura-is-best-bible-ai',
      '/bible-aura-for-pastors', 
      '/verses-to-sermons',
      '/bible-aura-vs-other-apps',
      '/how-benaiah-built-bible-aura'
    ].includes(path)) {
      priority = 0.9
      changefreq = 'monthly'
    }
    // Educational content
    else if ([
      '/ai-bible-study-for-students',
      '/bible-ai-vs-traditional-study',
      '/how-ai-transforms-bible-study',
      '/smart-bible-search-techniques',
      '/ai-bible-insights-accuracy'
    ].includes(path)) {
      priority = 0.8
      changefreq = 'monthly'
    }
    // FAQ gets higher priority for rich snippets
    else if (path === '/bible-aura-faq') {
      priority = 0.8
      changefreq = 'weekly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://blog.bibleaura.xyz${path}`,
          hreflang: 'en-US',
        },
      ],
    }
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/']
      },
      {
        userAgent: 'GPTBot',
        disallow: '/'
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/'
      }
    ],
    additionalSitemaps: [
      'https://blog.bibleaura.xyz/sitemap.xml',
    ],
  },

  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
    '/404',
    '/500'
  ]
} 