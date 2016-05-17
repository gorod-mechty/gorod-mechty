block('sidebar').content()(node => {
    return [
        {
            block: 'logo',
            url: node.data.page.url !== '/' ? '/' : undefined
        }
    ];
});
