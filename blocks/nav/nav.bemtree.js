block('nav').content()(node => {
    const data = node.data;

    return data.pages
        .filter(item => item.url.split('/').length === 3)
        .map(item => {

            var isCurrent = data.page.url === item.url;

            return {
                elem: 'item',
                elemMods: { current: isCurrent },
                content: isCurrent ? item.title : {
                    elem: 'link',
                    attrs: { href: data.root + item.url },
                    content: item.title
                }
            };
        }, node);
});
