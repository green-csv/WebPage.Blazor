const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
    entry: './App/wwwroot/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'wwwroot'),
        publicPath: '/',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(css|s[ac]ss)$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                    }
                ]
            },
            {
                test: /\.(jpe?g|jpg|gif|svg|webp)$/i,
                include: path.resolve(__dirname, 'App/wwwroot/assets'),
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]'
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: { progressive: true, quality: 75 },
                            optipng: { enabled: true },
                            pngquant: { quality: [0.65, 0.9], speed: 4 },
                            gifsicle: { interlaced: false },
                            webp: { quality: 75 }
                        }
                    }
                ]
            },
            {
                test: /\.png$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            },
            {
                test: /\.(ttf|woff2?|otf|eot)$/i,
                include: path.resolve(__dirname, 'App/wwwroot/assets/Fonts'),
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]' // Output path inside /wwwroot/dist
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.[contenthash].css'
        }),

        new HtmlWebpackPlugin({
            template: './App/wwwroot/index.template.html',
            filename: 'index.html',
            inject: 'body'
        }),

        new WebpackManifestPlugin({
            fileName: 'asset-manifest.json',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './App/wwwroot/data/*.json', to: 'data/[name][ext]' }
            ]
        }),
    ],
    watchOptions: {
        ignored: /wwwroot([\\/].*)?/
    },
    mode: 'production'
};
