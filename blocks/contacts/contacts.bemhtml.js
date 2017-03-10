block('contacts')(
    tag()('ul'),
    elem('contact')(
        tag()('li'),
        content()(function() {
            var url = applyNext();

            return {
                elem: 'link',
                attrs: { href: (this.elemMods.type === 'phone' ? 'tel' : 'mailto') + ':' + url },
                content: url
            };
        })
    )
);
