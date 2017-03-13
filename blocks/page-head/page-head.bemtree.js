block('page-head').content()(function() {
    var data = this.data,
        url  = data.page.url;

    return [
        {
            block: 'logo',
            mix: { block: 'page-head', elem: 'logo' },
            url: url !== '/' ? data.root + '/' : undefined
        },
        {
            block: 'nav',
            mix: { block: 'page-head', elem: 'nav' },
        }
    ];
});

