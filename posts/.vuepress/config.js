module.exports = {
  title: 'testblog',
  description: 'Just playing around',
  markdown: {
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-footnote'))
    }
  },
  head: [
    ['link', {rel: 'stylesheet', href: 'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'}],
    ['script', {src: 'https://kit.fontawesome.com/08ddb17d14.js', crossorigin: 'anonymous'}]
  ]

}
