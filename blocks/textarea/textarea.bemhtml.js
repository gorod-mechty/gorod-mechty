block('textarea')(
    tag()('textarea'),
    attrs()(function() {
        return { placeholder: this.ctx.placeholder };
    })
);
