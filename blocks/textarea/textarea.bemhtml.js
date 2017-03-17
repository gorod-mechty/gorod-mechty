block('textarea')(
    tag()('textarea'),
    attrs()(node => ({ placeholder: node.ctx.placeholder }))
);
