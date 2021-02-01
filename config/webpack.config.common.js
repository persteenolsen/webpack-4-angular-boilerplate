'use strict';
const webpack = require('webpack');
const pathtoresolve = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const helpers = require('./helpers');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
        main: isDev ? './src/main.ts' : './src/main.aot.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
		    
			// Note: Without using "esModule: false" ( esModule was introduced in file-loader 4.3 and from 5.0 set to true by default) 
			// an image needs to loaded by require + default suffix!
			// Take a look at app.component.ts and and app.componemt.html	
			//
		    /* {
             test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[hash].[ext]'
            }, */
			 {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
			    use: [
                     {
					  loader: "file-loader",
                      options: {
                               
							   // Note: By using "esModule: false" ( esModule was introduced in file-loader 4.3 and from 5.0 set to true by default) 
							   // an image is loaded by require without default suffix !!
                               // An image can be loaded just by src and without require. 
							   // Take a look at app.component.ts and and app.componemt.html						   
                                esModule: false,
                                name: "assets/images/[name].[ext]"
                               }
                       }
                   ],
            }, 
            {
                test: /\.(scss|sass)$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: isDev } },
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                    { loader: 'sass-loader', options: { sourceMap: isDev } }
                ],
                include: helpers.root('src', 'assets')
            }, 
            {
                test: /\.(scss|sass)$/,
                use: [
                    'to-string-loader',
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                    { loader: 'sass-loader', options: { sourceMap: isDev } }
                ],
                include: helpers.root('src', 'app')
            }
						
        ]
    },

    plugins: [
        new CleanWebpackPlugin(
            helpers.root('dist'), { root: helpers.root(), verbose: true }),

        new HtmlWebpackPlugin({
			favicon: 'src/assets/images/favicon.png',
            template: 'src/index.html'
        })
		
    ]
};