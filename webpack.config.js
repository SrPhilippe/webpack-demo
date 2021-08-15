const path = require('path');

module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: 'assets'
    },
}