block('page-title').content()(node => {
    const root = node.data.root;
    const src = node.data.page.titleImage;
    const title = node.data.page.title;

    return [
        {
            block: 'project-state',
            mix: { block: 'page-title', elem: 'state' },
            content: 'в процессе'
        },
        {
            elem: 'start-date',
            content: 'с 12 октября 2015'
        },
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
