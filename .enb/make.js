var techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        css: require('enb-css/techs/css'),
        postcss: require('enb-bundle-postcss/techs/enb-bundle-postcss'),

        // js
        // browserJs: require('enb-js/techs/browser-js'),

        // bemtree
        bemtree: require('enb-bemxjst/techs/bemtree'),

        // bemhtml
        bemhtml: require('enb-bemxjst/techs/bemhtml')
    },
    enbBemTechs = require('enb-bem-techs'),
    levels = [
        { path: 'node_modules/bem-core/common.blocks', check: false },
        { path: 'node_modules/bem-core/desktop.blocks', check: false },
/*
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
*/
        'blocks'
    ];

module.exports = config => {
    var env = process.env;
    var isProd = env.YENV === 'production';

    config.nodes('bundles/*', nodeConfig => {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [techs.fileProvider, { target: '?.bemdecl.js' }],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.css, {
                target: '?.pre.css'
            }],

            [techs.postcss, {
                source: '?.pre.css',
                sourceSuffixes: ['pcss', 'post.css', 'css'],
                oneOfSourceSuffixes: [['pcss', 'css'], ['post.css', 'css']],
                plugins: [
                    require('precss'),
                    require('pobem'),
                    require('postcss-url')({ url: 'inline' }),
                    require('autoprefixer')({ browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%'] })
                ]
            }],

            // bemtree
            [techs.bemtree, {
                sourceSuffixes: ['bemtree.js', 'bemtree'],
                target: '?.bemtree.js'
            }],

            // // bemhtml
            [techs.bemhtml, {
                sourceSuffixes: ['bemhtml.js', 'bemhtml'],
                target: '?.bemhtml.js'
            }],

            // js
            // [techs.browserJs, {
            //     sourceSuffixes: ['js'],
            //     target: '?.js',
            //     includeYM: true
            // }],

            // // borschik
            // [techs.borschik, { source: '?.js', target: '?.min.js', minify: isProd }],
            [techs.borschik, { source: '?.css', target: '?.min.css', minify: isProd }]
        ]);

        nodeConfig.addTargets(['?.bemtree.js', '?.bemhtml.js', '?.min.css'/*, '?.min.js'*/]);
    });
};
