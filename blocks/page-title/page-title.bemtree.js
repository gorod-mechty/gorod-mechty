block('page-title').content()(node => {
    var root  = node.data.root,
        src   = node.data.page.titleImage,
        title = node.data.page.title;

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
