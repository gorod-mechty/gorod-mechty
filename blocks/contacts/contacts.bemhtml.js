block('contacts')(
    tag()('ul'),
    elem('contact')(
        tag()('li'),
        content()(function() {
            var link = this.ctx.elemMods.type === 'phone' ? 'tel' : 'mailto';
            return {
                block: 'link',
                attrs: { href: `${link}:${this.ctx.content}` },
                content: this.ctx.content
            };
        })
    )
);
