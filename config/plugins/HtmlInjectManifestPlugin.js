const fs = require('fs');
const escapeStringRegExp = require('escape-string-regexp');

// We need html-webpack-plugin to work, so do a check
try {
    require('html-webpack-plugin');
}
catch (err) {
    throw new Error(`This plugin requires 'html-webpack-plugin' to work. Please install it using: npm i -D html-webpack-plugin`);
}

// We need webpack-manifest-plugin to work, so do a check
try {
    require('webpack-manifest-plugin');
}
catch (err) {
    throw new Error(`This plugin requires 'webpack-manifest-plugin' to work. Please install it using: npm i -D webpack-manifest-plugin`);
}

class HtmlInjectManifestPlugin {
    constructor(options) {
        options = options || {};
        options.files = options.files || [];
        
        this.options = options;
    }
    
    apply(compiler) {
        compiler.hooks.compilation.tap(this.constructor.name, (compilation) => {
            compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(this.constructor.name, (htmlPluginData) => {
                const unprocessedHtml = htmlPluginData.html;
                
                compiler.hooks.webpackManifestPluginAfterEmit.tap(this.constructor.name, (manifest) => {
                    const mergedManifest = this.mergeManifest(manifest);
    
                    const processedHtml = this.processHtmlFile(unprocessedHtml, mergedManifest);
    
                    // Emit the file
                    compilation.assets[`index.html`] = {
                        source() {
                            return Buffer.from(processedHtml);
                        },
                        size() {
                            return Buffer.byteLength(this.source(), 'utf8');
                        }
                    };
                });
            });
        });
        
        compiler.hooks.emit.tap('HtmlInjectManifestPlugin', (compilation) => {
            for (let file of this.options.files) {
                compilation.fileDependencies.add(file);
            }
        });
    }
    
    mergeManifest(manifest) {
        let mergedManifest = {};
        
        // If files were provided, watch em
        if (this.options.files.length) {
            const manifests = this.options.files
                .map(file => JSON.parse(fs.readFileSync(file, 'utf-8')));
            
            mergedManifest = Object.assign(mergedManifest, ...manifests);
        }
        
        return Object.assign(mergedManifest, manifest);
    }
    
    processHtmlFile(unprocessedHtml, manifest) {
        let processedHtml = unprocessedHtml;
        
        for (let key of Object.keys(manifest)) {
            const replace = escapeStringRegExp(`[${key}]`);
            const replaceWith = manifest[key];
            
            processedHtml = processedHtml.replace(new RegExp(replace, 'g'), replaceWith);
        }
        
        return processedHtml;
    }
}

module.exports = HtmlInjectManifestPlugin;