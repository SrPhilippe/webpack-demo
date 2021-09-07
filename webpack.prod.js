const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')


module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'production',
    output: {
        filename: 'main.[contenthash].js',
    }
})