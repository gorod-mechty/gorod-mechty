block('logo').content()(node => {
    const data = node.data;

    return {
        elem: 'image',
        attrs: {
            src: `${data.root}/logo.svg`,
            alt: 'Город мечты'
        }
    };
});
