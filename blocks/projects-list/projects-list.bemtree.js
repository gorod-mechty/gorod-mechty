block('projects-list').content()(node => {
    const path = require('path');
    const list = require(path.resolve('content/projects/projects'));
    let url = node.data.root + node.data.page.url;

    return list.map((item, idx) => {
        if (node.data.page.url === '/') {
            url = node.data.root + '/projects/';

            if (idx >= 3) return;
        }

        return {
            elem: 'item',
            url: url + item.url,
            content: [
                {
                    block: 'project-state',
                    mods: item.state.mods,
                    mix: { block: 'projects-list', elem: 'state' },
                    content: item.state.text
                },
                {
                    elem: 'image',
                    path: url,
                    data: item.image
                },
                {
                    elem: 'title',
                    content: item.title
                },
                {
                    elem: 'description',
                    content: item.description
                }
            ]
        };
    });
});
