block('button')(
    tag()('button'),
    attrs()(function() {
        if (this.ctx.mix.elemMods.disabled) {
            return { disabled: 'disabled'};
        }
    }),
    content()(function() {
        return this.ctx.text;
    })
);
