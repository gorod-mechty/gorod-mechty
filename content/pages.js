module.exports = [
    {
        url: '/',
        title: 'Вместе мы сделаем наш город удобным для людей',
        titleImage: './index/title.jpg',
        link: { text: 'Я хочу помочь!', url: '' },
        source: './index/content.bemjson.js',
        type: 'bemjson.js'
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
        source: './projects/content.bemjson.js',
        type: 'bemjson.js'
    },
    {
        url: '/projects/reconstruction-of-the-city-fountain-on-gogol-street/',
        navItem: 'Проекты',
        title: 'Реконструкция фонтана по ул. Гоголя',
        titleImage: './projects/reconstruction-of-the-city-fountain-on-gogol-street/title.jpg',
        state: { text: 'в процессе', mods: { process: true } },
        startDate: 'с 12 октября 2015',
        gallery: './projects/reconstruction-of-the-city-fountain-on-gogol-street/gallery',
        map: {
            id: 'map',
            coordinates: '[44.947756, 34.097716]',
            zoom: 15,
            width: '100%',
            height: '320px'
        },
        source: './projects/reconstruction-of-the-city-fountain-on-gogol-street/content.bemjson.js',
        type: 'bemjson.js'
    }
];
