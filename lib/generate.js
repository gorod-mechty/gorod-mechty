const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = (bundle, pages, root, output) => {
    const cwd = process.cwd();
    const bemtreeFile = path.join(cwd, bundle + '.bemtree.js');
    const bemhtmlFile = path.join(cwd, bundle + '.bemhtml.js');

    delete require.cache[bemtreeFile];
    delete require.cache[bemhtmlFile];

    const bemtree = require(bemtreeFile).BEMTREE;
    const bemhtml = require(bemhtmlFile).BEMHTML;

    return Promise.all(pages.map(page => {
        // page.content = content;
        page.content = page.source;

        const bemjson = bemtree.apply({
            block: 'root',
            data: {
                page: page,
                pages: pages,
                root: root
            }
        });

        const dirName = output + page.url;

        return new Promise((resolve, reject) => {
            mkdirp(dirName, err => {
                if (err) return reject(err);

                fs.writeFile(dirName + 'index.html', bemhtml.apply(bemjson), err => {
                    err ? reject(err) : resolve();
                });
            });
        });
    }));
};
