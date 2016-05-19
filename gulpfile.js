'use strict';

var fs = require('fs'),
    path = require('path'),

    enb = require('enb'),
    gulp = require('gulp'),
    browserSync = require('browser-sync'),
    watch = require('gulp-watch'),
    // batch = require('gulp-batch'),

    rimraf = require('rimraf'),

    generate = require('./lib/generate');

var ROOT = (process.env.YENV === 'production' ? '' : '/gorod-mechty'),
    OUTPUT = 'output',
    OUTPUT_ROOT = OUTPUT + ROOT,
    STATIC = 'static',
    BUNDLE = './bundles/index/index',
    PAGES = require('./content/pages');

function render() {
    generate(BUNDLE, PAGES, ROOT, OUTPUT_ROOT);
}

gulp.task('default', ['build', 'browser-sync', 'watch']);

gulp.task('build', () => {
    rimraf.sync(OUTPUT);

    gulp.src(path.join(STATIC, 'index.html')).pipe(gulp.dest(OUTPUT));
    gulp.src(path.join(STATIC, '{favicon.ico,robots.txt,.nojekyll}')).pipe(gulp.dest(OUTPUT_ROOT));

    enb.make();

    gulp.src(path.join(BUNDLE + '.min.{css,js}')).pipe(gulp.dest(OUTPUT_ROOT));

    render();
});

gulp.task('browser-sync', () => {
    browserSync.create().init({
        files: OUTPUT + '/**',
        server: { baseDir: OUTPUT },
        port: 8080,
        open: false,
        online: false,
        logLevel: 'silent',
        notify: false,
        ui: false,
        middleware: function(req, res, next) {
            if (req.url.match(/svgd/)) {
                res.setHeader('Content-Type', 'image/svg+xml');
                res.setHeader('Content-Encoding', 'deflate')
            }
            next();
        }
    });
});

gulp.task('watch', () => {
    // watch changes in blocks and build using enb
    watch(['blocks/**/*'], enb.make);

    // watch changes in final css and js and copy it to output folder
    watch(BUNDLE + '.min.*', vinyl => {
        vinyl.pipe(fs.createWriteStream(OUTPUT_ROOT + '/' + vinyl.basename));
    });

    // watch changes in content and bemtree/bemhtml bundles and rebuild pages
    watch(['content/**/*', BUNDLE + '.bemtree.js', BUNDLE + '.bemhtml.js'], render);
});

/*
function render(bemtree, bemhtml, pages, page, lang, OUTPUT) {

    var renderInner = function(err, content) {
        var type = page.type || 'md'
        if (type === 'md') {
            marked(content, function(err, content) { applyTemplates(bemtree, bemhtml, pages, page, lang, OUTPUT, content) });
        } else if (type === 'bemjson.js') {
            applyTemplates(bemtree, bemhtml, pages, page, lang, OUTPUT, bemhtml.apply(vm.runInNewContext(content)));
        } else {
            throw "Unknown type";
        }
    };

    var source = page.source;

    if (/^http/.test(source)) {
        request(source, function (err, response, content) {
            if (!err && response.statusCode == 200)
                renderInner(err, content);
        });
    } else if (/^\.\/(.*)/.test(source)) {
        // read content from local FS
        fs.readFile(source, 'utf8', renderInner);
    } else {
        // inline content
        renderInner(null, source);
    }
}

*/
// function html(vinyl) {
//     if (!vinyl || !vinyl.contents) return;

//     var path = vinyl.path,
//         re = new RegExp('(.*)\/' + config.rawFolder + '(.*)index\.(.*)\.html$'),
//         lang = path.replace(re, '$3'),
//         pageUrl = path.replace(re, '$2'),
//         page = _.where(pages[lang], { url: pageUrl })[0];

//     applyTemplates(page, lang, vinyl.contents.toString('utf8'));
// }


