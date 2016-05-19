var fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp');

module.exports = function(bundle, pages, root, output) {
    var bemhtmlFile = path.join('..', bundle + '.bemhtml.js'),
        bemtreeFile = path.join('..', bundle + '.bemtree.js'),
        cwd = process.cwd();

    delete require.cache[path.join(cwd, bemtreeFile)];
    delete require.cache[path.join(cwd, bemhtmlFile)];

    var bemtree = require(bemtreeFile).BEMTREE,
        bemhtml = require(bemhtmlFile).BEMHTML;

    pages.forEach(page => {
        // page.content = content;
        page.content = page.source;

        var bemjson = bemtree.apply({
            block: 'root',
            data: {
                page: page,
                pages: pages,
                root: root
            }
        });

        var dirName = output + page.url;
        mkdirp.sync(dirName);
        fs.writeFile(dirName + 'index.html', bemhtml.apply(bemjson));
    });
};
