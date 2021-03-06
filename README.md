   在哪里跌倒，就在那里爬起
# 基础函数练习 + 手写自定义方法
    1.  map 方法返回一个新数组，数组中的元素为原数组调用函数后的值
        注意： map() 不会对空数组进行检测。
        注意： map() 不会改变原始数组。

    2.  reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
        reduce() 可以作为一个高阶函数，用于函数的 compose。
        注意: reduce() 对于空数组是不会执行回调函数的。

    3.  filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        注意： filter() 不会对空数组进行检测。
        注意： filter() 不会改变原始数组。

    4.  find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
        find() 方法为数组中的每个元素都调用一次函数执行：
        当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
        如果没有符合条件的元素返回 undefined
        注意: find() 对于空数组，函数是不会执行的。
        注意: find() 并没有改变数组的原始值。
        注意: IE 11 及更早版本不支持 find() 方法

    5.  数组去重
            1. forEach + indexOf
            2. forEach + 对象容器
            3. es6语法：... + Set

    6.  findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
        findIndex() 方法为数组中的每个元素都调用一次函数执行：
        当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
        如果没有符合条件的元素返回 -1
        注意: findIndex() 对于空数组，函数是不会执行的。
        注意: findIndex() 并没有改变数组的原始值。
        注意: IE 11 及更早版本不支持 findIndex() 方法。
        indexOf 字符串第一个出现的位置，没有返回-1

    7.  some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
        some() 方法会依次执行数组的每个元素：
        如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
        如果没有满足条件的元素，则返回false。
        注意： some() 不会对空数组进行检测。
        注意： some() 不会改变原始数组。
        注意： ie9,+

        every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
        every() 方法使用指定函数检测数组中的所有元素：
        如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
        如果所有元素都满足条件，则返回 true。
        注意： every() 不会对空数组进行检测。
        注意： every() 不会改变原始数组。
        注意： ie9,+
        

# es6语法
    1.  箭头函数 
        作用：定义匿名函数
        语法：
            1.1 无参：         () => console.log("箭头函数")
            1.2 一个参数：      i => i+2 
            1.3 大于一个参数：  (i,j) => i+j
            2.1 函数体不用大括号，默认返回结果。【上面三个都是】
            2.2 函数体有多个语句，需要大括号包围；若有返回， 需要手动返回
        特点：简洁
            1. 箭头函数没有自己的this,它的this是在定义的时候，处在的对象就是它的this
            2. this区分，看外层是否有函数；
                有：外层this就是内部箭头函数的this
                没有： this就是window

    2.  拷贝
        1. 直接赋值 -浅拷贝
        2.  Object.assign() - 浅拷贝
        3. Array.prototype.concat() - 浅拷贝
        4. Array.prototype.slice() - 浅拷贝 - （包含开始位置，不包含结束位置）- 从后往前数，（startindex, -1），-1是最后一个位置；
        5. JSON.parse(JSON.stringify()) - 深拷贝-深度克隆 -【基本数据类型拷贝不会影响原数据】-【不能拷贝函数】

    3.  数据类型分类
            js中数据类型分为两大类：基本数据类型和引用数据类型
            基本数据类型分为：number、string、boolean、null、undefined
            引用数据类型分为：对象类型、函数，对象类型又分为：Object对象、Array数组、RegExp正则、Date时间对象、Math数学对象
            如何判断数据类型： arr - Array; null - Null
                1. typeof返回数据类型： String, Number, Boolean, Undefined, Object, Function
                2. Object.prototype.toString.call(obj)

    4.  深度克隆方法 - 针对 对象 数组
            1. 判断是什么数据类型 - 进行赋值 - 对象 数组 基本类型
            2.1 分类赋值，初始
            2.2 直接返回结果； 数组和对象 遍历返回结果
    
    6.  Promise
        Promise 的状态
            实例对象中的一个属性 『PromiseState』
            * pending  未决定的
            * resolved / fullfilled  成功
            * rejected  失败
        Promise 对象的值
            实例对象中的另一个属性 『PromiseResult』
            保存着异步任务『成功/失败』的结果
            * resolve
            * reject 
        方法    then
                catch
                resolve
                reject
                all
                race

    7.  axios
        // https://github.com/axios/axios  // axios
        // https://github.com/typicode/json-server // 模拟服务器
        // 1. 全局安装npm install -g json-server
        // 2. 创建文件夹 创建db.json文件
        // 3. 启动服务json-server --watch db.json
        // ------ 启动后 ------
        // http://localhost:3000/posts
        // http://localhost:3000/comments
        // http://localhost:3000/profile
    
# vue源码分析
    参考：https://github.com/DMQ/mvvm
    准备：
        1. [].slice.call(lis): 将伪数组转换为真数组
        2. node.nodeType: 得到节点类型
        3. Object.defineProperty(obj,propertyName,{}) : 给对象定义属性（指定描述符）
        不兼容ie8,所以vue只支持ie9及以上，（vue的核心语法）
        4. Object.keys(obj): 得到对象自身可枚举属性组成的数组
        5. obj.hasOwnProperty(prop): 判断prop是否是自身的属性
        6. DocumentFragment: 文档碎片（高效批量更新多个节点）

        1.双向数据绑定基于单向数据绑定，监听input改变，然后更新model

# react
    
    redux 是一个独立专门用于状态管理的js库（不是react插件库）
    react-redux 是react插件库 简化react中使用redux
    redux-thunk 是redux的插件，做异步应用   action不仅可以有对象，也能执行函数

# webpack 前端资源构建工具，静态模块打包器
    1.  npm init  初始化package.json
        npm i webpack webpack-cli -g  全局下载
        npm i webpack webpack-cli -D  本项目下载

    2.  运行指令：
        开发环境：webpack ./src/index.js -o ./build/ --mode=development
        webpack会以 ./src/index.js 为入口文件打包， 
        输出./build/ 文件下有main.js； (v5默认main.js)(v4  ./build/a.js  则会输出到a.js 里 )
        打包环境：开发
        生产环境：webpack ./src/index.js -o ./build/ --mode=production
        webpack会以 ./src/index.js 为入口文件打包， 输出./build/；打包环境：生产

    3.  基础
        1. 可以处理js/json资源，不能处理css,img等其他资源
        2. 生产环境和开发环境将es6模块化编译成浏览器能识别的模块化
        3. 生产环境是压缩的js代码
    
    4.  打包css/less


# javaScript
    1.  基本（值）类型
            String 任意字符串
            Number 任意数字
            boolean true/false
            undefined undefined
            null null
        对象（引用）类型
            Object 任意对象
            Function 一种特别的对象（可执行）
            Array 一种特别的对象（书值下标，内部数据是有序的）

        判断
            typeof 可以判断： undefined 数值 字符串 布尔值 function
                    不能判断：null-object  object-array
            instanceof 判断对象的 具体类型
            === / ==  (不会数据转换/会数据转换) 可判断：undefined null

    2.  闭包
            1.闭包如何产生
                当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量时，就产生了闭包
            2.闭包到底是什么
                2.1 闭包时嵌套的内部函数（笼统）
                2.2 包含被引用变量（函数）的对象。
                注意：闭包存在于嵌套的内部函数中
            3.产生闭包的条件
                3.1.函数嵌套
                3.2.内部函数引用了外部函数的数据（变量、函数）

# less 
    1. 变量
        普通变量
        作为选择器或属性名
        作为url
    2. 混合
        普通混合
        带参数混合
        带参数有默认值的混合
        命名混合
    3. 继承 
        extend
    4. 运算

# 封装npm包
    下载webpack创建项目
        npm init -y  初始项目
        npm i webpack webpack-cli  下载依赖包
    配置webpack
        创建 webpack.config.js
    配置打包命令
        "build:watch": "webpack --watch"
    打包
        npm run build:watch
        会有配置的dist 文件夹输出，然后进行测试
    测试
        定义测试包
        引入包
        调用全局暴露出来的对象，使用其方法
    发布到npm中央仓库
        完善package,json
            name: 唯一的名称
            main: 指定打包生成的js文件
            keywords: 指定方便搜索的关键字
        npm配置
            npm配置的中央仓库不能是淘宝镜像(它是只读的)
            发布前必须执行：npm config set registry https://registry.npmjs.org/
            不用发布时：npm config set registry https://registry.npm.taobao.org/
            查看配置：npm config list
        添加用户
            执行：npm addUser  /  npm login
            登录npm 仓库
            依次输入用户名、密码、邮箱
            上传：npm publish
        下载自己的npm包
            npm install npm-web-utils
            测试：<script src="../node_modules/npm-web-utils/dist/web-utils.js"></script>
        升级
            修改项目库的版本号："version": "1.0.0" =>  "version": "1.0.1",  版本号变大
            修改代码后重新打包：npm run build
            执行发布：npm publish
        删除
            执行：npm unpublish --force
            注意：必须在72小时内，否则不能删除
    注册npm中央仓库
        注册地址：https://www.npmjs.com/
        关键信息：用户名、密码、邮箱（需要验证激活）
    

