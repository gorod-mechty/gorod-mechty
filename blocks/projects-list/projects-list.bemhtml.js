block('projects-list')(
    elem('item')(
        tag()('a'),
        attrs()(node => ({ href: node.ctx.url }))
    ),
    elem('title').tag()('h2')
);
