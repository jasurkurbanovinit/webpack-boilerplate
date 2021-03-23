const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./base')

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, '../build'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Only update what has changed on hot reload
    ],
    
})