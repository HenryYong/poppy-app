/**
 * devConf
 */

import webpack from 'webpack'
import merge from 'webpack-merge'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import FriendlyErrorWebpackPlugin from 'friendly-errors-webpack-plugin'

import baseConfig from './webpack.base.conf'
import config from './../config'

// 合并webpack配置
const webpackConfig = merge(baseConfig, {
    entry: {
        'index': ['webpack-hot-middleware/client', './src/main.js'],
        'admin': ['webpack-hot-middleware/client', './src/admin.js'],
        'client': ['webpack-hot-middleware/client', './src/client.js']
    },
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin(config.dev.envVar), // 定义全局变量
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        new webpack.NoEmitOnErrorsPlugin(), // 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
        // new HTMLWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'index.html',
        //     inject: 'body',
        //     chunks: ['admin', 'client']
        // }),
        new FriendlyErrorWebpackPlugin() // 用于更友好地输出webpack的警告、错误等信息
    ]
})

const htmlArray = ['index', 'admin', 'client']
htmlArray.forEach((element) => {
    const chunksArray = [element]
    // if (element === 'index') {
    //     chunksArray.push('entry')
    // }
    const newPlugin = new HTMLWebpackPlugin({
        filename: element + '.html',
        template: element + '.html', // 获取最初的html末班
        inject: true, // 插入文件的位置
        hash: true, // 在生成的文件后面增加一个hash，防止缓存
        chunks: chunksArray
    })
    webpackConfig.plugins.push(newPlugin)
})

export default webpackConfig
