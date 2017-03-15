block('logo').content()(node => {
    const data = node.data;

    return {
        tag: 'img',
        attrs: {
            src: `${data.root}/logo.svg`,
            alt: 'Город мечты'
        }
    };
});
