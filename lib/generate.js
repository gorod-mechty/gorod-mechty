var fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp');

module.exports = function(bundle, pages, root, output) {
    var cwd = process.cwd(),
        bemtreeFile = path.join(cwd, bundle + '.bemtree.js'),
        bemhtmlFile = path.join(cwd, bundle + '.bemhtml.js');

    delete require.cache[bemtreeFile];
    delete require.cache[bemhtmlFile];

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
