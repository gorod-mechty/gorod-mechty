block('text-about')(
    elem('photo')(
        tag()('img'),
        attrs()(function() {
            let root = this.ctx.content.root;
            let page = this.ctx.content.page.url;
            return {
                src: root + page + this.ctx.image,
                alt: this.ctx.alt
            };
        })
    )
);
