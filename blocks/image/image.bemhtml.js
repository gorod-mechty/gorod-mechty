block('image')(
    tag()('img'),
    attrs()(node => {
        return {
            src: node.ctx.src,
            alt: node.ctx.alt
        };
    })
);
