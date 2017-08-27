const path = require('path');
const webpack = require('webpack');

const env = require('./env');

const common = {
    context: env.paths.root,
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: !env.isDev,
                            sourceMap: env.isDev
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: !env.isDev,
                            sourceMap: env.isDev
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            stylus: {
                                sourceMap: env.isDev
                            }
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.ejs$/,
                loader: ['ejs-loader']
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)/,
                use: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|jpeg|png|bmp|gif|tiff)/,
                use: 'file-loader?name=images/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            vue: 'vue/dist/vue.js',
            app: path.resolve('./src/')
        }
    },
    cache: true,
    stats: {
        errorDetails: true,
        colors: true
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

if (!env.isDev) {
    common.plugins.push(
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            minimize: true,
            mangle: true,
            comments: false,
            parallel: true
        })
    );
}

module.exports = common;