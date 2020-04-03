module.exports = {
  title: 'testblog',
  description: 'Just playing around',
  base: "/testblog/",
  markdown: {
    extendMarkdown: md => {
      md.set({ typographer: true });
      md.use(require('markdown-it-footnote'));
      md.use(require('markdown-it-anchor'));
    },
    anchor: { permalink: true, permalinkBefore: false, permalinkSymbol: '' }
  },
  head: [
    ['script', {src: 'https://kit.fontawesome.com/08ddb17d14.js', crossorigin: 'anonymous'}]
  ]
}
