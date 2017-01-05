var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.(png|jpg|jpeg|gif|woff)/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        root: [
            path.resolve('./src')
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            'React':    'react',
            'ReactDOM': 'react-dom'
        })
    ]
};