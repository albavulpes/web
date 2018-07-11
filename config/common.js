const path = require('path');
const os = require('os');

const webpack = require('webpack');
const merge = require('webpack-merge');

const env = require('./env');
const config = require('../config.json');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const configs = [
    {
        context: env.paths.root,
        mode: env.isDev ? 'development' : 'production',
        performance: {
            maxEntrypointSize: 100000,
            maxAssetSize: 450000
        },
        stats: {
            modules: false,
            errorDetails: true,
            colors: true,
            cached: true,
            entrypoints: false
            
        },
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
                'config': JSON.stringify(config),
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ],
        resolve: {
            extensions: ['.js', '.ts'],
            modules: [
                path.resolve(env.paths.root, 'node_modules')
            ],
            alias: {
                root: env.paths.src
            }
        },
        watchOptions: {
            aggregateTimeout: 1000
        },
        cache: true
    },
    { // Typescript
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: {
                        onlyCompileBundledFiles: true
                    }
                }
            ]
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                memoryLimit: 4096,
                workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE
            })
        ]
    },
    { // Vue
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    },
    { // SASS
        module: {
            rules: [
                {
                    test: /\.(css|scss)$/,
                    use: [
                        env.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: env.isDev
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: env.isDev
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: env.isDev ? [] : [
            new MiniCssExtractPlugin({
                filename: 'css/[name].[chunkhash:8].css',
                chunkFilename: '[id].css'
            })
        ]
    },
    { // Images
        module: {
            rules: [
                {
                    test: /\.(jpg|jpeg|png|xml|svg)/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                hash: 'sha512',
                                digest: 'hex',
                                publicPath: '/',
                                name: 'images/[name].[hash].[ext]'
                            }
                        }
                    ]
                }
            ]
        }
    },
    { // Fonts
        module: {
            rules: [
                {
                    test: /\.(woff2?|[ot]tf|eot)\??(v=[0-9]\.[0-9]\.[0-9])?(\#[a-zA-Z0-9\_]+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[hash].[ext]'
                            }
                        }
                    ]
                }
            ]
        }
    }
];

if (!env.isDev) {
    configs.push(
        {
            optimization: {
                minimizer: [
                    new UglifyJsPlugin({
                        sourceMap: true,
                        parallel: os.cpus().length - 2,
                        cache: true,
                        uglifyOptions: {
                            comments: false
                        }
                    }),
                    new OptimizeCssAssetsPlugin({
                        cssProcessor: require('cssnano'),
                        cssProcessorOptions: {
                            preset: [
                                'default',
                                {
                                    normalizeUrl: {
                                        stripWWW: false
                                    },
                                    discardUnused: false,
                                    discardComments: {
                                        removeAll: true
                                    }
                                }
                            ]
                        }
                    })
                ]
            },
            plugins: [
                new webpack.optimize.ModuleConcatenationPlugin(),
                new webpack.optimize.OccurrenceOrderPlugin()
            ]
        });
}

module.exports = merge(configs);
