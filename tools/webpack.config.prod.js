import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ModuleAnalyzerPlugin from 'webpack-module-analyzer-plugin';
import SystemBellPlugin from 'system-bell-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import autoprefixer from 'autoprefixer';
import path from 'path';
import cssnano from 'cssnano';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: false
};

export default {
    resolve: {
        modules: [
            'node_modules',
            //path.resolve(__dirname, "app")
        ],
        extensions: ['*', '.js', '.jsx', '.json', '.ico', '.png', '.gif', '.scss'],
        alias: {},
    },
    //debug: false,
    devtool: 'source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    //noInfo: true, // set to false to see a list of every file being bundled.
    //headers: {'Access-Control-Allow-Origin': '*'},
    entry: path.resolve(__dirname, '../src/js/index.js'),
    target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    output: {
        path: path.resolve(__dirname, '../dist'), // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // Hash the files using MD5 so that their names change when the content changes.
        new WebpackMd5Hash(),
        // Optimize the order that items are bundled. This assures the hash is deterministic.
        //new webpack.optimize.OccurenceOrderPlugin(),

        // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
        new webpack.DefinePlugin(GLOBALS),

        // Generate an external css file with a hash in the filename
        new ExtractTextPlugin({filename: '[name].[contenthash].css', allChunks: true}),

        new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            // Note that you can add custom options here if you need to handle other custom logic in index.html
            // To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
            trackJSToken: ''
        }),

        // Minify JS
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // remove warnings
                warnings: true,

                // Drop console statements
                drop_console: true,
                output: {comments: false},
                compress: {warnings: false},
                sourceMap: true
            },
            comments: false
        }),

        new ModuleAnalyzerPlugin(),
        new SystemBellPlugin(),

        new CopyWebpackPlugin([
            {from : 'src/humans.txt', to: './'},
            {from : 'src/robots.txt', to: './'},
            {from : 'src/crossdomain.xml', to: './'},
            {from : 'src/manifest.json', to: './'},
            //{from : 'src/img', to: 'img'}
        ]),
        // new ImageminPlugin({
        //     test: /\.(jpe?g|png|gif|svg)$/i,
        //     //disable: process.env.NODE_ENV !== 'production', // Disable during development
        //     pngquant: {
        //         quality: '95-100'
        //     },
        //     optipng: {
        //         optimizationLevel: 9
        //     },
        //     gifsicle: {
        //         optimizationLevel: 1
        //     },
        //     jpegtran: {
        //         progressive: false
        //     },
        //     svgo: {
        //
        //     }
        // })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                query: {
                    emitWarning: true,
                    quiet: true
                },
                exclude: /node_modules|tests/
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            }, {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                loader: 'file-loader'
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.ico$/,
                loader: 'url-loader?name=[name].[ext]'
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                //loader: 'file-loader?name=[name].[ext]'
                loader: 'file-loader?limit=10000000&name=[name].[ext]?[hash]'
            },
            {
                test: /(\.css|\.s[ac]ss)$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers: [
                                    '> 1%',
                                    'last 2 versions',
                                    'IE 11',
                                    'IE 10'
                                ]
                            }),
                            cssnano({
                                discardComments : {
                                    removeAll : true
                                },
                                discardUnused : false,
                                mergeIndents  : false,
                                reduceIndents : false,
                                safe          : true,
                                sourcemap     : true
                            })
                        ]
                    }
                },
                    {
                        loader: 'sass-loader'
                    }]

            }
        ]
    },
};





