module.exports = {
    title: 'InkPress',
    description: 'The palest ink is better than the best memory',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Linux', link: '/linux/' },
          { text: 'GitHub', link: 'https://github.com/ykx90/' }
        ]
    },
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-footnote'))
        }
    }
}