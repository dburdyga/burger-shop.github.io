const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const owl = require('owl.carousel/dist/assets/owl.carousel.css');
import $ from 'jquery';
import 'imports?jQuery=jquery!owl.carousel';

const config = {
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};

module.exports = config;

