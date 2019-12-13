module.exports = {
  title: 'testblog',
  description: 'Just playing around',
  markdown: {
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-footnote'))
    }
  }
}
