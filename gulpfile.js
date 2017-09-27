'use strict';

const fs = require('fs');
const path = require('path');
const enb = require('enb');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const rimraf = require('rimraf');

const generate = require('./lib/generate');

const ROOT = (process.env.YENV === 'production' ? '' : '/gorod-mechty');
const OUTPUT = 'output';
const OUTPUT_ROOT = OUTPUT + ROOT;
const STATIC = 'static';
const BUNDLE = './bundles/index/index';
const PAGES = require('./content/pages');

async function render(done) {
    await generate(BUNDLE, PAGES, ROOT, OUTPUT_ROOT);
    done();
}

async function enb_make (done) {
    await enb.make();
    done();
}

gulp.task('enb', enb_make);

gulp.task('clean', done => rimraf(OUTPUT, done));

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
    gulp.src([
        'blocks/logo/logo.svg',
        'content/**/*.jpg'
    ]).pipe(gulp.dest(OUTPUT_ROOT));
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

gulp.task('watch', (done) => {
    gulp.watch('blocks/**/*')
        .on('all', async (event, path, stats) => {
            const fit = path.slice(-10);

            await enb_make(done);

            if (fit !== 'bemtree.js' && fit !== 'bemhtml.js') {
                gulp.src(`${BUNDLE}.min.*`).pipe(gulp.dest(OUTPUT_ROOT));
            }
        });

    gulp.watch(['content/**/*', `${BUNDLE }.bemtree.js`, `${BUNDLE }.bemhtml.js`])
        .on('all', (event, path, stats) => render(done));

    done();
});

gulp.task('default', gulp.series('clean', 'prepare', 'enb', 'static', 'render', 'copy:img', gulp.parallel('browser-sync', 'watch')));
