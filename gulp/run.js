const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

module.exports = function (gulp, plugins, paths, meta)
{    
    gulp.task("start", function ()
    {
        var webpackConfig = require(path.join(paths.root, "webpack.config"));
        
        // Add hot code plugins to config
        webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
        webpackConfig.plugins.push(new webpack.NoErrorsPlugin());
    
        var host = process.env.HOST;
        var port = process.env.PORT;
    
        var serverOptions = {
            contentBase: paths.build,
            inline: true,
            hot: true,
            historyApiFallback: true,
            stats: {
                colors: true
            }
        };
        
        // Compile first
        var compiler = webpack(webpackConfig, function (err, stats)
        {
            if (err)
                throw new plugins.util.PluginError("webpack", err);
    
            // Start dev server
            new WebpackDevServer(compiler, serverOptions)
                .listen(port, function (err)
                {
                    plugins.util.log("[webpack-dev-server]", `Magic happening at http://${host}:${port}/`);
                });
        });
    });
};
