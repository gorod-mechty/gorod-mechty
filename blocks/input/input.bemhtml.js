block('input')(
    tag()('input'),
    attrs()(function() {
        return { placeholder: this.ctx.placeholder };
    })
);
