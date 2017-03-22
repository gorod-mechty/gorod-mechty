block('gallery')(
    elem('image')(
        tag()('img'),
        attrs()(node => {
            const _this = node.ctx;

            return {
                src: _this.path + _this.data.src,
                alt: _this.data.alt
            };
        })
    ),
    elem('thumb-img')(
        tag()('img'),
        attrs()(node => {
            const _this = node.ctx;

            return {
                src: _this.path + _this.data.src,
                alt: _this.data.alt
            };
        })
    )
);
