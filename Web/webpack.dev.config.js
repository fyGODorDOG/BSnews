const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const paths = require("./config/paths")

module.exports = {
    resolve:{
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    entry: paths.appIndex,
    output:{
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    }
}