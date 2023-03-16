// 使用ES6导入语法，导入JQuery
import $ from 'jquery'

// 定义JQuery的入口函数
$(function () {
    // 实现奇偶行变色
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'yellow')
})