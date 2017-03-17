block('button')(
    tag()('button'),
    content()(function() {
        return this.ctx.text;
    })
);
