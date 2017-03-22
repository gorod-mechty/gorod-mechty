block('root').replace()(node => {
    const data = node.data = node.ctx.data;
    let title = data.page.url !== '/' ? data.page.title + ' / ' : '';

    title += data.pages[0].title;

    return {
        block: 'page',
        title: title,
        head: [
            { elem: 'css', url: data.root + '/index.min.css' }
        ],
        favicon: data.root + '/favicon.ico',
        scripts: data.page.map && [
            { elem: 'js', url: 'https://api-maps.yandex.ru/2.1/?load=Map&lang=ru_RU' },
            { elem: 'js', content: `
                ymaps.ready(function () {
                    new ymaps.Map("map", {
                        center: ${data.page.map.coordinates},
                        zoom: ${data.page.map.zoom}
                    });
                });
            `},
        ],
    };
});
