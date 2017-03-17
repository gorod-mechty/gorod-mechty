block('textarea')(
    tag()('textarea'),
    attrs()(node => {
        return { placeholder: node.ctx.placeholder };
    })
);
