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
        favicon: data.root + '/favicon.ico'
        // scripts: [
        //     { elem: 'js', url: data.root + '/index.min.js' }
        // ]
    };
});
