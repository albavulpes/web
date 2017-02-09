// Let's get dotenv going
require("dotenv").config();

const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const glob = require("glob");

var paths = {};

paths.src = path.resolve("./src/");
paths.scripts = path.join(paths.src, "scripts");
paths.styles = path.join(paths.src, "styles");

paths.output = path.join(__dirname, "./build/");

var entries = {
    "vendor_bundle": path.join(paths.scripts, "Vendor.ts"),
    "angular_bundle": path.join(paths.scripts, "Angular.ts"),
    "styles_bundle": path.join(paths.styles, "main.scss")
};

module.exports = {
    context: __dirname,
    entry: entries,
    output: {
        path: paths.output,
        library: "[name]",
        filename: "js/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ["ts-loader", "import-glob-loader"]
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(html)$/,
                loaders: ["html-loader"]
            },
            {
                test: /\.json$/,
                loaders: ["json-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)/,
                loader: "file-loader?name=fonts/[name].[ext]"
            },
            {
                test: /\.(jpg|jpeg|png|bmp|gif|tiff)/,
                loader: "file-loader?name=images/[name].[ext]"
            }
        ]
    },
    ts: {
        configFilePath: paths.src + "/tsconfig.json"
    },
    resolve: {
        extensions: ["", ".js", ".ts"]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        }),
        
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor_bundle",
            minChunks: Infinity
        }),
        
        new CopyPlugin([
            {
                context: paths.src,
                from: "**/*",
                ignore: [
                    "scripts/**/*",
                    "styles/**/*",
                    "tsconfig.json"
                ]
            }
        ])
    ]
};