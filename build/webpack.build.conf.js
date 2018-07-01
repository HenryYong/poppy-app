/**
 * webpack prod config
 * @author Henry Yang
 */

import {
    resolve,
    sep
} from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import UglifyJS from 'uglifyjs-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import OptimizeCSSAssetsPlguin from 'optimize-css-assets-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import bundleAnalyzer from 'webpack-bundle-analyzer'
import HTMLWebpackScriptPlugin from './../src/plugins/html-webpack-script-plugin'

import baseConfig from './webpack.base.conf'
import config from './../config'
import {
    styleLoaders,
    assetsPath
} from './utils'

const webpackConfig = merge(baseConfig, {
    entry: {
        'main': './src/main.js'
    },
    module: {
        // rules: styleLoaders({
        //     sourceMap: config.production.productionSourceMap,
        //     extract: true
        // })
    },
    devtool: config.production.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.production.assetsRoot,
        filename: assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: assetsPath('js/[name].[chunkhash].js')
    },
    plugins: [
        new webpack.DefinePlugin(config[process.env.NODE_ENV].envVar), // 根据当前编译环境引入不同的全局变量
        new UglifyJS({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
            parallel: true,
            sourceMap: true
        }),
        new ExtractTextPlugin({
            filename: assetsPath('css/[name].[contenthash].css')
        }),
        new OptimizeCSSAssetsPlguin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new HTMLWebpackScriptPlugin({
            paths: [
                'https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.min.js',
                'https://unpkg.com/vue-router@3.0.1/dist/vue-router.js',
                'https://unpkg.com/vuex@3.0.1/dist/vuex.js',
                'https://unpkg.com/axios/dist/axios.min.js'
            ]
        }),
        new HTMLWebpackPlugin({
            filename: resolve(config.production.assetsRoot + sep + config.production.assetsSubDirectory, '..') + '/index.html',
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            // 如果打开 vendor 和 manifest 那么需要配置 chunksSortMode 保证引入 script 的顺序
            chunksSortMode: 'dependency'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({ resource }) => (
                resource
                && resource.indexOf('node_modules') >= 0
                && resource.match(/\.js$/)
            )
        }),
        new webpack.optimize.CommonsChunkPlugin({
            async: 'common-lazy',
            minChunks: ({ resource } = {}) => (
                resource
                && resource.includes('node_modules')
            )
        }),
        new webpack.optimize.CommonsChunkPlugin({
            async: 'highlight',
            minChunks: ({ resource } = {}) => (
                resource
                && resource.includes('highlight.js')
            )
        }),
        new webpack.optimize.CommonsChunkPlugin({ // 将调用过两次的模块都打到twice.js中
            async: 'twice',
            minChunks: (module, count) => (count >= 2)
        }),
        new CopyWebpackPlugin([
            {
                from: resolve(__dirname, '../static'),
                to: config.production.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    ],
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios'
    }
})

if (config.production.productionGzip) {
    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + config.production.productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

if (config.production.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = bundleAnalyzer.BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

export default webpackConfig
