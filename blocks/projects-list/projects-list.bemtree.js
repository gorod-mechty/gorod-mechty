block('projects-list').content()(node => {
    const path = require('path');
    const list = require(path.resolve('content/projects/projects'));
    const url = node.data.root + node.data.page.url;

    return list.map(item => {
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
