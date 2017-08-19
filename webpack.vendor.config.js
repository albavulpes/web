const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const env = require('./config/env.js');
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
            filename: 'js/[name].[chunkhash:8].js',
            library: '[name]'
        },
        plugins: [
            new webpack.DllPlugin({
                name: '[name]',
                path: path.join(env.paths.dist, '[name].json')
            })
        ]
    }
]);