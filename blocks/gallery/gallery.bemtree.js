block('gallery').content()(node => {
    const root = node.data.root;
    const gallery = node.data.page.gallery;
    const path = `${root}/${gallery.path}`;

    return [
        {
            elem: 'image',
            path: path,
            data: gallery.image
        },
        {
            elem: 'thumbs',
            content: [
                gallery.thumbs.map((data, idx) => {
                    return {
                        elem: 'thumb-item',
                        elemMods: (() => {
                            if (idx === 0) return { active: true };
                        })(),
                        content: [
                            {
                                elem: 'thumb-img',
                                path: path,
                                data: data,
                            }
                        ]
                    };
                })
            ]
        }
    ];
});
