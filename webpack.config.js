var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'web');
var APP_DIR = path.resolve(__dirname, 'react');
var config = {
    entry: [
        APP_DIR + '/app.jsx',
    ],
    output: {
        path: BUILD_DIR,
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: require.resolve("jquery"),
            loader: "imports?jQuery=jquery"
        }, {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
        }]
    },
};

module.exports = config;
