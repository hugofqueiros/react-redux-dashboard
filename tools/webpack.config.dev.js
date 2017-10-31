import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
//import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import autoprefixer from 'autoprefixer';
import path from 'path';
//import cssnano from 'cssnano';

export default {
    resolve: {
        modules: [
            'node_modules',
            //path.resolve(__dirname, "app")
        ],
        extensions: ['*', '.js', '.jsx', '.json', '.ico', '.png', '.gif', '.scss'],
        //extensions: ['*', '.js', '.jsx', '.json'],
        alias: {},
    },
    //watch: true,
    //cache: true,
    devtool: 'eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    entry: [
        // must be first entry to properly set public path
        './src/webpack-public-path',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, '../src/js/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
    ],
    target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'), // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/'
    },
    performance: {
        hints: "warning", // enum
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
        assetFilter: function(assetFilename) {
            // Function predicate that provides asset filenames
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
            noInfo: true, // set to false to see a list of every file being bundled.
            options: {
                sassLoader: {
                    includePaths: [path.resolve(__dirname, '.../src', 'js', 'scss')]
                },
                context: '/',
                //postcss: () => [autoprefixer],
            }
        })
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
                    loader: 'style-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        plugins: [
                            autoprefixer({
                                browsers: [
                                    '> 1%',
                                    'last 2 versions',
                                    'IE 11',
                                    'IE 10'
                                ]
                            })
                        ]
                    }
                },
                    {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }]

            }
        ]
    }
};




