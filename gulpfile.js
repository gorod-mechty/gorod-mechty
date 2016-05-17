'use strict';

var fs = require('fs'),
    path = require('path'),

    enb = require('enb'),
    gulp = require('gulp'),
    browserSync = require('browser-sync'),
    watch = require('gulp-watch'),
    // batch = require('gulp-batch'),

    mkdirp = require('mkdirp');

var OUTPUT = 'output',
    BUNDLE = './bundles/index/index',
    PAGES = require('./content/pages');

var bemhtmlFile = BUNDLE + '.bemhtml.js',
    bemtreeFile = BUNDLE + '.bemtree.js';

gulp.task('default', ['browser-sync', 'watch'], enb.make);

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
        vinyl.pipe(fs.createWriteStream(OUTPUT + '/' + vinyl.basename));
    });

    // watch changes in content and bemtree/bemhtml bundles and rebuild pages
    watch(['content/**/*', bemtreeFile, bemhtmlFile], () => {
        var cwd = process.cwd();

        delete require.cache[path.join(cwd, bemtreeFile)];
        delete require.cache[path.join(cwd, bemhtmlFile)];

        var bemtree = require(bemtreeFile).BEMTREE,
            bemhtml = require(bemhtmlFile).BEMHTML;

        PAGES.forEach(page => {
            render(bemtree, bemhtml, PAGES, page, OUTPUT);
        });
    });
});

function render(bemtree, bemhtml, pages, page, OUTPUT/*, content*/) {

    // page.content = content;
    page.content = page.source;

    var bemjson = bemtree.apply({
        block: 'root',
        data: {
            page: page,
            pages: pages
        }
    });

    var dirName = OUTPUT + page.url;

    mkdirp.sync(dirName);
console.log(dirName + 'index.html');
    fs.writeFile(dirName + 'index.html', bemhtml.apply(bemjson));
}

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


