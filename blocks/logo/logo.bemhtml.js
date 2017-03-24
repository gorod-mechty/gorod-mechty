block('logo')(
    tag()(node => node.ctx.url ? 'a' : 'span'),
    attrs()(node => {
        let attrs = applyNext() || {};
        attrs.href = node.ctx.url;

        return attrs;
    }),
    content()(() => {
        const fs = require('fs');
        const elem = 'image';

        return {
            html: fs.readFileSync('blocks/logo/logo.svg', 'utf8')
                    .replace(/<svg/, `<svg class="logo__${elem}"`)
        };
    })
);
