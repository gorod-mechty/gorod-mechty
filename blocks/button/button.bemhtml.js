block('button')(
    tag()('button'),
    content()(node => {
        return node.ctx.text;
    })
);
