block('page-title').content()(node => {
    const root = node.data.root;
    const src = node.data.page.titleImage;
    const title = node.data.page.title;

    return [
        {
            elem: 'text',
            content: title
        },
        {
            elem: 'image',
            attrs: {
                src: `${root}/${src}`,
                alt: title
            }
        }
    ];
});
