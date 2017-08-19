const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = require('./config/env');
const common = require('./config/common');

const CONFIG = merge([
    common,
    {
        context: __dirname,
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
        resolve: {
            alias: {
                vue: 'vue/dist/vue.js',
                app: path.resolve('./src/')
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(env.paths.src, 'index.html')
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new webpack.DllReferencePlugin({
                manifest: path.resolve(env.paths.vendorManifest)
            })
        ]
    }
]);

module.exports = CONFIG;