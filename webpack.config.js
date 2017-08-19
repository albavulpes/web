const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const env = require('./config/env');
const common = require('./config/common');

const CONFIG = merge([
    common,
    {
        entry: {
            'app': path.join(env.paths.src, 'index.ts')
        },
        output: {
            publicPath: '/',
            path: env.paths.dist,
            library: '[name]',
            filename: 'js/[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: [
                        {
                            loader: 'vue-loader',
                            options: {
                                esModule: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DllReferencePlugin({
                manifest: env.paths.vendorManifest
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new HtmlWebpackPlugin({
                template: path.join(env.paths.src, 'index.html')
            }),
            new AddAssetHtmlPlugin({
                filepath: path.join(env.paths.dist, 'js', '*.dll.js'),
                includeSourcemap: false,
                outputPath: 'js',
                publicPath: '/js/'
            })
        ]
    }
]);

module.exports = CONFIG;