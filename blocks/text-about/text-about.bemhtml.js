block('text-about')(
    tag()('article'),
    elem('title').tag()('h2'),
    elem('activity').tag()('p'),
    elem('photo')(
        tag()('img'),
        attrs()(node => {
            let root = node.ctx.content.root;
            let page = node.ctx.content.page.url;
            
            return {
                src: root + page + node.ctx.image,
                alt: node.ctx.alt
            };
        })
    )
);
