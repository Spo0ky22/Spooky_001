const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 1.导入html-webpack-plugin这个插件，得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2.new构造函数，创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    // 指定要复制哪个页面
    template: './src/index.html',
    // 指定复制出来的文件名和存放路径
    filename: './index.html'
})

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        port: 8080,
        open: true
    },
    // 3.插件的数组，将来webpack在运行时，会加载并调用这些插件
    plugins: [htmlPlugin],
    module: {
        rules: [
            // 定义了不同模块对应的loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理.less文件的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 处理图片文件的loader
            // 如果需要调用的loader只有一个，则只传递一个字符串也行，如果有多个loader，则必须指定数组
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' },
            // 使用babel-loader处理高级的JS语法
            // 早配置babel-loader的时候，程序员只需要把自己的代码进行转换即可；一定要排除node_modules目录中的JS文件
            // 因为第三方包中的jS兼容性，不需要程序员关心
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};