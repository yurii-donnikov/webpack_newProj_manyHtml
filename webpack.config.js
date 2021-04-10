const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');



module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        // new HtmlWebpackPlugin()
    ],
    // вход
    entry: {
        main: './src/index.js',
        about: './src/about_index.js',
    },
    // // выход
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'index.js'

    // },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),

        new HtmlWebpackPlugin({
            filename: "index.html", // Сгенерированный index.html
            template: "./index.html",


        }),


        new HtmlWebpackPlugin({
            filename: "about.html", // созданный index.html
            template: "./about.html",


        }) ,


    ],

    module: {
        rules: [

            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                //IMAGE LOADER
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
        ]
    },
};







