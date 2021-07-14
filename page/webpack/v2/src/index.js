// npm init  初始化package.json
// npm i webpack webpack-cli -g  全局下载
// npm i webpack webpack-cli -D  本项目下载

// index.js webpack入口文件

/*
1. 运行指令：
    开发环境：webpack ./src/index.js -o ./build/ --mode=development
    webpack会以 ./src/index.js 为入口文件打包， 
    输出./build/ 文件下有main.js； (v5默认main.js)(v4  ./build/a.js  则会输出到a.js 里 )
    打包环境：开发
    生产环境：webpack ./src/index.js -o ./build/ --mode=production
    webpack会以 ./src/index.js 为入口文件打包， 输出./build/；打包环境：生产
*/

/*
    1. 可以处理js/json资源，不能处理css,img等其他资源
    2. 生产环境和开发环境将es6模块化编译成浏览器能识别的模块化
    3. 生产环境是压缩的js代码
*/

import data from './data.json'

console.log(data)

function add(a,b) {
    return a+b;
}

console.log(add(1,2));