const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
    entry: './entry/index.ts',

    output: {
        path: path.resolve(__dirname, '../../www'),
        chunkFilename: 'js/[name].bundle-[chunkhash:4].js',
        filename: 'js/[name].bundle-[chunkhash:4].js'
    },

    // devtool: 'cheap-module-eval-source-map',
    devtool: 'source-map',
    mode: 'none',

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial'
                }
            }
        }
    },

    devServer: {
        stats: 'errors-only',
        port: 9000,
        //open: true
    },

    plugins: [
        new CleanWebpackPlugin('../../www', {
            root: __dirname,
            verbose: true,
            dry: false
        }),

        new webpack.ProvidePlugin({
            $: 'jquery'
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './entry/index.html'
        }),
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[file].map',
        //     exclude: ['vendor.js']
        //     //append: `\n//# sourceMappingURL=${path}[url]`
        // }),
        // new ImageminPlugin({
        //     test: /\.(jpe?g|png|gif|svg)$/i,
        //     optipng: {
        //         optimizationLevel: 3
        //     },
        //
        //     pngquant: {
        //         quality: '65-90',
        //         speed: 4
        //     },
        //
        //     jpegtran: {
        //         progressive: true
        //     },
        //
        //     gifsicle: {
        //         optimizationLevel: 3
        //     },
        //
        //     svgo: {
        //         plugins: [{
        //             removeViewBox: false,
        //             removeEmptyAttrs: true
        //         }]
        //     },
        //
        //     plugins: [
        //         imageminMozjpeg({
        //             quality: 65,
        //             progressive: true
        //         })
        //     ]
        // })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
                query: {compact: false}
            },

            {
              test: /\.tsx?$/,
              loader: 'awesome-typescript-loader'
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:4].[ext]'
                }
            },

            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name]-[hash:4].[ext]'
                }
            }
        ]
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    }
};
