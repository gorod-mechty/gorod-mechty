block('projects-list')(
    elem('item')(
        tag()('a'),
        attrs()(node => ({ href: node.ctx.url }))
    ),
    elem('image')(
        tag()('img'),
        attrs()(node => {
            const ctx = node.ctx;

            return {
                src: ctx.path + ctx.data.src,
                alt: ctx.data.alt
            };
        })
    ),
    elem('title').tag()('h2')
);
