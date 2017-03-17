block('logo')(
    tag()(node => node.ctx.url ? 'a' : 'span'),
    attrs()(node => {
        let attrs = applyNext() || {};
        attrs.href = node.ctx.url;

        return attrs;
    }),
    elem('image').tag()('img')
);
