block('nav').content()(node => {
    const data = node.data;

    return data.pages.filter(item => {
        // Добавляем в навигацию только адреса вида /page/
        // TODO: делать более умную проверку
        return item.url.split('/').length === 3;
    }).map(item => {

        var isCurrent = node.data.page.url === item.url;

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
