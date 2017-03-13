'use strict';

const fs = require('fs');
const path = require('path');
const enb = require('enb');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const rimraf = require('rimraf');

const generate = require('./lib/generate');

const ROOT = (process.env.YENV === 'production' ? '' : '/gorod-mechty');
const OUTPUT = 'output';
const OUTPUT_ROOT = OUTPUT + ROOT;
const STATIC = 'static';
const BUNDLE = './bundles/index/index';
const PAGES = require('./content/pages');

function render(done) {
    generate(BUNDLE, PAGES, ROOT, OUTPUT_ROOT).then(() => {
        done();
    });
}

gulp.task('clean', done => rimraf(OUTPUT, done));

gulp.task('enb', enb.make);

gulp.task('prepare', done => {
    gulp.src(path.join(STATIC, 'index.html')).pipe(gulp.dest(OUTPUT));
    gulp.src(path.join(STATIC, '{favicon.ico,robots.txt,.nojekyll}')).pipe(gulp.dest(OUTPUT_ROOT));
    done();
});

gulp.task('static', done => {
    gulp.src(path.join(BUNDLE + '.min.{css,js}')).pipe(gulp.dest(OUTPUT_ROOT));
    done();
});

gulp.task('copy:img', done => {
    gulp.src(['blocks/logo/logo.{png,svg}']).pipe(gulp.dest(OUTPUT_ROOT));
    done();
});

gulp.task('render', done => {
    render(done);
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
                res.setHeader('Content-Encoding', 'deflate');
            }
            next();
        }
    });
});

gulp.task('watch', () => {
    // watch changes in blocks and build using enb
    watch(['blocks/**/*'], batch((event, done) => {
        enb.make().then(done);
    }));

    // watch changes in final css and js and copy it to output folder
    watch(BUNDLE + '.min.*', vinyl => {
        vinyl.pipe(fs.createWriteStream(OUTPUT_ROOT + '/' + vinyl.basename));
    });

    // watch changes in content and bemtree/bemhtml bundles and rebuild pages
    watch(['content/**/*', BUNDLE + '.bemtree.js', BUNDLE + '.bemhtml.js'], batch((event, done) => {
        render(done);
    }));
});

gulp.task('default', gulp.series('clean', 'prepare', 'enb', 'static', 'render', 'copy:img', gulp.parallel('browser-sync', 'watch')));

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


