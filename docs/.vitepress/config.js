module.exports = {
    title: "Ink",
    markdown: {
        lineNumbers: true,
        toc: { includeLevel: [1, 2] },
        config: (md) => {
            md.use(require('markdown-it-footnote'))
        }
    }
}