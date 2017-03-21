block('page-neck').content()(node => {
    const root = node.data.root;
    const page = node.data.page;

    return [
        {
            elem: 'text',
            content: [
                page.title,
                page.projectState && {
                    block: 'project-state',
                    mods: { process: true },
                    mix: { block: 'page-neck', elem: 'state' },
                    content: page.projectState
                },
                page.startDate && {
                    elem: 'start-date',
                    content: page.startDate
                },
            ]
        },
        {
            elem: 'image',
            attrs: {
                src: `${root}/${page.titleImage}`,
                alt: page.title
            }
        }
    ];
});
