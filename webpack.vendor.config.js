const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

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
            filename: 'dll/[name].[chunkhash:8].js',
            library: '[name]'
        },
        plugins: [
            new webpack.DllPlugin({
                name: '[name]',
                path: path.join(env.paths.dist, '[name].json')
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default'],
                _: 'lodash'
            })
        ]
    }
]);