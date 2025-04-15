const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: './App/wwwroot/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wwwroot/dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['./App/wwwroot/scss']
                            }
                        }
                    },
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
            },
            {
                test: /\.(png|jpe?g|jpg|gif|svg|webp)$/i,
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
