block('nav').content()(node => {
    const data = node.data;

    return data.pages.filter(function(item) {
        // Добавляем в навигацию только адреса вида /page/
        // TODO: делать более умную проверку
        return item.url.split('/').length === 3;
    }).map(function(item) {

        var isCurrent = node.data.page.url === item.url;

        return {
            elem: 'item',
            elemMods: { current: isCurrent },
            content: isCurrent ? item.navItem : {
                elem: 'link',
                attrs: { href: data.root + item.url },
                content: item.navItem
            }
        };
    }, node);
});
