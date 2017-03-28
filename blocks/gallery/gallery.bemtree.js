block('gallery').content()(node => {
    const path = require('path');
    const root = node.data.root;
    const gallery = require(path.resolve('./content', node.data.page.gallery));
    const url = root + node.data.page.url;

    return [
        {
            block: 'image',
            mix: { block: 'gallery', elem: 'image' },
            src: url + gallery.image.src,
            alt: gallery.image.alt
        },
        {
            elem: 'thumbs',
            content: gallery.thumbs.map((data, idx) => {
                return {
                    elem: 'thumb-item',
                    elemMods: (() => {
                        if (idx === 0) return { active: true };
                    })(),
                    content: [
                        {
                            block: 'image',
                            mix: { block: 'gallery', elem: 'thumb-img' },
                            src: url + data.src,
                            alt: data.alt
                        }
                    ]
                };
            })
        }
    ];
});
