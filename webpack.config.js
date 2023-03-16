const path = require('path')

module.exports = {
    mode: 'production', // mode用来指定构建模式。可选值有development和production
    entry: path.join(__dirname, './src/index.js'),  //打包入口文件的路径
    output: {
        path: path.join(__dirname, './dist'),  //输出文件的存放路径
        filename: 'bundle.js'  //输出文件的名称 
    },
    devServer: {
        open: true, //自动打开浏览器
        compress: true, //开启gzip压缩
        port: 8080, //服务器端口号
        static: {
            directory: path.join(__dirname, 'public') // 假设静态文件存放在 public 目录下
        }
    }
}