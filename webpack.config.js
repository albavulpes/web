const path = require('path');
const webpack = require('webpack');

const paths = {};

paths.root = __dirname;
paths.src = path.join(paths.root, 'src');
paths.dist = path.join(paths.root, 'dist');

const entries = {
    'bindr': path.join(paths.src, 'index.ts')
};

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const CONFIG = {
    context: __dirname,
    entry: entries,
    output: {
        path: paths.dist,
        library: '[name]',
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDev
                        }
                    }
                ]
            },
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
            },
            {
                test: /\.html$/,
                use: ['html-loader']
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
        extensions: ['.js', '.ts', '.scss'],
        alias: {
            vue: 'vue/dist/vue.js',
            app: path.resolve('./src/')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};

if (isProd) {
    CONFIG.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: true,
            minimize: true,
            mangle: true,
            comments: false
        })
    );
}

module.exports = CONFIG;