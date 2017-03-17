block('contact-form')(
    tag()('form'),
    attrs()(node => ({ action: node.ctx.action })),
    elem('title').tag()('h2')
);
