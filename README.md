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