block('page-neck').content()(node => {
    const root = node.data.root;
    const page = node.data.page;

    return [
        {
            elem: 'text',
            content: [
                page.title,
                page.state && {
                    block: 'project-state',
                    mods: page.state.mods,
                    mix: { block: 'page-neck', elem: 'state' },
                    content: page.state.text
                },
                page.startDate && {
                    elem: 'start-date',
                    content: page.startDate
                },
                page.url === '/' && {
                    block: 'link',
                    url: page.link.url,
                    mix: { block: 'page-neck', elem: 'link' },
                    content: page.link.text
                }
            ]
        },
        {
            block: 'image',
            mix: { block: 'page-neck', elem: 'image' },
            src: `${root}/${page.titleImage}`,
            alt: page.title
        }
    ];
});
