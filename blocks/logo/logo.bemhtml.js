block('logo')(
    tag()(node => {
        return node.ctx.url ? 'a' : 'span';
    }),
    attrs()(node => {
        var attrs = applyNext() || {};
        attrs.href = node.ctx.url;
        return attrs;
    }),
    elem('image').tag()('img')
);
