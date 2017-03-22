block('gallery')(
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
    elem('thumb-img')(
        tag()('img'),
        attrs()(node => {
            const ctx = node.ctx;

            return {
                src: ctx.path + ctx.data.src,
                alt: ctx.data.alt
            };
        })
    )
);
