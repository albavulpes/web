const webpack = require('webpack');

const env = require('./env');

const common = {
    context: __dirname,
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
                            minimize: !env.isDev,
                            sourceMap: env.isDev
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
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
        extensions: ['.js', '.ts']
    },
    stats: {
        errorDetails: true,
        colors: true
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

if (!env.isDev) {
    common.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            minimize: true,
            mangle: true,
            comments: false
        })
    );
}

module.exports = common;