block('contacts')(
    tag()('ul'),
    elem('contact')(
        tag()('li'),
        content()(node => {
            const url = applyNext();

            return {
                block: 'link',
                mix: { block: 'contacts', elem: 'link' },
                url: (node.elemMods.type === 'phone' ? 'tel' : 'mailto') + ':' + url.replace(/ /g, ''),
                content: url
            };
        })
    )
);
