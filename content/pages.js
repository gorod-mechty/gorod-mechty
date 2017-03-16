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
        title: 'Сквер у Крымского этнографического музея',
        titleImage: './projects/title.jpg',
        source: './projects/content.bemjson.js',
        type: 'bemjson.js'
    },
    {
        url: '/projects/100-trees/',
        title: '100 деревьев',
        source: '100 деревьев'
    }
];
