// 引入nodejs内置模块，path可以将路径进行处理，相对路径转为绝对路径
const path = require('path')

module.exports = {
  // 模式
  mode: 'development', // peoduction 
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, 'dist'),
    // 打包文件
    filename: 'web-utils.js',
    // 向外暴露的对象的名称
    library: 'webUtils',
    //打包生成库可以通过esm/commonjs/requirejs的语法引入
    libraryTarget: 'umd',
  }
}