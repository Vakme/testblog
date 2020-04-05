module.exports = {
  globalLayout: 'layouts/GlobalLayout.vue',
  head: [
    ['link', {rel: 'stylesheet', href: 'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'}],
    ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:300,400,700&display=swap&subset=latin-ext'}],
  ],
  plugins: {
    'reading-progress': {
      readingDir: 'posts'
    },
    '@vuepress/blog':
        {
          directories: [
            {
              id: 'post',
              dirname: '_posts',
              path: '/',
              pagination: {
                lengthPerPage: 3
              }
            },
            {
              id: 'page',
              dirname: '_pages',
              itemLayout: 'Page',
              itemPermalink: '/:slug'
            },
            {
              id: 'author_meta',
              dirname: '_authors',
              itemPermalink: 'author_meta/:slug',
              itemLayout: 'Page',
            },

          ],
          frontmatters: [
            {
              id: "tag",
              keys: ['tag', 'tags'],
              path: '/tag/',
              scopeLayout: 'Tag'
            },
            {
              id: "category",
              keys: ['category', 'categories'],
              path: '/category/',
              scopeLayout: 'Tag'
            },
            {
              id: 'author',
              keys: ['author', "authors"],
              path: '/author/',
              scopeLayout: 'Author'
            },
            {
              id: "image",
              keys: ['image'],
            },
          ]
        },
    '@vuepress/plugin-medium-zoom':
        {
          selector: '.theme-container :not(a) > img',
        },
    'vuepress-plugin-reading-time':
        {
          excludes: ['/about', '/tag/.*', '/category/.*', '/author/.*', '/author_meta/.*']
        },
    'social-share':
        {
          networks: ['twitter', 'facebook', 'reddit'],
          autoQuote: true,
          isPlain: false,
          noGlobalSocialShare: true
        },
      'seo': {
          siteTitle: (_, $site) => $site.title,
          title: $page => $page.title,
          description: $page => $page.frontmatter.description,
          author: $page => $page.frontmatter.author,
          tags: $page => $page.frontmatter.tags,
          twitterCard: _ => 'summary_large_image',
          type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
          url: (_, $site, path) => ($site.themeConfig.domain || '') + ($site.themeConfig.base || '') + path,
          image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + ($site.themeConfig.base || '') + $page.frontmatter.image),
          publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
          modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
  }
}
