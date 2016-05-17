block('nav').content()(function() {
    var data = this.data;

    return data.pages.filter(function(item) {
        // Добавляем в навигацию только адреса вида /page/
        // TODO: делать более умную проверку
        return item.url.split('/').length === 3;
    }).map(function(item) {

        var isCurrent = this.data.page.url === item.url;

        return {
            elem: 'item',
            elemMods: { current: isCurrent },
            content: isCurrent ? item.title : {
                elem: 'link',
                attrs: { href: item.url },
                content: item.title
            }
        };
    }, this);
});
