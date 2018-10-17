const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require("./config/paths")

module.exports = {
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json']
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
        },
        {
            test:/\.css$/,
            use:[
                {
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                }
            ]
        },
        {
            test: /\.(ttf|eot|woff|woff2|svg)$/,
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]',
            }
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React + Typescript Project',
        template: paths.appHtml,
        inject: false,
      }),
    ],
    entry: paths.appIndex,
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    }
}