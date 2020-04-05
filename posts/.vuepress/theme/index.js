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
  }
}
