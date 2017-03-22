const gallery = require('./projects/square-on-gogol-street/gallery');

module.exports = [
    {
        url: '/',
        title: 'Благотворительный фонд «Город Мечты»',
        source: 'Главная страница'
    },
    {
        url: '/about/',
        navItem: 'О фонде',
        title: 'О фонде',
        titleImage: './about/title.jpg',
        source: './about/content.bemjson.js',
        type: 'bemjson.js'
    },
    {
        url: '/projects/',
        navItem: 'Проекты',
        title: 'Проекты',
        titleImage: './projects/title.jpg',
        source: 'Проекты',
    },
    {
        url: '/projects/square-on-gogol-street/',
        navItem: 'Проекты',
        title: 'Сквер у Крымского этнографического музея',
        titleImage: './projects/square-on-gogol-street/title.jpg',
        projectState: 'в процессе',
        startDate: 'с 12 октября 2015',
        gallery: {
            path: './projects/square-on-gogol-street/',
            image: gallery.image,
            thumbs: gallery.thumbs
        },
        source: './projects/square-on-gogol-street/content.bemjson.js',
        type: 'bemjson.js'
    }
];
