/**
 * Created by zhao on 12/13/16.
 */
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.dev';

const bundler = webpack(webpackConfig);

// Run browserSync and use middleware for Hot Module Replacement
browserSync({
    port: 3000,
    ui: {
        port: 3001
    },
    server: {
        baseDir: 'src',
        middleware: [
            historyApiFallback(),
            webpackDevMiddleware(
                bundler, {
                    // Enable gzip compression of generated files.
                    //compress: true,
                    publicPath: webpackConfig.output.publicPath, // Dev middleware can't access config, so publicPath is provided
                    // Webpack dev settings: http://webpack.github.io/docs/webpack-dev-middleware.html
                    noInfo: false,
                    quiet: false,
                    watchOptions: {
                        ignored: /node_modules/
                    },
                    stats: {
                        assets: true,
                        colors: true,
                        version: true,
                        hash: false,
                        timings: true,
                        chunks: true,
                        chunkModules: false
                    }
                }
            ),

            // bundler should be the same as above
            webpackHotMiddleware(bundler)
        ]
    },
    // no need to watch '*.js' here, webpack will take care of it for us,
    // including full page reloads if HMR won't work
    files: [
        'src/*.html'
    ]
});
