block('contact-form')(
    tag()('form'),
    attrs()(function() {
        return { action: this.ctx.action };
    })
);
