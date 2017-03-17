block('link')(
    tag()('a'),
    attrs()(node => {
        return { href: node.ctx.url };
    })
);
