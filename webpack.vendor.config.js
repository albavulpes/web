const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const ManifestPlugin = require('webpack-manifest-plugin');

const env = require('./config/env');
const common = require('./config/common');

module.exports = merge([
    common,
    {
        entry: {
            vendor: [path.join(env.paths.src, 'vendor.js')]
        },
        output: {
            path: env.paths.dist,
            publicPath: '/',
            filename: 'js/[name].[hash:8].dll.js',
            library: '[name]'
        },
        plugins: [
            new webpack.DllPlugin({
                name: '[name]',
                path: path.join(env.paths.dist, env.filenames.dll.vendor)
            }),
            new ManifestPlugin({
                fileName: env.filenames.manifests.vendor
            })
        ],
        devtool: false
    }
]);