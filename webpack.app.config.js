const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlInjectManifestPlugin = require('./config/plugins/HtmlInjectManifestPlugin');

const env = require('./config/env');
const common = require('./config/common');

const CONFIG = merge([
    common,
    {
        entry: {
            'app': [path.join(env.paths.src, 'index.ts')]
        },
        output: {
            publicPath: '/',
            path: env.paths.dist,
            library: '[name]',
            filename: 'js/[name].[hash:8].js'
        },
        devServer: {
            contentBase: './dist',
            port: 5164,
            hot: true,
            historyApiFallback: true,
            stats: {
                modules: false
            }
        },
        plugins: [
            new webpack.DllReferencePlugin({
                manifest: env.paths.dll.vendor
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: path.join(env.paths.src, 'index.html')
            }),
            new ManifestPlugin({
                fileName: env.filenames.manifests.app
            }),
            new HtmlInjectManifestPlugin({
                files: [
                    path.join(env.paths.dist, env.filenames.manifests.vendor)
                ]
            }),
            new webpack.DefinePlugin({
                'AppConfig': JSON.stringify(require('./config')[process.env.NODE_ENV])
            }),
            // TODO: remove this when we can get access to hosting
            new CopyWebpackPlugin([
                {
                    from: path.join(env.paths.src, 'assets'),
                    to: 'assets'
                }
            ]),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
]);

module.exports = CONFIG;