const fs = require('fs');
const path = require('path');
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
            compilation.hooks.htmlWebpackPluginAfterEmit.tap(this.constructor.name, (htmlPluginData) => {
                const emittedHtmlFilePath = path.join(compiler.outputPath, htmlPluginData.outputName);
                
                compiler.hooks.webpackManifestPluginAfterEmit.tap(this.constructor.name, (manifest) => {
                    const mergedManifest = this.mergeManifest(manifest);
                    
                    compiler.hooks.afterEmit.tap(this.constructor.name, () => {
                        this.processHtmlFile(emittedHtmlFilePath, mergedManifest);
                    });
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
                .map(file => JSON.parse(fs.readFileSync(file)));
            
            mergedManifest = Object.assign(mergedManifest, ...manifests);
        }
        
        return Object.assign(mergedManifest, manifest);
    }
    
    processHtmlFile(filePath, manifest) {
        if (!fs.existsSync(filePath))
            return;
        
        let processedHtml = fs.readFileSync(filePath, 'utf8');
        
        for (let key of Object.keys(manifest)) {
            const replace = escapeStringRegExp(`[${key}]`);
            const replaceWith = manifest[key];
            
            processedHtml = processedHtml.replace(new RegExp(replace, 'g'), replaceWith);
        }
        
        fs.writeFileSync(filePath, processedHtml);
    }
}

module.exports = HtmlInjectManifestPlugin;