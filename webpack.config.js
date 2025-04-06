const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: './wwwrootsrc/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wwwroot/dist'),
    },
    module: {
        rules: [
            {
                test: /\.s$css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('@tailwindcss/postcss'),
                                ]
                            }
                        }
                    }
                ]
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
            filename: '../css/app.css' // ⬅️ Final CSS output location
        })
    ]
};
