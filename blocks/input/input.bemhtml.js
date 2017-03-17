block('input')(
    tag()('input'),
    attrs()(node => {
        return { placeholder: node.ctx.placeholder };
    })
);
