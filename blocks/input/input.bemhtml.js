block('input')(
    tag()('input'),
    attrs()(node => ({ placeholder: node.ctx.placeholder }))
);
