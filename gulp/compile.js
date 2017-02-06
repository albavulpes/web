const path = require("path");
const webpack = require("webpack");

const merge = require("merge-stream");

module.exports = function (gulp, plugins, paths, project)
{    
    // Compile Client files
    gulp.task("compile", function (callback)
    {
        var webpackConfig = require(path.join(paths.root, "webpack.config"));
        
        // Add optimization plugins to config
        webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
        webpackConfig.plugins.push(new webpack.optimize.DedupePlugin());
        
        webpack(webpackConfig, function (err, stats)
        {
            if (err)
                throw new plugins.util.PluginError("webpack", err);
            
            plugins.util.log("[webpack]", stats.toString({colors: true}));
            
            callback();
        });
    });
};
