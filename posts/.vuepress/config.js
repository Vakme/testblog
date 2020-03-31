module.exports = {
  title: 'testblog',
  description: 'Just playing around',
  base: "/testblog/",
  markdown: {
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.set({ typographer: true });
      md.use(require('markdown-it-footnote'));
      md.use(require('markdown-it-anchor'));
    },
    anchor: { permalink: true, permalinkBefore: false, permalinkSymbol: '' }
  },
  head: [
    ['link', {rel: 'stylesheet', href: 'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'}],
    ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:300,400,700&display=swap&subset=latin-ext'}],
    ['script', {src: 'https://kit.fontawesome.com/08ddb17d14.js', crossorigin: 'anonymous'}]
  ],
  plugins: {
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
            id: 'author',
            dirname: '_authors',
            itemLayout: 'Page',
            itemPermalink: '/:slug'
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
            id: "image",
            keys: ['image'],
          },
        ]
      },
    '@vuepress/plugin-medium-zoom':
      {
      selector: '.theme-container :not(a) > img',
    }
  }
}
