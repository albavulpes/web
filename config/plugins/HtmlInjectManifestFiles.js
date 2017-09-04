const fs = require('fs');

class HtmlInjectManifestFiles {
    constructor(options) {
        options.manifests = options.manifests || [];
        
        this.options = options;
    }
    
    apply(compiler) {
        compiler.plugin('compilation', (compilation) => {
            compilation.plugin('html-webpack-plugin-after-emit', (htmlPluginData, callback) => {
                compiler.plugin('after-emit', (_, callback) => {
                    let keysToReplace = [];
                    let mergedManifest = {};
                    
                    for (let manifest of this.options.manifests) {
                        keysToReplace = keysToReplace.concat(manifest.files);
                        
                        const manifestData = JSON.parse(fs.readFileSync(manifest.manifest));
                        mergedManifest = Object.assign(mergedManifest, manifestData);
                    }
                    
                    const emittedHtmlFile = htmlPluginData.html.existsAt;
                    let htmlData = fs.readFileSync(emittedHtmlFile, 'utf8');
                    
                    for (let key of keysToReplace) {
                        const replace = `{{${key}}}`;
                        const replaceWith = mergedManifest[key];
                        
                        htmlData = htmlData.replace(new RegExp(replace, 'g'), replaceWith);
                    }
                    
                    fs.writeFileSync(emittedHtmlFile, htmlData);
                    
                    callback();
                });
                
                callback(null, htmlPluginData);
            });
        });
    }
}

module.exports = HtmlInjectManifestFiles;