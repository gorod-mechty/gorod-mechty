block('page-head').content()(node => {
    const data = node.data;
    const url = data.page.url;

    return [
        {
            block: 'logo',
            mix: { block: 'page-head', elem: 'logo' },
            url: url !== '/' ? data.root + '/' : undefined
        },
        {
            block: 'nav',
            mix: { block: 'page-head', elem: 'nav' },
        },
        {
            elem: 'toggle',
            content: [
                {
                    elem: 'toggle-line'
                }
            ]
        }
    ];
});
