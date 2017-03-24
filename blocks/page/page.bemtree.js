block('page').content()(node => {
    const index = node.data.page.url === '/';

    return [
        {
            block: 'page-head',
            mods: index && { index: true }
        },
        {
            block: 'page-neck',
            mods: index && { index: true }
        },
        {
            block: 'page-body',
            mods: index && { index: true }
        },
        {
            block: 'page-foot'
        }
    ];
});
