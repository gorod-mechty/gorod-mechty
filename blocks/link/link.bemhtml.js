block('link')(
    tag()('a'),
    attrs()(node => ({ href: node.ctx.url }))
);
