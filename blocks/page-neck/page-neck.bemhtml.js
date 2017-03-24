block('page-neck')(
    tag()('section'),
    elem('image').tag()('img'),
    elem('text').tag()('h1'),
    elem('start-date').tag()('span'),
    elem('link')(
        tag()('a'),
        attrs()(node => ({ href: node.ctx.url }))
    )
);
