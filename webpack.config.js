const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        index: path.join(__dirname, 'client', 'index.js')
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                include: path.join(__dirname, 'src')
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'client', 'index.html'),
        }),
        // new MiniCssExtractPlugin({
        //     filename: "stylesheets/[name].css",
        // }),
    ],
};
