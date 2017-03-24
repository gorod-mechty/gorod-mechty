block('page-body').content()(node => {
    if (node.data.page.url !== '/')
        return node.data.page.content;

    return { block: 'projects-list' };
});
