block('contact-form')(
    tag()('form'),
    attrs()(node => {
        return { action: node.ctx.action };
    }),
    elem('title').tag()('h2')
);
