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
            vendor: [path.join(env.paths.src, 'Vendor.ts')]
        },
        output: {
            path: env.paths.dist,
            publicPath: '/',
            filename: 'js/[name].[chunkhash:8].dll.js',
            library: '[name]'
        },
        plugins: [
            new webpack.DllPlugin({
                name: '[name]',
                path: path.join(env.paths.dist, '[name].dll.json')
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default'],
                _: 'lodash'
            }),
            new ManifestPlugin({
                fileName: 'vendor-manifest.json'
            })
        ]
    }
]);