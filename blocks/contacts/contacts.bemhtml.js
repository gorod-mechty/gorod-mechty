block('contacts')(
    tag()('ul'),
    elem('contact')(
        tag()('li'),
        content()(function() {
            var url = applyNext();

            return {
                block: 'link',
                mix: { block: 'contacts', elem: 'link' },
                url: (this.elemMods.type === 'phone' ? 'tel' : 'mailto') + ':' + url,
                content: url
            };
        })
    )
);
