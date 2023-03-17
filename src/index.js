// 使用ES6导入语法，导入JQuery
import $ from 'jquery'

// 导入样式
import './css/index.css'
import './css/index.less'

// 导入图片，得到图片文件
import logo from './img/001.jpg'
// 给img标签的src动态赋值
$('.box').attr('src', logo)

// 定义JQuery的入口函数
$(function () {
    // 实现奇偶行变色
    $('li:odd').css('background-color', 'pink')
    $('li:even').css('background-color', 'skyblue')
})

// 定义一个装饰器函数
function info(target) {
    target.info = 'Person info'
}
// 定义一个普通的类
class Person { }
console.log(Person)