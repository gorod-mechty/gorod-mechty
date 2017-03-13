block('logo').content()(function() {
    var data = this.data;

    return [
        {
            tag: 'img',
            attrs: {
                src: data.root + '/logo.svg',
                alt: 'Город мечты'
            }
        }
    ];
});
