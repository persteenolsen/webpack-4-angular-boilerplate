'use strict';

const webpack = require('webpack');
const pathtoresolve = require('path');

const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.common');
const helpers = require('./helpers');


const HOST = 'localhost';
const PORT = 8080;

module.exports = webpackMerge(commonConfig, {
    mode: 'development',
	
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true
    },
  

    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    optimization: {
        noEmitOnErrors: true
    },

    module: {
       
	   rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: helpers.root('tsconfig.json')
                        }
                    },
                    'angular2-template-loader',
                    'angular-router-loader'
                ],
                exclude: [/node_modules/]
            }
			// Note: The statement needs to be only here in dev - otherwise the menu router will not load in build
			// workaround for warning: System.import() is deprecated and will be removed soon. Use import() instead.
            ,{
                test: /[\/\\]@angular[\/\\].+\.js$/,
                parser: { system: true }
            } 
        ]
    }, 
    plugins: [
	   
	   // Note: The statement needs to be only here in dev - otherwise the menu router will not load in build
	   new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)fesm5/,
            pathtoresolve.resolve(__dirname, 'src')
        ) 

    ]
	
	
});