import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
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
        extensions: ['', '.js', '.jsx', '.json', '.ico', '.png', '.gif']
    },
    debug: false,
    devtool: 'source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    noInfo: true, // set to false to see a list of every file being bundled.
    headers: {'Access-Control-Allow-Origin': '*'},
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
        new webpack.optimize.OccurenceOrderPlugin(),

        // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
        new webpack.DefinePlugin(GLOBALS),

        // Generate an external css file with a hash in the filename
        new ExtractTextPlugin('[name].[contenthash].css'),

        new webpack.NoErrorsPlugin(),
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

        // Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        // Minify JS
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // remove warnings
                warnings: true,

                // Drop console statements
                drop_console: true
            },
            comments: false
        }),
        new webpack.optimize.AggressiveMergingPlugin(),

        // Compress
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'zopfli',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
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
        loaders: [
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url?name=[name].[ext]'},
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=[name].[ext]'},
            {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=[name].[ext]'},
            {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=[name].[ext]'},
            // {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loaders: [
            //         'file-loader?hash=sha512&digest=hex&name=img/[name].[ext]?[hash]',
            //         'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            //     ]
            // },
            // {
            //     test: /\.(jpg|png|gif)$/,
            //     loaders: [
            //         'file-loader',
            //         {
            //             loader: 'image-webpack-loader',
            //             query: {
            //                 progressive: true,
            //                 optimizationLevel: 7,
            //                 interlaced: false,
            //                 pngquant: {
            //                     quality: '65-90',
            //                     speed: 4,
            //                 },
            //             },
            //         },
            //     ],
            // },

            // {
            //     test: /\.txt$/,
            //     loader: 'file-loader?name=./text/[name].[ext]?[hash]'
            // },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loader: "file-loader?name=img/img-[hash:6].[ext]?[hash]&context=src/img"
            // },
            {test: /\.ico$/, loader: 'file-loader?name=[path][name].[ext]?[hash]'},
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: ['file?hash=sha512&digest=hex&name=img/[name].[ext]?[hash]',
                    'image-webpack'
                ]
            },
            {test: /(\.css|\.scss)$/, loader: ExtractTextPlugin.extract('css?sourceMap!postcss!sass?sourceMap')},
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {test: /\.json$/, loader: "json"}
        ]
    },

    imgeWebpackLoader: {
        progressive: true,
        optimizationLevel: 9,
        interlaced: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3
        },
        mozjpeg: {
            quality: 65
        },
        pngquant:{
            quality: "65-90",
            speed: 4
        },
        svgo:{
            plugins: [
                {
                    removeViewBox: false
                },
                {
                    removeEmptyAttrs: false
                }
            ]
        }
    },
    postcss: ()=> [
        autoprefixer({
            browsers: [
                '>1%',
                'last 2 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
            ]}),
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
};





