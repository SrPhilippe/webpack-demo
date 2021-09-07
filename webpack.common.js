const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: './src/template.html'
        })],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}