const fs = require('fs');
const vm = require('vm');
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
        if (page.type === 'bemjson.js') {
            const pathToBemjson = path.join('.', 'content', page.source);
            const content = fs.readFileSync(pathToBemjson, 'utf8');

            page.content = vm.runInNewContext(content);
        } else {
            page.content = page.source;
        }

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
