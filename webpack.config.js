const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    plugins: [new HtmlWebPackPlugin({
        template: './src/template.html'
    })],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: 'assets'
    },
}