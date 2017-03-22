block('map')(
    attrs()(node => {
        const map = node.ctx.content.page.map;

        return {
            id: map.id,
            style: `width: ${map.width || '100%' }; height: ${map.height || '320px' };`
        };
    })
);
