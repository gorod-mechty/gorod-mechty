block('gallery').content()(node => {
    const path = require('path');
    const root = node.data.root;
    const gallery = require(path.resolve('./content', node.data.page.gallery));
    const url = root + node.data.page.url;

    return [
        {
            elem: 'image',
            path: url,
            data: gallery.image
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
                            elem: 'thumb-img',
                            path: url,
                            data: data,
                        }
                    ]
                };
            })
        }
    ];
});
